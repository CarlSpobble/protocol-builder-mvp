# Protocol Builder — MVP

App per chinesiologi: genera protocolli di esercizio fisico basati su evidenza scientifica, con fonti tracciabili per ogni raccomandazione.

Livello 0 della roadmap: knowledge base statica (diabete tipo 2), nessun backend, nessuna AI. Gratuita, pronta da usare oggi.

## Eseguire in locale

```bash
npm install
npm run dev
```

Apri il link che appare in terminale (di solito http://localhost:5173).

## Deploy su Vercel (consigliato, gratuito)

1. Crea un repository su GitHub e carica questa cartella:
   ```bash
   git init
   git add .
   git commit -m "Protocol builder MVP"
   git branch -M main
   git remote add origin <url-del-tuo-repo>
   git push -u origin main
   ```
2. Vai su vercel.com, accedi con GitHub, clicca "Add new project", seleziona il repository.
3. Vercel riconosce automaticamente che è un progetto Vite — non serve configurare nulla. Clicca "Deploy".
4. In 1-2 minuti ottieni un link pubblico (es. `tuo-progetto.vercel.app`) utilizzabile da telefono o computer.

## Deploy alternativo: Netlify

Stessa procedura: collega il repo GitHub, build command `npm run build`, output directory `dist`.

## Struttura del progetto

```
src/
  data/
    knowledgeBase.js   ← le fonti scientifiche e le raccomandazioni per patologia
    exercises.js       ← libreria esercizi taggata
  components/
    StepCondition.jsx  ← step 1: scelta patologia
    StepParams.jsx     ← step 2: parametri paziente
    StepProtocol.jsx   ← step 3: protocollo generato, con fonti
    StepDone.jsx       ← step 4: export
  App.jsx              ← orchestratore del wizard
  App.css              ← stile dell'app
```

## Come aggiungere una nuova patologia

Apri `src/data/knowledgeBase.js`, duplica il blocco `t2d` dentro l'array `conditions`,
cambia `id`, `label`, `available: true`, e aggiorna `sources` e `recommendations` con le
fonti che hai scelto per quella patologia. Non serve toccare altri file: l'interfaccia si
aggiorna automaticamente.

## Prossimi passi (livello 1+)

- Più patologie nella knowledge base
- Libreria esercizi collegata visivamente al protocollo
- Salvataggio pazienti nel tempo (richiede un backend, es. Supabase)
- Export PDF formattato (oggi: stampa da browser o .txt)
- Tier premium con AI (vedi conversazione di sviluppo per l'architettura RAG)
