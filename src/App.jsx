import { useState } from 'react'
// Wizard components — kept per poter essere reintrodotti come "modalità protocollo paziente"
// eslint-disable-next-line no-unused-vars
import { conditions, getCondition } from './data/knowledgeBase'
// eslint-disable-next-line no-unused-vars
import StepCondition from './components/StepCondition'
// eslint-disable-next-line no-unused-vars
import StepParams from './components/StepParams'
// eslint-disable-next-line no-unused-vars
import StepProtocol from './components/StepProtocol'
// eslint-disable-next-line no-unused-vars
import StepDone from './components/StepDone'
// eslint-disable-next-line no-unused-vars
import StepIndicator from './components/StepIndicator'

import GuidelineSelector from './components/GuidelineSelector'
import GuidelineView from './components/GuidelineView'
import './App.css'

function App() {
  const [selectedGuideline, setSelectedGuideline] = useState(null)

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Linee guida FYSS</h1>
        <p className="subtitle">Attività fisica nella prevenzione e cura delle malattie</p>
      </header>

      <main className="app-main">
        {selectedGuideline === null ? (
          <GuidelineSelector onSelect={setSelectedGuideline} />
        ) : (
          <GuidelineView
            guideline={selectedGuideline}
            onBack={() => setSelectedGuideline(null)}
          />
        )}
      </main>

      <footer className="app-footer">
        <p>Strumento di supporto decisionale. Non sostituisce il giudizio clinico del professionista.</p>
      </footer>
    </div>
  )
}

export default App
