function buildProtocolText(condition, patientParams) {
  const lines = []
  lines.push(`PROTOCOLLO DI ESERCIZIO FISICO`)
  lines.push(`Condizione: ${condition.label}`)
  lines.push(`Data generazione: ${new Date().toLocaleDateString('it-IT')}`)
  lines.push('')
  lines.push(`Parametri paziente:`)
  lines.push(`- Età: ${patientParams.age} anni`)
  lines.push(`- Livello di attività: ${patientParams.activity}`)
  lines.push(`- Complicanze cardiovascolari: ${patientParams.cv}`)
  lines.push('')
  lines.push(`Durata ciclo: 8 settimane — Frequenza: 5 gg/settimana`)
  lines.push('')
  lines.push(`RACCOMANDAZIONI`)
  condition.recommendations.forEach((rec) => {
    lines.push('')
    lines.push(`${rec.title} [evidenza: ${rec.evidenceLevel}]`)
    lines.push(rec.text)
    lines.push(`Fonte: ${rec.sourceDetail}`)
  })
  if (patientParams.cv === 'Sì, in trattamento') {
    lines.push('')
    lines.push(`ATTENZIONE: ${condition.cvAlert}`)
  }
  lines.push('')
  lines.push('Documento generato da Protocol Builder. Strumento di supporto decisionale, non sostituisce il giudizio clinico del professionista.')
  return lines.join('\n')
}

function StepDone({ condition, patientParams, onRestart }) {
  function handleDownload() {
    const text = buildProtocolText(condition, patientParams)
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `protocollo_${condition.id}_${Date.now()}.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  function handlePrint() {
    const text = buildProtocolText(condition, patientParams)
    const printWindow = window.open('', '_blank')
    printWindow.document.write(
      `<pre style="font-family: sans-serif; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">${text}</pre>`
    )
    printWindow.document.close()
    printWindow.print()
  }

  return (
    <div className="screen done-screen">
      <div className="check-icon">✓</div>
      <h2>Protocollo pronto</h2>
      <p className="done-text">
        Documento clinico generato con riferimenti bibliografici tracciabili, pronto per la cartella del paziente.
      </p>
      <div className="button-row">
        <button className="btn-secondary" onClick={handleDownload}>Scarica .txt</button>
        <button className="btn-primary" onClick={handlePrint}>Stampa / salva PDF</button>
      </div>
      <button className="btn-link" onClick={onRestart}>Crea un nuovo protocollo</button>
    </div>
  )
}

export default StepDone
