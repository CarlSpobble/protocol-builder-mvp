import { useState } from 'react'
import { fyssGuidelines } from '../data/knowledgeBaseGenerated'

export default function GuidelineSelector({ onSelect }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim() === ''
    ? fyssGuidelines
    : fyssGuidelines.filter(g =>
        g.label.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <div>
      <p className="step-label">linee guida FYSS · EUPAP 2019</p>
      <h2>Seleziona la patologia</h2>

      <input
        className="search-input"
        type="text"
        placeholder="Cerca patologia…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        autoComplete="off"
      />

      <div className="option-list" style={{ marginTop: '0.875rem' }}>
        {filtered.length === 0 ? (
          <p style={{ fontSize: '0.88rem', opacity: 0.55, margin: 0 }}>Nessun risultato.</p>
        ) : (
          filtered.map(g => (
            <button
              key={g.id}
              className="option-row"
              onClick={() => onSelect(g)}
            >
              <span>{g.label}</span>
              <span className="chevron">›</span>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
