import {
  Shield,
  Building,
  FileSearch
} from "lucide-react";

export const assData = {
  "rspp": {
    icon: Shield,
    title: "Incarico RSPP Esterno",
    subtitle: "Gestione della sicurezza aziendale",
    description: "Il Responsabile del Servizio di Prevenzione e Protezione (RSPP) esterno garantisce la gestione completa della sicurezza aziendale secondo il D.Lgs 81/08.",
    features: [
      "Valutazione rischi e redazione DVR",
      "Gestione piani di emergenza",
      "Coordinamento con RLS e medico competente",
      "Consulenza continuativa"
    ],
    badge: "Sicurezza",
    services: [
      "Servizio RSPP esterno completo",
      "Redazione e aggiornamento DVR",
      "Elaborazione procedure di sicurezza",
      "Sopralluoghi e valutazioni dei rischi",
      "Programmazione formazione sicurezza",
      "Assistenza in caso di ispezioni",
      "Redazione DUVRI per interferenze"
    ],
    
  },
  "hse": {
    icon: Building,
    title: "Incarico HSE",
    subtitle: "Coordinatore in fase di progettazione ed esecuzione",
    description: "Il Manager HSE (Health, Safety & Environment) coordina tutte le attività di salute, sicurezza e ambiente dell'organizzazione con un approccio integrato.",
    features: [
      "Gestione sistemi ISO 45001 e ISO 14001",
      "Audit interni e verifiche",
      "Formazione del personale",
      "Reporting e monitoraggio KPI"
    ],
    badge: "Ambiente & Sicurezza",
    services: [
      "Implementazione sistemi di gestione HSE",
      "Audit interni secondo ISO 45001 e ISO 14001",
      "Formazione e sensibilizzazione del personale",
      "Monitoraggio e reporting delle performance HSE",
      "Consulenza per la conformità normativa"
    ],
  },
  "auditor": {
    icon: FileSearch,
    title: "Incarico Auditor Esterno",
    description: "L'Auditor esterno qualificato conduce verifiche ispettive indipendenti sui sistemi di gestione aziendali secondo le normative internazionali.",
    features: [
      "Audit su ISO 9001, 14001, 45001",
      "Verifiche di conformità normativa",
      "Report dettagliati e raccomandazioni",
      "Supporto per certificazioni"
    ],
    badge: "Certificazione",
    services: [
      "Audit di sistema secondo ISO 9001, 14001, 45001",
      "Verifiche di conformità alle normative vigenti",
      "Redazione di report di audit dettagliati",
      "Raccomandazioni per il miglioramento continuo",
      "Supporto durante il processo di certificazione"
    ],
  }
};




// Typizzazione Typescript!
// const assignmentData: Record<string, {
//   title: string;
//   subtitle: string;
//   icon: any;
//   description: string;
//   responsibilities: string[];
//   qualifications: string[];
//   services: string[];
// }> = {
//   "hse": {
//     title: "Coordinatore della Sicurezza",
//     subtitle: "Coordinatore in fase di progettazione ed esecuzione",
//     icon: HardHat,
//     description: "Il Coordinatore per la Sicurezza è una figura professionale prevista dal D.Lgs. 81/08 obbligatoria nei cantieri temporanei o mobili in cui è prevista la presenza di più imprese, anche non contemporanea. Il coordinatore garantisce la sicurezza e la salute dei lavoratori durante tutte le fasi del progetto.",
//     responsibilities: [
//       "Redazione del Piano di Sicurezza e Coordinamento (PSC)",
//       "Predisposizione del fascicolo dell'opera",
//       "Coordinamento delle imprese esecutrici",
//       "Verifica dell'applicazione delle disposizioni del PSC",
//       "Segnalazione al committente delle inadempienze",
//       "Proposta di sospensione lavori in caso di pericolo grave e imminente",
//       "Verifica dei POS delle imprese esecutrici",
//       "Organizzazione della cooperazione e coordinamento"
//     ],
//     qualifications: [
//       "Laurea in ingegneria, architettura o geologia",
//       "Corso di formazione specifico (120 ore)",
//       "Esperienza lavorativa certificata nel settore",
//       "Aggiornamento quinquennale (40 ore)"
//     ],
//     services: [
//       "Redazione PSC e fascicolo tecnico dell'opera",
//       "Coordinamento sicurezza in fase di progettazione",
//       "Coordinamento sicurezza in fase di esecuzione",
//       "Verifiche periodiche in cantiere",
//       "Redazione verbali e report",
//       "Assistenza durante ispezioni ASL"
//     ]
//   },