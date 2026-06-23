#!/usr/bin/env node
/**
 * Legge src/data/fyss/fyss_protocols_it.json e genera le voci FYSS da
 * aggiungere a conditions in knowledgeBase.js.
 *
 * Output: scripts/fyss_conditions_output.js
 *
 * Uso: node scripts/buildKnowledgeBase.js
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// --- mappatura livello di evidenza FYSS → evidenceLevel app ---
// Regola fissa concordata:
//   ++++ e +++ → "forte"
//   ++          → "moderata"
//   +           → "condizionale"
// Restituisce null se il livello non è riconosciuto.
function mapEvidence(raw) {
  if (!raw) return null
  const s = String(raw).trim()
  if (s === '++++' || s === '+++') return 'forte'
  if (s === '++') return 'moderata'
  if (s === '+') return 'condizionale'
  return null
}

// Restituisce il livello di evidenza migliore trovato nell'outcomes_table
// per un dato tipo di attività (ricerca per sottostringa sul campo activity_type).
function bestEvidenceForType(outcomesTable, keyword) {
  const order = ['++++', '+++', '++', '+']
  let best = null
  for (const row of outcomesTable) {
    const type = (row.activity_type || '').toLowerCase()
    if (!type.includes(keyword)) continue
    const idx = order.indexOf(row.evidence)
    if (idx === -1) continue
    if (best === null || idx < order.indexOf(best)) best = row.evidence
  }
  return best
}

// Costruisce il testo di una raccomandazione aerobica.
function aerobicText(aerobic) {
  if (!aerobic || !aerobic.options || aerobic.options.length === 0) {
    return 'Seguire le raccomandazioni generali sull\'attività aerobica.'
  }
  const parts = aerobic.options.map(o => {
    const intensity = o.intensity || ''
    const duration = o.duration_min_per_week ? `${o.duration_min_per_week} min/sett.` : ''
    const freq = o.frequency_days_per_week ? `${o.frequency_days_per_week} giorni/sett.` : ''
    return [intensity, duration, freq].filter(Boolean).join(', ')
  })
  return parts.join(' — oppure — ')
}

// Costruisce il testo di una raccomandazione per il rinforzo muscolare.
// muscle_strengthening può essere una stringa (es. "Nessuna evidenza disponibile")
// o un oggetto strutturato con exercises/repetitions/sets/frequency.
// Restituisce null se non c'è contenuto prescrittivo reale.
function strengthText(ms) {
  if (!ms) return null
  if (typeof ms === 'string') {
    if (ms.toLowerCase().includes('nessuna evidenza')) return null
    return ms
  }
  const parts = []
  if (ms.exercises) parts.push(`${ms.exercises} esercizi`)
  if (ms.repetitions) parts.push(`${ms.repetitions} ripetizioni`)
  if (ms.sets) parts.push(`${ms.sets} serie`)
  if (ms.frequency_days_per_week) parts.push(`${ms.frequency_days_per_week} giorni/sett.`)
  return parts.length > 0 ? parts.join(', ') : null
}

// Slug sicuro per l'id: minuscolo, solo lettere/numeri/trattini, senza accenti.
function toId(nameIt) {
  return nameIt
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// sourceDetail: testo originale dal JSON, senza generare contenuto clinico nuovo.
function buildSourceDetail(diagnosis) {
  const parts = []
  if (diagnosis.regular_effects) {
    parts.push(`Effetti dell'attività fisica regolare: ${diagnosis.regular_effects}`)
  }
  if (diagnosis.diagnosis_specific_advice && diagnosis.diagnosis_specific_advice.length > 0) {
    parts.push(`Indicazioni specifiche: ${diagnosis.diagnosis_specific_advice.join(' ')}`)
  }
  return parts.join('\n\n')
}

const FYSS_SOURCE_ID = 'fyss-eupap-2019'
const FYSS_CITATION = 'FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana'

// ---------- lettura input ----------
const inputPath = join(ROOT, 'src/data/fyss/fyss_protocols_it.json')
const raw = JSON.parse(readFileSync(inputPath, 'utf8'))

// ---------- trasformazione ----------
// Ogni raccomandazione porta un campo interno _usedDefault (true/false) che
// indica se il livello di evidenza è stato assegnato per default (assenza di
// dato nella tabella outcomes) anziché derivato. Viene emesso come commento
// nell'output e poi non incluso nel JS finale.
const conditions = raw.diagnoses.map(diagnosis => {
  const protocol = diagnosis.recommended_protocol || {}
  const outcomesTable = diagnosis.outcomes_table || []
  const sourceDetail = buildSourceDetail(diagnosis)

  // --- raccomandazione aerobica ---
  const aerobicRaw = bestEvidenceForType(outcomesTable, 'aerobica')
  const aerobicMapped = mapEvidence(aerobicRaw)
  const aerobicUsedDefault = aerobicMapped === null
  // Se non ricavabile dalla tabella outcomes, si usa "moderata" come default
  // conservativo. DEFAULT_EVIDENCE sarà segnalato nell'output.
  const aerobicEvidence = aerobicMapped ?? 'moderata'

  const recommendations = [
    {
      id: 'aerobic',
      title: 'Attività aerobica',
      text: aerobicText(protocol.aerobic),
      evidenceLevel: aerobicEvidence,
      _usedDefault: aerobicUsedDefault,
      sourceIds: [FYSS_SOURCE_ID],
      sourceDetail,
    },
  ]

  // --- raccomandazione forza (solo se c'è contenuto prescrittivo reale) ---
  const msText = strengthText(protocol.muscle_strengthening)
  if (msText) {
    const msRaw = bestEvidenceForType(outcomesTable, 'rinforzo')
    const msMapped = mapEvidence(msRaw)
    const msUsedDefault = msMapped === null
    const msEvidence = msMapped ?? 'moderata'

    recommendations.push({
      id: 'strength',
      title: 'Rinforzo muscolare',
      text: msText,
      evidenceLevel: msEvidence,
      _usedDefault: msUsedDefault,
      sourceIds: [FYSS_SOURCE_ID],
      sourceDetail,
    })
  }

  // --- nota aggiuntiva ---
  // Le note aggiuntive FYSS non hanno livello di evidenza associato:
  // "moderata" è sempre un default in questo caso. DEFAULT_EVIDENCE.
  if (protocol.additional_note) {
    recommendations.push({
      id: 'note',
      title: 'Nota aggiuntiva',
      text: protocol.additional_note,
      evidenceLevel: 'moderata',
      _usedDefault: true,
      sourceIds: [FYSS_SOURCE_ID],
      sourceDetail,
    })
  }

  return {
    id: toId(diagnosis.name_it),
    label: diagnosis.name_it,
    available: true,
    sources: [
      {
        id: FYSS_SOURCE_ID,
        citation: FYSS_CITATION,
        note: `Capitolo: ${diagnosis.name_it}. Indicazione: ${diagnosis.indication || ''}`,
      },
    ],
    recommendations,
    // cvAlert: non generato automaticamente — ogni patologia FYSS ha avvertenze
    // cliniche specifiche già incluse nel sourceDetail. Aggiungere manualmente
    // per le patologie cardiovascolari o ad alto rischio se necessario.
    cvAlert: '',
  }
})

// ---------- scrittura output ----------
const outputPath = join(ROOT, 'scripts/fyss_conditions_output.js')

const lines = [
  '// Generato da scripts/buildKnowledgeBase.js — NON modificare a mano.',
  '// Incollare queste voci dentro l\'array conditions in src/data/knowledgeBase.js,',
  '// dopo la voce t2d esistente (o importare fyssConditions e usare lo spread).',
  '//',
  '// DEFAULT_EVIDENCE: dove segnalato, il livello "moderata" è un default',
  '// conservativo perché il livello non era ricavabile dalla tabella outcomes',
  '// FYSS per quel tipo di attività. Verificare manualmente prima di pubblicare.',
  '',
  'export const fyssConditions = [',
]

for (const cond of conditions) {
  lines.push('  {')
  lines.push(`    id: ${JSON.stringify(cond.id)},`)
  lines.push(`    label: ${JSON.stringify(cond.label)},`)
  lines.push(`    available: true,`)
  lines.push(`    sources: [`)
  for (const src of cond.sources) {
    lines.push(`      {`)
    lines.push(`        id: ${JSON.stringify(src.id)},`)
    lines.push(`        citation: ${JSON.stringify(src.citation)},`)
    lines.push(`        note: ${JSON.stringify(src.note)},`)
    lines.push(`      },`)
  }
  lines.push(`    ],`)
  lines.push(`    recommendations: [`)
  for (const rec of cond.recommendations) {
    const defaultComment = rec._usedDefault ? ' // DEFAULT_EVIDENCE' : ''
    lines.push(`      {`)
    lines.push(`        id: ${JSON.stringify(rec.id)},`)
    lines.push(`        title: ${JSON.stringify(rec.title)},`)
    lines.push(`        text: ${JSON.stringify(rec.text)},`)
    lines.push(`        evidenceLevel: ${JSON.stringify(rec.evidenceLevel)},${defaultComment}`)
    lines.push(`        sourceIds: ${JSON.stringify(rec.sourceIds)},`)
    lines.push(`        sourceDetail: ${JSON.stringify(rec.sourceDetail)},`)
    lines.push(`      },`)
  }
  lines.push(`    ],`)
  lines.push(`    cvAlert: ${JSON.stringify(cond.cvAlert)},`)
  lines.push(`  },`)
}

lines.push('];')
lines.push('')

writeFileSync(outputPath, lines.join('\n'), 'utf8')

// --- riepilogo a console ---
const totalRecs = conditions.reduce((n, c) => n + c.recommendations.length, 0)
const defaultCount = conditions.reduce(
  (n, c) => n + c.recommendations.filter(r => r._usedDefault).length,
  0
)

console.log(`✓ ${conditions.length} condizioni generate (${totalRecs} raccomandazioni totali)`)
console.log(`  → ${defaultCount} raccomandazioni con DEFAULT_EVIDENCE da verificare manualmente`)
console.log(`  → ${outputPath}`)
console.log('')
console.log('Prossimo passo:')
console.log('  1. Verifica i DEFAULT_EVIDENCE nell\'output (cerca il commento)')
console.log('  2. In knowledgeBase.js: importa fyssConditions e aggiungi')
console.log('     ...fyssConditions dentro l\'array conditions (dopo t2d)')
