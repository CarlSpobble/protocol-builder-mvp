function EvidenceBadge({ level }) {
  if (level === 'forte') return <span className="badge badge-strong">forte</span>
  if (level === 'moderata') return <span className="badge badge-moderate">moderata</span>
  if (level === 'condizionale') return <span className="badge badge-caution">condizionale</span>
  return null
}

function StrengthDetails({ ms }) {
  const parts = []
  if (ms.exercises) parts.push(`${ms.exercises} esercizi`)
  if (ms.repetitions) parts.push(`${ms.repetitions} ripetizioni`)
  if (ms.sets) parts.push(`${ms.sets} serie`)
  if (ms.frequency_days_per_week) parts.push(`${ms.frequency_days_per_week} gg/sett.`)
  return <p className="protocol-card-text">{parts.join(' · ')}</p>
}

export default function GuidelineView({ guideline: g, onBack }) {
  const hasAerobic = g.aerobic?.options?.length > 0
  const hasStrength = g.muscleStrengthening !== null

  return (
    <div>
      <button className="btn-back" onClick={onBack}>← Torna alla lista</button>

      <h2 style={{ marginBottom: '1.5rem' }}>{g.label}</h2>

      {/* 1. Indicazione */}
      <section className="gl-section">
        <h3 className="gl-section-title">Indicazione</h3>
        <p className="gl-text">{g.indication}</p>
      </section>

      {/* 2. Effetti dell'attività fisica */}
      {(g.acuteEffects || g.regularEffects) && (
        <section className="gl-section">
          <h3 className="gl-section-title">Effetti dell'attività fisica</h3>
          {g.acuteEffects && (
            <>
              <p className="gl-label">Effetto acuto</p>
              <p className="gl-text">{g.acuteEffects}</p>
            </>
          )}
          {g.regularEffects && (
            <>
              <p className="gl-label" style={g.acuteEffects ? { marginTop: '0.875rem' } : {}}>
                Effetto regolare
              </p>
              <p className="gl-text">{g.regularEffects}</p>
            </>
          )}
        </section>
      )}

      {/* 3. Tabella outcome */}
      {g.evidenceByOutcome.length > 0 && (
        <section className="gl-section">
          <h3 className="gl-section-title">Outcome e livello di evidenza</h3>
          <div className="gl-table-wrap">
            <table className="gl-table">
              <thead>
                <tr>
                  <th style={{ width: '35%' }}>Outcome</th>
                  <th>Tipo di attività</th>
                  <th style={{ textAlign: 'right', whiteSpace: 'nowrap' }}>Evidenza</th>
                </tr>
              </thead>
              <tbody>
                {g.evidenceByOutcome.map((row, i) => (
                  <tr key={i}>
                    <td>{row.outcome}</td>
                    <td>{row.activityType}</td>
                    <td style={{ textAlign: 'right' }}>
                      <EvidenceBadge level={row.evidence} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {/* 4. Protocollo raccomandato */}
      {(hasAerobic || hasStrength || g.additionalNote) && (
        <section className="gl-section">
          <h3 className="gl-section-title">Protocollo raccomandato</h3>

          {hasAerobic && (
            <div className="protocol-card">
              <p className="protocol-card-title">Attività aerobica</p>
              <div className="aerobic-options">
                {g.aerobic.options.map((opt, i) => (
                  <div key={i} className="aerobic-option-row">
                    <span className="aerobic-intensity">{opt.intensity}</span>
                    <span className="aerobic-detail">
                      {opt.duration_min_per_week} min/sett.
                      {opt.frequency_days_per_week ? ` · ${opt.frequency_days_per_week} gg/sett.` : ''}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {hasStrength && (
            <div className="protocol-card">
              <p className="protocol-card-title">Rinforzo muscolare</p>
              {typeof g.muscleStrengthening === 'string'
                ? <p className="protocol-card-text">{g.muscleStrengthening}</p>
                : <StrengthDetails ms={g.muscleStrengthening} />
              }
            </div>
          )}

          {g.additionalNote && (
            <p className="gl-note">{g.additionalNote}</p>
          )}
        </section>
      )}

      {/* 5. Indicazioni specifiche */}
      {g.specificAdvice.length > 0 && (
        <section className="gl-section">
          <h3 className="gl-section-title">Indicazioni specifiche</h3>
          <ul className="gl-advice-list">
            {g.specificAdvice.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* 6. Footer fonte */}
      <footer className="gl-footer">
        <p>Fonte: {g.source}</p>
      </footer>
    </div>
  )
}
