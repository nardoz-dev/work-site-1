import { Dialog, DialogPortal, DialogOverlay, DialogHeader, DialogTitle } from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog@1.1.6";
import { X, CheckCircle2, Award, FileCheck, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface ISOModalProps {
  isOpen: boolean;
  onClose: () => void;
  isoType: string;
}

const isoData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  requirements: string[];
  process: string[];
}> = {
  "9001": {
    title: "ISO 9001",
    subtitle: "Sistema di Gestione per la Qualità",
    description: "La ISO 9001 è lo standard internazionale più riconosciuto per i Sistemi di Gestione per la Qualità (SGQ). Aiuta le organizzazioni a dimostrare la loro capacità di fornire prodotti e servizi che soddisfano costantemente i requisiti dei clienti e le normative applicabili.",
    benefits: [
      "Miglioramento della soddisfazione del cliente",
      "Maggiore efficienza operativa",
      "Riduzione dei costi attraverso l'ottimizzazione dei processi",
      "Accesso a nuovi mercati e opportunità di business",
      "Miglioramento della reputazione aziendale",
      "Conformità normativa e riduzione dei rischi"
    ],
    requirements: [
      "Definizione del contesto organizzativo",
      "Leadership e impegno della direzione",
      "Pianificazione del sistema di gestione",
      "Risorse e competenze adeguate",
      "Controllo operativo e gestione dei processi",
      "Valutazione delle prestazioni e miglioramento continuo"
    ],
    process: [
      "Analisi iniziale (Gap Analysis)",
      "Pianificazione del progetto di certificazione",
      "Sviluppo della documentazione del SGQ",
      "Implementazione e formazione del personale",
      "Audit interno e riesame della direzione",
      "Audit di certificazione e ottenimento della certificazione"
    ]
  },
  "14001": {
    title: "ISO 14001",
    subtitle: "Sistema di Gestione Ambientale",
    description: "La ISO 14001 definisce i requisiti per un Sistema di Gestione Ambientale (SGA) efficace. Permette alle organizzazioni di migliorare le proprie prestazioni ambientali attraverso un uso più efficiente delle risorse e la riduzione dei rifiuti.",
    benefits: [
      "Riduzione dell'impatto ambientale",
      "Conformità alla legislazione ambientale",
      "Risparmio sui costi energetici e di gestione rifiuti",
      "Miglioramento dell'immagine aziendale",
      "Accesso a finanziamenti e bandi pubblici",
      "Vantaggio competitivo nel mercato"
    ],
    requirements: [
      "Identificazione degli aspetti ambientali significativi",
      "Conformità agli obblighi di legge",
      "Definizione di obiettivi e target ambientali",
      "Competenza e consapevolezza del personale",
      "Controllo operativo dei processi critici",
      "Monitoraggio e misurazione delle prestazioni ambientali"
    ],
    process: [
      "Analisi ambientale iniziale",
      "Identificazione degli aspetti e impatti ambientali",
      "Sviluppo della politica ambientale",
      "Pianificazione e implementazione del SGA",
      "Audit interno e verifica di conformità",
      "Certificazione da parte di ente accreditato"
    ]
  },
  "45001": {
    title: "ISO 45001",
    subtitle: "Sistema di Gestione della Salute e Sicurezza sul Lavoro",
    description: "La ISO 45001 è lo standard internazionale per i Sistemi di Gestione della Salute e Sicurezza sul Lavoro (SGSSL). Fornisce un framework per migliorare la sicurezza dei lavoratori, ridurre i rischi sul posto di lavoro e creare condizioni di lavoro migliori e più sicure.",
    benefits: [
      "Riduzione degli infortuni e delle malattie professionali",
      "Miglioramento della cultura della sicurezza",
      "Conformità alle normative di sicurezza",
      "Riduzione dei costi assicurativi e delle assenze",
      "Maggiore produttività e morale dei dipendenti",
      "Protezione della reputazione aziendale"
    ],
    requirements: [
      "Identificazione dei pericoli e valutazione dei rischi",
      "Conformità ai requisiti legali in materia di SSL",
      "Definizione di obiettivi di sicurezza misurabili",
      "Consultazione e partecipazione dei lavoratori",
      "Controllo operativo e preparazione alle emergenze",
      "Monitoraggio delle prestazioni e audit periodici"
    ],
    process: [
      "Valutazione iniziale dello stato della sicurezza",
      "Identificazione dei pericoli e valutazione dei rischi",
      "Definizione della politica SSL",
      "Implementazione di misure di controllo",
      "Formazione e coinvolgimento dei lavoratori",
      "Audit e certificazione del sistema"
    ]
  },
  "27001": {
    title: "ISO 27001",
    subtitle: "Sistema di Gestione della Sicurezza delle Informazioni",
    description: "La ISO 27001 specifica i requisiti per stabilire, implementare, mantenere e migliorare continuamente un Sistema di Gestione della Sicurezza delle Informazioni (SGSI). Aiuta le organizzazioni a proteggere i propri dati sensibili.",
    benefits: [
      "Protezione dei dati sensibili e della proprietà intellettuale",
      "Conformità al GDPR e altre normative sulla privacy",
      "Riduzione del rischio di violazioni dei dati",
      "Aumento della fiducia di clienti e partner",
      "Vantaggio competitivo nel settore IT",
      "Miglioramento della gestione del rischio informatico"
    ],
    requirements: [
      "Definizione del contesto e degli obiettivi di sicurezza",
      "Valutazione e trattamento dei rischi informatici",
      "Implementazione di controlli di sicurezza appropriati",
      "Politiche e procedure documentate",
      "Formazione e sensibilizzazione del personale",
      "Monitoraggio continuo e gestione degli incidenti"
    ],
    process: [
      "Analisi del contesto e dei requisiti di sicurezza",
      "Valutazione dei rischi informatici",
      "Selezione e implementazione dei controlli",
      "Sviluppo della documentazione SGSI",
      "Test e verifica dell'efficacia dei controlli",
      "Audit di certificazione"
    ]
  },
  "22000": {
    title: "ISO 22000",
    subtitle: "Sistema di Gestione per la Sicurezza Alimentare",
    description: "La ISO 22000 definisce i requisiti per un Sistema di Gestione per la Sicurezza Alimentare che combina i principi HACCP con i sistemi di gestione. È applicabile a tutte le organizzazioni della filiera alimentare.",
    benefits: [
      "Garanzia della sicurezza dei prodotti alimentari",
      "Conformità alle normative alimentari internazionali",
      "Riduzione dei rischi di contaminazione",
      "Maggiore fiducia dei consumatori",
      "Accesso a mercati internazionali",
      "Ottimizzazione dei processi produttivi"
    ],
    requirements: [
      "Programmi di prerequisiti (PRP)",
      "Analisi dei pericoli HACCP",
      "Sistema di tracciabilità completo",
      "Gestione delle emergenze e ritiro prodotti",
      "Formazione del personale addetto",
      "Verifica e validazione del sistema"
    ],
    process: [
      "Mappatura della filiera alimentare",
      "Implementazione dei prerequisiti",
      "Analisi dei pericoli e punti critici di controllo",
      "Sviluppo del piano HACCP",
      "Formazione e implementazione operativa",
      "Verifica e certificazione"
    ]
  }
};

export function ISOModal({ isOpen, onClose, isoType }: ISOModalProps) {
  const data = isoData[isoType];

  if (!data) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay />
        <DialogPrimitive.Content className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 max-w-7xl w-[95vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 duration-200">
          {/* Header */}
          <DialogHeader className="p-8 pb-6 bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="bg-blue-600 dark:bg-blue-700 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <DialogTitle className="text-3xl text-blue-600 dark:text-blue-400 mb-2">
                    {data.title}
                  </DialogTitle>
                  <p className="text-lg text-foreground/70">
                    {data.subtitle}
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </DialogHeader>

        {/* Scrollable Content */}
        <ScrollArea className="h-[calc(90vh-180px)]">
          <div className="p-8">
            {/* Description */}
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Benefits Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-foreground">
                  Vantaggi
                </h3>
              </div>
              <div className="grid md:grid-cols-2 gap-3">
                {data.benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/10 rounded-lg border border-blue-200 dark:border-blue-900"
                  >
                    <CheckCircle2 className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Requirements Section */}
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <FileCheck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-foreground">
                  Requisiti Principali
                </h3>
              </div>
              <div className="space-y-3">
                {data.requirements.map((requirement, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-gray-200 dark:border-gray-700"
                  >
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                      {index + 1}
                    </div>
                    <span className="text-foreground/80">{requirement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-2xl text-foreground">
                  Processo di Certificazione
                </h3>
              </div>
              <div className="space-y-3">
                {data.process.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-gradient-to-r from-blue-50 to-transparent dark:from-blue-950/10 dark:to-transparent rounded-lg border-l-4 border-blue-600"
                  >
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-foreground/80 pt-1">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>

          {/* Footer */}
          <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-t border-blue-200 dark:border-blue-900 flex items-center justify-between gap-4">
            <p className="text-sm text-foreground/70">
              Vuoi saperne di più sulla certificazione ISO 9001?
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">
              Richiedi Consulenza
            </Button>
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
