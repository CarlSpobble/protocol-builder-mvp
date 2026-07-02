import { useState } from 'react'

const FITT_LABELS = {
  frequency: 'Frequenza',
  intensity: 'Intensità',
  duration: 'Durata',
  type: 'Tipo',
}

function FittBlock({ title, data }) {
  if (!data) return null
  return (
    <div className="fitt-block">
      <p className="fitt-block-title">{title}</p>
      {Object.entries(FITT_LABELS).map(([key, label]) =>
        data[key] ? (
          <div key={key} className="fitt-row">
            <span className="fitt-row-label">{label}</span>
            <span className="fitt-row-value">{data[key]}</span>
          </div>
        ) : null
      )}
    </div>
  )
}

function exportTxt(c) {
  const today = new Date().toLocaleDateString('it-IT')
  const lines = []

  lines.push('EXERCISE IS MEDICINE — PROTOCOLLO CLINICO')
  lines.push(`Esportato il: ${today}`)
  lines.push(`Condizione: ${c.label}`)
  lines.push('Fonte: Exercise is Medicine — Wellness Foundation 2024')
  lines.push('')
  lines.push('═══ EPIDEMIOLOGIA ═══════════════════════')
  lines.push(c.epidemiology)

  lines.push('')
  lines.push('═══ PROTOCOLLO RACCOMANDATO ═════════════')

  const sections = [
    { title: 'ATTIVITÀ AEROBICA', data: c.fitt.aerobic },
    { title: 'FORZA MUSCOLARE', data: c.fitt.resistance },
    { title: 'FLESSIBILITÀ / BALANCE', data: c.fitt.flexibility },
  ]
  for (const { title, data } of sections) {
    if (!data) continue
    lines.push('')
    lines.push(title)
    if (data.frequency) lines.push(`  Frequenza: ${data.frequency}`)
    if (data.intensity) lines.push(`  Intensità: ${data.intensity}`)
    if (data.duration)  lines.push(`  Durata:    ${data.duration}`)
    if (data.type)      lines.push(`  Tipo:      ${data.type}`)
  }

  lines.push('')
  lines.push('═══ NOTE CLINICHE ═══════════════════════')
  c.clinical_notes.forEach((note, i) => {
    lines.push(`${i + 1}. ${note}`)
  })

  lines.push('')
  lines.push('═══ BIBLIOGRAFIA ════════════════════════')
  c.references.forEach((ref, i) => {
    const mark = ref.is_fitt_source ? ' [fonte FITT]' : ''
    lines.push(`${i + 1}. ${ref.citation}${mark}`)
  })

  lines.push('')
  lines.push('─────────────────────────────────────────')
  lines.push('NOTA: Protocollo generale da adattare al paziente specifico.')
  lines.push('Fonte: Exercise is Medicine — Wellness Foundation 2024.')

  const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `EIM_${c.id}_${today.replace(/\//g, '-')}.txt`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

export default function EimProtocol({ condition: c, onBack }) {
  const [epidOpen, setEpidOpen] = useState(true)
  const [biblOpen, setBiblOpen] = useState(false)

  return (
    <div>
      <button className="btn-back" onClick={onBack}>← Torna alla lista</button>

      <div style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ margin: '0 0 0.5rem' }}>{c.label}</h2>
        <span className="eim-source-badge">Exercise is Medicine 2024</span>
      </div>

      {/* Epidemiologia — collassabile, aperta di default */}
      <section className="eim-section">
        <button className="collapsible-btn" onClick={() => setEpidOpen(v => !v)}>
          <span className="gl-section-title" style={{ margin: 0 }}>Epidemiologia</span>
          <span className="collapse-icon">{epidOpen ? '▲' : '▼'}</span>
        </button>
        {epidOpen && (
          <p className="gl-text" style={{ marginTop: '0.75rem' }}>{c.epidemiology}</p>
        )}
      </section>

      {/* Protocollo FITT */}
      <section className="eim-section">
        <h3 className="gl-section-title">Protocollo raccomandato</h3>
        <div className="fitt-blocks">
          <FittBlock title="Attività aerobica" data={c.fitt.aerobic} />
          <FittBlock title="Forza muscolare" data={c.fitt.resistance} />
          <FittBlock title="Flessibilità / Balance" data={c.fitt.flexibility} />
        </div>
      </section>

      {/* Note cliniche */}
      {c.clinical_notes.length > 0 && (
        <section className="eim-section">
          <h3 className="gl-section-title">Note cliniche</h3>
          <div className="clinical-box">
            <ul className="clinical-list">
              {c.clinical_notes.map((note, i) => (
                <li key={i}>{note}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Bibliografia — collassabile, chiusa di default */}
      <section className="eim-section" style={{ borderBottom: 'none', paddingBottom: 0, marginBottom: 0 }}>
        <button className="collapsible-btn" onClick={() => setBiblOpen(v => !v)}>
          <span className="gl-section-title" style={{ margin: 0 }}>
            Bibliografia ({c.references.length})
          </span>
          <span className="collapse-icon">{biblOpen ? '▲' : '▼'}</span>
        </button>
        {biblOpen && (
          <ol className="ref-list">
            {c.references.map(ref => (
              <li key={ref.id}>
                {ref.citation}
                {ref.is_fitt_source && (
                  <span className="fitt-badge">fonte FITT</span>
                )}
              </li>
            ))}
          </ol>
        )}
      </section>

      <button className="btn-export" onClick={() => exportTxt(c)}>
        Esporta protocollo (.txt)
      </button>
    </div>
  )
}
