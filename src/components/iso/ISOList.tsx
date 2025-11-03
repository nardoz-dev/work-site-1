import { Button } from "../ui/button";
import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";

interface ISOListProps {
  onBack: () => void;
  onSelectISO: (isoType: string) => void;
}

const allISOs = [
  {
    code: "9001",
    title: "ISO 9001",
    subtitle: "Sistema di Gestione per la Qualità",
    description: "Lo standard più riconosciuto per i Sistemi di Gestione per la Qualità (SGQ). Aiuta le organizzazioni a dimostrare la capacità di fornire prodotti e servizi che soddisfano costantemente i requisiti dei clienti."
  },
  {
    code: "14001",
    title: "ISO 14001",
    subtitle: "Sistema di Gestione Ambientale",
    description: "Definisce i requisiti per un Sistema di Gestione Ambientale efficace, permettendo di migliorare le prestazioni ambientali attraverso un uso più efficiente delle risorse."
  },
  {
    code: "45001",
    title: "ISO 45001",
    subtitle: "Sistema di Gestione della Salute e Sicurezza sul Lavoro",
    description: "Fornisce un framework per migliorare la sicurezza dei lavoratori, ridurre i rischi sul posto di lavoro e creare condizioni di lavoro migliori e più sicure."
  },
  {
    code: "27001",
    title: "ISO 27001",
    subtitle: "Sistema di Gestione della Sicurezza delle Informazioni",
    description: "Specifica i requisiti per stabilire, implementare e migliorare continuamente un Sistema di Gestione della Sicurezza delle Informazioni (SGSI)."
  },
  {
    code: "22000",
    title: "ISO 22000",
    subtitle: "Sistema di Gestione per la Sicurezza Alimentare",
    description: "Definisce i requisiti per un Sistema di Gestione per la Sicurezza Alimentare che combina i principi HACCP con i sistemi di gestione."
  },
  {
    code: "50001",
    title: "ISO 50001",
    subtitle: "Sistema di Gestione dell'Energia",
    description: "Standard per la gestione dell'energia che aiuta le organizzazioni a sviluppare sistemi per migliorare l'efficienza energetica e ridurre i costi."
  },
  {
    code: "37001",
    title: "ISO 37001",
    subtitle: "Sistema di Gestione Anti-Corruzione",
    description: "Fornisce requisiti e linee guida per prevenire, rilevare e affrontare la corruzione nelle organizzazioni di qualsiasi dimensione."
  },
  {
    code: "20000",
    title: "ISO 20000",
    subtitle: "Sistema di Gestione dei Servizi IT",
    description: "Standard internazionale per la gestione dei servizi IT che aiuta le organizzazioni a fornire servizi IT gestiti di qualità."
  }
];

export function ISOList({ onBack, onSelectISO }: ISOListProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900 transition-colors duration-500">
        <div className="container mx-auto px-4 py-12">
            <a
            href={`/`}
            className={`mb-6 text-blue-600 dark:text-blue-400 hover:bg-transparent flex items-center`}
            >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla pagina principale
            </a>
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl mb-4 text-blue-600 dark:text-blue-400">
              Tutte le Certificazioni ISO
            </h1>
            <p className="text-xl text-foreground/70">
              Esplora la nostra gamma completa di certificazioni ISO per trovare quella più adatta alla tua azienda
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {allISOs.map((iso) => (
              <div
                key={iso.code}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer group"
                onClick={() => onSelectISO(iso.code)}
              >
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-blue-600 dark:bg-blue-700 w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl text-blue-600 dark:text-blue-400 mb-2">
                      {iso.title}
                    </h3>
                    <p className="text-foreground/70">
                      {iso.subtitle}
                    </p>
                  </div>
                </div>
                <p className="text-foreground/80 leading-relaxed mb-6">
                  {iso.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 group-hover:gap-3 transition-all">
                  <span>Scopri di più</span>
                  <CheckCircle2 className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 p-8 lg:p-12 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-2xl text-center">
            <h3 className="text-2xl lg:text-3xl mb-4 text-foreground">
              Non trovi la certificazione che cerchi?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Offriamo supporto su molte altre certificazioni e standard internazionali.
              Contattaci per scoprire come possiamo aiutarti.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Contattaci per Maggiori Informazioni
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
