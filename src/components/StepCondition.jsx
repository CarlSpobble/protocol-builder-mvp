function StepCondition({ conditions, onSelect }) {
  return (
    <div className="screen">
      <p className="step-label">Step 1 di 4 — condizione</p>
      <h2>Quale condizione stai trattando?</h2>
      <div className="option-list">
        {conditions.map((c) => (
          <button
            key={c.id}
            className={`option-row ${!c.available ? 'disabled' : ''}`}
            disabled={!c.available}
            onClick={() => c.available && onSelect(c.id)}
          >
            <span>{c.label}</span>
            {c.available ? (
              <span className="chevron">›</span>
            ) : (
              <span className="badge-soon">presto disponibile</span>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export default StepCondition
