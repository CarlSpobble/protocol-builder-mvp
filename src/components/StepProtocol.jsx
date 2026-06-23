import { useState } from 'react'
import { getSourceById } from '../data/knowledgeBase'

function RecommendationCard({ rec, condition }) {
  const [showSource, setShowSource] = useState(false)
  const badgeClass =
    rec.evidenceLevel === 'forte'
      ? 'badge-strong'
      : rec.evidenceLevel === 'condizionale'
      ? 'badge-caution'
      : 'badge-moderate'

  const sources = rec.sourceIds.map((id) => getSourceById(condition, id))

  return (
    <div className="protocol-card">
      <div className="protocol-card-head">
        <div>
          <p className="protocol-card-title">{rec.title}</p>
          <p className="protocol-card-text">{rec.text}</p>
        </div>
        <span className={`badge ${badgeClass}`}>{rec.evidenceLevel} evidenza</span>
      </div>
      <button className="btn-source" onClick={() => setShowSource((s) => !s)}>
        ❝ Fonte
      </button>
      {showSource && (
        <div className="source-box">
          <p className="source-detail">{rec.sourceDetail}</p>
          <ul className="source-list">
            {sources.map((s) => (
              <li key={s.id}>{s.citation}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

function StepProtocol({ condition, patientParams, onBack, onConfirm }) {
  const showCvAlert = patientParams.cv === 'Sì, in trattamento'

  return (
    <div className="screen">
      <p className="step-label">Step 3 di 4 — protocollo generato</p>
      <h2>Protocollo: {condition.label.toLowerCase()}</h2>

      <div className="summary-grid">
        <div>
          <p className="summary-label">Durata ciclo</p>
          <p className="summary-value">8 settimane</p>
        </div>
        <div>
          <p className="summary-label">Frequenza</p>
          <p className="summary-value">5 gg / sett.</p>
        </div>
        <div>
          <p className="summary-label">Sedute / sett.</p>
          <p className="summary-value">aerobico + 2 forza</p>
        </div>
      </div>

      {condition.recommendations.map((rec) => (
        <RecommendationCard key={rec.id} rec={rec} condition={condition} />
      ))}

      {showCvAlert && (
        <div className="alert-box">⚠ {condition.cvAlert}</div>
      )}

      <div className="button-row">
        <button className="btn-secondary" onClick={onBack}>Modifica parametri</button>
        <button className="btn-primary" onClick={onConfirm}>Conferma ed esporta →</button>
      </div>
    </div>
  )
}

export default StepProtocol
