import { useState } from 'react'
import eimData from '../data/eim_protocols.json'

const conditions = eimData.conditions

export default function EimSelector({ onSelect }) {
  const [query, setQuery] = useState('')

  const filtered = query.trim() === ''
    ? conditions
    : conditions.filter(c =>
        c.label.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <div>
      <p className="step-label">Exercise is Medicine · Wellness Foundation 2024</p>
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
          filtered.map(c => (
            <button
              key={c.id}
              className="option-row"
              onClick={() => onSelect(c)}
            >
              <span>{c.label}</span>
              <span className="chevron">›</span>
            </button>
          ))
        )}
      </div>
    </div>
  )
}
