import { 
  Shield, 
  FileText, 
  HardHat, 
  FileCheck, 
  Stethoscope, 
  Settings,
} from "lucide-react";

export const securityFeatures = [
  {
    id:"dvr",
    icon: Shield,
    label: "Documento di valutazione dei rischi (DVR)",
    description:  "Analisi approfondita dei rischi aziendali con soluzioni personalizzate per ogni ambiente di lavoroRedazione del Documento di Valutazione dei Rischi obbligatorio (D.Lgs 81/08) con analisi personalizzata per ogni ambiente di lavoro.\
                  Il DVR (Documento di Valutazione dei Rischi) è obbligatorio per tutte le aziende con almeno un dipendente e deve essere redatto entro 90 giorni dall'inizio dell'attività o dall'assunzione del primo lavoratore. Non ha una scadenza fissa, ma va aggiornato regolarmente, oppure ogni volta che si verificano cambiamenti significativi come: modifica dei processi produttivi, introduzione di nuove tecnologie, incidenti, variazioni organizzative o nell'organigramma della sicurezza.\
                  ."
  },
  {
    id: "specific-assessments",
    icon: FileText,
    label: "Valutazioni specifiche dei rischi",
    description: "Lo studio offre un’ampia gamma di valutazioni da associare al DVR, basate sull’esigenza del cliente e sul D.Lgs 81/08.\
    Queste valutazioni sono obbligatorie per identificare i pericoli, quantificare il rischio e stabilire le misure di prevenzione e protezione necessarie per salvaguardare la salute e la sicurezza dei lavoratori, come richiesto dal D.Lgs. 81/08.\
    Esempi di rischi specifici da valutare\
    -Rischi fisici: rumore, vibrazioni, campi elettromagnetici e radiazioni ottiche.\
    -Rischi chimici e biologici: esposizione a sostanze chimiche, agenti biologici, cancerogeni e mutageni.\
    -Rischi ergonomici: movimentazione manuale dei carichi.\
    -Rischi organizzativi: stress lavoro-correlato, lavoro notturno e attività che coinvolgono lavoratrici in gravidanza.\
    -Rischi legati alle attrezzature: utilizzo di videoterminali.\
    "
  },
  {
    id: "fire-plan",
    icon: HardHat,
    label: "Piani di emergenza ed evacuazione",
    description: "Un piano di emergenza ed evacuazione (PEE) è un documento che delinea le procedure da seguire in caso di emergenza, come incendi o disastri naturali, per garantire un'evacuazione sicura e ordinata. È un obbligo di legge per le aziende con almeno 10 dipendenti e per quelle soggette a controlli da parte dei Vigili del Fuoco. Il piano deve includere l'identificazione dei rischi, le vie di fuga, i punti di raccolta, i ruoli del personale e le procedure per assistere le persone con necessità speciali.\
    È fondamentale che il piano venga testato periodicamente con prove di evacuazione annuali.\
    Le planimetrie di emergenza e di evacuazione sono documenti visivi che indicano le vie di fuga, i presidi antincendio e altri elementi di sicurezza all'interno di un edificio. Devono includere la posizione dell'utente (IO SONO QUI), i percorsi di uscita, l'ubicazione di estintori, pulsanti di allarme e kit di primo soccorso. La loro redazione è obbligatoria per legge (principalmente secondo il DM 10/03/1998 e successive modifiche) e deve essere affidata a tecnici qualificati."
  },
  {
    id: "training",
    icon: FileCheck,
    label: "Verifiche ed audit interni",
    description: "Le verifiche e gli audit interni sulla sicurezza sono processi periodici e sistematici che un'azienda esegue su se stessa per valutare la conformità, l'efficacia e le prestazioni del proprio sistema di gestione della sicurezza. Questi controlli servono a individuare preventivamente potenziali rischi e punti deboli, a garantire la conformità alle normative e agli standard (come la ISO 45001) ed a promuovere il miglioramento continuo.\
    Le verifiche e gli audit interni su una norma ISO (come la ISO 9001) sono valutazioni sistematiche condotte dall'organizzazione stessa per verificare la conformità ai requisiti della norma e per identificare aree di miglioramento. Questi audit sono un requisito fondamentale della norma stessa e servono a controllare l'efficacia del sistema di gestione, identificando non conformità prima che vengano rilevate in audit esterni e fornendo un feedback alla direzione per il miglioramento continuo."
  },
  {
    id: "haccp",
    icon: Stethoscope,
    label: "Formazione dei lavoratori",
    description: "La formazione per la sicurezza sul lavoro è un percorso obbligatorio che fornisce ai lavoratori le conoscenze e le competenze necessarie per prevenire infortuni e malattie professionali.\
    Lo studio offre un’ampia gamma di corsi sulla sicurezza:\
    -Corsi obbligatori e ruoli chiave \
    Formazione dei lavoratori (obbligatoria per tutti i dipendenti e da erogare prima dell’assunzione), RLS, preposti, addetti antincendio, addetti al primo soccorso,etc;\
    -Corsi per rischi specifici e mezzi\
    Utilizzo attrezzature: Corsi per addestramento all'uso di specifiche attrezzature come carrelli elevatori, PLE (Piattaforme di Lavoro Elevabili), gru, escavatori.\
    Rischi specifici: Formazione per lavoratori esposti a rischi particolari, come lavori in quota e DPI 3 categoria, spazi confinati o rischi elettrici, segnaletica stradale."
  },
  {
    id: "inspections",
    icon: Settings,
    label: "Sorveglianza sanitaria e visite mediche",
    description: "La sorveglianza sanitaria è un insieme di visite mediche, esami e accertamenti, effettuati dal medico competente, per monitorare la salute dei lavoratori in relazione ai rischi professionali. Le visite mediche sono obbligatorie in presenza di specifici rischi lavorativi, sono a carico del datore di lavoro e non devono comportare oneri per il lavoratore. Le visite includono accertamenti preventivi, periodici, su richiesta del lavoratore, in caso di cambio mansione, o dopo assenze prolungate."
  },
  {
    id: "haccp",
    icon: FileText,
    label: "HACCP",
    description: "HACCP è l'acronimo di Hazard Analysis and Critical Control Points, che in italiano significa 'Analisi dei rischi e punti critici di controllo' ed è un sistema di autocontrollo igienico per garantire la sicurezza alimentare. Si tratta di una metodologia obbligatoria per le aziende del settore alimentare che identifica i pericoli e stabilisce i punti critici di controllo per prevenirli. Il sistema include la redazione di un manuale HACCP, la formazione del personale e l'ottenimento di un attestato di formazione.\
      Cosa implica per gli addetti\
      Formazione: È obbligatoria la partecipazione a corsi di formazione HACCP specifici, la cui durata e modalità variano in base alla regione e al ruolo svolto.\
      Attestato: L'attestato di formazione certifica la competenza del lavoratore in materia di igiene e sicurezza alimentare e ha una validità limitata che richiede un rinnovo periodico.\
      Cosa implica per le aziende\
      Manuale HACCP: L'azienda deve redigere e tenere disponibile in sede un Manuale HACCP che descrive i rischi e le procedure di controllo.\
      Adempimenti: Il manuale deve essere disponibile prima dell'inizio dell'attività e deve essere aggiornato in caso di cambiamenti nei processi produttivi o nelle normative.\
      Sanzioni: L'assenza del manuale o la sua non conformità può comportare sanzioni pecuniarie significative."
    },
  {
    id: "inspections-2",
    icon: HardHat,
    label: "Sopralluoghi e controlli di monitoraggio",
    description: "I sopralluoghi e i controlli di monitoraggio della sicurezza sono processi essenziali per garantire la conformità normativa, identificare i pericoli e prevenire incidenti. Questi processi variano a seconda del contesto, che si tratti di sicurezza sul lavoro (D.Lgs. 81/08), sicurezza informatica o sicurezza antincendio.\
    Visite tecniche ricorrenti negli ambienti di lavoro per identificare nuove criticità e monitorare l'efficacia delle misure adottate."
  },
];