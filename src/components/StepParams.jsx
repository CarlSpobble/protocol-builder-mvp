import { useState } from 'react'

function StepParams({ initial, onBack, onNext }) {
  const [activity, setActivity] = useState(initial.activity)
  const [cv, setCv] = useState(initial.cv)
  const [age, setAge] = useState(initial.age)

  function handleNext() {
    onNext({ activity, cv, age })
  }

  const canProceed = activity && cv

  return (
    <div className="screen">
      <p className="step-label">Step 2 di 4 — parametri del paziente</p>
      <h2>Parametri base</h2>

      <label className="field-label">Livello di attività attuale</label>
      <div className="opt-row">
        {['Sedentario', 'Lievemente attivo', 'Attivo'].map((opt) => (
          <button
            key={opt}
            className={`opt-btn ${activity === opt ? 'selected' : ''}`}
            onClick={() => setActivity(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <label className="field-label">Complicanze cardiovascolari note?</label>
      <div className="opt-row">
        {['No', 'Sì, in trattamento'].map((opt) => (
          <button
            key={opt}
            className={`opt-btn ${cv === opt ? 'selected' : ''}`}
            onClick={() => setCv(opt)}
          >
            {opt}
          </button>
        ))}
      </div>

      <label className="field-label">Età</label>
      <input
        type="range"
        min="30"
        max="85"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        className="age-slider"
      />
      <p className="age-readout"><strong>{age}</strong> anni</p>

      <div className="button-row">
        <button className="btn-secondary" onClick={onBack}>Indietro</button>
        <button
          className="btn-primary"
          disabled={!canProceed}
          onClick={handleNext}
        >
          Genera protocollo →
        </button>
      </div>
    </div>
  )
}

export default StepParams
