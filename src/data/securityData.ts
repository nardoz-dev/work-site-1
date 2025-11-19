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
    label: "Valutazione dei Rischi (DVR)",
    description: "Redazione del Documento di Valutazione dei Rischi obbligatorio (D.Lgs 81/08) con analisi personalizzata per ogni ambiente di lavoro."
  },
  {
    id: "specific-assessments",
    icon: FileText,
    label: "Valutazioni specifiche dei rischi",
    description: "Indagini tecniche strumentali per rischi specifici: Rumore, Vibrazioni, Chimico, Incendio, Stress Lavoro-Correlato e MMC.",
  },
  {
    id: "fire-plan",
    icon: HardHat,
    label: "Piani di emergenza ed evacuazione",
    description: "Elaborazione delle procedure operative e delle planimetrie per la gestione immediata delle emergenze e l'evacuazione sicura.",
  },
  {
    id: "training",
    icon: FileCheck,
    label: "Verifiche ed audit interni",
    description: "Ispezioni periodiche per verificare il mantenimento degli standard di sicurezza e la piena conformità legislativa nel tempo.",
  },
  {
    id: "haccp",
    icon: Stethoscope,
    label: "Formazione dei lavoratori",
    description: "Corsi obbligatori e di aggiornamento (Generale, Specifica, Preposti, Antincendio, Primo Soccorso) per sviluppare la cultura della sicurezza.",
  },
  {
    id: "inspections",
    icon: Settings,
    label: "Sorveglianza sanitaria e visite mediche",
    description: "Gestione completa della Medicina del Lavoro: nomina del Medico Competente, stesura protocolli sanitari e visite di idoneità.",
  },
  {
    id: "haccp",
    icon: FileText,
    label: "HACCP",
    description: "Consulenza per la sicurezza alimentare, redazione del Manuale di Autocontrollo e analisi dei punti critici per il settore Ho.Re.Ca.",
  },
  {
    id: "inspections-2",
    icon: HardHat,
    label: "Sopralluoghi e controlli di monitoraggio",
    description: "Visite tecniche ricorrenti negli ambienti di lavoro per identificare nuove criticità e monitorare l'efficacia delle misure adottate.",
  }
];
