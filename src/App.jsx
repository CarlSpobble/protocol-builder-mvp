import { useState } from 'react'
// Wizard components — kept per reintroduzione futura
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
// FYSS components — kept per reintroduzione futura
// eslint-disable-next-line no-unused-vars
import GuidelineSelector from './components/GuidelineSelector'
// eslint-disable-next-line no-unused-vars
import GuidelineView from './components/GuidelineView'

import EimSelector from './components/EimSelector'
import EimProtocol from './components/EimProtocol'
import './App.css'

function App() {
  const [selectedCondition, setSelectedCondition] = useState(null)

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Exercise is Medicine</h1>
        <p className="subtitle">Wellness Foundation · ACSM 2024</p>
      </header>

      <main className="app-main">
        {selectedCondition === null ? (
          <EimSelector onSelect={setSelectedCondition} />
        ) : (
          <EimProtocol
            condition={selectedCondition}
            onBack={() => setSelectedCondition(null)}
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
