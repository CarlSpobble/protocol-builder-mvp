import { useState } from 'react'
import { conditions, getCondition } from './data/knowledgeBase'
import StepCondition from './components/StepCondition'
import StepParams from './components/StepParams'
import StepProtocol from './components/StepProtocol'
import StepDone from './components/StepDone'
import StepIndicator from './components/StepIndicator'
import './App.css'

function App() {
  const [step, setStep] = useState(0)
  const [conditionId, setConditionId] = useState(null)
  const [patientParams, setPatientParams] = useState({
    activity: null,
    cv: null,
    age: 58
  })

  const condition = conditionId ? getCondition(conditionId) : null

  function handleSelectCondition(id) {
    setConditionId(id)
    setStep(1)
  }

  function handleParamsNext(params) {
    setPatientParams(params)
    setStep(2)
  }

  function reset() {
    setStep(0)
    setConditionId(null)
    setPatientParams({ activity: null, cv: null, age: 58 })
  }

  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Protocol builder</h1>
        <p className="subtitle">Protocolli di esercizio basati su evidenza, per kinesiologi</p>
      </header>

      <StepIndicator step={step} total={4} />

      <main className="app-main">
        {step === 0 && (
          <StepCondition
            conditions={conditions}
            onSelect={handleSelectCondition}
          />
        )}
        {step === 1 && condition && (
          <StepParams
            initial={patientParams}
            onBack={() => setStep(0)}
            onNext={handleParamsNext}
          />
        )}
        {step === 2 && condition && (
          <StepProtocol
            condition={condition}
            patientParams={patientParams}
            onBack={() => setStep(1)}
            onConfirm={() => setStep(3)}
          />
        )}
        {step === 3 && condition && (
          <StepDone
            condition={condition}
            patientParams={patientParams}
            onRestart={reset}
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
