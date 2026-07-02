#!/usr/bin/env node
/**
 * Legge src/data/fyss/fyss_protocols_it.json e genera
 * src/data/knowledgeBaseGenerated.js — array di 32 oggetti FYSS.
 *
 * Uso: node scripts/buildKnowledgeBase.js
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const SOURCE = 'FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana'

function mapEvidence(raw) {
  if (!raw) return null
  const s = String(raw).trim()
  if (s === '++++' || s === '+++') return 'forte'
  if (s === '++') return 'moderata'
  if (s === '+') return 'condizionale'
  return null
}

function toId(nameIt) {
  return nameIt
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

const inputPath = join(ROOT, 'src/data/fyss/fyss_protocols_it.json')
const raw = JSON.parse(readFileSync(inputPath, 'utf8'))

const fyssGuidelines = raw.diagnoses.map(d => {
  const protocol = d.recommended_protocol || {}
  const outcomesTable = d.outcomes_table || []

  const evidenceByOutcome = outcomesTable.map(row => ({
    outcome: row.outcome,
    activityType: row.activity_type,
    evidence: mapEvidence(row.evidence),
  }))

  return {
    id: toId(d.name_it),
    label: d.name_it,
    prevention: d.prevention ?? null,
    indication: d.indication ?? null,
    acuteEffects: d.acute_effects ?? null,
    regularEffects: d.regular_effects ?? null,
    outcomesTable,
    aerobic: protocol.aerobic ?? null,
    muscleStrengthening: Object.prototype.hasOwnProperty.call(protocol, 'muscle_strengthening')
      ? protocol.muscle_strengthening
      : null,
    additionalNote: protocol.additional_note ?? null,
    specificAdvice: d.diagnosis_specific_advice ?? [],
    evidenceByOutcome,
    source: SOURCE,
  }
})

const outputPath = join(ROOT, 'src/data/knowledgeBaseGenerated.js')

const content = [
  '// Generato da scripts/buildKnowledgeBase.js — NON modificare a mano.',
  `// Fonte: ${SOURCE}`,
  '',
  `export const fyssGuidelines = ${JSON.stringify(fyssGuidelines, null, 2)};`,
  '',
].join('\n')

writeFileSync(outputPath, content, 'utf8')

console.log(`✓ ${fyssGuidelines.length} patologie generate → ${outputPath}`)
