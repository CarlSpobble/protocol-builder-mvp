// Knowledge base dei protocolli di esercizio fisico per patologia.
// Ogni voce è tracciabile a una fonte scientifica specifica.
// Per aggiungere una nuova patologia: duplica un blocco e aggiorna fonti, raccomandazioni, alert.

export const conditions = [
  {
    id: 't2d',
    label: 'Diabete tipo 2, non complicato',
    available: true,
    sources: [
      {
        id: 'acsm-2024',
        citation: 'ACSM, Guidelines for Exercise Testing and Prescription, 12ª ed. (2024)',
        note: 'Linee guida di riferimento per la prescrizione dell\'esercizio nel diabete tipo 2.'
      },
      {
        id: 'ada-easd-2022',
        citation: 'ADA/EASD Consensus Report (2022); ADA Standards of Care 2024-2025',
        note: 'Raccomandazioni su frequenza e intensità del resistance training.'
      },
      {
        id: 'sysrev-2025',
        citation: 'Revisione sistematica di 15 linee guida internazionali, Diabetes Research and Clinical Practice 220 (2025), art. 111982',
        note: 'Confronto FITT (Frequenza, Intensità, Tempo, Tipo) tra le principali linee guida mondiali sul diabete tipo 2.'
      }
    ],
    recommendations: [
      {
        id: 'aerobic',
        title: 'Attività aerobica',
        text: 'Almeno 150 minuti/settimana a intensità moderata, distribuiti su minimo 3 giorni, senza superare 2 giorni consecutivi di interruzione.',
        evidenceLevel: 'forte',
        sourceIds: ['acsm-2024', 'sysrev-2025'],
        sourceDetail: '11 linee guida su 15 analizzate raccomandano almeno 150 min/sett. di attività aerobica moderata. La regola dei "non più di 2 giorni consecutivi di stop" è specifica per il diabete tipo 2 — non è presente nelle linee guida per la popolazione generale, perché riflette l\'effetto dell\'esercizio sulla sensibilità insulinica, che decade dopo 48-72 ore di inattività.'
      },
      {
        id: 'resistance',
        title: 'Allenamento di forza',
        text: '2-3 sedute/settimana a intensità moderata-vigorosa, non in giorni consecutivi, su grandi gruppi muscolari.',
        evidenceLevel: 'forte',
        sourceIds: ['ada-easd-2022'],
        sourceDetail: 'ADA e SIGN raccomandano resistance training a intensità moderata-vigorosa 2-3 volte/settimana. La revisione sistematica 2025 segnala che la forza riceve complessivamente meno enfasi dell\'aerobico nelle linee guida disponibili — un gap che il kinesiologo deve compensare attivamente nella prescrizione.'
      },
      {
        id: 'preassessment',
        title: 'Valutazione pre-esercizio',
        text: 'Per intensità lieve-moderata, generalmente non richiesta valutazione cardiologica preliminare in assenza di sintomi.',
        evidenceLevel: 'condizionale',
        sourceIds: ['sysrev-2025'],
        sourceDetail: '9 linee guida su 15 non richiedono valutazione pre-esercizio per attività lieve-moderata, eccetto in presenza di sintomi cardiovascolari o complicanze microvascolari (retinopatia, neuropatia). In presenza di complicanze CV note, richiedere nulla osta medico prima di procedere con intensità moderata-vigorosa.'
      },
      {
        id: 'flexibility',
        title: 'Flessibilità',
        text: '2-3 sedute/settimana, complementari al lavoro aerobico e di forza.',
        evidenceLevel: 'moderata',
        sourceIds: ['ada-easd-2022'],
        sourceDetail: 'ADA/EASD e ACSM raccomandano esercizi di flessibilità 2-3 volte/settimana, sebbene con minore peso probatorio rispetto ad aerobico e forza.'
      }
    ],
    cvAlert: 'Paziente con complicanze cardiovascolari note: richiedi nulla osta cardiologico prima di iniziare attività aerobica a intensità moderata-vigorosa.'
  },
  {
    id: 'metsyn',
    label: 'Sindrome metabolica / pre-diabete',
    available: false
  },
  {
    id: 'hip-knee-protesi',
    label: 'Post-protesi anca/ginocchio',
    available: false
  }
];

export function getCondition(id) {
  return conditions.find(c => c.id === id);
}

export function getSourceById(condition, sourceId) {
  return condition.sources.find(s => s.id === sourceId);
}
