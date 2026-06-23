# Protocol Builder — documento di progetto

Questo file riassume cosa è stato deciso e costruito finora. Caricalo (insieme al
resto del progetto, o anche da solo) a inizio di ogni nuova sessione di lavoro con
Claude, così non serve rispiegare il contesto da zero.

Ultimo aggiornamento: 23 giugno 2026.

---

## Cos'è il progetto

App per chinesiologi (laurea LM-67, scienze motorie) che genera protocolli di
esercizio fisico basati su evidenza scientifica. Ogni raccomandazione del
protocollo è tracciabile a una fonte (linea guida, studio, revisione sistematica),
visibile cliccando "Fonte" nell'interfaccia.

### Nota terminologica

Il termine corretto in italiano è **chinesiologo** (con la H), non "kinesiologo".
Distinzione rilevante per il progetto:

- **Chinesiologo di base**: laureato triennale in Scienze Motorie (L-22). Opera
  in contesti di benessere, sport, fitness.
- **Chinesiologo clinico**: laureato magistrale LM-67 in Scienze Motorie e
  Attività Fisiche e Tecniche per le Popolazioni Speciali. Opera con popolazioni
  con patologie croniche, disabilità, condizioni cliniche specifiche.

**Il target dell'app è il chinesiologo clinico (LM-67)**, poiché lavora con
pazienti che hanno patologie (diabete tipo 2, sindrome metabolica, post-protesi,
ecc.) e ha la competenza per prescrivere esercizio in questi contesti.

## Modello di business deciso

Freemium, B2B verso chinesiologi (non verso il paziente finale, non legato a Genesi
Health Club):

- **Gratuito**: protocolli pre-costruiti da una knowledge base statica, curata a
  mano. È quello che esiste oggi nel codice.
- **Premium (futuro)**: l'AI assiste il chinesiologo nel tempo — note vocali di
  seduta riorganizzate automaticamente, rilevamento di pattern ricorrenti nello
  storico paziente (es. dolore ricorrente), proposte di adattamento del
  protocollo con razionale e fonte. L'AI propone sempre, non decide mai e non
  modifica nulla senza conferma esplicita del chinesiologo.

## Decisioni architetturali importanti (da non perdere nelle prossime sessioni)

1. **L'AI non genera mai un'affermazione clinica libera.** Per il tier premium,
   l'architettura prevista è RAG (Retrieval-Augmented Generation): l'AI recupera
   frammenti da una knowledge base curata da un umano e genera la risposta solo a
   partire da quei frammenti, citandoli. Non ha accesso libero al web né cerca
   liberamente su PubMed in tempo reale — quello introdurrebbe rischio di
   evidenza di bassa qualità presentata con falsa autorevolezza.
2. **Ogni proposta dell'AI va confermata singolarmente dal chinesiologo**, mai
   applicata in automatico (es. sostituzione di un esercizio in catena chiusa con
   uno in catena aperta in caso di dolore ricorrente — l'AI propone con fonte, il
   professionista accetta o rifiuta).
3. **Privacy**: per il tier premium, i dati inviati all'AI vanno anonimizzati
   prima del prompt (ID paziente interno, non nome reale). Le note vocali vanno
   trascritte e l'audio originale cancellato subito dopo la trascrizione.
4. **Knowledge base separata dal codice applicativo**: tutte le fonti vivono in
   `src/data/knowledgeBase.js`. Aggiungere una patologia significa aggiungere
   dati in quel file, non toccare i componenti dell'interfaccia.

## Roadmap a livelli

- **Livello 0 — fatto, online**: app statica, knowledge base hardcoded (diabete
  tipo 2), nessun backend, nessuna AI. Deploy su Vercel da repository GitHub
  pubblico.
- **Livello 1 — prossimo passo**: più patologie nella knowledge base statica
  (candidate già menzionate: sindrome metabolica/pre-diabete, post-protesi
  anca/ginocchio), libreria esercizi collegata visivamente al protocollo, export
  PDF formattato (oggi: solo stampa da browser o `.txt`), eventuale backend
  (Supabase suggerito) per salvare pazienti e protocolli nel tempo.
- **Livello 2 — tier premium con AI**: knowledge base trasformata in RAG con
  database vettoriale (Postgres + estensione `pgvector` è l'opzione più
  economica), pipeline di anonimizzazione dati prima dell'invio all'AI,
  trascrizione vocale (Whisper API o equivalente), rilevamento pattern su
  storico paziente, proposte di adattamento protocollo.
- **Livello 3 — scala**: integrazioni con FSE o device biometrici,
  semi-automazione della curation scientifica con le API di PubMed/Europe PMC
  (sempre con revisione umana prima che una fonte nuova entri in produzione),
  eventuale apertura ad altri professionisti.

## Fonti scientifiche già verificate e in uso (diabete tipo 2)

- ACSM, *Guidelines for Exercise Testing and Prescription*, 12ª ed. (2024)
- ADA/EASD Consensus Report (2022); ADA Standards of Care 2024-2025
- Revisione sistematica di 15 linee guida internazionali, *Diabetes Research and
  Clinical Practice* 220 (2025), art. 111982

## Struttura del codice (livello 0, attuale)

```
src/
  data/
    knowledgeBase.js   ← fonti e raccomandazioni per patologia (cuore del progetto)
    exercises.js        ← libreria esercizi taggata (tipo, catena cinetica, equipment)
  components/
    StepCondition.jsx   ← step 1: scelta patologia
    StepParams.jsx       ← step 2: parametri paziente
    StepProtocol.jsx     ← step 3: protocollo generato, con fonti cliccabili
    StepDone.jsx          ← step 4: export (.txt / stampa)
    StepIndicator.jsx     ← barra di avanzamento
  App.jsx                 ← orchestratore del wizard a 4 step
  App.css                 ← stile (palette clinico-editoriale: blu notte, teal, ambra)
```

## Come lavorare insieme nelle prossime sessioni

Claude (in questa chat web) non ha accesso permanente al repository GitHub. Per
modificare il codice in una nuova conversazione:

1. Carica questo documento + i file rilevanti (o l'intero progetto zippato)
2. Descrivi cosa vuoi aggiungere/modificare
3. Claude restituisce i file aggiornati
4. Sostituisci i file in locale, verifica con `npm run dev`, poi `git add` /
   `git commit` / `git push` per aggiornare GitHub (che aggiorna anche il deploy
   su Vercel in automatico)

Se in futuro si passa a Claude Code (strumento da riga di comando, diverso da
questa chat), il lavoro diretto sui file del progetto diventa possibile senza
caricare/scaricare manualmente.

## Domande aperte / da decidere

- Pricing del tier premium (non ancora discusso nel dettaglio)
- Chi cura la knowledge base per le prossime patologie (solo tu, o un board di
  colleghi specialisti?)
- Se e quando introdurre un backend persistente (Supabase è l'opzione più
  probabile, vista la familiarità già esplorata con strumenti simili come
  Airtable/Glide per Genesi)
