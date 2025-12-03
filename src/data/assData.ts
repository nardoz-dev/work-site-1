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
    subdescription: "Il Responsabile del Servizio di Prevenzione e Protezione (RSPP) esterno garantisce la gestione completa della sicurezza aziendale secondo il D.Lgs 81/08.",
    description: "Assunzione formale dell'incarico di Responsabile del Servizio di Prevenzione e Protezione ai sensi del D.Lgs 81/08. Un professionista abilitato affianca il Datore di Lavoro nella gestione tecnica della sicurezza, garantendo il presidio normativo e la tutela legale dell'azienda.\
    I vantaggi di avere un RSPP esterno includono l'accesso a competenze specializzate e sempre aggiornate, una visione obiettiva e imparziale, e una maggiore flessibilità economica e gestionale. Questo libera il datore di lavoro da oneri formativi, riduce il rischio di sanzioni e ottimizza i costi, che diventano variabili e commisurati alle esigenze, oltre a consentire una migliore gestione della sicurezza.",
    badge: "Sicurezza",
    features: [
      "Individuazione e valutazione dei fattori di rischio aziendali",
      "Elaborazione ed aggiornamento costante del DVR e valutazioni specifiche",
      "Partecipazione alla riunione periodica annuale obbligatoria",
      "Gestione dei rapporti con gli organi di vigilanza (ASL, INAIL)",
      "Pianificazione delle misure di prevenzione e protezione",
      "Proporre programmi di informazione e formazione per i lavoratori.",
      "Fornire ai lavoratori le informazioni necessarie sui rischi.",
      "Assistere nella scelta e gestione dei Dispositivi di Protezione Individuale (DPI) e nel miglioramento dell'ergonomia.",
    ],
    
  },
  "hse": {
    icon: Building,
    title: "Incarico HSE",
    subtitle: "Coordinatore in fase di progettazione ed esecuzione",
    subdescription: "Il Manager HSE (Health, Safety & Environment) coordina tutte le attività di salute, sicurezza e ambiente dell'organizzazione con un approccio integrato.",
    description: "Supporto manageriale e operativo per la gestione integrata di Salute, Sicurezza e Ambiente. Questa figura non si limita alla burocrazia, ma opera sul campo per implementare le procedure, monitorare gli impatti ambientali e diffondere una cultura della sicurezza a tutti i livelli.",
    badge: "Ambiente & Sicurezza",
    features: [
      "Supervisione operativa diretta in cantiere o stabilimento",
      "Gestione scadenziario ambientale (rifiuti, emissioni, scarichi)",
      "Monitoraggio dei KPI di sicurezza e reportistica alla direzione",
      "Implementazione di procedure operative standard (SOP)",
      "Coordinamento tra i reparti per la compliance ISO 14001 e 45001",
    ],
  },
  "auditor": {
    icon: FileSearch,
    title: "Incarico Auditor Esterno",
    subdescription: "L'Auditor esterno qualificato conduce verifiche ispettive indipendenti sui sistemi di gestione aziendali secondo le normative internazionali.",
    description: "Verifiche ispettive indipendenti condotte da Auditor qualificati e certificati. Il servizio è essenziale per valutare lo stato di salute dei Sistemi di Gestione, preparare l'azienda alle certificazioni ufficiali e garantire che i processi rispettino gli standard internazionali.",
    badge: "Certificazione",
    features: [
     "Audit interni di sistema (ISO 9001, 14001, 45001, etc.)",
     "Audit di seconda parte per la qualifica dei fornitori",
     "Gap Analysis preliminare pre-certificazione",
     "Redazione di report di audit con evidenza delle non conformità",
     "Supporto nella definizione delle azioni correttive",
    ],
  }
};

