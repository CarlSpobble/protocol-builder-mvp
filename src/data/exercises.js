// Libreria esercizi minima per il protocollo diabete tipo 2.
// Ogni esercizio è taggato per tipo, distretto, catena cinetica ed equipment.
// Pensata per essere estesa: aggiungere un esercizio = aggiungere un oggetto qui.

export const exercises = [
  {
    id: 'walk-brisk',
    name: 'Camminata a passo sostenuto',
    type: 'aerobico',
    chain: null,
    equipment: 'nessuno',
    notes: 'Intensità moderata: il paziente deve poter parlare ma non cantare (talk test).'
  },
  {
    id: 'cyclette',
    name: 'Cyclette a carico leggero-moderato',
    type: 'aerobico',
    chain: 'aperta',
    equipment: 'cyclette',
    notes: 'Basso impatto articolare, buona alternativa se dolore al ginocchio.'
  },
  {
    id: 'squat',
    name: 'Squat a corpo libero o con carico leggero',
    type: 'forza',
    chain: 'chiusa',
    equipment: 'nessuno / manubri',
    notes: 'Grande gruppo muscolare, indicato nelle linee guida ADA per il resistance training.'
  },
  {
    id: 'leg-press',
    name: 'Leg press, range limitato',
    type: 'forza',
    chain: 'aperta',
    equipment: 'macchina',
    notes: 'Alternativa a basso stress femoro-rotuleo rispetto allo squat profondo.'
  },
  {
    id: 'leg-extension',
    name: 'Leg extension, carico moderato',
    type: 'forza',
    chain: 'aperta',
    equipment: 'macchina',
    notes: 'Isola il quadricipite senza carico assiale.'
  },
  {
    id: 'chest-press',
    name: 'Chest press o piegamenti assistiti',
    type: 'forza',
    chain: null,
    equipment: 'macchina / corpo libero',
    notes: 'Parte superiore, completa il lavoro sui grandi gruppi muscolari.'
  },
  {
    id: 'mobility-general',
    name: 'Mobilità articolare generale',
    type: 'flessibilità',
    chain: null,
    equipment: 'nessuno',
    notes: 'Da inserire 2-3 volte/settimana come da raccomandazione.'
  }
];

export function getExerciseById(id) {
  return exercises.find(e => e.id === id);
}
