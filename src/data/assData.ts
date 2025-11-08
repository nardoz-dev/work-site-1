import {
  Shield,
  Building,
  FileSearch
} from "lucide-react";

export const assData = {
  "rspp": {
    icon: Shield,
    title: "Incarico RSPP Esterno",
    description: "Il Responsabile del Servizio di Prevenzione e Protezione (RSPP) esterno garantisce la gestione completa della sicurezza aziendale secondo il D.Lgs 81/08.",
    features: [
      "Valutazione rischi e redazione DVR",
      "Gestione piani di emergenza",
      "Coordinamento con RLS e medico competente",
      "Consulenza continuativa"
    ],
    badge: "Sicurezza",
    
  },
  "hse": {
    icon: Building,
    title: "Incarico HSE",
    description: "Il Manager HSE (Health, Safety & Environment) coordina tutte le attività di salute, sicurezza e ambiente dell'organizzazione con un approccio integrato.",
    features: [
      "Gestione sistemi ISO 45001 e ISO 14001",
      "Audit interni e verifiche",
      "Formazione del personale",
      "Reporting e monitoraggio KPI"
    ],
    badge: "Ambiente & Sicurezza",
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
  }
};

