import { Button } from "../ui/button";
import { ArrowLeft, CheckCircle2, FileText, Users, Target, Award } from "lucide-react";

interface ISODetailProps {
  isoType: string;
  onBack: () => void;
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

export function ISODetail({ isoType, onBack }: ISODetailProps) {
  const data = isoData[isoType] || isoData["9001"];

  // Usa sempre il colore blu per tutte le ISO
  const colorClasses = {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-900",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className={`${colorClasses.bg} border-b ${colorClasses.border} transition-colors duration-500`}>
        <div className="container mx-auto px-4 py-12">
            <a
            href={`/iso`}
            className={`mb-6 ${colorClasses.text} hover:bg-transparent flex items-center`}
            >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alle certificazioni
            </a>
          <div className="max-w-4xl">
            <h1 className={`text-4xl lg:text-5xl mb-4 ${colorClasses.text}`}>
              {data.title}
            </h1>
            <p className="text-xl text-foreground/70">
              {data.subtitle}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Description */}
          <section>
            <div className={`p-8 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl`}>
              <p className="text-lg leading-relaxed text-foreground/80">
                {data.description}
              </p>
            </div>
          </section>

          {/* Benefits */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Target className={`w-8 h-8 ${colorClasses.text}`} />
              <h2 className="text-3xl text-foreground">Vantaggi della Certificazione</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              {data.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-4 ${colorClasses.bg} border ${colorClasses.border} rounded-lg ${colorClasses.hover} transition-colors`}
                >
                  <CheckCircle2 className={`w-5 h-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} />
                  <span className="text-foreground/80">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Requirements */}
          {/* <section>
            <div className="flex items-center gap-3 mb-8">
              <FileText className={`w-8 h-8 ${colorClasses.text}`} />
              <h2 className="text-3xl text-foreground">Requisiti Principali</h2>
            </div>
            <div className="space-y-3">
              {data.requirements.map((req, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-4 p-5 bg-background border border-border rounded-lg ${colorClasses.hover} transition-colors`}
                >
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${colorClasses.bg} ${colorClasses.text} flex-shrink-0`}>
                    {index + 1}
                  </div>
                  <span className="text-foreground/80 pt-1">{req}</span>
                </div>
              ))}
            </div>
          </section> */}

          {/* Process */}
          {/* <section>
            <div className="flex items-center gap-3 mb-8">
              <Award className={`w-8 h-8 ${colorClasses.text}`} />
              <h2 className="text-3xl text-foreground">Processo di Certificazione</h2>
            </div>
            <div className="space-y-4">
              {data.process.map((step, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex items-center justify-center min-w-12 h-12 rounded-full ${colorClasses.bg} ${colorClasses.text} border-2 ${colorClasses.border}`}>
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <p className="text-foreground/80">{step}</p>
                    {index < data.process.length - 1 && (
                      <div className={`w-0.5 h-8 ${colorClasses.bg} ml-6 mt-2`} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section> */}

          {/* CTA */}
          <section className={`p-8 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl text-center`}>
            <h3 className="text-2xl mb-4 text-foreground">
              Interessato alla certificazione {data.title}?
            </h3>
            <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
              I nostri consulenti esperti sono pronti ad accompagnarti nel percorso di certificazione.
              Contattaci per una consulenza gratuita e senza impegno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Richiedi Consulenza
              </Button>
              <Button variant="outline" className={`${colorClasses.border} ${colorClasses.text}`}>
                Scarica Brochure
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
