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
    description: "Analisi approfondita dei rischi aziendali con soluzioni personalizzate per ogni ambiente di lavoro."
  },
  {
    id: "specific-assessments",
    icon: FileText,
    label: "Valutazioni specifiche dei rischi",
    description: "Documento di Valutazione dei Rischi conforme al D.Lgs 81/08 con aggiornamenti periodici inclusi."
  },
  {
    id: "fire-plan",
    icon: HardHat,
    label: "Piani di emergenza ed evacuazione",
    description: "POS per cantieri e attività complesse, garantendo la massima sicurezza durante i lavori."
  },
  {
    id: "training",
    icon: FileCheck,
    label: "Verifiche ed audit interni",
    description: "Supporto completo per tutti gli adempimenti normativi in materia di sicurezza sul lavoro."
  },
  {
    id: "haccp",
    icon: Stethoscope,
    label: "Formazione dei lavoratori",
    description: "Coordinamento delle visite mediche periodiche e gestione della documentazione sanitaria."
  },
  {
    id: "inspections",
    icon: Settings,
    label: "Sorveglianza sanitaria e visite mediche",
    description: "Verifica e manutenzione programmata di impianti e attrezzature secondo le normative vigenti."
  },
  {
    id: "haccp",
    icon: FileText,
    label: "HACCP",
    description: "Analisi e gestione dei rischi alimentari secondo il protocollo HACCP."
  },
  {
    id: "inspections-2",
    icon: HardHat,
    label: "Sopralluoghi e controlli di monitoraggio",
    description: "Verifiche periodiche per garantire la sicurezza nei luoghi di lavoro."
  },
];