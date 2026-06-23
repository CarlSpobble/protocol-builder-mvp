import { useState } from 'react'
import { getSourceById } from '../data/knowledgeBase'

const SESSION_PLANS = {
  '1': {
    studio: [
      '1 seduta/sett. — forza (8–10 esercizi, 2–3 serie × 10–15 rip.)',
      'Eventuale aerobico breve a fine seduta (10–15 min)',
    ],
    home: [
      '4 sessioni aerobiche autonome da ~30–35 min',
      '(cammino veloce, cyclette, nuoto — a scelta del paziente)',
      'Obiettivo: ~130–140 min aerobici domiciliari / sett.',
    ],
    note: 'Con 1 seduta/sett. la quasi totalità del volume aerobico raccomandato (150 min) ricade sul lavoro domiciliare. Verificare che il paziente abbia le competenze, l\'attrezzatura e la motivazione per svolgerlo in autonomia.',
  },
  '2': {
    studio: [
      'Seduta A — forza (8–10 esercizi, 2–3 serie × 10–15 rip.)',
      'Seduta B — aerobico supervisionato (30–40 min) + forza breve',
    ],
    home: [
      '2 sessioni aerobiche autonome da ~30 min',
      'Obiettivo: ~60 min aerobici domiciliari / sett.',
    ],
    note: 'Con 2 sedute/sett. il chinesiologo supervisiona almeno una sessione aerobica, utile per monitorare la risposta glicemica e la percezione dello sforzo. Il restante volume aerobico è domiciliare.',
  },
  '3+': {
    studio: [
      '2 sedute forza (giorni non consecutivi)',
      '1–2 sedute aerobico supervisionato (30–40 min ciascuna)',
    ],
    home: [
      '0–1 sessioni aerobiche autonome da ~30 min (facoltative)',
      'Il volume aerobico settimanale di 150 min è raggiunto principalmente in studio',
    ],
    note: 'Con 3+ sedute/sett. il chinesiologo ha piena visibilità sul volume di carico totale. La camminata quotidiana leggera rimane comunque raccomandata come attività di movimento generale.',
  },
}

function SessionDistribution({ sessionsPerWeek }) {
  const plan = SESSION_PLANS[sessionsPerWeek]
  if (!plan) return null

  return (
    <div className="distribution-box">
      <p className="distribution-title">Distribuzione settimanale del carico</p>
      <div className="distribution-cols">
        <div className="distribution-col dist-studio">
          <p className="dist-col-label">In studio</p>
          <ul className="dist-list">
            {plan.studio.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        <div className="distribution-col dist-home">
          <p className="dist-col-label">A casa</p>
          <ul className="dist-list">
            {plan.home.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>
      </div>
      <p className="dist-note">{plan.note}</p>
    </div>
  )
}

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

const SESSIONS_LABEL = { '1': '1 / sett.', '2': '2 / sett.', '3+': '3+ / sett.' }

function StepProtocol({ condition, patientParams, onBack, onConfirm }) {
  const showCvAlert = patientParams.cv === 'Sì, in trattamento'
  const { sessionsPerWeek } = patientParams

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
          <p className="summary-label">Sedute studio</p>
          <p className="summary-value">{SESSIONS_LABEL[sessionsPerWeek] ?? '—'}</p>
        </div>
        <div>
          <p className="summary-label">Obiettivo aerobico</p>
          <p className="summary-value">150 min / sett.</p>
        </div>
      </div>

      <SessionDistribution sessionsPerWeek={sessionsPerWeek} />

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
