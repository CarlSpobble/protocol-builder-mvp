// Generato da scripts/buildKnowledgeBase.js — NON modificare a mano.
// Incollare queste voci dentro l'array conditions in src/data/knowledgeBase.js,
// dopo la voce t2d esistente (o importare fyssConditions e usare lo spread).
//
// DEFAULT_EVIDENCE: dove segnalato, il livello "moderata" è un default
// conservativo perché il livello non era ricavabile dalla tabella outcomes
// FYSS per quel tipo di attività. Verificare manualmente prima di pubblicare.

export const fyssConditions = [
  {
    id: "dipendenza-da-alcol",
    label: "Dipendenza da alcol",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Dipendenza da alcol. Indicazione: Indicata insieme ad altre modifiche dello stile di vita e a trattamento psicosociale, psicologico o farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (es. 30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può diminuire il consumo di alcol, migliorare la salute mentale, il concetto di sé e la forma fisica. La maggior parte degli studi riguardava attività aerobica moderata-vigorosa, eseguita in gruppo 2-3 volte/settimana. Un effetto positivo sui sintomi depressivi è stato riscontrato con l'allenamento di forza; lo yoga ha ridotto i livelli di ansia.\n\nIndicazioni specifiche: L'attività fisica dovrebbe essere progettata e personalizzata in dialogo con l'individuo. Può iniziare appena la persona è sufficientemente motivata; il colloquio motivazionale è utile. Se motivata e senza controindicazioni mediche, l'intensità vigorosa è ideale per un effetto ottimale.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può diminuire il consumo di alcol, migliorare la salute mentale, il concetto di sé e la forma fisica. La maggior parte degli studi riguardava attività aerobica moderata-vigorosa, eseguita in gruppo 2-3 volte/settimana. Un effetto positivo sui sintomi depressivi è stato riscontrato con l'allenamento di forza; lo yoga ha ridotto i livelli di ansia.\n\nIndicazioni specifiche: L'attività fisica dovrebbe essere progettata e personalizzata in dialogo con l'individuo. Può iniziare appena la persona è sufficientemente motivata; il colloquio motivazionale è utile. Se motivata e senza controindicazioni mediche, l'intensità vigorosa è ideale per un effetto ottimale.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "disturbi-d-ansia",
    label: "Disturbi d'ansia",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Disturbi d'ansia. Indicazione: Indicata insieme ad altre modifiche dello stile di vita, terapia cognitivo-comportamentale (CBT) o trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata+Vigorosa combinata, Almeno 90 (es. almeno 20 min/sessione) min/sett., 3-5 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Disturbo di panico (con o senza agorafobia): riduzione dei sintomi ansiosi con attività aerobica o aerobica+rinforzo 3-4 volte/settimana per 10-12 settimane (CBT/antidepressivi mostrano effetti maggiori). Giovani donne con ansia generalizzata: 2 sessioni/settimana di rinforzo muscolare O aerobica per 6 settimane hanno dato remissione del 60% / 40% vs 30% in lista d'attesa. Ansia sociale: attività aerobica 3 volte/settimana per 8 settimane efficace come la Mindfulness Based Stress Reduction (remissione 29% vs 22%).\n\nIndicazioni specifiche: Riduzione acuta dell'ansia: almeno 15 minuti di attività aerobica vigorosa. Per riduzione persistente (fino a 12 mesi): almeno 10-12 settimane di attività fisica. Molte persone sperimentano paradossalmente ansia iniziando l'esercizio (l'attivazione del sistema simpatico mima i sintomi d'ansia) - informare in anticipo per ridurre l'allarme, specialmente per chi soffre di attacchi di panico. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Disturbo di panico (con o senza agorafobia): riduzione dei sintomi ansiosi con attività aerobica o aerobica+rinforzo 3-4 volte/settimana per 10-12 settimane (CBT/antidepressivi mostrano effetti maggiori). Giovani donne con ansia generalizzata: 2 sessioni/settimana di rinforzo muscolare O aerobica per 6 settimane hanno dato remissione del 60% / 40% vs 30% in lista d'attesa. Ansia sociale: attività aerobica 3 volte/settimana per 8 settimane efficace come la Mindfulness Based Stress Reduction (remissione 29% vs 22%).\n\nIndicazioni specifiche: Riduzione acuta dell'ansia: almeno 15 minuti di attività aerobica vigorosa. Per riduzione persistente (fino a 12 mesi): almeno 10-12 settimane di attività fisica. Molte persone sperimentano paradossalmente ansia iniziando l'esercizio (l'attivazione del sistema simpatico mima i sintomi d'ansia) - informare in anticipo per ridurre l'allarme, specialmente per chi soffre di attacchi di panico. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "asma",
    label: "Asma",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Asma. Indicazione: L'attività fisica, insieme ad altre modifiche dello stile di vita, alla terapia farmacologica e all'attenzione alle esposizioni dannose, è un cardine del trattamento. Si applica anche a persone più giovani (non solo adulti).",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora i sintomi dell'asma, la qualità di vita e la capacità aerobica in bambini e adulti. Gli studi usavano attività aerobica (camminata, ciclismo, corsa, nuoto, basket, esercizi in acqua) continua o a intervalli, intensità moderata-alta (>60% della capacità massima), 2-5 volte/settimana, 30-90 minuti/sessione, 6-12 settimane.\n\nIndicazioni specifiche: Problemi respiratori indotti dall'esercizio spesso indicano asma non controllata - servono supporto sia farmacologico sia non farmacologico per favorire la partecipazione. Consigli non farmacologici: riscaldamento di 10-20 minuti, allenamento a intervalli, uso di mascherina al freddo. Consigli farmacologici: uso regolare di corticosteroidi inalatori; alcuni necessitano broncodilatatore a lunga durata/anticolinergico 45 minuti prima dell'esercizio. Evitare attività aerobica moderata-vigorosa durante una riacutizzazione acuta finché non si è asintomatici. Incoraggiare bambini/adolescenti sedentari ad aumentare l'attività (effetto protettivo contro asma più severa e obesità). Asma severa: spesso sedentari - raccomandare attività per aumentare forma fisica e controllo, diminuire l'inflammazione sistemica. Adulti sedentari: l'attività regolare migliora il controllo dell'asma. Può ridurre i sintomi notturni dopo un periodo di attività fisica regolare.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora i sintomi dell'asma, la qualità di vita e la capacità aerobica in bambini e adulti. Gli studi usavano attività aerobica (camminata, ciclismo, corsa, nuoto, basket, esercizi in acqua) continua o a intervalli, intensità moderata-alta (>60% della capacità massima), 2-5 volte/settimana, 30-90 minuti/sessione, 6-12 settimane.\n\nIndicazioni specifiche: Problemi respiratori indotti dall'esercizio spesso indicano asma non controllata - servono supporto sia farmacologico sia non farmacologico per favorire la partecipazione. Consigli non farmacologici: riscaldamento di 10-20 minuti, allenamento a intervalli, uso di mascherina al freddo. Consigli farmacologici: uso regolare di corticosteroidi inalatori; alcuni necessitano broncodilatatore a lunga durata/anticolinergico 45 minuti prima dell'esercizio. Evitare attività aerobica moderata-vigorosa durante una riacutizzazione acuta finché non si è asintomatici. Incoraggiare bambini/adolescenti sedentari ad aumentare l'attività (effetto protettivo contro asma più severa e obesità). Asma severa: spesso sedentari - raccomandare attività per aumentare forma fisica e controllo, diminuire l'inflammazione sistemica. Adulti sedentari: l'attività regolare migliora il controllo dell'asma. Può ridurre i sintomi notturni dopo un periodo di attività fisica regolare.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Se si scelgono solo attività aerobiche, aggiungere rinforzo muscolare se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora i sintomi dell'asma, la qualità di vita e la capacità aerobica in bambini e adulti. Gli studi usavano attività aerobica (camminata, ciclismo, corsa, nuoto, basket, esercizi in acqua) continua o a intervalli, intensità moderata-alta (>60% della capacità massima), 2-5 volte/settimana, 30-90 minuti/sessione, 6-12 settimane.\n\nIndicazioni specifiche: Problemi respiratori indotti dall'esercizio spesso indicano asma non controllata - servono supporto sia farmacologico sia non farmacologico per favorire la partecipazione. Consigli non farmacologici: riscaldamento di 10-20 minuti, allenamento a intervalli, uso di mascherina al freddo. Consigli farmacologici: uso regolare di corticosteroidi inalatori; alcuni necessitano broncodilatatore a lunga durata/anticolinergico 45 minuti prima dell'esercizio. Evitare attività aerobica moderata-vigorosa durante una riacutizzazione acuta finché non si è asintomatici. Incoraggiare bambini/adolescenti sedentari ad aumentare l'attività (effetto protettivo contro asma più severa e obesità). Asma severa: spesso sedentari - raccomandare attività per aumentare forma fisica e controllo, diminuire l'inflammazione sistemica. Adulti sedentari: l'attività regolare migliora il controllo dell'asma. Può ridurre i sintomi notturni dopo un periodo di attività fisica regolare.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "fibrillazione-atriale",
    label: "Fibrillazione atriale",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Fibrillazione atriale. Indicazione: Nella fibrillazione atriale permanente, indicata insieme ad altre modifiche dello stile di vita e trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: FA permanente: miglioramento del controllo della frequenza, qualità di vita, capacità aerobica dopo attività aerobica (effetti che sembrano di breve durata). FA non permanente: aumento della capacità aerobica e della componente fisica della qualità di vita in poche settimane (++, dimensione dell'effetto incerta); riduzione del tempo in FA e della frequenza/gravità dei sintomi (+). Evidenza generalmente scarsa/con bias - studi piccoli, partecipanti più sani/giovani della media, al massimo in singolo cieco.\n\nIndicazioni specifiche: Gruppo molto eterogeneo (da persone allenate e sane a malattia cardiovascolare grave dove un'intensità maggiore può aumentare il rischio di eventi avversi) - non esiste un consiglio generale valido per tutti. Tutti dovrebbero consultare il medico di base per una valutazione individualizzata prima di iniziare. Trattare altre malattie cardiovascolari concomitanti/segni prima di iniziare. Senza altre condizioni sottostanti: intensità lieve-moderata senza precauzioni. Con aritmia sintomatica: considerare un test da sforzo limitato dai sintomi con ECG prima dell'allenamento vigoroso. La scala RPE di Borg è probabilmente migliore della misurazione della frequenza cardiaca per stimare l'intensità relativa nella FA permanente. Se le aritmie ventricolari aumentano durante l'esercizio, interrompere l'allenamento e inviare a un cardiologo. Evitare l'esercizio/le competizioni durante un'aritmia in corso (non si applica alla FA permanente ben trattata).",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: FA permanente: miglioramento del controllo della frequenza, qualità di vita, capacità aerobica dopo attività aerobica (effetti che sembrano di breve durata). FA non permanente: aumento della capacità aerobica e della componente fisica della qualità di vita in poche settimane (++, dimensione dell'effetto incerta); riduzione del tempo in FA e della frequenza/gravità dei sintomi (+). Evidenza generalmente scarsa/con bias - studi piccoli, partecipanti più sani/giovani della media, al massimo in singolo cieco.\n\nIndicazioni specifiche: Gruppo molto eterogeneo (da persone allenate e sane a malattia cardiovascolare grave dove un'intensità maggiore può aumentare il rischio di eventi avversi) - non esiste un consiglio generale valido per tutti. Tutti dovrebbero consultare il medico di base per una valutazione individualizzata prima di iniziare. Trattare altre malattie cardiovascolari concomitanti/segni prima di iniziare. Senza altre condizioni sottostanti: intensità lieve-moderata senza precauzioni. Con aritmia sintomatica: considerare un test da sforzo limitato dai sintomi con ECG prima dell'allenamento vigoroso. La scala RPE di Borg è probabilmente migliore della misurazione della frequenza cardiaca per stimare l'intensità relativa nella FA permanente. Se le aritmie ventricolari aumentano durante l'esercizio, interrompere l'allenamento e inviare a un cardiologo. Evitare l'esercizio/le competizioni durante un'aritmia in corso (non si applica alla FA permanente ben trattata).",
      },
    ],
    cvAlert: "",
  },
  {
    id: "dolore-cronico-lombare-e-cervicale",
    label: "Dolore cronico lombare e cervicale",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Dolore cronico lombare e cervicale. Indicazione: Attività fisica specificamente adattata, indicata insieme ad altre modifiche dello stile di vita, sia nel dolore specifico sia non specifico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Effetti positivi su dolore, funzione, paura del movimento, autoefficacia, qualità di vita, impressione globale di recupero. Rinforzo muscolare: intensità moderata 8-15RM, 1-3 serie, 2-3 volte/settimana. Aerobica: RPE 12-13, 45-60 minuti/sessione, più volte/settimana. MCE/Pilates/acquaticità/yoga: livelli individuali e progressivi. Tutti i periodi di allenamento >= 6 settimane. Non vi è forte evidenza per privilegiare un tipo o modalità (terra/acqua). Pochi eventi avversi, perlopiù dolorabilità transitoria.\n\nIndicazioni specifiche: Valutare comorbidità e segnali d'allarme (fratture, tumori, altre condizioni gravi). Adattamento individuale supervisionato da un terapeuta con formazione medica, monitorando funzione e dolore per una progressione ottimale. La paura della recidiva o del peggioramento del dolore può causare inattività. Rimanere attivi ed evitare il riposo a letto è importante poiché la paura del movimento può ritardare il recupero; il terapeuta dovrebbe considerare questo aspetto nella progettazione del programma.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-15 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Effetti positivi su dolore, funzione, paura del movimento, autoefficacia, qualità di vita, impressione globale di recupero. Rinforzo muscolare: intensità moderata 8-15RM, 1-3 serie, 2-3 volte/settimana. Aerobica: RPE 12-13, 45-60 minuti/sessione, più volte/settimana. MCE/Pilates/acquaticità/yoga: livelli individuali e progressivi. Tutti i periodi di allenamento >= 6 settimane. Non vi è forte evidenza per privilegiare un tipo o modalità (terra/acqua). Pochi eventi avversi, perlopiù dolorabilità transitoria.\n\nIndicazioni specifiche: Valutare comorbidità e segnali d'allarme (fratture, tumori, altre condizioni gravi). Adattamento individuale supervisionato da un terapeuta con formazione medica, monitorando funzione e dolore per una progressione ottimale. La paura della recidiva o del peggioramento del dolore può causare inattività. Rimanere attivi ed evitare il riposo a letto è importante poiché la paura del movimento può ritardare il recupero; il terapeuta dovrebbe considerare questo aspetto nella progettazione del programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere ulteriore attività aerobica e di rinforzo muscolare se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Effetti positivi su dolore, funzione, paura del movimento, autoefficacia, qualità di vita, impressione globale di recupero. Rinforzo muscolare: intensità moderata 8-15RM, 1-3 serie, 2-3 volte/settimana. Aerobica: RPE 12-13, 45-60 minuti/sessione, più volte/settimana. MCE/Pilates/acquaticità/yoga: livelli individuali e progressivi. Tutti i periodi di allenamento >= 6 settimane. Non vi è forte evidenza per privilegiare un tipo o modalità (terra/acqua). Pochi eventi avversi, perlopiù dolorabilità transitoria.\n\nIndicazioni specifiche: Valutare comorbidità e segnali d'allarme (fratture, tumori, altre condizioni gravi). Adattamento individuale supervisionato da un terapeuta con formazione medica, monitorando funzione e dolore per una progressione ottimale. La paura della recidiva o del peggioramento del dolore può causare inattività. Rimanere attivi ed evitare il riposo a letto è importante poiché la paura del movimento può ritardare il recupero; il terapeuta dovrebbe considerare questo aspetto nella progettazione del programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "cancro",
    label: "Cancro",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Cancro. Indicazione: Indicata durante e dopo il trattamento oncologico, insieme ad altre modifiche dello stile di vita; indicata anche nel cancro cronico/in fase palliativa.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora la sopravvivenza, la fatigue, la qualità di vita, la capacità aerobica e la forza muscolare. Una maggiore attività ricreativa auto-riportata è associata a maggiore sopravvivenza (mammella, colorettale, prostata). La qualità di vita migliora con attività aerobica e/o di rinforzo >=15 min/sessione, 2 volte/settimana. La componente aerobica (camminata/ciclismo/corsa) a intensità moderata-alta >=30 min/sessione, 2-5 volte/settimana, >=5 settimane ha aumentato la capacità aerobica (durate/volumi maggiori hanno un effetto aggiuntivo). Il rinforzo muscolare >=2 volte/settimana ha aumentato la forza. L'allenamento supervisionato è più efficace di quello domiciliare per qualità di vita e forza.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale similarmente formato. L'attività regolare può ridurre gli effetti collaterali del trattamento: fatigue, nausea, dolore articolare. Per massimizzare l'effetto sulla capacità aerobica, usare intensità vigorosa o moderata+vigorosa combinata, se le condizioni di salute lo permettono. Adattare tipo/dose in caso di effetti collaterali gravi in corso. Nessuna attività vigorosa nelle 24 ore successive a un'infusione di chemioterapia. Posticipare l'attività vigorosa in caso di alto rischio infettivo; un'infezione in corso è una controindicazione assoluta. Adattare tipo/dose in caso di osteoporosi accertata o recupero molto scarso dopo il trattamento. L'attività fisica pre-chirurgica (prehabilitation) è un ambito emergente e può ottimizzare la funzione e ridurre il tempo di recupero post-operatorio.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora la sopravvivenza, la fatigue, la qualità di vita, la capacità aerobica e la forza muscolare. Una maggiore attività ricreativa auto-riportata è associata a maggiore sopravvivenza (mammella, colorettale, prostata). La qualità di vita migliora con attività aerobica e/o di rinforzo >=15 min/sessione, 2 volte/settimana. La componente aerobica (camminata/ciclismo/corsa) a intensità moderata-alta >=30 min/sessione, 2-5 volte/settimana, >=5 settimane ha aumentato la capacità aerobica (durate/volumi maggiori hanno un effetto aggiuntivo). Il rinforzo muscolare >=2 volte/settimana ha aumentato la forza. L'allenamento supervisionato è più efficace di quello domiciliare per qualità di vita e forza.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale similarmente formato. L'attività regolare può ridurre gli effetti collaterali del trattamento: fatigue, nausea, dolore articolare. Per massimizzare l'effetto sulla capacità aerobica, usare intensità vigorosa o moderata+vigorosa combinata, se le condizioni di salute lo permettono. Adattare tipo/dose in caso di effetti collaterali gravi in corso. Nessuna attività vigorosa nelle 24 ore successive a un'infusione di chemioterapia. Posticipare l'attività vigorosa in caso di alto rischio infettivo; un'infezione in corso è una controindicazione assoluta. Adattare tipo/dose in caso di osteoporosi accertata o recupero molto scarso dopo il trattamento. L'attività fisica pre-chirurgica (prehabilitation) è un ambito emergente e può ottimizzare la funzione e ridurre il tempo di recupero post-operatorio.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora la sopravvivenza, la fatigue, la qualità di vita, la capacità aerobica e la forza muscolare. Una maggiore attività ricreativa auto-riportata è associata a maggiore sopravvivenza (mammella, colorettale, prostata). La qualità di vita migliora con attività aerobica e/o di rinforzo >=15 min/sessione, 2 volte/settimana. La componente aerobica (camminata/ciclismo/corsa) a intensità moderata-alta >=30 min/sessione, 2-5 volte/settimana, >=5 settimane ha aumentato la capacità aerobica (durate/volumi maggiori hanno un effetto aggiuntivo). Il rinforzo muscolare >=2 volte/settimana ha aumentato la forza. L'allenamento supervisionato è più efficace di quello domiciliare per qualità di vita e forza.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale similarmente formato. L'attività regolare può ridurre gli effetti collaterali del trattamento: fatigue, nausea, dolore articolare. Per massimizzare l'effetto sulla capacità aerobica, usare intensità vigorosa o moderata+vigorosa combinata, se le condizioni di salute lo permettono. Adattare tipo/dose in caso di effetti collaterali gravi in corso. Nessuna attività vigorosa nelle 24 ore successive a un'infusione di chemioterapia. Posticipare l'attività vigorosa in caso di alto rischio infettivo; un'infezione in corso è una controindicazione assoluta. Adattare tipo/dose in caso di osteoporosi accertata o recupero molto scarso dopo il trattamento. L'attività fisica pre-chirurgica (prehabilitation) è un ambito emergente e può ottimizzare la funzione e ridurre il tempo di recupero post-operatorio.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "broncopneumopatia-cronica-ostruttiva-bpco",
    label: "Broncopneumopatia cronica ostruttiva (BPCO)",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Broncopneumopatia cronica ostruttiva (BPCO). Indicazione: Indicata insieme alla cessazione del fumo, modifiche dietetiche, educazione e trattamento farmacologico - indipendentemente da età, sesso, grado di dispnea o gravità della malattia. Raccomandato il lavoro multidisciplinare.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: BPCO stabile: riduce la dispnea, migliora qualità di vita, capacità massima, forza muscolare. La maggior parte delle evidenze riguarda attività aerobica+rinforzo combinati; componente aerobica (camminata, cicloergometro, in acqua) moderata-vigorosa (>=60% capacità massima, 40-80% 1RM), 30-120 min/sessione, 1-5 volte/settimana, 4-52 settimane (la maggior parte ~12 settimane). Solo rinforzo: 8-12 ripetizioni, 1-3 serie, 2-3 volte/settimana, 8-16 settimane, 50-90% 1RM. Riacutizzazione acuta: iniziare l'attività 2-21 giorni dopo la riacutizzazione (prima ADL, poi rinforzo, poi aerobica) migliora qualità di vita/6MWD (++++) e riduce le riammissioni ospedaliere (+++).\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista. Durante l'ospedalizzazione per riacutizzazione, iniziare con attività leggera (es. camminate in corridoio). L'attività aerobica moderata/vigorosa può essere continua o intermittente (intervalli di 1-3 minuti). Dispnea severa: iniziare con allenamento muscolare periferico, esercizi monolaterali, flessibilità (minore impegno circolatorio centrale). Se SpO2 < 88% durante l'attività aerobica, ridurre l'intensità / usare esercizio a intervalli / lavoro monolaterale o di rinforzo. Valutare dispnea e fatica alle gambe con scala Borg CR10 (range 3-6). La respirazione a labbra increspate (pursed lip breathing) è raccomandata per ridurre la frequenza respiratoria durante l'esercizio. BMI < 22 kg/m2: rivolgersi a un dietista, raggiungere il bilancio energetico. Ausili per la deambulazione (es. rollator) possono estendere la distanza percorsa e migliorare la funzione muscolare delle gambe. La malattia severa non precoclude l'attività aerobica a intensità vigorosa.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: BPCO stabile: riduce la dispnea, migliora qualità di vita, capacità massima, forza muscolare. La maggior parte delle evidenze riguarda attività aerobica+rinforzo combinati; componente aerobica (camminata, cicloergometro, in acqua) moderata-vigorosa (>=60% capacità massima, 40-80% 1RM), 30-120 min/sessione, 1-5 volte/settimana, 4-52 settimane (la maggior parte ~12 settimane). Solo rinforzo: 8-12 ripetizioni, 1-3 serie, 2-3 volte/settimana, 8-16 settimane, 50-90% 1RM. Riacutizzazione acuta: iniziare l'attività 2-21 giorni dopo la riacutizzazione (prima ADL, poi rinforzo, poi aerobica) migliora qualità di vita/6MWD (++++) e riduce le riammissioni ospedaliere (+++).\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista. Durante l'ospedalizzazione per riacutizzazione, iniziare con attività leggera (es. camminate in corridoio). L'attività aerobica moderata/vigorosa può essere continua o intermittente (intervalli di 1-3 minuti). Dispnea severa: iniziare con allenamento muscolare periferico, esercizi monolaterali, flessibilità (minore impegno circolatorio centrale). Se SpO2 < 88% durante l'attività aerobica, ridurre l'intensità / usare esercizio a intervalli / lavoro monolaterale o di rinforzo. Valutare dispnea e fatica alle gambe con scala Borg CR10 (range 3-6). La respirazione a labbra increspate (pursed lip breathing) è raccomandata per ridurre la frequenza respiratoria durante l'esercizio. BMI < 22 kg/m2: rivolgersi a un dietista, raggiungere il bilancio energetico. Ausili per la deambulazione (es. rollator) possono estendere la distanza percorsa e migliorare la funzione muscolare delle gambe. La malattia severa non precoclude l'attività aerobica a intensità vigorosa.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: BPCO stabile: riduce la dispnea, migliora qualità di vita, capacità massima, forza muscolare. La maggior parte delle evidenze riguarda attività aerobica+rinforzo combinati; componente aerobica (camminata, cicloergometro, in acqua) moderata-vigorosa (>=60% capacità massima, 40-80% 1RM), 30-120 min/sessione, 1-5 volte/settimana, 4-52 settimane (la maggior parte ~12 settimane). Solo rinforzo: 8-12 ripetizioni, 1-3 serie, 2-3 volte/settimana, 8-16 settimane, 50-90% 1RM. Riacutizzazione acuta: iniziare l'attività 2-21 giorni dopo la riacutizzazione (prima ADL, poi rinforzo, poi aerobica) migliora qualità di vita/6MWD (++++) e riduce le riammissioni ospedaliere (+++).\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista. Durante l'ospedalizzazione per riacutizzazione, iniziare con attività leggera (es. camminate in corridoio). L'attività aerobica moderata/vigorosa può essere continua o intermittente (intervalli di 1-3 minuti). Dispnea severa: iniziare con allenamento muscolare periferico, esercizi monolaterali, flessibilità (minore impegno circolatorio centrale). Se SpO2 < 88% durante l'attività aerobica, ridurre l'intensità / usare esercizio a intervalli / lavoro monolaterale o di rinforzo. Valutare dispnea e fatica alle gambe con scala Borg CR10 (range 3-6). La respirazione a labbra increspate (pursed lip breathing) è raccomandata per ridurre la frequenza respiratoria durante l'esercizio. BMI < 22 kg/m2: rivolgersi a un dietista, raggiungere il bilancio energetico. Ausili per la deambulazione (es. rollator) possono estendere la distanza percorsa e migliorare la funzione muscolare delle gambe. La malattia severa non precoclude l'attività aerobica a intensità vigorosa.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "malattia-coronarica",
    label: "Malattia coronarica",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Malattia coronarica. Indicazione: Nella malattia coronarica stabile l'attività fisica è indicata, insieme ad altri interventi sullo stile di vita, indipendentemente dalla terapia farmacologica o dal trattamento invasivo.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Combinazione di intensità Moderata e Vigorosa, Almeno 90 (es. 30-60 minuti/seduta) min/sett., 3-5 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: I soggetti con malattia coronarica possono ridurre la mortalità e i ricoveri e aumentare la capacità aerobica e la forza muscolare dopo una riabilitazione cardiologica basata sull'esercizio fisico (exCR). La ExCR consisteva di attività aerobica e/o attività di rinforzo muscolare. L'attività fisica aerobica era generalmente eseguita su un cicloergometro, come aerobica/callistenica, su un tappeto rotante o come allenamento in circuito, in maniera continua o intervallata. La dose di attività fisica aerobica variava tra i trials; in genere l'attività aerobica era eseguita ad un'intensità del 60-85% del VO2max o del 70-95% della frequenza cardiaca massima, 30-60 minuti, 3-5 volte la settimana per una durata dai 3 ai 6 mesi. L'attività di rinforzo muscolare veniva eseguita come 8 esercizi per arti superiori e/o inferiori al 40-80% di 1 RM in 10-15 ripetizioni per 1-3 serie, 2-3 volte la settimana per 3-6 mesi. L'allenamento intervallato ad elevata intensità può migliorare il VO2max più dell'allenamento continuo ad intensità moderata. Questa superiorità si attenuava, tuttavia, quando venivano paragonati protocolli isocalorici. La combinazione di attività aerobica e di rinforzo muscolare produce un maggior aumento del VO2max rispetto alla sola attività aerobica o alla sola attività di rinforzo muscolare. Il rischio relativo per la riduzione della mortalità rispetto al non eseguire esercizio era RR 0.74 (95%CI da 0.54 a 0.86).\n\nIndicazioni specifiche: Gli individui con malattia coronarica accertata, per ottenere un'adeguata prescrizione dell'attività fisica, dopo la valutazione di un medico, dovrebbero sottoporsi a una valutazione con un test da sforzo limitato dai sintomi che includa l'ECG e a test di valutazione funzionale della funzione muscolare da parte di un fisioterapista o di altri professionisti della salute con competenze appropriate. È importante iniziare l'esercizio il prima possibile dopo un evento coronarico acuto, basandosi sull'esito dell'elettrocardiogramma da sforzo. L'attività fisica dovrebbe essere condotta sotto supervisione medica fino a quando l'individuo non presenta una malattia coronarica stabile. L'attività fisica può essere effettuata in modo continuo o intervallato, a seconda delle preferenze individuali. Durante l'esercizio è importante prestare attenzione a qualunque aritmia o risposta pressoria anomala così come a sintomi quali dispnea, capogiri e dolore al centro del torace che pongono indicazione a interrompere l'esercizio (vedi le controindicazioni nell'introduzione). I soggetti con malattia coronarica spesso hanno bisogno di sostegno e incoraggiamento per iniziare e per rimanere fisicamente attivi ad un livello tale da mantenere la capacità fisica. Si raccomanda di eseguire il programma di esercizi aerobici e di potenziamento muscolare come parte di un programma di riabilitazione cardiologica, sia come intervento basato solo sull'esercizio fisico che in combinazione con altri interventi sullo stile di vita. L'intervento basato sull'esercizio viene eseguito in un ambiente ospedaliero supervisionato o in combinazione con alcune sessioni domiciliari. Dopo il completamento di un programma di exCR, alle persone dovrebbe essere raccomandato di continuare l'attività fisica per tutta la vita per mantenere il miglioramento della capacità fisica.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 10-15 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: I soggetti con malattia coronarica possono ridurre la mortalità e i ricoveri e aumentare la capacità aerobica e la forza muscolare dopo una riabilitazione cardiologica basata sull'esercizio fisico (exCR). La ExCR consisteva di attività aerobica e/o attività di rinforzo muscolare. L'attività fisica aerobica era generalmente eseguita su un cicloergometro, come aerobica/callistenica, su un tappeto rotante o come allenamento in circuito, in maniera continua o intervallata. La dose di attività fisica aerobica variava tra i trials; in genere l'attività aerobica era eseguita ad un'intensità del 60-85% del VO2max o del 70-95% della frequenza cardiaca massima, 30-60 minuti, 3-5 volte la settimana per una durata dai 3 ai 6 mesi. L'attività di rinforzo muscolare veniva eseguita come 8 esercizi per arti superiori e/o inferiori al 40-80% di 1 RM in 10-15 ripetizioni per 1-3 serie, 2-3 volte la settimana per 3-6 mesi. L'allenamento intervallato ad elevata intensità può migliorare il VO2max più dell'allenamento continuo ad intensità moderata. Questa superiorità si attenuava, tuttavia, quando venivano paragonati protocolli isocalorici. La combinazione di attività aerobica e di rinforzo muscolare produce un maggior aumento del VO2max rispetto alla sola attività aerobica o alla sola attività di rinforzo muscolare. Il rischio relativo per la riduzione della mortalità rispetto al non eseguire esercizio era RR 0.74 (95%CI da 0.54 a 0.86).\n\nIndicazioni specifiche: Gli individui con malattia coronarica accertata, per ottenere un'adeguata prescrizione dell'attività fisica, dopo la valutazione di un medico, dovrebbero sottoporsi a una valutazione con un test da sforzo limitato dai sintomi che includa l'ECG e a test di valutazione funzionale della funzione muscolare da parte di un fisioterapista o di altri professionisti della salute con competenze appropriate. È importante iniziare l'esercizio il prima possibile dopo un evento coronarico acuto, basandosi sull'esito dell'elettrocardiogramma da sforzo. L'attività fisica dovrebbe essere condotta sotto supervisione medica fino a quando l'individuo non presenta una malattia coronarica stabile. L'attività fisica può essere effettuata in modo continuo o intervallato, a seconda delle preferenze individuali. Durante l'esercizio è importante prestare attenzione a qualunque aritmia o risposta pressoria anomala così come a sintomi quali dispnea, capogiri e dolore al centro del torace che pongono indicazione a interrompere l'esercizio (vedi le controindicazioni nell'introduzione). I soggetti con malattia coronarica spesso hanno bisogno di sostegno e incoraggiamento per iniziare e per rimanere fisicamente attivi ad un livello tale da mantenere la capacità fisica. Si raccomanda di eseguire il programma di esercizi aerobici e di potenziamento muscolare come parte di un programma di riabilitazione cardiologica, sia come intervento basato solo sull'esercizio fisico che in combinazione con altri interventi sullo stile di vita. L'intervento basato sull'esercizio viene eseguito in un ambiente ospedaliero supervisionato o in combinazione con alcune sessioni domiciliari. Dopo il completamento di un programma di exCR, alle persone dovrebbe essere raccomandato di continuare l'attività fisica per tutta la vita per mantenere il miglioramento della capacità fisica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "L'attività fisica raccomandata nella malattia coronarica soddisfa le raccomandazioni generali mondiali sull'attività fisica per la salute e non è necessaria alcuna raccomandazione aggiuntiva.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: I soggetti con malattia coronarica possono ridurre la mortalità e i ricoveri e aumentare la capacità aerobica e la forza muscolare dopo una riabilitazione cardiologica basata sull'esercizio fisico (exCR). La ExCR consisteva di attività aerobica e/o attività di rinforzo muscolare. L'attività fisica aerobica era generalmente eseguita su un cicloergometro, come aerobica/callistenica, su un tappeto rotante o come allenamento in circuito, in maniera continua o intervallata. La dose di attività fisica aerobica variava tra i trials; in genere l'attività aerobica era eseguita ad un'intensità del 60-85% del VO2max o del 70-95% della frequenza cardiaca massima, 30-60 minuti, 3-5 volte la settimana per una durata dai 3 ai 6 mesi. L'attività di rinforzo muscolare veniva eseguita come 8 esercizi per arti superiori e/o inferiori al 40-80% di 1 RM in 10-15 ripetizioni per 1-3 serie, 2-3 volte la settimana per 3-6 mesi. L'allenamento intervallato ad elevata intensità può migliorare il VO2max più dell'allenamento continuo ad intensità moderata. Questa superiorità si attenuava, tuttavia, quando venivano paragonati protocolli isocalorici. La combinazione di attività aerobica e di rinforzo muscolare produce un maggior aumento del VO2max rispetto alla sola attività aerobica o alla sola attività di rinforzo muscolare. Il rischio relativo per la riduzione della mortalità rispetto al non eseguire esercizio era RR 0.74 (95%CI da 0.54 a 0.86).\n\nIndicazioni specifiche: Gli individui con malattia coronarica accertata, per ottenere un'adeguata prescrizione dell'attività fisica, dopo la valutazione di un medico, dovrebbero sottoporsi a una valutazione con un test da sforzo limitato dai sintomi che includa l'ECG e a test di valutazione funzionale della funzione muscolare da parte di un fisioterapista o di altri professionisti della salute con competenze appropriate. È importante iniziare l'esercizio il prima possibile dopo un evento coronarico acuto, basandosi sull'esito dell'elettrocardiogramma da sforzo. L'attività fisica dovrebbe essere condotta sotto supervisione medica fino a quando l'individuo non presenta una malattia coronarica stabile. L'attività fisica può essere effettuata in modo continuo o intervallato, a seconda delle preferenze individuali. Durante l'esercizio è importante prestare attenzione a qualunque aritmia o risposta pressoria anomala così come a sintomi quali dispnea, capogiri e dolore al centro del torace che pongono indicazione a interrompere l'esercizio (vedi le controindicazioni nell'introduzione). I soggetti con malattia coronarica spesso hanno bisogno di sostegno e incoraggiamento per iniziare e per rimanere fisicamente attivi ad un livello tale da mantenere la capacità fisica. Si raccomanda di eseguire il programma di esercizi aerobici e di potenziamento muscolare come parte di un programma di riabilitazione cardiologica, sia come intervento basato solo sull'esercizio fisico che in combinazione con altri interventi sullo stile di vita. L'intervento basato sull'esercizio viene eseguito in un ambiente ospedaliero supervisionato o in combinazione con alcune sessioni domiciliari. Dopo il completamento di un programma di exCR, alle persone dovrebbe essere raccomandato di continuare l'attività fisica per tutta la vita per mantenere il miglioramento della capacità fisica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "demenza",
    label: "Demenza",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Demenza. Indicazione: Indicata come parte centrale del trattamento e della cura, all'interno di interventi multimodali centrati sulla persona. Per le persone fragili, considerare come parte di un approccio più completo.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare la funzione cognitiva e le attività della vita quotidiana (ADL). L'evidenza per la funzione cognitiva è limitata e variabile; un grande RCT ben condotto ha riscontrato un piccolo effetto negativo in anziani che vivono a domicilio. Nessuna evidenza chiara per la riduzione dei sintomi neuropsichiatrici nel complesso, sebbene singoli studi (anche su residenti in case di cura) abbiano mostrato riduzione dell'apatia. La maggior parte degli studi: campioni piccoli, bassa qualità metodologica, follow-up limitato, alta eterogeneità.\n\nIndicazioni specifiche: Può richiedere aiuto nell'organizzazione dell'esercizio/supporto per partecipare. I familiari sono importanti ma possono necessitare a loro volta di assistenza per il carico assistenziale. Il dolore è comune negli anziani, anche con demenza, e può essere difficile da diagnosticare (sintomi atipici, es. passività, mancanza di iniziativa, possono segnalare dolore). Particolarmente importante per chi ha mobilità limitata e aumentato rischio di caduta.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare la funzione cognitiva e le attività della vita quotidiana (ADL). L'evidenza per la funzione cognitiva è limitata e variabile; un grande RCT ben condotto ha riscontrato un piccolo effetto negativo in anziani che vivono a domicilio. Nessuna evidenza chiara per la riduzione dei sintomi neuropsichiatrici nel complesso, sebbene singoli studi (anche su residenti in case di cura) abbiano mostrato riduzione dell'apatia. La maggior parte degli studi: campioni piccoli, bassa qualità metodologica, follow-up limitato, alta eterogeneità.\n\nIndicazioni specifiche: Può richiedere aiuto nell'organizzazione dell'esercizio/supporto per partecipare. I familiari sono importanti ma possono necessitare a loro volta di assistenza per il carico assistenziale. Il dolore è comune negli anziani, anche con demenza, e può essere difficile da diagnosticare (sintomi atipici, es. passività, mancanza di iniziativa, possono segnalare dolore). Particolarmente importante per chi ha mobilità limitata e aumentato rischio di caduta.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare la funzione cognitiva e le attività della vita quotidiana (ADL). L'evidenza per la funzione cognitiva è limitata e variabile; un grande RCT ben condotto ha riscontrato un piccolo effetto negativo in anziani che vivono a domicilio. Nessuna evidenza chiara per la riduzione dei sintomi neuropsichiatrici nel complesso, sebbene singoli studi (anche su residenti in case di cura) abbiano mostrato riduzione dell'apatia. La maggior parte degli studi: campioni piccoli, bassa qualità metodologica, follow-up limitato, alta eterogeneità.\n\nIndicazioni specifiche: Può richiedere aiuto nell'organizzazione dell'esercizio/supporto per partecipare. I familiari sono importanti ma possono necessitare a loro volta di assistenza per il carico assistenziale. Il dolore è comune negli anziani, anche con demenza, e può essere difficile da diagnosticare (sintomi atipici, es. passività, mancanza di iniziativa, possono segnalare dolore). Particolarmente importante per chi ha mobilità limitata e aumentato rischio di caduta.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "depressione",
    label: "Depressione",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Depressione. Indicazione: Depressione lieve-moderata: indicata insieme ad altre modifiche dello stile di vita, indipendentemente da trattamento farmacologico o psicoterapia. Depressione severa: indicata insieme ad altri trattamenti (farmacologico e/o psicoterapia).",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Diminuisce i sintomi depressivi, migliora qualità di vita e capacità aerobica, generalmente con attività 3 volte/settimana per 8-12 settimane (dimensioni dell'effetto 0.39-1.24). Grande beneficio antidepressivo dopo >=3 sessioni settimanali per 5-8 settimane, ancora maggiore a 9-12 settimane. Evidenza mista sull'importanza di intensità/tipo (aerobica vs rinforzo); più studi supportano l'aerobica, rendendo quell'evidenza più solida. L'effetto antidepressivo è comparabile al trattamento psicologico/farmacologico nella depressione lieve-moderata. Come complemento ai farmaci: effetto aggiuntivo moderato (tendenza alla significatività). Pochi studi di follow-up a lungo termine.\n\nIndicazioni specifiche: Preferibilmente guidata da un istruttore. Depressione lieve/moderata: l'attività può alleviare i sintomi con efficacia paragonabile agli antidepressivi o alla CBT. Depressione severa: l'attività dovrebbe procedere in parallelo ad altri trattamenti (farmacologico/psicoterapia). Può richiedere più supporto per cambiare comportamento, come per altre diagnosi di salute mentale. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Diminuisce i sintomi depressivi, migliora qualità di vita e capacità aerobica, generalmente con attività 3 volte/settimana per 8-12 settimane (dimensioni dell'effetto 0.39-1.24). Grande beneficio antidepressivo dopo >=3 sessioni settimanali per 5-8 settimane, ancora maggiore a 9-12 settimane. Evidenza mista sull'importanza di intensità/tipo (aerobica vs rinforzo); più studi supportano l'aerobica, rendendo quell'evidenza più solida. L'effetto antidepressivo è comparabile al trattamento psicologico/farmacologico nella depressione lieve-moderata. Come complemento ai farmaci: effetto aggiuntivo moderato (tendenza alla significatività). Pochi studi di follow-up a lungo termine.\n\nIndicazioni specifiche: Preferibilmente guidata da un istruttore. Depressione lieve/moderata: l'attività può alleviare i sintomi con efficacia paragonabile agli antidepressivi o alla CBT. Depressione severa: l'attività dovrebbe procedere in parallelo ad altri trattamenti (farmacologico/psicoterapia). Può richiedere più supporto per cambiare comportamento, come per altre diagnosi di salute mentale. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Se si scelgono solo esercizi di rinforzo muscolare, aggiungere attività aerobica. Se si scelgono solo attività aerobiche, aggiungere rinforzo muscolare, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Diminuisce i sintomi depressivi, migliora qualità di vita e capacità aerobica, generalmente con attività 3 volte/settimana per 8-12 settimane (dimensioni dell'effetto 0.39-1.24). Grande beneficio antidepressivo dopo >=3 sessioni settimanali per 5-8 settimane, ancora maggiore a 9-12 settimane. Evidenza mista sull'importanza di intensità/tipo (aerobica vs rinforzo); più studi supportano l'aerobica, rendendo quell'evidenza più solida. L'effetto antidepressivo è comparabile al trattamento psicologico/farmacologico nella depressione lieve-moderata. Come complemento ai farmaci: effetto aggiuntivo moderato (tendenza alla significatività). Pochi studi di follow-up a lungo termine.\n\nIndicazioni specifiche: Preferibilmente guidata da un istruttore. Depressione lieve/moderata: l'attività può alleviare i sintomi con efficacia paragonabile agli antidepressivi o alla CBT. Depressione severa: l'attività dovrebbe procedere in parallelo ad altri trattamenti (farmacologico/psicoterapia). Può richiedere più supporto per cambiare comportamento, come per altre diagnosi di salute mentale. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "diabete-di-tipo-1",
    label: "Diabete di tipo 1",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Diabete di tipo 1. Indicazione: Indicata insieme ad altre modifiche dello stile di vita e al trattamento insulinico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Evidenza con certezza molto bassa (+) che l'attività regolare migliori il controllo glicemico (riduzione HbA1c) o riduca le complicanze microvascolari, con aumentato rischio di danno da ipoglicemia. Benefici ben consolidati: miglioramento di qualità di vita e capacità aerobica. Aerobica+rinforzo non ha mostrato effetto su HbA1c ma piccolo effetto sulla glicemia automonitorata e riduzione della circonferenza vita. Aerobica perlopiù a intervalli vigorosi (10x[60s 90%Wmax, 60s 50W]) o continua (30 min, 70% VO2max), moderata-vigorosa, >=30 min, 3 volte/settimana. Rinforzo: perlopiù 3 serie di 8RM di diversi esercizi, riposo 90s, ~45 min, 1 volta/settimana.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, da parte di personale formato come un fisioterapista. Misurare la glicemia prima/dopo l'esercizio. Riduzione della dose insulinica e assunzione di carboidrati prima/durante/dopo per ridurre il rischio di ipoglicemia; il monitoraggio continuo permette controlli in tempo reale durante l'esercizio. Massimo 2 giorni tra le sessioni di esercizio per un controllo glicemico ottimale. Alto rischio cardiovascolare: iniziare l'aerobica a livello lieve-moderato, aumentando intensità/durata dopo alcune settimane. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Scarpe con assorbimento degli urti raccomandate; controllare regolarmente i piedi per ferite, specialmente in caso di neuropatia periferica.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 2-4 serie, 2-3 giorni/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Evidenza con certezza molto bassa (+) che l'attività regolare migliori il controllo glicemico (riduzione HbA1c) o riduca le complicanze microvascolari, con aumentato rischio di danno da ipoglicemia. Benefici ben consolidati: miglioramento di qualità di vita e capacità aerobica. Aerobica+rinforzo non ha mostrato effetto su HbA1c ma piccolo effetto sulla glicemia automonitorata e riduzione della circonferenza vita. Aerobica perlopiù a intervalli vigorosi (10x[60s 90%Wmax, 60s 50W]) o continua (30 min, 70% VO2max), moderata-vigorosa, >=30 min, 3 volte/settimana. Rinforzo: perlopiù 3 serie di 8RM di diversi esercizi, riposo 90s, ~45 min, 1 volta/settimana.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, da parte di personale formato come un fisioterapista. Misurare la glicemia prima/dopo l'esercizio. Riduzione della dose insulinica e assunzione di carboidrati prima/durante/dopo per ridurre il rischio di ipoglicemia; il monitoraggio continuo permette controlli in tempo reale durante l'esercizio. Massimo 2 giorni tra le sessioni di esercizio per un controllo glicemico ottimale. Alto rischio cardiovascolare: iniziare l'aerobica a livello lieve-moderato, aumentando intensità/durata dopo alcune settimane. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Scarpe con assorbimento degli urti raccomandate; controllare regolarmente i piedi per ferite, specialmente in caso di neuropatia periferica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Evidenza con certezza molto bassa (+) che l'attività regolare migliori il controllo glicemico (riduzione HbA1c) o riduca le complicanze microvascolari, con aumentato rischio di danno da ipoglicemia. Benefici ben consolidati: miglioramento di qualità di vita e capacità aerobica. Aerobica+rinforzo non ha mostrato effetto su HbA1c ma piccolo effetto sulla glicemia automonitorata e riduzione della circonferenza vita. Aerobica perlopiù a intervalli vigorosi (10x[60s 90%Wmax, 60s 50W]) o continua (30 min, 70% VO2max), moderata-vigorosa, >=30 min, 3 volte/settimana. Rinforzo: perlopiù 3 serie di 8RM di diversi esercizi, riposo 90s, ~45 min, 1 volta/settimana.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, da parte di personale formato come un fisioterapista. Misurare la glicemia prima/dopo l'esercizio. Riduzione della dose insulinica e assunzione di carboidrati prima/durante/dopo per ridurre il rischio di ipoglicemia; il monitoraggio continuo permette controlli in tempo reale durante l'esercizio. Massimo 2 giorni tra le sessioni di esercizio per un controllo glicemico ottimale. Alto rischio cardiovascolare: iniziare l'aerobica a livello lieve-moderato, aumentando intensità/durata dopo alcune settimane. Trattare in modo ottimale eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Scarpe con assorbimento degli urti raccomandate; controllare regolarmente i piedi per ferite, specialmente in caso di neuropatia periferica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "diabete-di-tipo-2",
    label: "Diabete di tipo 2",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Diabete di tipo 2. Indicazione: Nel diabete di tipo 2, l'attività fisica è fortemente indicata insieme ad altre modifiche dello stile di vita e in combinazione con il trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 minuti 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Ci sono evidenze certe che l'attività fisica possa migliorare il controllo glicemico (ridurre HbA1c) nel tempo. L'attività fisica regolare è efficace anche su altri fattori di rischio come il profilo lipidico, la pressione arteriosa, la funzione vascolare e la capacità aerobica. La maggiore riduzione del rischio di complicanze si è riscontrata quando un individuo sedentario diventa fisicamente attivo. La probabilità di raggiungere un controllo glicemico adeguato solo attraverso l'attività fisica è maggiore nei soggetti con diabete di breve durata rispetto agli individui con malattia di maggiore durata. Una riduzione del glucosio ematico misurata come variazione dell'HbA1c pari a 6-9 mmol/mol è clinicamente rilevante. L'attività fisica con dose ed intensità elevate ha mostrato effetti maggiori sul controllo glicemico in confronto a dosi ed intensità minori. La modalità di esercizio che è risultata più efficace è stata una combinazione di attività aerobica e di rinforzo muscolare, seguita dall'attività fisica aerobica ad intensità vigorosa. Anche l'attività aerobica e di rinforzo muscolare ad intensità da lieve a moderata ha mostrato dei benefici, ma non nella stessa entità rispetto all'intensità vigorosa.\n\nIndicazioni specifiche: Gli individui con alto rischio di patologia cardiovascolare dovrebbero iniziare la pratica di attività aerobica con un'intensità da lieve a moderata. Sia l'intensità che la durata possono essere aumentate successivamente. L'effetto dell'attività fisica è probabilmente maggiore per elevate dosi e intensità di attività fisica aerobica. L'effetto dell'attività fisica sull'HbA1c è paragonabile a quello di molti farmaci ipoglicemizzanti orali. Una combinazione di attività fisica aerobica e di rinforzo muscolare ha un effetto maggiore. Per un controllo glicemico ottimale dovrebbero intercorrere al massimo due giorni tra una sessione di esercizio e la successiva. La glicemia dovrebbe essere misurata prima e dopo l'esercizio. Per ridurre il rischio di ipoglicemia indotta dall'esercizio, dovrebbe essere ridotta la dose di insulina e andrebbero somministrati carboidrati prima, durante e dopo l'esercizio. Gli individui con diabete di tipo 2 e concomitante patologia cardiovascolare o segni relativi, dovrebbero essere trattati per la malattia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Ci sono evidenze certe che l'attività fisica possa migliorare il controllo glicemico (ridurre HbA1c) nel tempo. L'attività fisica regolare è efficace anche su altri fattori di rischio come il profilo lipidico, la pressione arteriosa, la funzione vascolare e la capacità aerobica. La maggiore riduzione del rischio di complicanze si è riscontrata quando un individuo sedentario diventa fisicamente attivo. La probabilità di raggiungere un controllo glicemico adeguato solo attraverso l'attività fisica è maggiore nei soggetti con diabete di breve durata rispetto agli individui con malattia di maggiore durata. Una riduzione del glucosio ematico misurata come variazione dell'HbA1c pari a 6-9 mmol/mol è clinicamente rilevante. L'attività fisica con dose ed intensità elevate ha mostrato effetti maggiori sul controllo glicemico in confronto a dosi ed intensità minori. La modalità di esercizio che è risultata più efficace è stata una combinazione di attività aerobica e di rinforzo muscolare, seguita dall'attività fisica aerobica ad intensità vigorosa. Anche l'attività aerobica e di rinforzo muscolare ad intensità da lieve a moderata ha mostrato dei benefici, ma non nella stessa entità rispetto all'intensità vigorosa.\n\nIndicazioni specifiche: Gli individui con alto rischio di patologia cardiovascolare dovrebbero iniziare la pratica di attività aerobica con un'intensità da lieve a moderata. Sia l'intensità che la durata possono essere aumentate successivamente. L'effetto dell'attività fisica è probabilmente maggiore per elevate dosi e intensità di attività fisica aerobica. L'effetto dell'attività fisica sull'HbA1c è paragonabile a quello di molti farmaci ipoglicemizzanti orali. Una combinazione di attività fisica aerobica e di rinforzo muscolare ha un effetto maggiore. Per un controllo glicemico ottimale dovrebbero intercorrere al massimo due giorni tra una sessione di esercizio e la successiva. La glicemia dovrebbe essere misurata prima e dopo l'esercizio. Per ridurre il rischio di ipoglicemia indotta dall'esercizio, dovrebbe essere ridotta la dose di insulina e andrebbero somministrati carboidrati prima, durante e dopo l'esercizio. Gli individui con diabete di tipo 2 e concomitante patologia cardiovascolare o segni relativi, dovrebbero essere trattati per la malattia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "L'attività fisica raccomandata nel diabete di tipo 2 soddisfa le raccomandazioni generali mondiali sull'attività fisica per la salute e non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Ci sono evidenze certe che l'attività fisica possa migliorare il controllo glicemico (ridurre HbA1c) nel tempo. L'attività fisica regolare è efficace anche su altri fattori di rischio come il profilo lipidico, la pressione arteriosa, la funzione vascolare e la capacità aerobica. La maggiore riduzione del rischio di complicanze si è riscontrata quando un individuo sedentario diventa fisicamente attivo. La probabilità di raggiungere un controllo glicemico adeguato solo attraverso l'attività fisica è maggiore nei soggetti con diabete di breve durata rispetto agli individui con malattia di maggiore durata. Una riduzione del glucosio ematico misurata come variazione dell'HbA1c pari a 6-9 mmol/mol è clinicamente rilevante. L'attività fisica con dose ed intensità elevate ha mostrato effetti maggiori sul controllo glicemico in confronto a dosi ed intensità minori. La modalità di esercizio che è risultata più efficace è stata una combinazione di attività aerobica e di rinforzo muscolare, seguita dall'attività fisica aerobica ad intensità vigorosa. Anche l'attività aerobica e di rinforzo muscolare ad intensità da lieve a moderata ha mostrato dei benefici, ma non nella stessa entità rispetto all'intensità vigorosa.\n\nIndicazioni specifiche: Gli individui con alto rischio di patologia cardiovascolare dovrebbero iniziare la pratica di attività aerobica con un'intensità da lieve a moderata. Sia l'intensità che la durata possono essere aumentate successivamente. L'effetto dell'attività fisica è probabilmente maggiore per elevate dosi e intensità di attività fisica aerobica. L'effetto dell'attività fisica sull'HbA1c è paragonabile a quello di molti farmaci ipoglicemizzanti orali. Una combinazione di attività fisica aerobica e di rinforzo muscolare ha un effetto maggiore. Per un controllo glicemico ottimale dovrebbero intercorrere al massimo due giorni tra una sessione di esercizio e la successiva. La glicemia dovrebbe essere misurata prima e dopo l'esercizio. Per ridurre il rischio di ipoglicemia indotta dall'esercizio, dovrebbe essere ridotta la dose di insulina e andrebbero somministrati carboidrati prima, durante e dopo l'esercizio. Gli individui con diabete di tipo 2 e concomitante patologia cardiovascolare o segni relativi, dovrebbero essere trattati per la malattia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "fibromialgia",
    label: "Fibromialgia",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Fibromialgia. Indicazione: Indicata insieme ad altre modifiche dello stile di vita, educazione e trattamento farmacologico. Si raccomanda un approccio multimodale.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata (può progredire verso Borg RPE 16 se il dolore lo permette), 20-45 min/sessione min/sett., 2-3 giorni/sett. — oppure — Vigorosa, 20-45 min/sessione min/sett., 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Diminuisce dolore e fatica; migliora qualità di vita, forza muscolare, funzione fisica. La combinazione aerobica+rinforzo è la più efficace; entrambe da sole sono comunque benefiche. Sessioni aerobica+rinforzo: intensità lieve-vigorosa (40-85% HRmax, 40-80% 1RM), 45-90 minuti, 2-3 volte/settimana, 5-26 settimane. Solo aerobica: lieve-vigorosa (60-80% VO2max), 40-65 minuti, 2-3 volte/settimana, 6-24 settimane. Solo rinforzo: 4-20 ripetizioni, progressione 40-85% 1RM, 2-3 volte/settimana, 3-21 settimane.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale similare. Necessita di tempi di recupero più lunghi rispetto alle persone sane - attività aerobica moderata-vigorosa non raccomandata più di 2-3 giorni/settimana. Esercizi sopra la testa con le braccia ed esercizi eccentrici dovrebbero essere eseguiti con cautela. Aggiungere educazione sulla gestione del dolore per un miglior alleviamento dei sintomi. Dolore/fatica/disabilità più severi: iniziare a un livello leggero e confortevole adattato alla persona; l'obiettivo è aumentare la tolleranza tramite un incremento progressivo della dose. Durata raccomandata 30 minuti, divisibile in sessioni da 15 minuti, 3-5 volte/settimana - la regolarità conta più dell'intensità in questa fase. Attività iniziali adatte: esercizi in acqua a intensità lieve-moderata, camminata, camminata nordica. Introdurre attività aerobica moderata/vigorosa quando la persona riesce a gestire quel livello. Programma di rinforzo muscolare personalizzato per migliorare forza/resistenza; una volta diminuita la gravità dei sintomi, la persona può seguire la raccomandazione standard.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "5-10 esercizi, 15-20 (moderata) o 5-10 (vigorosa, aumentando la resistenza nell'arco di intervalli di 3-4 settimane) ripetizioni, 2-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Diminuisce dolore e fatica; migliora qualità di vita, forza muscolare, funzione fisica. La combinazione aerobica+rinforzo è la più efficace; entrambe da sole sono comunque benefiche. Sessioni aerobica+rinforzo: intensità lieve-vigorosa (40-85% HRmax, 40-80% 1RM), 45-90 minuti, 2-3 volte/settimana, 5-26 settimane. Solo aerobica: lieve-vigorosa (60-80% VO2max), 40-65 minuti, 2-3 volte/settimana, 6-24 settimane. Solo rinforzo: 4-20 ripetizioni, progressione 40-85% 1RM, 2-3 volte/settimana, 3-21 settimane.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale similare. Necessita di tempi di recupero più lunghi rispetto alle persone sane - attività aerobica moderata-vigorosa non raccomandata più di 2-3 giorni/settimana. Esercizi sopra la testa con le braccia ed esercizi eccentrici dovrebbero essere eseguiti con cautela. Aggiungere educazione sulla gestione del dolore per un miglior alleviamento dei sintomi. Dolore/fatica/disabilità più severi: iniziare a un livello leggero e confortevole adattato alla persona; l'obiettivo è aumentare la tolleranza tramite un incremento progressivo della dose. Durata raccomandata 30 minuti, divisibile in sessioni da 15 minuti, 3-5 volte/settimana - la regolarità conta più dell'intensità in questa fase. Attività iniziali adatte: esercizi in acqua a intensità lieve-moderata, camminata, camminata nordica. Introdurre attività aerobica moderata/vigorosa quando la persona riesce a gestire quel livello. Programma di rinforzo muscolare personalizzato per migliorare forza/resistenza; una volta diminuita la gravità dei sintomi, la persona può seguire la raccomandazione standard.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Discutere con la persona la possibilità di aggiungere ulteriore attività aerobica e di rinforzo muscolare.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Diminuisce dolore e fatica; migliora qualità di vita, forza muscolare, funzione fisica. La combinazione aerobica+rinforzo è la più efficace; entrambe da sole sono comunque benefiche. Sessioni aerobica+rinforzo: intensità lieve-vigorosa (40-85% HRmax, 40-80% 1RM), 45-90 minuti, 2-3 volte/settimana, 5-26 settimane. Solo aerobica: lieve-vigorosa (60-80% VO2max), 40-65 minuti, 2-3 volte/settimana, 6-24 settimane. Solo rinforzo: 4-20 ripetizioni, progressione 40-85% 1RM, 2-3 volte/settimana, 3-21 settimane.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale similare. Necessita di tempi di recupero più lunghi rispetto alle persone sane - attività aerobica moderata-vigorosa non raccomandata più di 2-3 giorni/settimana. Esercizi sopra la testa con le braccia ed esercizi eccentrici dovrebbero essere eseguiti con cautela. Aggiungere educazione sulla gestione del dolore per un miglior alleviamento dei sintomi. Dolore/fatica/disabilità più severi: iniziare a un livello leggero e confortevole adattato alla persona; l'obiettivo è aumentare la tolleranza tramite un incremento progressivo della dose. Durata raccomandata 30 minuti, divisibile in sessioni da 15 minuti, 3-5 volte/settimana - la regolarità conta più dell'intensità in questa fase. Attività iniziali adatte: esercizi in acqua a intensità lieve-moderata, camminata, camminata nordica. Introdurre attività aerobica moderata/vigorosa quando la persona riesce a gestire quel livello. Programma di rinforzo muscolare personalizzato per migliorare forza/resistenza; una volta diminuita la gravità dei sintomi, la persona può seguire la raccomandazione standard.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "insufficienza-cardiaca-cronica",
    label: "Insufficienza cardiaca cronica",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Insufficienza cardiaca cronica. Indicazione: Indicata insieme ad altri interventi sullo stile di vita, educazione e trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata+Vigorosa combinata, Almeno 90 (es. 30-60 min/sessione) min/sett., 3-5 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce i ricoveri ospedalieri, migliora la funzione miocardica, la qualità di vita correlata alla salute, la capacità aerobica e la forza muscolare dopo riabilitazione cardiologica basata sull'esercizio (exCR: aerobica e/o rinforzo). Aerobica tipicamente continua/a intervalli su cicloergometro o tapis roulant, o aerobica/circuito, 60-85% VO2max, 30-60 minuti, 3-5 volte/settimana, 3-6 mesi. Rinforzo: 8-10 esercizi, 40-80% 1RM, 10-15 ripetizioni, 1-3 serie, 2-3 volte/settimana. La combinazione aerobica+rinforzo migliora il VO2max più dell'aerobica da sola; l'HIIT migliora ulteriormente il VO2max rispetto all'allenamento continuo moderato, sebbene questo si attenui in protocolli isocalorici. L'allenamento dei muscoli respiratori aumenta la forza inspiratoria. L'allenamento con esercizio: nessuno o piccolo effetto sulla mortalità per tutte le causa a <=12 mesi di follow-up (RR 0.89, ++), possibile riduzione a >12 mesi (RR 0.88, ++++); una recente meta-analisi su dati individuali non ha trovato effetto significativo su mortalità/ricoveri (stime incerte).\n\nIndicazioni specifiche: Il dosaggio deve sempre essere preceduto da un test di screening pre-esercizio da parte di un professionista qualificato per valutare capacità aerobica e forza muscolare. Per chi assume beta-bloccanti, usare la scala Borg RPE 6-20 o la riserva di frequenza cardiaca da un test al cicloergometro limitato dai sintomi, piuttosto che la frequenza cardiaca assoluta; la pressione sistolica a riposo può essere inferiore a 100 mmHg con farmaci che agiscono sul sistema renina-angiotensina-aldosterone. Prestare attenzione a risposta della frequenza cardiaca, reazioni pressorie anomale, aritmie, vertigini, dispnea severa durante l'esercizio (vedi controindicazioni nell'introduzione). Bassa capacità aerobica: iniziare con allenamento muscolare periferico (alto carico relativo, basso impatto sulla circolazione centrale), poi introdurre allenamento aerobico dei grandi gruppi muscolari dopo alcuni mesi. Spesso necessita di supporto/incoraggiamento per iniziare, aumentare e mantenere i livelli di attività. Può essere svolta vantaggiosamente come parte di un programma di riabilitazione cardiologica (da solo o combinato con altri interventi sullo stile di vita), supervisionato in ospedale, a domicilio, o combinato. Dopo il completamento dell'exCR, continuare l'attività per tutta la vita per mantenere la forma fisica.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 10-15 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce i ricoveri ospedalieri, migliora la funzione miocardica, la qualità di vita correlata alla salute, la capacità aerobica e la forza muscolare dopo riabilitazione cardiologica basata sull'esercizio (exCR: aerobica e/o rinforzo). Aerobica tipicamente continua/a intervalli su cicloergometro o tapis roulant, o aerobica/circuito, 60-85% VO2max, 30-60 minuti, 3-5 volte/settimana, 3-6 mesi. Rinforzo: 8-10 esercizi, 40-80% 1RM, 10-15 ripetizioni, 1-3 serie, 2-3 volte/settimana. La combinazione aerobica+rinforzo migliora il VO2max più dell'aerobica da sola; l'HIIT migliora ulteriormente il VO2max rispetto all'allenamento continuo moderato, sebbene questo si attenui in protocolli isocalorici. L'allenamento dei muscoli respiratori aumenta la forza inspiratoria. L'allenamento con esercizio: nessuno o piccolo effetto sulla mortalità per tutte le causa a <=12 mesi di follow-up (RR 0.89, ++), possibile riduzione a >12 mesi (RR 0.88, ++++); una recente meta-analisi su dati individuali non ha trovato effetto significativo su mortalità/ricoveri (stime incerte).\n\nIndicazioni specifiche: Il dosaggio deve sempre essere preceduto da un test di screening pre-esercizio da parte di un professionista qualificato per valutare capacità aerobica e forza muscolare. Per chi assume beta-bloccanti, usare la scala Borg RPE 6-20 o la riserva di frequenza cardiaca da un test al cicloergometro limitato dai sintomi, piuttosto che la frequenza cardiaca assoluta; la pressione sistolica a riposo può essere inferiore a 100 mmHg con farmaci che agiscono sul sistema renina-angiotensina-aldosterone. Prestare attenzione a risposta della frequenza cardiaca, reazioni pressorie anomale, aritmie, vertigini, dispnea severa durante l'esercizio (vedi controindicazioni nell'introduzione). Bassa capacità aerobica: iniziare con allenamento muscolare periferico (alto carico relativo, basso impatto sulla circolazione centrale), poi introdurre allenamento aerobico dei grandi gruppi muscolari dopo alcuni mesi. Spesso necessita di supporto/incoraggiamento per iniziare, aumentare e mantenere i livelli di attività. Può essere svolta vantaggiosamente come parte di un programma di riabilitazione cardiologica (da solo o combinato con altri interventi sullo stile di vita), supervisionato in ospedale, a domicilio, o combinato. Dopo il completamento dell'exCR, continuare l'attività per tutta la vita per mantenere la forma fisica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce i ricoveri ospedalieri, migliora la funzione miocardica, la qualità di vita correlata alla salute, la capacità aerobica e la forza muscolare dopo riabilitazione cardiologica basata sull'esercizio (exCR: aerobica e/o rinforzo). Aerobica tipicamente continua/a intervalli su cicloergometro o tapis roulant, o aerobica/circuito, 60-85% VO2max, 30-60 minuti, 3-5 volte/settimana, 3-6 mesi. Rinforzo: 8-10 esercizi, 40-80% 1RM, 10-15 ripetizioni, 1-3 serie, 2-3 volte/settimana. La combinazione aerobica+rinforzo migliora il VO2max più dell'aerobica da sola; l'HIIT migliora ulteriormente il VO2max rispetto all'allenamento continuo moderato, sebbene questo si attenui in protocolli isocalorici. L'allenamento dei muscoli respiratori aumenta la forza inspiratoria. L'allenamento con esercizio: nessuno o piccolo effetto sulla mortalità per tutte le causa a <=12 mesi di follow-up (RR 0.89, ++), possibile riduzione a >12 mesi (RR 0.88, ++++); una recente meta-analisi su dati individuali non ha trovato effetto significativo su mortalità/ricoveri (stime incerte).\n\nIndicazioni specifiche: Il dosaggio deve sempre essere preceduto da un test di screening pre-esercizio da parte di un professionista qualificato per valutare capacità aerobica e forza muscolare. Per chi assume beta-bloccanti, usare la scala Borg RPE 6-20 o la riserva di frequenza cardiaca da un test al cicloergometro limitato dai sintomi, piuttosto che la frequenza cardiaca assoluta; la pressione sistolica a riposo può essere inferiore a 100 mmHg con farmaci che agiscono sul sistema renina-angiotensina-aldosterone. Prestare attenzione a risposta della frequenza cardiaca, reazioni pressorie anomale, aritmie, vertigini, dispnea severa durante l'esercizio (vedi controindicazioni nell'introduzione). Bassa capacità aerobica: iniziare con allenamento muscolare periferico (alto carico relativo, basso impatto sulla circolazione centrale), poi introdurre allenamento aerobico dei grandi gruppi muscolari dopo alcuni mesi. Spesso necessita di supporto/incoraggiamento per iniziare, aumentare e mantenere i livelli di attività. Può essere svolta vantaggiosamente come parte di un programma di riabilitazione cardiologica (da solo o combinato con altri interventi sullo stile di vita), supervisionato in ospedale, a domicilio, o combinato. Dopo il completamento dell'exCR, continuare l'attività per tutta la vita per mantenere la forma fisica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "ipertensione",
    label: "Ipertensione",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Ipertensione. Indicazione: Nel Grado 1, una pressione di 140-159/90-99 mmHg, con un rischio cardiovascolare da lieve a moderato, l'attività fisica è indicata insieme ad altre modifiche dello stile di vita come trattamento di prima linea. Nel Grado 2, una pressione di 160-179/100-109 mmHg e 1-2 fattori di rischio per malattia cardiovascolare, l'attività fisica è indicata insieme ad altre modifiche dello stile di vita o più comunemente insieme al trattamento farmacologico, per il raggiungimento della normotensione. Nel Grado 3, una pressione arteriosa > 180/> 110 mmHg, l'attività fisica individualizzata è indicata, insieme ad altre modifiche dello stile di vita, come trattamento aggiuntivo alla terapia farmacologica, con alcune possibili eccezioni per gli sport agonistici.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 minuti 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Negli individui con ipertensione (BP ≥140 mmHg), la pressione sistolica diminuisce come effetto dell'attività fisica. La maggiore riduzione della pressione sanguigna è stata riscontrata quando l'allenamento consisteva di attività aerobica e di rinforzo muscolare dinamico in combinazione (effetto medio: -13,5 mmHg) e attività fisica aerobica di intensità moderata (effetto medio: -9,5 mmHg) per almeno 4 settimane. L'effetto dell'attività fisica era dello stesso livello dell'effetto del trattamento farmacologico. Rispetto a una precedente meta-analisi, l'inclusione di più RCT ha contribuito a un maggiore effetto dell'attività di rinforzo muscolare e alla conclusione che una combinazione di attività aerobica e di rinforzo muscolare dinamico era più efficace di ogni tipo di attività presa singolarmente. Le limitazioni sono state la mancanza di cieco, il campione limitato, l'eterogeneità dei bracci di controllo e la varietà dei metodi.\n\nIndicazioni specifiche: Al fine di valutare l'intensità dell'attività fisica aerobica in presenza di un trattamento con beta-bloccanti, dovrebbe essere impiegata la scala RPE Borg anziché la misurazione della frequenza cardiaca, a causa della deviazione nella relazione tra la frequenza cardiaca e lo sforzo. Il contatto con un fisioterapista o un altro professionista sanitario con conoscenze adeguate è raccomandato per i soggetti con concomitante malattia coronarica, previa valutazione medica. Se viene scelto l'allenamento isometrico: 4 contrazioni di 2 minuti al 20-50% della contrazione isometrica massima, 3 volte la settimana. In alcuni casi possono essere applicate restrizioni all'attività fisica, ad esempio per gli sport agonistici, a seconda del profilo di rischio totale, della presenza di danni agli organi bersaglio e del livello di controllo della pressione arteriosa. Gli individui con ipertensione e concomitante malattia cardiovascolare o segni di essa come dispnea, dolore toracico o aritmia, dovrebbero ricevere un trattamento ottimizzato per la patologia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 2-4 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Negli individui con ipertensione (BP ≥140 mmHg), la pressione sistolica diminuisce come effetto dell'attività fisica. La maggiore riduzione della pressione sanguigna è stata riscontrata quando l'allenamento consisteva di attività aerobica e di rinforzo muscolare dinamico in combinazione (effetto medio: -13,5 mmHg) e attività fisica aerobica di intensità moderata (effetto medio: -9,5 mmHg) per almeno 4 settimane. L'effetto dell'attività fisica era dello stesso livello dell'effetto del trattamento farmacologico. Rispetto a una precedente meta-analisi, l'inclusione di più RCT ha contribuito a un maggiore effetto dell'attività di rinforzo muscolare e alla conclusione che una combinazione di attività aerobica e di rinforzo muscolare dinamico era più efficace di ogni tipo di attività presa singolarmente. Le limitazioni sono state la mancanza di cieco, il campione limitato, l'eterogeneità dei bracci di controllo e la varietà dei metodi.\n\nIndicazioni specifiche: Al fine di valutare l'intensità dell'attività fisica aerobica in presenza di un trattamento con beta-bloccanti, dovrebbe essere impiegata la scala RPE Borg anziché la misurazione della frequenza cardiaca, a causa della deviazione nella relazione tra la frequenza cardiaca e lo sforzo. Il contatto con un fisioterapista o un altro professionista sanitario con conoscenze adeguate è raccomandato per i soggetti con concomitante malattia coronarica, previa valutazione medica. Se viene scelto l'allenamento isometrico: 4 contrazioni di 2 minuti al 20-50% della contrazione isometrica massima, 3 volte la settimana. In alcuni casi possono essere applicate restrizioni all'attività fisica, ad esempio per gli sport agonistici, a seconda del profilo di rischio totale, della presenza di danni agli organi bersaglio e del livello di controllo della pressione arteriosa. Gli individui con ipertensione e concomitante malattia cardiovascolare o segni di essa come dispnea, dolore toracico o aritmia, dovrebbero ricevere un trattamento ottimizzato per la patologia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "L'attività fisica raccomandata nell'ipertensione soddisfa le raccomandazioni generali mondiali sull'attività fisica per la salute e non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Negli individui con ipertensione (BP ≥140 mmHg), la pressione sistolica diminuisce come effetto dell'attività fisica. La maggiore riduzione della pressione sanguigna è stata riscontrata quando l'allenamento consisteva di attività aerobica e di rinforzo muscolare dinamico in combinazione (effetto medio: -13,5 mmHg) e attività fisica aerobica di intensità moderata (effetto medio: -9,5 mmHg) per almeno 4 settimane. L'effetto dell'attività fisica era dello stesso livello dell'effetto del trattamento farmacologico. Rispetto a una precedente meta-analisi, l'inclusione di più RCT ha contribuito a un maggiore effetto dell'attività di rinforzo muscolare e alla conclusione che una combinazione di attività aerobica e di rinforzo muscolare dinamico era più efficace di ogni tipo di attività presa singolarmente. Le limitazioni sono state la mancanza di cieco, il campione limitato, l'eterogeneità dei bracci di controllo e la varietà dei metodi.\n\nIndicazioni specifiche: Al fine di valutare l'intensità dell'attività fisica aerobica in presenza di un trattamento con beta-bloccanti, dovrebbe essere impiegata la scala RPE Borg anziché la misurazione della frequenza cardiaca, a causa della deviazione nella relazione tra la frequenza cardiaca e lo sforzo. Il contatto con un fisioterapista o un altro professionista sanitario con conoscenze adeguate è raccomandato per i soggetti con concomitante malattia coronarica, previa valutazione medica. Se viene scelto l'allenamento isometrico: 4 contrazioni di 2 minuti al 20-50% della contrazione isometrica massima, 3 volte la settimana. In alcuni casi possono essere applicate restrizioni all'attività fisica, ad esempio per gli sport agonistici, a seconda del profilo di rischio totale, della presenza di danni agli organi bersaglio e del livello di controllo della pressione arteriosa. Gli individui con ipertensione e concomitante malattia cardiovascolare o segni di essa come dispnea, dolore toracico o aritmia, dovrebbero ricevere un trattamento ottimizzato per la patologia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "dislipidemia",
    label: "Dislipidemia",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Dislipidemia. Indicazione: Nella dislipidemia senza nessun altro fattore di rischio cardiovascolare, l'attività fisica è indicata come primo approccio insieme ad altre modifiche dello stile di vita (es. dieta). Nella dislipidemia in combinazione con altri fattori di rischio per patologia cardiovascolare, l'attività fisica è indicata insieme ad altre modifiche dello stile di vita e al trattamento farmacologico. Gli individui con valori lipidici notevolmente elevati, come nell'ipercolesterolemia familiare, dovrebbero essere sempre trattati con le statine come trattamento di base, insieme alla dieta e all'attività fisica.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 minuti 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: In soggetti con dislipidemia, un periodo di attività fisica può migliorare il colesterolo e i trigliceridi. Tutti i tipi di attività fisica aerobica sono risultati favorevoli, se veniva raggiunta una dose sufficiente e l'intensità era almeno moderata. Una soglia minima di esercizio era necessaria per migliorare il profilo lipidico. L'effetto quantitativo dell'attività fisica sui lipidi sierici era modesto. Per migliorare il livello di colesterolo LDL, la dose efficace di attività fisica era più elevata rispetto ad altri lipidi. In aggiunta, ci sono evidenze di bassa certezza (++) che lo yoga o attività simili abbiano effetti positivi sui livelli lipidici ematici. Tuttavia, non è ancora stato stabilito quale intensità, durata e frequenza siano ottimali. Le evidenze su un qualsiasi effetto dell'attività di rinforzo muscolare hanno un livello di certezza molto basso (+).\n\nIndicazioni specifiche: Nelle forme familiari di dislipidemia e nella malattia aterosclerotica documentata, i cambiamenti dello stile di vita devono sempre essere accompagnati da un trattamento farmacologico con statine come prima scelta. Nel caso di dolore o indolenzimento muscolare, persistente per oltre 72 ore dopo l'allenamento, dovrebbe essere interrotto il trattamento con l'esercizio, sospesa la terapia con statine e verificato il valore plasmatico di creatina chinasi dell'individuo. Una dose maggiore di attività fisica determina un effetto più marcato sul controllo lipidico, in quanto esiste una relazione dose-risposta. Gli individui con dislipidemia e concomitante malattia cardiovascolare o segni di essa dovrebbero essere trattati per la malattia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "L'attività fisica aerobica raccomandata nella dislipidemia non soddisfa le raccomandazioni generali mondiali sull'attività fisica per la salute. Aggiungere l'attività di rinforzo muscolare in accordo alle raccomandazioni globali generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: In soggetti con dislipidemia, un periodo di attività fisica può migliorare il colesterolo e i trigliceridi. Tutti i tipi di attività fisica aerobica sono risultati favorevoli, se veniva raggiunta una dose sufficiente e l'intensità era almeno moderata. Una soglia minima di esercizio era necessaria per migliorare il profilo lipidico. L'effetto quantitativo dell'attività fisica sui lipidi sierici era modesto. Per migliorare il livello di colesterolo LDL, la dose efficace di attività fisica era più elevata rispetto ad altri lipidi. In aggiunta, ci sono evidenze di bassa certezza (++) che lo yoga o attività simili abbiano effetti positivi sui livelli lipidici ematici. Tuttavia, non è ancora stato stabilito quale intensità, durata e frequenza siano ottimali. Le evidenze su un qualsiasi effetto dell'attività di rinforzo muscolare hanno un livello di certezza molto basso (+).\n\nIndicazioni specifiche: Nelle forme familiari di dislipidemia e nella malattia aterosclerotica documentata, i cambiamenti dello stile di vita devono sempre essere accompagnati da un trattamento farmacologico con statine come prima scelta. Nel caso di dolore o indolenzimento muscolare, persistente per oltre 72 ore dopo l'allenamento, dovrebbe essere interrotto il trattamento con l'esercizio, sospesa la terapia con statine e verificato il valore plasmatico di creatina chinasi dell'individuo. Una dose maggiore di attività fisica determina un effetto più marcato sul controllo lipidico, in quanto esiste una relazione dose-risposta. Gli individui con dislipidemia e concomitante malattia cardiovascolare o segni di essa dovrebbero essere trattati per la malattia cardiovascolare prima di intraprendere un programma di attività fisica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "sindrome-metabolica",
    label: "Sindrome metabolica",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Sindrome metabolica. Indicazione: Indicata con alta priorità, insieme ad altre modifiche dello stile di vita.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Tutte le componenti della sindrome metabolica sono positivamente influenzate. La maggior parte degli studi sull'attività aerobica: 45-60 minuti, moderata-vigorosa, 3-5 volte/settimana, 8-52 settimane. L'aerobica è la più efficace nel complesso; il rinforzo muscolare da solo è il meno efficace. La pressione arteriosa risponde all'attività indipendentemente dal tipo. Relazione dose-risposta lineare: rischio ridotto del 10% per ogni incremento di 10 MET-h/settimana rispetto all'inattività (RR 0.90, 95% CI 0.86-0.94).\n\nIndicazioni specifiche: Una dose maggiore è ideale, data la forte relazione dose-risposta. In caso di sovrappeso/obesità, è applicabile una dose doppia di attività aerobica, insieme a modifiche dietetiche. Il periodo di allenamento dovrebbe durare almeno 8 settimane per migliorare le componenti, ma preferibilmente per tutta la vita. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Si raccomanda di diminuire il tempo sedentario. Scarpe con assorbimento degli urti raccomandate per le persone obese. Vedi anche i capitoli su ipertensione, dislipidemia, sovrappeso/obesità e diabete di tipo 2.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Tutte le componenti della sindrome metabolica sono positivamente influenzate. La maggior parte degli studi sull'attività aerobica: 45-60 minuti, moderata-vigorosa, 3-5 volte/settimana, 8-52 settimane. L'aerobica è la più efficace nel complesso; il rinforzo muscolare da solo è il meno efficace. La pressione arteriosa risponde all'attività indipendentemente dal tipo. Relazione dose-risposta lineare: rischio ridotto del 10% per ogni incremento di 10 MET-h/settimana rispetto all'inattività (RR 0.90, 95% CI 0.86-0.94).\n\nIndicazioni specifiche: Una dose maggiore è ideale, data la forte relazione dose-risposta. In caso di sovrappeso/obesità, è applicabile una dose doppia di attività aerobica, insieme a modifiche dietetiche. Il periodo di allenamento dovrebbe durare almeno 8 settimane per migliorare le componenti, ma preferibilmente per tutta la vita. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Si raccomanda di diminuire il tempo sedentario. Scarpe con assorbimento degli urti raccomandate per le persone obese. Vedi anche i capitoli su ipertensione, dislipidemia, sovrappeso/obesità e diabete di tipo 2.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Se si scelgono solo attività aerobiche, aggiungere rinforzo muscolare se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Tutte le componenti della sindrome metabolica sono positivamente influenzate. La maggior parte degli studi sull'attività aerobica: 45-60 minuti, moderata-vigorosa, 3-5 volte/settimana, 8-52 settimane. L'aerobica è la più efficace nel complesso; il rinforzo muscolare da solo è il meno efficace. La pressione arteriosa risponde all'attività indipendentemente dal tipo. Relazione dose-risposta lineare: rischio ridotto del 10% per ogni incremento di 10 MET-h/settimana rispetto all'inattività (RR 0.90, 95% CI 0.86-0.94).\n\nIndicazioni specifiche: Una dose maggiore è ideale, data la forte relazione dose-risposta. In caso di sovrappeso/obesità, è applicabile una dose doppia di attività aerobica, insieme a modifiche dietetiche. Il periodo di allenamento dovrebbe durare almeno 8 settimane per migliorare le componenti, ma preferibilmente per tutta la vita. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Si raccomanda di diminuire il tempo sedentario. Scarpe con assorbimento degli urti raccomandate per le persone obese. Vedi anche i capitoli su ipertensione, dislipidemia, sovrappeso/obesità e diabete di tipo 2.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "migrania",
    label: "Migrania",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Migrania. Indicazione: Indicata come trattamento profilattico insieme ad altre modifiche dello stile di vita, trattamento farmacologico e/o non farmacologico, o come alternativa per chi non tollera/non vuole/non risponde al trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Vigorosa, Almeno 75 (es. 25 min x 3 giorni/settimana) min/sett., 3-5 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: La maggior parte degli studi riguarda la migrania episodica (la migrania cronica ha solo 1 RCT, certezza molto bassa +; l'attività è comunque raccomandabile secondo le linee guida generali, preferibilmente a intensità moderata). Migrania episodica: riduce il numero di giorni con mal di testa. Attività aerobica (ciclismo, jogging, camminata veloce, cross training) a intensità vigorosa (Borg 14-16), 20-30 minuti/sessione, 3 volte/settimana, 10-16 settimane; dimensione dell'effetto -0.6 giorni/mese (95%CI -1.14 a -0.09). Uno studio piccolo ha trovato l'HIIT superiore all'allenamento continuo per la riduzione dei giorni di migrania. Può anche influire su intensità/durata degli attacchi, ridurre l'uso di farmaci acuti, aumentare la qualità di vita - con magnitudine simile alla profilassi farmacologica consolidata.\n\nIndicazioni specifiche: Aggiungere riscaldamento/defaticamento a intensità moderata (Borg 12-13) attorno alle sessioni vigorose. Se l'esercizio vigoroso stesso è un fattore scatenante, un riscaldamento lungo (almeno 15 minuti) può aiutare a ridurre il rischio di attacco. Se l'attività scatena attacchi, aumentare gradualmente intensità/durata verso la dose raccomandata. Evitare disidratazione, cali di zucchero nel sangue ed elevato stress percepito intorno alle sessioni di esercizio se l'attività è segnalata come fattore scatenante della migrania.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: La maggior parte degli studi riguarda la migrania episodica (la migrania cronica ha solo 1 RCT, certezza molto bassa +; l'attività è comunque raccomandabile secondo le linee guida generali, preferibilmente a intensità moderata). Migrania episodica: riduce il numero di giorni con mal di testa. Attività aerobica (ciclismo, jogging, camminata veloce, cross training) a intensità vigorosa (Borg 14-16), 20-30 minuti/sessione, 3 volte/settimana, 10-16 settimane; dimensione dell'effetto -0.6 giorni/mese (95%CI -1.14 a -0.09). Uno studio piccolo ha trovato l'HIIT superiore all'allenamento continuo per la riduzione dei giorni di migrania. Può anche influire su intensità/durata degli attacchi, ridurre l'uso di farmaci acuti, aumentare la qualità di vita - con magnitudine simile alla profilassi farmacologica consolidata.\n\nIndicazioni specifiche: Aggiungere riscaldamento/defaticamento a intensità moderata (Borg 12-13) attorno alle sessioni vigorose. Se l'esercizio vigoroso stesso è un fattore scatenante, un riscaldamento lungo (almeno 15 minuti) può aiutare a ridurre il rischio di attacco. Se l'attività scatena attacchi, aumentare gradualmente intensità/durata verso la dose raccomandata. Evitare disidratazione, cali di zucchero nel sangue ed elevato stress percepito intorno alle sessioni di esercizio se l'attività è segnalata come fattore scatenante della migrania.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "sclerosi-multipla",
    label: "Sclerosi multipla",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Sclerosi multipla. Indicazione: SM lieve-moderata: indicata insieme ad altre modifiche dello stile di vita e al trattamento farmacologico. SM severa: incoraggiare l'attività anche se l'evidenza è debole.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: SM lieve-moderata: migliora fatica, equilibrio, andatura, sintomi depressivi, qualità di vita, capacità aerobica, forza muscolare dopo attività strutturata, generalmente a intensità moderata, 2-3 volte/settimana, 8-12 settimane. Rinforzo: supervisionato, progressivo, 8-15RM, 2-3 volte/settimana, 8-24 settimane. SM severa: evidenza con certezza molto bassa (+) per effetti su funzionamento/salute.\n\nIndicazioni specifiche: Personalizzata da personale formato come un fisioterapista, in dialogo con la persona. Intolleranza al caldo: esercitarsi a intervalli e/o in ambiente fresco. L'attività non aumenta il rischio di recidive, ma durante una recidiva evitare intensità vigorosa, lunga durata e alta frequenza.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-15 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: SM lieve-moderata: migliora fatica, equilibrio, andatura, sintomi depressivi, qualità di vita, capacità aerobica, forza muscolare dopo attività strutturata, generalmente a intensità moderata, 2-3 volte/settimana, 8-12 settimane. Rinforzo: supervisionato, progressivo, 8-15RM, 2-3 volte/settimana, 8-24 settimane. SM severa: evidenza con certezza molto bassa (+) per effetti su funzionamento/salute.\n\nIndicazioni specifiche: Personalizzata da personale formato come un fisioterapista, in dialogo con la persona. Intolleranza al caldo: esercitarsi a intervalli e/o in ambiente fresco. L'attività non aumenta il rischio di recidive, ma durante una recidiva evitare intensità vigorosa, lunga durata e alta frequenza.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: SM lieve-moderata: migliora fatica, equilibrio, andatura, sintomi depressivi, qualità di vita, capacità aerobica, forza muscolare dopo attività strutturata, generalmente a intensità moderata, 2-3 volte/settimana, 8-12 settimane. Rinforzo: supervisionato, progressivo, 8-15RM, 2-3 volte/settimana, 8-24 settimane. SM severa: evidenza con certezza molto bassa (+) per effetti su funzionamento/salute.\n\nIndicazioni specifiche: Personalizzata da personale formato come un fisioterapista, in dialogo con la persona. Intolleranza al caldo: esercitarsi a intervalli e/o in ambiente fresco. L'attività non aumenta il rischio di recidive, ma durante una recidiva evitare intensità vigorosa, lunga durata e alta frequenza.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "miosite",
    label: "Miosite",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Miosite. Indicazione: Nella miosite a bassa attività accertata, indicata insieme ad altre modifiche dello stile di vita e trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata o vigorosa combinata, Almeno 90 (es. 30 min/sessione) min/sett., 3 giorni/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Polimiosite/dermatomiosite accertata: diminuisce l'attività di malattia, migliora qualità di vita, funzione muscolare, capacità aerobica, limitazione dell'attività. Aerobica su cicloergometro/step class; rinforzo come allenamento arti superiori/inferiori o core; intensità >=60-70% VO2max / 30-40RM, 3 volte/settimana, 4 settimane-6 mesi. Malattia recente attiva: evidenza con certezza molto bassa (+) per aerobica terrestre + rinforzo non specifico che migliorano forma fisica/funzione muscolare (20 minuti di camminata all'aperto 60-70% della frequenza cardiaca massima predetta + rinforzo lieve-moderato, 5 volte/settimana, 12 settimane). Miosite a corpi inclusi: evidenza con certezza bassa (++) che il rinforzo con restrizione del flusso sanguigno (restrizione 70%, 30-40% 1RM, 2 volte/settimana, 12 settimane) mantenga la forza rispetto al controllo (nel gruppo di controllo la forza è scesa del 9% in 12 settimane).\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Riscaldamento/defaticamento importanti. L'allenamento aerobico e di resistenza muscolare idealmente nella stessa sessione. Iniziare con carichi inferiori al raccomandato, aumentando gradualmente in periodi di almeno 2-3 settimane. Adattare a debolezza muscolare individuale, capacità polmonare, stanchezza, dolore, attività di malattia e relative fluttuazioni. Alternare esercizi tra arti superiori/inferiori e collo/core per evitare l'esaurimento muscolare. In caso di debolezza marcata, dare priorità alla flessibilità delle spalle. L'attività non aumenta il rischio di riacutizzazioni, ma durante una riacutizzazione evitare intensità vigorosa, lunga durata, alta frequenza. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Valutare il grado di coinvolgimento d'organo (osteoporosi, fibrosi polmonare, possibile coinvolgimento cardiaco) prima di iniziare il trattamento con attività fisica.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "5-8 esercizi, 30-40 ripetizioni, 1-3 serie, 3 giorni/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Polimiosite/dermatomiosite accertata: diminuisce l'attività di malattia, migliora qualità di vita, funzione muscolare, capacità aerobica, limitazione dell'attività. Aerobica su cicloergometro/step class; rinforzo come allenamento arti superiori/inferiori o core; intensità >=60-70% VO2max / 30-40RM, 3 volte/settimana, 4 settimane-6 mesi. Malattia recente attiva: evidenza con certezza molto bassa (+) per aerobica terrestre + rinforzo non specifico che migliorano forma fisica/funzione muscolare (20 minuti di camminata all'aperto 60-70% della frequenza cardiaca massima predetta + rinforzo lieve-moderato, 5 volte/settimana, 12 settimane). Miosite a corpi inclusi: evidenza con certezza bassa (++) che il rinforzo con restrizione del flusso sanguigno (restrizione 70%, 30-40% 1RM, 2 volte/settimana, 12 settimane) mantenga la forza rispetto al controllo (nel gruppo di controllo la forza è scesa del 9% in 12 settimane).\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Riscaldamento/defaticamento importanti. L'allenamento aerobico e di resistenza muscolare idealmente nella stessa sessione. Iniziare con carichi inferiori al raccomandato, aumentando gradualmente in periodi di almeno 2-3 settimane. Adattare a debolezza muscolare individuale, capacità polmonare, stanchezza, dolore, attività di malattia e relative fluttuazioni. Alternare esercizi tra arti superiori/inferiori e collo/core per evitare l'esaurimento muscolare. In caso di debolezza marcata, dare priorità alla flessibilità delle spalle. L'attività non aumenta il rischio di riacutizzazioni, ma durante una riacutizzazione evitare intensità vigorosa, lunga durata, alta frequenza. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Valutare il grado di coinvolgimento d'organo (osteoporosi, fibrosi polmonare, possibile coinvolgimento cardiaco) prima di iniziare il trattamento con attività fisica.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non soddisfa la raccomandazione generale, ma un rinforzo muscolare a carichi più elevati e minor numero di ripetizioni NON è generalmente raccomandato in aggiunta nella miosite. Nessuna controindicazione al rinforzo muscolare standard a carichi maggiori nella miosite a bassa attività, ma cautela con dosi molto elevate di cortisone o comorbidità come l'osteoporosi.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Polimiosite/dermatomiosite accertata: diminuisce l'attività di malattia, migliora qualità di vita, funzione muscolare, capacità aerobica, limitazione dell'attività. Aerobica su cicloergometro/step class; rinforzo come allenamento arti superiori/inferiori o core; intensità >=60-70% VO2max / 30-40RM, 3 volte/settimana, 4 settimane-6 mesi. Malattia recente attiva: evidenza con certezza molto bassa (+) per aerobica terrestre + rinforzo non specifico che migliorano forma fisica/funzione muscolare (20 minuti di camminata all'aperto 60-70% della frequenza cardiaca massima predetta + rinforzo lieve-moderato, 5 volte/settimana, 12 settimane). Miosite a corpi inclusi: evidenza con certezza bassa (++) che il rinforzo con restrizione del flusso sanguigno (restrizione 70%, 30-40% 1RM, 2 volte/settimana, 12 settimane) mantenga la forza rispetto al controllo (nel gruppo di controllo la forza è scesa del 9% in 12 settimane).\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Riscaldamento/defaticamento importanti. L'allenamento aerobico e di resistenza muscolare idealmente nella stessa sessione. Iniziare con carichi inferiori al raccomandato, aumentando gradualmente in periodi di almeno 2-3 settimane. Adattare a debolezza muscolare individuale, capacità polmonare, stanchezza, dolore, attività di malattia e relative fluttuazioni. Alternare esercizi tra arti superiori/inferiori e collo/core per evitare l'esaurimento muscolare. In caso di debolezza marcata, dare priorità alla flessibilità delle spalle. L'attività non aumenta il rischio di riacutizzazioni, ma durante una riacutizzazione evitare intensità vigorosa, lunga durata, alta frequenza. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Valutare il grado di coinvolgimento d'organo (osteoporosi, fibrosi polmonare, possibile coinvolgimento cardiaco) prima di iniziare il trattamento con attività fisica.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "osteoartrosi",
    label: "Osteoartrosi",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Osteoartrosi. Indicazione: Indicata insieme ad altre modifiche dello stile di vita, gestione del peso ed educazione come primo passo - l'attività ha l'effetto maggiore. Possono essere necessari (temporaneamente) farmaci per il dolore e antinflammatori.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, 20-30 min/sessione min/sett., 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Attività aerobica terrestre, di rinforzo muscolare o esercizio funzionale specifico per l'articolazione - indipendentemente da durata/frequenza/intensità - associata ad alleviamento del dolore immediatamente dopo il trattamento (effetto piccolo per l'anca, moderato per il ginocchio). Simile indipendentemente dal dolore basale o dal grado radiografico. Piccolo miglioramento immediato della funzione fisica per anca e ginocchio. Nessun miglioramento della qualità di vita nell'osteoartrosi d'anca immediatamente dopo il trattamento, piccolo miglioramento nel ginocchio. Piccoli effetti persistenti a 3-6 mesi. Evidenza con certezza bassa (++) per un effetto moderatamente maggiore con programmi ad alta intensità. Simile tasso di abbandono per dolore articolare nei gruppi esercizio vs controllo.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale simile. Almeno 2 sessioni/settimana, con carico progressivamente aumentato, per 6-8 settimane; poi la persona può continuare in autonomia con sessioni di richiamo e follow-up del fisioterapista. Esercizi generali e specifici per l'articolazione hanno effetti simili su limitazione e dolore. Aggiungere esercizi di flessibilità per mantenere/aumentare il range di movimento delle articolazioni interessate. Riscaldamento a bassa intensità prima delle sessioni per evitare lesioni. Scarpe con assorbimento degli urti raccomandate per migliorare la capacità di camminare.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "gruppi muscolari deboli del core e delle gambe esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Attività aerobica terrestre, di rinforzo muscolare o esercizio funzionale specifico per l'articolazione - indipendentemente da durata/frequenza/intensità - associata ad alleviamento del dolore immediatamente dopo il trattamento (effetto piccolo per l'anca, moderato per il ginocchio). Simile indipendentemente dal dolore basale o dal grado radiografico. Piccolo miglioramento immediato della funzione fisica per anca e ginocchio. Nessun miglioramento della qualità di vita nell'osteoartrosi d'anca immediatamente dopo il trattamento, piccolo miglioramento nel ginocchio. Piccoli effetti persistenti a 3-6 mesi. Evidenza con certezza bassa (++) per un effetto moderatamente maggiore con programmi ad alta intensità. Simile tasso di abbandono per dolore articolare nei gruppi esercizio vs controllo.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale simile. Almeno 2 sessioni/settimana, con carico progressivamente aumentato, per 6-8 settimane; poi la persona può continuare in autonomia con sessioni di richiamo e follow-up del fisioterapista. Esercizi generali e specifici per l'articolazione hanno effetti simili su limitazione e dolore. Aggiungere esercizi di flessibilità per mantenere/aumentare il range di movimento delle articolazioni interessate. Riscaldamento a bassa intensità prima delle sessioni per evitare lesioni. Scarpe con assorbimento degli urti raccomandate per migliorare la capacità di camminare.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere rinforzo muscolare e attività aerobica aggiuntiva per soddisfare le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Attività aerobica terrestre, di rinforzo muscolare o esercizio funzionale specifico per l'articolazione - indipendentemente da durata/frequenza/intensità - associata ad alleviamento del dolore immediatamente dopo il trattamento (effetto piccolo per l'anca, moderato per il ginocchio). Simile indipendentemente dal dolore basale o dal grado radiografico. Piccolo miglioramento immediato della funzione fisica per anca e ginocchio. Nessun miglioramento della qualità di vita nell'osteoartrosi d'anca immediatamente dopo il trattamento, piccolo miglioramento nel ginocchio. Piccoli effetti persistenti a 3-6 mesi. Evidenza con certezza bassa (++) per un effetto moderatamente maggiore con programmi ad alta intensità. Simile tasso di abbandono per dolore articolare nei gruppi esercizio vs controllo.\n\nIndicazioni specifiche: Personalizzata in dialogo con la persona, inizialmente supervisionata da un fisioterapista o personale simile. Almeno 2 sessioni/settimana, con carico progressivamente aumentato, per 6-8 settimane; poi la persona può continuare in autonomia con sessioni di richiamo e follow-up del fisioterapista. Esercizi generali e specifici per l'articolazione hanno effetti simili su limitazione e dolore. Aggiungere esercizi di flessibilità per mantenere/aumentare il range di movimento delle articolazioni interessate. Riscaldamento a bassa intensità prima delle sessioni per evitare lesioni. Scarpe con assorbimento degli urti raccomandate per migliorare la capacità di camminare.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "osteoporosi",
    label: "Osteoporosi",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Osteoporosi. Indicazione: Attività fisica con carico indicata insieme ad altre modifiche dello stile di vita.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Seguire le raccomandazioni generali sull'attività aerobica.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare la salute ossea in osteopenia/osteoporosi. Gravità e contrazione muscolare sono entrambi prerequisiti per la salute ossea; il normale rimodellamento richiede ~4 mesi. Necessari almeno 6 mesi di allenamento di forza prima che si rilevi un aumento della massa ossea (in donne in premenopausa e uomini). L'allenamento dinamico è più efficace di quello statico. Jogging, salti, allenamento di forza a intensità moderata-vigorosa, 30-60 minuti/giorno, 3-5 volte/settimana, positivi a qualsiasi età.\n\nIndicazioni specifiche: Fornire consigli specifici su come evitare le cadute. In caso di osteoporosi accertata, soprattutto negli anziani, si raccomanda un'attività di rinforzo muscolare individualmente adattata combinata con esercizi di equilibrio e camminata attenta, specialmente su percorsi sconnessi. La risposta dello scheletro al carico aumenta con la magnitudine e velocità della forza e aumenta se la forza ha una direzione inusuale o alternata. Evitare addominali (sit-up) e posizioni yoga che comportano una flessione vigorosa della colonna - aumentano il rischio di compressione vertebrale.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 2 serie, 2-3 giorni/sett.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare la salute ossea in osteopenia/osteoporosi. Gravità e contrazione muscolare sono entrambi prerequisiti per la salute ossea; il normale rimodellamento richiede ~4 mesi. Necessari almeno 6 mesi di allenamento di forza prima che si rilevi un aumento della massa ossea (in donne in premenopausa e uomini). L'allenamento dinamico è più efficace di quello statico. Jogging, salti, allenamento di forza a intensità moderata-vigorosa, 30-60 minuti/giorno, 3-5 volte/settimana, positivi a qualsiasi età.\n\nIndicazioni specifiche: Fornire consigli specifici su come evitare le cadute. In caso di osteoporosi accertata, soprattutto negli anziani, si raccomanda un'attività di rinforzo muscolare individualmente adattata combinata con esercizi di equilibrio e camminata attenta, specialmente su percorsi sconnessi. La risposta dello scheletro al carico aumenta con la magnitudine e velocità della forza e aumenta se la forza ha una direzione inusuale o alternata. Evitare addominali (sit-up) e posizioni yoga che comportano una flessione vigorosa della colonna - aumentano il rischio di compressione vertebrale.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Se la dose aerobica indicata non soddisfa le raccomandazioni generali, aggiungere ulteriore attività aerobica se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare la salute ossea in osteopenia/osteoporosi. Gravità e contrazione muscolare sono entrambi prerequisiti per la salute ossea; il normale rimodellamento richiede ~4 mesi. Necessari almeno 6 mesi di allenamento di forza prima che si rilevi un aumento della massa ossea (in donne in premenopausa e uomini). L'allenamento dinamico è più efficace di quello statico. Jogging, salti, allenamento di forza a intensità moderata-vigorosa, 30-60 minuti/giorno, 3-5 volte/settimana, positivi a qualsiasi età.\n\nIndicazioni specifiche: Fornire consigli specifici su come evitare le cadute. In caso di osteoporosi accertata, soprattutto negli anziani, si raccomanda un'attività di rinforzo muscolare individualmente adattata combinata con esercizi di equilibrio e camminata attenta, specialmente su percorsi sconnessi. La risposta dello scheletro al carico aumenta con la magnitudine e velocità della forza e aumenta se la forza ha una direzione inusuale o alternata. Evitare addominali (sit-up) e posizioni yoga che comportano una flessione vigorosa della colonna - aumentano il rischio di compressione vertebrale.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "sovrappeso-e-obesita",
    label: "Sovrappeso e obesità",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Sovrappeso e obesità. Indicazione: Indicata insieme ad altre modifiche dello stile di vita, specialmente la dieta.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 300 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 150 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 180 (60 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce peso corporeo, BMI, percentuale di grasso corporeo, circonferenza vita. Esempio: camminata veloce a intensità moderata (~73% HRmax), 45 minuti, 4 volte/settimana, 12-16 settimane. Allenamento continuo su tapis roulant/cyclette moderato-vigoroso, 30-60 minuti, 3-5 volte/settimana, 6-16 settimane ha migliorato peso/composizione corporea. L'HIIT migliora anche peso/composizione e capacità aerobica, sebbene l'HIIT a basso volume non abbia mostrato effetto in una meta-analisi. Yoga 60 minuti a giorni alterni per 12 settimane ha abbassato il BMI. L'allenamento di forza può aumentare la massa magra e diminuire la percentuale di grasso. I benefici (pressione, sensibilità insulinica) si verificano anche senza perdita di peso. La combinazione attività+dieta dà miglioramenti modesti ma costanti nel tempo sia per il peso che per i fattori di rischio cardiovascolare.\n\nIndicazioni specifiche: Combinare modifiche dietetiche e attività per la riduzione del peso; la relazione dose-risposta favorisce dosi più alte. L'attività aerobica influisce principalmente sul peso; il rinforzo da solo ha un effetto solo marginale, ma la combinazione aerobica+rinforzo può essere benefica. Per mantenere la perdita di peso: alimentazione sana + alta dose di attività. L'aerobica moderata-vigorosa mostra un effetto di mantenimento maggiore del solo rinforzo. Almeno 300 minuti/settimana raccomandati (es. 60 minuti di camminata quotidiana, 5 giorni/settimana). Possono esserci limitazioni fisiche/altri vincoli - trovare attività realistiche; iniziare in basso e aumentare gradualmente per evitare lesioni, dolore e perdita di motivazione. Il riferimento a un fisioterapista/scienziato dell'esercizio può essere utile. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2 giorni/sett.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce peso corporeo, BMI, percentuale di grasso corporeo, circonferenza vita. Esempio: camminata veloce a intensità moderata (~73% HRmax), 45 minuti, 4 volte/settimana, 12-16 settimane. Allenamento continuo su tapis roulant/cyclette moderato-vigoroso, 30-60 minuti, 3-5 volte/settimana, 6-16 settimane ha migliorato peso/composizione corporea. L'HIIT migliora anche peso/composizione e capacità aerobica, sebbene l'HIIT a basso volume non abbia mostrato effetto in una meta-analisi. Yoga 60 minuti a giorni alterni per 12 settimane ha abbassato il BMI. L'allenamento di forza può aumentare la massa magra e diminuire la percentuale di grasso. I benefici (pressione, sensibilità insulinica) si verificano anche senza perdita di peso. La combinazione attività+dieta dà miglioramenti modesti ma costanti nel tempo sia per il peso che per i fattori di rischio cardiovascolare.\n\nIndicazioni specifiche: Combinare modifiche dietetiche e attività per la riduzione del peso; la relazione dose-risposta favorisce dosi più alte. L'attività aerobica influisce principalmente sul peso; il rinforzo da solo ha un effetto solo marginale, ma la combinazione aerobica+rinforzo può essere benefica. Per mantenere la perdita di peso: alimentazione sana + alta dose di attività. L'aerobica moderata-vigorosa mostra un effetto di mantenimento maggiore del solo rinforzo. Almeno 300 minuti/settimana raccomandati (es. 60 minuti di camminata quotidiana, 5 giorni/settimana). Possono esserci limitazioni fisiche/altri vincoli - trovare attività realistiche; iniziare in basso e aumentare gradualmente per evitare lesioni, dolore e perdita di motivazione. Il riferimento a un fisioterapista/scienziato dell'esercizio può essere utile. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce peso corporeo, BMI, percentuale di grasso corporeo, circonferenza vita. Esempio: camminata veloce a intensità moderata (~73% HRmax), 45 minuti, 4 volte/settimana, 12-16 settimane. Allenamento continuo su tapis roulant/cyclette moderato-vigoroso, 30-60 minuti, 3-5 volte/settimana, 6-16 settimane ha migliorato peso/composizione corporea. L'HIIT migliora anche peso/composizione e capacità aerobica, sebbene l'HIIT a basso volume non abbia mostrato effetto in una meta-analisi. Yoga 60 minuti a giorni alterni per 12 settimane ha abbassato il BMI. L'allenamento di forza può aumentare la massa magra e diminuire la percentuale di grasso. I benefici (pressione, sensibilità insulinica) si verificano anche senza perdita di peso. La combinazione attività+dieta dà miglioramenti modesti ma costanti nel tempo sia per il peso che per i fattori di rischio cardiovascolare.\n\nIndicazioni specifiche: Combinare modifiche dietetiche e attività per la riduzione del peso; la relazione dose-risposta favorisce dosi più alte. L'attività aerobica influisce principalmente sul peso; il rinforzo da solo ha un effetto solo marginale, ma la combinazione aerobica+rinforzo può essere benefica. Per mantenere la perdita di peso: alimentazione sana + alta dose di attività. L'aerobica moderata-vigorosa mostra un effetto di mantenimento maggiore del solo rinforzo. Almeno 300 minuti/settimana raccomandati (es. 60 minuti di camminata quotidiana, 5 giorni/settimana). Possono esserci limitazioni fisiche/altri vincoli - trovare attività realistiche; iniziare in basso e aumentare gradualmente per evitare lesioni, dolore e perdita di motivazione. Il riferimento a un fisioterapista/scienziato dell'esercizio può essere utile. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "malattia-di-parkinson",
    label: "Malattia di Parkinson",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Malattia di Parkinson. Indicazione: Spesso indicata insieme ad altri trattamenti non farmacologici e/o farmacologici.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce i sintomi motori parkinsoniani (UPDRS), migliora velocità di camminata, equilibrio, capacità aerobica, forza muscolare; diminuisce il tasso di caduta. L'aerobica al 65-89% HRmax aumenta la forma fisica. Il rinforzo muscolare aumenta la forza degli arti inferiori. L'allenamento su tapis roulant e con segnali per l'andatura aumenta la velocità di camminata confortevole (tapis roulant 3 volte/settimana, media di 6 settimane). L'esercizio che sfida l'equilibrio è efficace nel migliorarlo. L'attività su andatura ed equilibrio diminuisce il tasso di caduta (non il numero di persone che cadono). L'allenamento supervisionato da un fisioterapista (spesso andatura+equilibrio, anche con rinforzo/flessibilità) ha migliorato velocità di camminata, equilibrio e sintomi motori; eseguito per 45 minuti, almeno 3 volte/settimana, per 8 settimane. Tai Chi/Qigong: evidenza con certezza bassa (++) per equilibrio funzionale e sintomi motori (dati imprecisi/con bias). Effetto di un mix di esercizi sulla HRQoL: evidenza con certezza molto bassa (+). La maggior parte degli studi su malattia lieve-moderata.\n\nIndicazioni specifiche: Personalizzata da un fisioterapista o personale simile, in dialogo con la persona; dovrebbe essere supervisionata. Esercitarsi nella fase 'on' della terapia farmacologica. Aggiungere riscaldamento/defaticamento alla raccomandazione. Aumentare gradualmente intensità aerobica e progressione del rinforzo, sia nella sessione che tra le sessioni. Idealmente includere esercizi funzionali. L'equilibrio ridotto è caratteristico - aggiungere un allenamento dell'equilibrio impegnativo. Fattori personali (es. bassa autoefficacia) e sintomi motori/non motori (apatia, fatica) possono essere barriere all'attività.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "adattare alla capacità individuale esercizi, 8-15 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce i sintomi motori parkinsoniani (UPDRS), migliora velocità di camminata, equilibrio, capacità aerobica, forza muscolare; diminuisce il tasso di caduta. L'aerobica al 65-89% HRmax aumenta la forma fisica. Il rinforzo muscolare aumenta la forza degli arti inferiori. L'allenamento su tapis roulant e con segnali per l'andatura aumenta la velocità di camminata confortevole (tapis roulant 3 volte/settimana, media di 6 settimane). L'esercizio che sfida l'equilibrio è efficace nel migliorarlo. L'attività su andatura ed equilibrio diminuisce il tasso di caduta (non il numero di persone che cadono). L'allenamento supervisionato da un fisioterapista (spesso andatura+equilibrio, anche con rinforzo/flessibilità) ha migliorato velocità di camminata, equilibrio e sintomi motori; eseguito per 45 minuti, almeno 3 volte/settimana, per 8 settimane. Tai Chi/Qigong: evidenza con certezza bassa (++) per equilibrio funzionale e sintomi motori (dati imprecisi/con bias). Effetto di un mix di esercizi sulla HRQoL: evidenza con certezza molto bassa (+). La maggior parte degli studi su malattia lieve-moderata.\n\nIndicazioni specifiche: Personalizzata da un fisioterapista o personale simile, in dialogo con la persona; dovrebbe essere supervisionata. Esercitarsi nella fase 'on' della terapia farmacologica. Aggiungere riscaldamento/defaticamento alla raccomandazione. Aumentare gradualmente intensità aerobica e progressione del rinforzo, sia nella sessione che tra le sessioni. Idealmente includere esercizi funzionali. L'equilibrio ridotto è caratteristico - aggiungere un allenamento dell'equilibrio impegnativo. Fattori personali (es. bassa autoefficacia) e sintomi motori/non motori (apatia, fatica) possono essere barriere all'attività.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce i sintomi motori parkinsoniani (UPDRS), migliora velocità di camminata, equilibrio, capacità aerobica, forza muscolare; diminuisce il tasso di caduta. L'aerobica al 65-89% HRmax aumenta la forma fisica. Il rinforzo muscolare aumenta la forza degli arti inferiori. L'allenamento su tapis roulant e con segnali per l'andatura aumenta la velocità di camminata confortevole (tapis roulant 3 volte/settimana, media di 6 settimane). L'esercizio che sfida l'equilibrio è efficace nel migliorarlo. L'attività su andatura ed equilibrio diminuisce il tasso di caduta (non il numero di persone che cadono). L'allenamento supervisionato da un fisioterapista (spesso andatura+equilibrio, anche con rinforzo/flessibilità) ha migliorato velocità di camminata, equilibrio e sintomi motori; eseguito per 45 minuti, almeno 3 volte/settimana, per 8 settimane. Tai Chi/Qigong: evidenza con certezza bassa (++) per equilibrio funzionale e sintomi motori (dati imprecisi/con bias). Effetto di un mix di esercizi sulla HRQoL: evidenza con certezza molto bassa (+). La maggior parte degli studi su malattia lieve-moderata.\n\nIndicazioni specifiche: Personalizzata da un fisioterapista o personale simile, in dialogo con la persona; dovrebbe essere supervisionata. Esercitarsi nella fase 'on' della terapia farmacologica. Aggiungere riscaldamento/defaticamento alla raccomandazione. Aumentare gradualmente intensità aerobica e progressione del rinforzo, sia nella sessione che tra le sessioni. Idealmente includere esercizi funzionali. L'equilibrio ridotto è caratteristico - aggiungere un allenamento dell'equilibrio impegnativo. Fattori personali (es. bassa autoefficacia) e sintomi motori/non motori (apatia, fatica) possono essere barriere all'attività.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "arteriopatia-periferica",
    label: "Arteriopatia periferica",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Arteriopatia periferica. Indicazione: L'esercizio di camminata è indicato insieme alla cessazione del fumo e al trattamento farmacologico pertinente, come trattamento di prima linea per la claudicatio intermittente.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Camminata intermittente fino a dolore moderato o moderatamente severo, 30-60 min/sessione min/sett., 3 giorni/sett.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora la distanza di camminata e la qualità di vita. La camminata intermittente su tapis roulant è la più studiata (anche cicloergometro per braccia, camminata nordica, esercizio di resistenza). La supervisione è più efficace dell'esercizio domiciliare, sebbene programmi domiciliari strutturati possano essere un'alternativa. Protocollo tipico: camminare fino a dolore moderato/moderatamente severo (raggiunto entro 3-5 minuti), camminare 5-10 minuti totali, riposare 2-5 minuti per alleviare il dolore; 3 volte/settimana, 30-60 minuti/sessione, almeno 3 mesi. Nessuna differenza trovata camminando fino a dolore lieve vs severo (necessita ulteriori studi). Nessun effetto sull'indice caviglia-braccio o (dati limitati) su mortalità/amputazione. L'esercizio supervisionato e la rivascolarizzazione possono avere effetti funzionali comparabili; la combinazione può essere additiva. Può ridurre la pressione sistolica.\n\nIndicazioni specifiche: Personalizzata, con educazione su caratteristiche dei sintomi, decorso atteso del miglioramento, fattori di rischio (ipertensione, diabete, fumo), cura dei piedi e supporto sociale. Programma supervisionato in ambito ospedaliero raccomandato (Classe I); programma domiciliare/comunitario strutturato quando l'esercizio supervisionato non è fattibile. Supporto al cambiamento comportamentale (es. un coach) utile nella transizione da esercizio supervisionato a domiciliare/comunitario. Dopo un programma strutturato, raccomandare di continuare l'esercizio per tutta la vita per mantenere la capacità di camminare. Alternative a basso dolore (cicloergometro braccia/gambe, camminata nordica, esercizio di resistenza) possono migliorare reclutamento/adesione. Valutare altre cause di bassa velocità di andatura (malattie neurologiche, Parkinson, condizioni ortopediche). Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare; notare che la malattia coronarica (comorbidità comune) può manifestarsi clinicamente solo quando diventa raggiungibile un livello maggiore di sforzo cardiovascolare grazie all'allenamento. Il clima freddo può peggiorare i sintomi.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "Alcune evidenze negli anziani con arteriopatia periferica",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora la distanza di camminata e la qualità di vita. La camminata intermittente su tapis roulant è la più studiata (anche cicloergometro per braccia, camminata nordica, esercizio di resistenza). La supervisione è più efficace dell'esercizio domiciliare, sebbene programmi domiciliari strutturati possano essere un'alternativa. Protocollo tipico: camminare fino a dolore moderato/moderatamente severo (raggiunto entro 3-5 minuti), camminare 5-10 minuti totali, riposare 2-5 minuti per alleviare il dolore; 3 volte/settimana, 30-60 minuti/sessione, almeno 3 mesi. Nessuna differenza trovata camminando fino a dolore lieve vs severo (necessita ulteriori studi). Nessun effetto sull'indice caviglia-braccio o (dati limitati) su mortalità/amputazione. L'esercizio supervisionato e la rivascolarizzazione possono avere effetti funzionali comparabili; la combinazione può essere additiva. Può ridurre la pressione sistolica.\n\nIndicazioni specifiche: Personalizzata, con educazione su caratteristiche dei sintomi, decorso atteso del miglioramento, fattori di rischio (ipertensione, diabete, fumo), cura dei piedi e supporto sociale. Programma supervisionato in ambito ospedaliero raccomandato (Classe I); programma domiciliare/comunitario strutturato quando l'esercizio supervisionato non è fattibile. Supporto al cambiamento comportamentale (es. un coach) utile nella transizione da esercizio supervisionato a domiciliare/comunitario. Dopo un programma strutturato, raccomandare di continuare l'esercizio per tutta la vita per mantenere la capacità di camminare. Alternative a basso dolore (cicloergometro braccia/gambe, camminata nordica, esercizio di resistenza) possono migliorare reclutamento/adesione. Valutare altre cause di bassa velocità di andatura (malattie neurologiche, Parkinson, condizioni ortopediche). Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare; notare che la malattia coronarica (comorbidità comune) può manifestarsi clinicamente solo quando diventa raggiungibile un livello maggiore di sforzo cardiovascolare grazie all'allenamento. Il clima freddo può peggiorare i sintomi.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Migliora la distanza di camminata e la qualità di vita. La camminata intermittente su tapis roulant è la più studiata (anche cicloergometro per braccia, camminata nordica, esercizio di resistenza). La supervisione è più efficace dell'esercizio domiciliare, sebbene programmi domiciliari strutturati possano essere un'alternativa. Protocollo tipico: camminare fino a dolore moderato/moderatamente severo (raggiunto entro 3-5 minuti), camminare 5-10 minuti totali, riposare 2-5 minuti per alleviare il dolore; 3 volte/settimana, 30-60 minuti/sessione, almeno 3 mesi. Nessuna differenza trovata camminando fino a dolore lieve vs severo (necessita ulteriori studi). Nessun effetto sull'indice caviglia-braccio o (dati limitati) su mortalità/amputazione. L'esercizio supervisionato e la rivascolarizzazione possono avere effetti funzionali comparabili; la combinazione può essere additiva. Può ridurre la pressione sistolica.\n\nIndicazioni specifiche: Personalizzata, con educazione su caratteristiche dei sintomi, decorso atteso del miglioramento, fattori di rischio (ipertensione, diabete, fumo), cura dei piedi e supporto sociale. Programma supervisionato in ambito ospedaliero raccomandato (Classe I); programma domiciliare/comunitario strutturato quando l'esercizio supervisionato non è fattibile. Supporto al cambiamento comportamentale (es. un coach) utile nella transizione da esercizio supervisionato a domiciliare/comunitario. Dopo un programma strutturato, raccomandare di continuare l'esercizio per tutta la vita per mantenere la capacità di camminare. Alternative a basso dolore (cicloergometro braccia/gambe, camminata nordica, esercizio di resistenza) possono migliorare reclutamento/adesione. Valutare altre cause di bassa velocità di andatura (malattie neurologiche, Parkinson, condizioni ortopediche). Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare; notare che la malattia coronarica (comorbidità comune) può manifestarsi clinicamente solo quando diventa raggiungibile un livello maggiore di sforzo cardiovascolare grazie all'allenamento. Il clima freddo può peggiorare i sintomi.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "sindrome-dell-ovaio-policistico-pcos",
    label: "Sindrome dell'ovaio policistico (PCOS)",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Sindrome dell'ovaio policistico (PCOS). Indicazione: Indicata insieme ad altre modifiche dello stile di vita; l'intervento sullo stile di vita che include l'attività fisica è il trattamento di prima linea raccomandato per tutte le donne con PCOS per raggiungere/mantenere un peso sano e ottimizzare la salute metabolica e riproduttiva.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può ridurre i livelli di androgeni, il peso corporeo, il BMI; possibilmente aumentare la funzione ovulatoria e la tolleranza al glucosio. La dose/tipo variava tra gli studi; l'aerobica da sola o combinata con il rinforzo era più comune, generalmente in linea con le raccomandazioni generali. L'indice di androgeni liberi è migliorato di una media di -1.11 (95%CI -1.96 a -0.26); il peso è diminuito di una media di 1.68 kg (95%CI -2.66 a -0.70); il BMI è diminuito di una media di 0.34 kg/m2 (95%CI -0.68 a -0.01). Evidenza con certezza molto bassa (+) per il miglioramento dell'ovulazione e della tolleranza al glucosio.\n\nIndicazioni specifiche: Se anche sovrappeso/obesa, raddoppiare la dose aerobica: almeno 300 min/settimana moderata o 150 min/settimana vigorosa. Le donne con PCOS possono avere una costituzione fisica favorevole per la performance - enfatizzare questo per incoraggiare la partecipazione ad attività/sport. La PCOS è associata a sovrappeso/obesità e sindrome metabolica, che a lungo termine aumentano il rischio di diabete di tipo 2 e malattia cardiovascolare - rafforzando la necessità di attività fisica. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2 giorni/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può ridurre i livelli di androgeni, il peso corporeo, il BMI; possibilmente aumentare la funzione ovulatoria e la tolleranza al glucosio. La dose/tipo variava tra gli studi; l'aerobica da sola o combinata con il rinforzo era più comune, generalmente in linea con le raccomandazioni generali. L'indice di androgeni liberi è migliorato di una media di -1.11 (95%CI -1.96 a -0.26); il peso è diminuito di una media di 1.68 kg (95%CI -2.66 a -0.70); il BMI è diminuito di una media di 0.34 kg/m2 (95%CI -0.68 a -0.01). Evidenza con certezza molto bassa (+) per il miglioramento dell'ovulazione e della tolleranza al glucosio.\n\nIndicazioni specifiche: Se anche sovrappeso/obesa, raddoppiare la dose aerobica: almeno 300 min/settimana moderata o 150 min/settimana vigorosa. Le donne con PCOS possono avere una costituzione fisica favorevole per la performance - enfatizzare questo per incoraggiare la partecipazione ad attività/sport. La PCOS è associata a sovrappeso/obesità e sindrome metabolica, che a lungo termine aumentano il rischio di diabete di tipo 2 e malattia cardiovascolare - rafforzando la necessità di attività fisica. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può ridurre i livelli di androgeni, il peso corporeo, il BMI; possibilmente aumentare la funzione ovulatoria e la tolleranza al glucosio. La dose/tipo variava tra gli studi; l'aerobica da sola o combinata con il rinforzo era più comune, generalmente in linea con le raccomandazioni generali. L'indice di androgeni liberi è migliorato di una media di -1.11 (95%CI -1.96 a -0.26); il peso è diminuito di una media di 1.68 kg (95%CI -2.66 a -0.70); il BMI è diminuito di una media di 0.34 kg/m2 (95%CI -0.68 a -0.01). Evidenza con certezza molto bassa (+) per il miglioramento dell'ovulazione e della tolleranza al glucosio.\n\nIndicazioni specifiche: Se anche sovrappeso/obesa, raddoppiare la dose aerobica: almeno 300 min/settimana moderata o 150 min/settimana vigorosa. Le donne con PCOS possono avere una costituzione fisica favorevole per la performance - enfatizzare questo per incoraggiare la partecipazione ad attività/sport. La PCOS è associata a sovrappeso/obesità e sindrome metabolica, che a lungo termine aumentano il rischio di diabete di tipo 2 e malattia cardiovascolare - rafforzando la necessità di attività fisica. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "psoriasi",
    label: "Psoriasi",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Psoriasi. Indicazione: Indicata insieme ad altre modifiche dello stile di vita e trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "moderata",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Persone sovrappeso/obese: l'intervento con attività+dieta ha ridotto l'indice di area e gravità della psoriasi (PASI) del 48% (95%CI 33-58) - lo studio RCT usava attività aerobica 40 minuti, 3 volte/settimana, 20 settimane, più counseling sulla perdita di peso, vs counseling da solo. L'indice di qualità di vita dermatologica è migliorato significativamente dopo un programma multidisciplinare di 12 settimane (14 componenti incl. attività, 1h/settimana) che introduceva sport di gruppo/individuali. Studi trasversali (anche registri nazionali svedesi della psoriasi) mostrano che i pazienti con psoriasi sono meno attivi fisicamente e hanno un BMI più alto dei controlli; la base di evidenze è limitata, perlopiù trasversale/retrospettiva.\n\nIndicazioni specifiche: Indossare abbigliamento sportivo comodo e largo senza cuciture dure per ridurre l'irritazione cutanea; fare la doccia con cura subito dopo l'esercizio e applicare crema emolliente mentre la pelle è ancora umida. Fornire supporto su come superare gli ostacoli, come l'esposizione della pelle in pubblico. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Persone sovrappeso/obese: l'intervento con attività+dieta ha ridotto l'indice di area e gravità della psoriasi (PASI) del 48% (95%CI 33-58) - lo studio RCT usava attività aerobica 40 minuti, 3 volte/settimana, 20 settimane, più counseling sulla perdita di peso, vs counseling da solo. L'indice di qualità di vita dermatologica è migliorato significativamente dopo un programma multidisciplinare di 12 settimane (14 componenti incl. attività, 1h/settimana) che introduceva sport di gruppo/individuali. Studi trasversali (anche registri nazionali svedesi della psoriasi) mostrano che i pazienti con psoriasi sono meno attivi fisicamente e hanno un BMI più alto dei controlli; la base di evidenze è limitata, perlopiù trasversale/retrospettiva.\n\nIndicazioni specifiche: Indossare abbigliamento sportivo comodo e largo senza cuciture dure per ridurre l'irritazione cutanea; fare la doccia con cura subito dopo l'esercizio e applicare crema emolliente mentre la pelle è ancora umida. Fornire supporto su come superare gli ostacoli, come l'esposizione della pelle in pubblico. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "artrite-reumatoide",
    label: "Artrite reumatoide",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Artrite reumatoide. Indicazione: Indicata insieme ad altre modifiche dello stile di vita e trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata+Vigorosa combinata, 60-180 (es. 30-60 min/sessione) min/sett., 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Nell'attività di malattia bassa-moderata senza grandi distruzioni articolari: diminuisce il dolore, migliora la limitazione dell'attività, la capacità cardiorespiratoria, la forza muscolare. Aerobica+rinforzo: aerobica su bici/tapis roulant/vogatore, sport/giochi, nuoto, o corsa, continua/a intervalli, intensità moderata-alta (>=40% fino a 70-90% VO2max, rinforzo fino all'80% 1RM), 30-90 minuti/sessione, 2-3 volte/settimana, 3-24 mesi. Solo aerobica: bici ergometro, camminata su terreno irregolare, programmi video domiciliari, o acqua, moderata-vigorosa (>=40% fino a 80% VO2max), 30-75 minuti/sessione, 3 volte/settimana, 8-12 settimane. Solo rinforzo: esercizi funzionali, macchine da palestra, elastici, o acqua, progressivo fino al 70-85% 1RM, 2-3 volte/settimana, 12-24 settimane.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Iniziare con carichi inferiori al raccomandato, aumentando gradualmente in periodi di almeno 2-3 settimane verso l'intensità vigorosa. L'aerobica può essere terrestre o in acqua. Adattare alle fluttuazioni dell'attività di malattia; se il dolore persiste per almeno un giorno dopo l'attività, ridurre temporaneamente il carico. Dolore/posizionamento scorretto possono richiedere ortesi per il polso, scarpe/plantari speciali, o esercizi alternativi. Esercitare tutte le articolazioni più volte a settimana. Nessuna evidenza che fino a 75-90 minuti/sessione siano dannosi per la maggior parte delle persone con artrite reumatoide. In presenza di comorbidità, consultare un fisioterapista prima di iniziare l'attività aerobica o di rinforzo raccomandata. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "8-10 esercizi, 8-12 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Nell'attività di malattia bassa-moderata senza grandi distruzioni articolari: diminuisce il dolore, migliora la limitazione dell'attività, la capacità cardiorespiratoria, la forza muscolare. Aerobica+rinforzo: aerobica su bici/tapis roulant/vogatore, sport/giochi, nuoto, o corsa, continua/a intervalli, intensità moderata-alta (>=40% fino a 70-90% VO2max, rinforzo fino all'80% 1RM), 30-90 minuti/sessione, 2-3 volte/settimana, 3-24 mesi. Solo aerobica: bici ergometro, camminata su terreno irregolare, programmi video domiciliari, o acqua, moderata-vigorosa (>=40% fino a 80% VO2max), 30-75 minuti/sessione, 3 volte/settimana, 8-12 settimane. Solo rinforzo: esercizi funzionali, macchine da palestra, elastici, o acqua, progressivo fino al 70-85% 1RM, 2-3 volte/settimana, 12-24 settimane.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Iniziare con carichi inferiori al raccomandato, aumentando gradualmente in periodi di almeno 2-3 settimane verso l'intensità vigorosa. L'aerobica può essere terrestre o in acqua. Adattare alle fluttuazioni dell'attività di malattia; se il dolore persiste per almeno un giorno dopo l'attività, ridurre temporaneamente il carico. Dolore/posizionamento scorretto possono richiedere ortesi per il polso, scarpe/plantari speciali, o esercizi alternativi. Esercitare tutte le articolazioni più volte a settimana. Nessuna evidenza che fino a 75-90 minuti/sessione siano dannosi per la maggior parte delle persone con artrite reumatoide. In presenza di comorbidità, consultare un fisioterapista prima di iniziare l'attività aerobica o di rinforzo raccomandata. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Se si scelgono solo attività aerobiche, aggiungere rinforzo muscolare secondo le raccomandazioni generali.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Nell'attività di malattia bassa-moderata senza grandi distruzioni articolari: diminuisce il dolore, migliora la limitazione dell'attività, la capacità cardiorespiratoria, la forza muscolare. Aerobica+rinforzo: aerobica su bici/tapis roulant/vogatore, sport/giochi, nuoto, o corsa, continua/a intervalli, intensità moderata-alta (>=40% fino a 70-90% VO2max, rinforzo fino all'80% 1RM), 30-90 minuti/sessione, 2-3 volte/settimana, 3-24 mesi. Solo aerobica: bici ergometro, camminata su terreno irregolare, programmi video domiciliari, o acqua, moderata-vigorosa (>=40% fino a 80% VO2max), 30-75 minuti/sessione, 3 volte/settimana, 8-12 settimane. Solo rinforzo: esercizi funzionali, macchine da palestra, elastici, o acqua, progressivo fino al 70-85% 1RM, 2-3 volte/settimana, 12-24 settimane.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Iniziare con carichi inferiori al raccomandato, aumentando gradualmente in periodi di almeno 2-3 settimane verso l'intensità vigorosa. L'aerobica può essere terrestre o in acqua. Adattare alle fluttuazioni dell'attività di malattia; se il dolore persiste per almeno un giorno dopo l'attività, ridurre temporaneamente il carico. Dolore/posizionamento scorretto possono richiedere ortesi per il polso, scarpe/plantari speciali, o esercizi alternativi. Esercitare tutte le articolazioni più volte a settimana. Nessuna evidenza che fino a 75-90 minuti/sessione siano dannosi per la maggior parte delle persone con artrite reumatoide. In presenza di comorbidità, consultare un fisioterapista prima di iniziare l'attività aerobica o di rinforzo raccomandata. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "schizofrenia",
    label: "Schizofrenia",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Schizofrenia. Indicazione: Indicata insieme ad altre modifiche dello stile di vita (principalmente il passaggio a una dieta sana) e altri trattamenti (trattamento psicosociale, psicoterapia, o trattamento farmacologico).",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare sintomi negativi e depressivi, funzionamento globale, cognizione, qualità di vita, capacità aerobica. Aerobica (ciclismo, tapis roulant, resistenza corporea) moderata-vigorosa, 90-120 minuti/settimana, ~12 settimane ha migliorato sintomi negativi/depressivi, funzionamento globale, qualità di vita. La cognizione globale è migliorata con aerobica moderata-vigorosa, 20-60 minuti/sessione, 3 volte/settimana, 12 settimane. La capacità aerobica è migliorata con aerobica moderata-vigorosa (ciclismo, corsa, resistenza corporea, videogiochi attivi), 30-60 minuti/sessione, 2-3 volte/settimana, 6 settimane-6 mesi; alternativamente HIIT di ~15 minuti/sessione.\n\nIndicazioni specifiche: L'alta prevalenza di difficoltà motorie e disturbi dell'immagine corporea richiede che l'attività sia personalizzata da personale con formazione medica; il miglior effetto si ottiene se l'esercizio è anche guidato da un istruttore. La sfida maggiore nella schizofrenia è la motivazione. È di straordinaria importanza offrire attività in linea con le capacità e i desideri della persona, il che può aumentare la motivazione a svolgerla effettivamente. Nella maggior parte dei casi è necessario un supporto continuo per mantenere l'attività. L'effetto può aumentare con la dose di attività fisica. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali, se le condizioni di salute lo permettono.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Può migliorare sintomi negativi e depressivi, funzionamento globale, cognizione, qualità di vita, capacità aerobica. Aerobica (ciclismo, tapis roulant, resistenza corporea) moderata-vigorosa, 90-120 minuti/settimana, ~12 settimane ha migliorato sintomi negativi/depressivi, funzionamento globale, qualità di vita. La cognizione globale è migliorata con aerobica moderata-vigorosa, 20-60 minuti/sessione, 3 volte/settimana, 12 settimane. La capacità aerobica è migliorata con aerobica moderata-vigorosa (ciclismo, corsa, resistenza corporea, videogiochi attivi), 30-60 minuti/sessione, 2-3 volte/settimana, 6 settimane-6 mesi; alternativamente HIIT di ~15 minuti/sessione.\n\nIndicazioni specifiche: L'alta prevalenza di difficoltà motorie e disturbi dell'immagine corporea richiede che l'attività sia personalizzata da personale con formazione medica; il miglior effetto si ottiene se l'esercizio è anche guidato da un istruttore. La sfida maggiore nella schizofrenia è la motivazione. È di straordinaria importanza offrire attività in linea con le capacità e i desideri della persona, il che può aumentare la motivazione a svolgerla effettivamente. Nella maggior parte dei casi è necessario un supporto continuo per mantenere l'attività. L'effetto può aumentare con la dose di attività fisica. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "lesione-del-midollo-spinale",
    label: "Lesione del midollo spinale",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Lesione del midollo spinale. Indicazione: Indicata come parte fondamentale della riabilitazione, per favorire la vita indipendente e ridurre il rischio di complicanze. Richiede follow-up per tutta la vita da parte di un team multidisciplinare di riabilitazione medica.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata a vigorosa, Almeno 40 (20 min/sessione) min/sett., Almeno 2 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Mancanza di studi di alta qualità nel primo anno post-lesione (certezza molto bassa, + per qualsiasi beneficio acuto). Lesione cronica (>1 anno post-lesione): evidenza con certezza moderata che 2 sessioni/settimana di attività aerobica della parte superiore del corpo moderata-vigorosa (20 minuti) più 3 serie di rinforzo muscolare 2 volte/settimana per ogni gruppo muscolare principale migliorano capacità aerobica e forza muscolare. Evidenza con certezza moderata che 30 minuti di attività aerobica della parte superiore del corpo moderata-vigorosa 3 volte/settimana migliorano composizione corporea e salute cardiometabolica. Evidenza con certezza bassa che aerobica+rinforzo riducano dolore/depressione e migliorino la qualità di vita.\n\nIndicazioni specifiche: Personalizzata da personale formato, in dialogo con la persona; introdotta gradualmente sotto supervisione per un effetto ottimale. Attività aerobiche adatte: spinta in carrozzina, ciclismo a braccia, stepper da seduti. Usare la scala Borg RPE piuttosto che la frequenza cardiaca per valutare l'intensità. La dose iniziale non dovrebbe essere troppo alta, per minimizzare il rischio di sovraccarico. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "Adattare al livello della lesione del midollo spinale, un esercizio per gruppo muscolare esercizi, 8-12 ripetizioni, 3 serie, 2 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Mancanza di studi di alta qualità nel primo anno post-lesione (certezza molto bassa, + per qualsiasi beneficio acuto). Lesione cronica (>1 anno post-lesione): evidenza con certezza moderata che 2 sessioni/settimana di attività aerobica della parte superiore del corpo moderata-vigorosa (20 minuti) più 3 serie di rinforzo muscolare 2 volte/settimana per ogni gruppo muscolare principale migliorano capacità aerobica e forza muscolare. Evidenza con certezza moderata che 30 minuti di attività aerobica della parte superiore del corpo moderata-vigorosa 3 volte/settimana migliorano composizione corporea e salute cardiometabolica. Evidenza con certezza bassa che aerobica+rinforzo riducano dolore/depressione e migliorino la qualità di vita.\n\nIndicazioni specifiche: Personalizzata da personale formato, in dialogo con la persona; introdotta gradualmente sotto supervisione per un effetto ottimale. Attività aerobiche adatte: spinta in carrozzina, ciclismo a braccia, stepper da seduti. Usare la scala Borg RPE piuttosto che la frequenza cardiaca per valutare l'intensità. La dose iniziale non dovrebbe essere troppo alta, per minimizzare il rischio di sovraccarico. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Per migliorare la salute cardiometabolica (+++), aggiungere più attività aerobica della parte superiore del corpo a intensità moderata-vigorosa, fino ad almeno 30 min/sessione, 3 volte/settimana.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Mancanza di studi di alta qualità nel primo anno post-lesione (certezza molto bassa, + per qualsiasi beneficio acuto). Lesione cronica (>1 anno post-lesione): evidenza con certezza moderata che 2 sessioni/settimana di attività aerobica della parte superiore del corpo moderata-vigorosa (20 minuti) più 3 serie di rinforzo muscolare 2 volte/settimana per ogni gruppo muscolare principale migliorano capacità aerobica e forza muscolare. Evidenza con certezza moderata che 30 minuti di attività aerobica della parte superiore del corpo moderata-vigorosa 3 volte/settimana migliorano composizione corporea e salute cardiometabolica. Evidenza con certezza bassa che aerobica+rinforzo riducano dolore/depressione e migliorino la qualità di vita.\n\nIndicazioni specifiche: Personalizzata da personale formato, in dialogo con la persona; introdotta gradualmente sotto supervisione per un effetto ottimale. Attività aerobiche adatte: spinta in carrozzina, ciclismo a braccia, stepper da seduti. Usare la scala Borg RPE piuttosto che la frequenza cardiaca per valutare l'intensità. La dose iniziale non dovrebbe essere troppo alta, per minimizzare il rischio di sovraccarico. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "ictus",
    label: "Ictus",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Ictus. Indicazione: Dopo un ictus, l'attività fisica individualmente adattata è indicata insieme ad altre modifiche dello stile di vita e al trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce la disabilità, aumenta velocità di andatura, distanza percorsa, capacità aerobica (VO2picco), forza muscolare. Le attività aerobiche variavano (cicloergometro, vari tipi di camminata, allenamento in circuito), intensità aumentata gradualmente da lieve a moderata, 2-3 volte/settimana. Il rinforzo muscolare veniva eseguito con contrazioni ripetute resistite dal peso corporeo, dispositivi elastici, pesi liberi o macchine specializzate; usata anche una combinazione di aerobica e rinforzo. Uno studio piccolo: allenamento delle gambe individualmente fino al cedimento muscolare su tre macchine pneumatiche (leg press, leg extension, leg curl) ha mostrato un effetto positivo sulla resistenza muscolare, che può avere maggiore rilevanza clinica dopo un ictus rispetto alla forza muscolare spesso riportata.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Si raccomanda supervisione/monitoraggio per le prime 4-6 settimane. Iniziare l'attività aerobica a intensità moderata; aumentare a vigorosa se le condizioni di salute lo permettono. Iniziare con una dose bassa e aumentare gradualmente. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. L'allenamento può iniziare non appena le condizioni generali di salute lo permettono - non è possibile fornire ulteriori indicazioni temporali generali.",
      },
      {
        id: "strength",
        title: "Rinforzo muscolare",
        text: "Tutti i gruppi muscolari allenabili esercizi, 10-15 ripetizioni, 1-3 serie, 2-3 giorni/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce la disabilità, aumenta velocità di andatura, distanza percorsa, capacità aerobica (VO2picco), forza muscolare. Le attività aerobiche variavano (cicloergometro, vari tipi di camminata, allenamento in circuito), intensità aumentata gradualmente da lieve a moderata, 2-3 volte/settimana. Il rinforzo muscolare veniva eseguito con contrazioni ripetute resistite dal peso corporeo, dispositivi elastici, pesi liberi o macchine specializzate; usata anche una combinazione di aerobica e rinforzo. Uno studio piccolo: allenamento delle gambe individualmente fino al cedimento muscolare su tre macchine pneumatiche (leg press, leg extension, leg curl) ha mostrato un effetto positivo sulla resistenza muscolare, che può avere maggiore rilevanza clinica dopo un ictus rispetto alla forza muscolare spesso riportata.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Si raccomanda supervisione/monitoraggio per le prime 4-6 settimane. Iniziare l'attività aerobica a intensità moderata; aumentare a vigorosa se le condizioni di salute lo permettono. Iniziare con una dose bassa e aumentare gradualmente. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. L'allenamento può iniziare non appena le condizioni generali di salute lo permettono - non è possibile fornire ulteriori indicazioni temporali generali.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Non sono necessarie raccomandazioni aggiuntive.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Riduce la disabilità, aumenta velocità di andatura, distanza percorsa, capacità aerobica (VO2picco), forza muscolare. Le attività aerobiche variavano (cicloergometro, vari tipi di camminata, allenamento in circuito), intensità aumentata gradualmente da lieve a moderata, 2-3 volte/settimana. Il rinforzo muscolare veniva eseguito con contrazioni ripetute resistite dal peso corporeo, dispositivi elastici, pesi liberi o macchine specializzate; usata anche una combinazione di aerobica e rinforzo. Uno studio piccolo: allenamento delle gambe individualmente fino al cedimento muscolare su tre macchine pneumatiche (leg press, leg extension, leg curl) ha mostrato un effetto positivo sulla resistenza muscolare, che può avere maggiore rilevanza clinica dopo un ictus rispetto alla forza muscolare spesso riportata.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista o personale simile. Si raccomanda supervisione/monitoraggio per le prime 4-6 settimane. Iniziare l'attività aerobica a intensità moderata; aumentare a vigorosa se le condizioni di salute lo permettono. Iniziare con una dose bassa e aumentare gradualmente. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. L'allenamento può iniziare non appena le condizioni generali di salute lo permettono - non è possibile fornire ulteriori indicazioni temporali generali.",
      },
    ],
    cvAlert: "",
  },
  {
    id: "lupus-eritematoso-sistemico-les",
    label: "Lupus eritematoso sistemico (LES)",
    available: true,
    sources: [
      {
        id: "fyss-eupap-2019",
        citation: "FYSS-short — Attività fisica nella prevenzione e cura delle malattie (EUPAP, 2019), versione italiana",
        note: "Capitolo: Lupus eritematoso sistemico (LES). Indicazione: Nel LES lieve/inattivo o moderato, indicata insieme ad altre modifiche dello stile di vita (es. cessazione del fumo) in aggiunta al trattamento farmacologico.",
      },
    ],
    recommendations: [
      {
        id: "aerobic",
        title: "Attività aerobica",
        text: "Moderata, Almeno 150 min/sett., 3-7 giorni/sett. — oppure — Vigorosa, Almeno 75 min/sett., 3-5 giorni/sett. — oppure — Moderata+Vigorosa combinata, Almeno 90 (30 min x 3 giorni/settimana) min/sett.",
        evidenceLevel: "forte",
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Attività aerobica moderata-vigorosa, 30-60 minuti, 2-3 volte/settimana, 12 settimane riduce fatica e sintomi depressivi. Attività aerobica moderata-vigorosa, 30-75 minuti, 2-3 volte/settimana, 8-16 settimane migliora la capacità aerobica. Evidenza con certezza bassa (++) che l'attività influisca sull'attività di malattia, basata su 3 studi con protocolli variabili di aerobica e/o rinforzo (50-60 minuti aerobica 3 volte/settimana per 12-16 settimane; o aerobica 30 minuti + rinforzo 40 minuti 2 volte/settimana per 12 settimane; o solo rinforzo al 65-75% 1RM, 3x15 ripetizioni, 50 minuti, 3 volte/settimana, 12 settimane). Nessun cambiamento nell'attività di malattia/danno d'organo dopo 1 anno di attività in un altro studio. Aerobica+rinforzo combinati 2-3 ore/settimana per 12-16 settimane, e solo rinforzo (2-3 serie x 10 esercizi, 3 volte/settimana, 40 minuti, fino a 7 mesi) sono stati ben tollerati.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista - particolarmente importante in caso di LES di recente insorgenza, riacutizzazioni attive, o comorbidità cardiovascolare, manifestazioni articolari severe, o osteoporosi manifesta. Aumentare intensità/durata gradualmente, adattandosi alle condizioni di salute. Aggiungere riscaldamento/defaticamento, flessibilità ed esercizi di equilibrio. Se il dolore dovuto all'attività persiste per >=24 ore, cambiare tipo/dose. Supporti per polso/ginocchio, buone scarpe e plantari possono in alcuni casi aiutare nella gestione dell'attività. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Essere consapevoli che il LES può coinvolgere cuore/polmoni (pericardite, insufficienza cardiaca, pleurite), vasculite e coinvolgimento renale.",
      },
      {
        id: "note",
        title: "Nota aggiuntiva",
        text: "Aggiungere attività di rinforzo muscolare secondo le raccomandazioni generali. Nessuna evidenza che l'attività di rinforzo muscolare influisca negativamente sull'attività di malattia nel LES.",
        evidenceLevel: "moderata", // DEFAULT_EVIDENCE
        sourceIds: ["fyss-eupap-2019"],
        sourceDetail: "Effetti dell'attività fisica regolare: Attività aerobica moderata-vigorosa, 30-60 minuti, 2-3 volte/settimana, 12 settimane riduce fatica e sintomi depressivi. Attività aerobica moderata-vigorosa, 30-75 minuti, 2-3 volte/settimana, 8-16 settimane migliora la capacità aerobica. Evidenza con certezza bassa (++) che l'attività influisca sull'attività di malattia, basata su 3 studi con protocolli variabili di aerobica e/o rinforzo (50-60 minuti aerobica 3 volte/settimana per 12-16 settimane; o aerobica 30 minuti + rinforzo 40 minuti 2 volte/settimana per 12 settimane; o solo rinforzo al 65-75% 1RM, 3x15 ripetizioni, 50 minuti, 3 volte/settimana, 12 settimane). Nessun cambiamento nell'attività di malattia/danno d'organo dopo 1 anno di attività in un altro studio. Aerobica+rinforzo combinati 2-3 ore/settimana per 12-16 settimane, e solo rinforzo (2-3 serie x 10 esercizi, 3 volte/settimana, 40 minuti, fino a 7 mesi) sono stati ben tollerati.\n\nIndicazioni specifiche: Personalizzata, inizialmente supervisionata da un fisioterapista - particolarmente importante in caso di LES di recente insorgenza, riacutizzazioni attive, o comorbidità cardiovascolare, manifestazioni articolari severe, o osteoporosi manifesta. Aumentare intensità/durata gradualmente, adattandosi alle condizioni di salute. Aggiungere riscaldamento/defaticamento, flessibilità ed esercizi di equilibrio. Se il dolore dovuto all'attività persiste per >=24 ore, cambiare tipo/dose. Supporti per polso/ginocchio, buone scarpe e plantari possono in alcuni casi aiutare nella gestione dell'attività. Trattare eventuali patologie cardiovascolari concomitanti prima di iniziare un programma. Essere consapevoli che il LES può coinvolgere cuore/polmoni (pericardite, insufficienza cardiaca, pleurite), vasculite e coinvolgimento renale.",
      },
    ],
    cvAlert: "",
  },
];
