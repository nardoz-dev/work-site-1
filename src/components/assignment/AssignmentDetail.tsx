import { Button } from "../ui/button";
import { ArrowLeft, Shield, HardHat, ClipboardCheck, Building2, FileText, Users, CheckCircle2 } from "lucide-react";

interface AssignmentDetailProps {
  assignmentType: string;
  onBack: () => void;
}

const assignmentData: Record<string, {
  title: string;
  subtitle: string;
  icon: any;
  description: string;
  responsibilities: string[];
  qualifications: string[];
  services: string[];
}> = {
  "hse": {
    title: "Coordinatore della Sicurezza",
    subtitle: "Coordinatore in fase di progettazione ed esecuzione",
    icon: HardHat,
    description: "Il Coordinatore per la Sicurezza è una figura professionale prevista dal D.Lgs. 81/08 obbligatoria nei cantieri temporanei o mobili in cui è prevista la presenza di più imprese, anche non contemporanea. Il coordinatore garantisce la sicurezza e la salute dei lavoratori durante tutte le fasi del progetto.",
    responsibilities: [
      "Redazione del Piano di Sicurezza e Coordinamento (PSC)",
      "Predisposizione del fascicolo dell'opera",
      "Coordinamento delle imprese esecutrici",
      "Verifica dell'applicazione delle disposizioni del PSC",
      "Segnalazione al committente delle inadempienze",
      "Proposta di sospensione lavori in caso di pericolo grave e imminente",
      "Verifica dei POS delle imprese esecutrici",
      "Organizzazione della cooperazione e coordinamento"
    ],
    qualifications: [
      "Laurea in ingegneria, architettura o geologia",
      "Corso di formazione specifico (120 ore)",
      "Esperienza lavorativa certificata nel settore",
      "Aggiornamento quinquennale (40 ore)"
    ],
    services: [
      "Redazione PSC e fascicolo tecnico dell'opera",
      "Coordinamento sicurezza in fase di progettazione",
      "Coordinamento sicurezza in fase di esecuzione",
      "Verifiche periodiche in cantiere",
      "Redazione verbali e report",
      "Assistenza durante ispezioni ASL"
    ]
  },
  "rspp": {
    title: "RSPP - Responsabile Servizio Prevenzione e Protezione",
    subtitle: "Gestione della sicurezza aziendale",
    icon: Shield,
    description: "Il Responsabile del Servizio di Prevenzione e Protezione (RSPP) è una figura obbligatoria in tutte le aziende, designata dal datore di lavoro per coordinare il servizio di prevenzione e protezione dai rischi. L'RSPP è il punto di riferimento per tutte le questioni relative alla sicurezza sul lavoro.",
    responsibilities: [
      "Individuazione dei fattori di rischio e valutazione dei rischi",
      "Elaborazione delle misure preventive e protettive",
      "Elaborazione delle procedure di sicurezza",
      "Proposta dei programmi di informazione e formazione",
      "Partecipazione alle consultazioni in materia di SSL",
      "Fornire informazioni ai lavoratori sui rischi",
      "Collaborazione con il Medico Competente",
      "Aggiornamento del Documento di Valutazione dei Rischi"
    ],
    qualifications: [
      "Attestato di frequenza a specifici corsi di formazione",
      "Modulo A (28 ore) - Base",
      "Modulo B (varia per settore) - Specialistico",
      "Modulo C (24 ore) - Gestionale",
      "Aggiornamento quinquennale (40-100 ore)"
    ],
    services: [
      "Servizio RSPP esterno completo",
      "Redazione e aggiornamento DVR",
      "Elaborazione procedure di sicurezza",
      "Sopralluoghi e valutazioni dei rischi",
      "Programmazione formazione sicurezza",
      "Assistenza in caso di ispezioni",
      "Redazione DUVRI per interferenze"
    ]
  },
  "auditor": {
    title: "Direttore dei Lavori",
    subtitle: "Direzione e controllo dell'esecuzione dei lavori",
    icon: Building2,
    description: "Il Direttore dei Lavori è il professionista incaricato dal committente di vigilare sulla corretta esecuzione dei lavori, verificando la rispondenza delle opere realizzate al progetto approvato e alle norme tecniche vigenti. Rappresenta il committente nei confronti dell'impresa esecutrice.",
    responsibilities: [
      "Verifica della conformità delle opere al progetto esecutivo",
      "Controllo qualità dei materiali e delle lavorazioni",
      "Direzione e coordinamento delle attività di cantiere",
      "Redazione del giornale dei lavori",
      "Contabilizzazione dei lavori eseguiti",
      "Emissione di Stati Avanzamento Lavori (SAL)",
      "Verifica della sicurezza in cantiere",
      "Gestione delle varianti in corso d'opera"
    ],
    qualifications: [
      "Abilitazione professionale (Ingegnere, Architetto, Geometra)",
      "Iscrizione all'albo professionale",
      "Competenza specifica per tipologia di opere",
      "Esperienza documentata nel settore"
    ],
    services: [
      "Direzione lavori opere edili",
      "Direzione lavori opere strutturali",
      "Direzione lavori impianti tecnologici",
      "Contabilità e amministrazione cantiere",
      "Redazione atti e certificazioni",
      "Coordinamento tecnico",
      "Collaudo tecnico-amministrativo"
    ]
  },
};

export function AssignmentDetail({ assignmentType, onBack }: AssignmentDetailProps) {
  const data = assignmentData[assignmentType] || assignmentData["hse"];
  const IconComponent = data.icon;

  // Usa sempre il colore blu per tutti gli incarichi
  const colorClasses = {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-900",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    icon: "bg-blue-600 dark:bg-blue-700"
  };

  return (
    <div className="min-h-screen  bg-background">
      {/* Header */}
      <div className={`${colorClasses.bg} border-b ${colorClasses.border} transition-colors duration-500`}>
        <div className="container mx-auto px-4 py-12">
          {/* <Button
            variant="ghost"
            onClick={onBack}
            className={`mb-6 ${colorClasses.text} hover:bg-transparent`}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna agli incarichi
          </Button> */}

          <a
          href={`/`}
          className={`mb-6 ${colorClasses.text} hover:bg-transparent flex items-center`}
          >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Torna alla pagina principale
          </a>

          <div className="flex items-start gap-6">
            <div className={`${colorClasses.icon} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <div className="flex-1">
              <h1 className={`text-4xl lg:text-5xl mb-4 ${colorClasses.text}`}>
                {data.title}
              </h1>
              <p className="text-xl text-foreground/70">
                {data.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto space-y-16">
          {/* Description */}
          <section>
            <div className={`p-8 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl`}>
              <p className="text-lg leading-relaxed text-foreground/80">
                {data.description}
              </p>
            </div>
          </section>

          {/* Responsibilities and Qualifications - Two columns */}
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Responsibilities */}
            {/* <section>
              <div className="flex items-center gap-3 mb-6">
                <ClipboardCheck className={`w-7 h-7 ${colorClasses.text}`} />
                <h2 className="text-2xl text-foreground">Responsabilità</h2>
              </div>
              <div className="space-y-3">
                {data.responsibilities.map((resp, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 bg-background border border-border rounded-lg hover:${colorClasses.border} transition-colors`}
                  >
                    <CheckCircle2 className={`w-5 h-5 ${colorClasses.text} flex-shrink-0 mt-0.5`} />
                    <span className="text-sm text-foreground/80">{resp}</span>
                  </div>
                ))}
              </div>
            </section> */}

            {/* Qualifications */}
            {/* <section>
              <div className="flex items-center gap-3 mb-6">
                <FileText className={`w-7 h-7 ${colorClasses.text}`} />
                <h2 className="text-2xl text-foreground">Qualifiche Richieste</h2>
              </div>
              <div className="space-y-3">
                {data.qualifications.map((qual, index) => (
                  <div
                    key={index}
                    className={`flex items-start gap-3 p-4 ${colorClasses.bg} border ${colorClasses.border} rounded-lg`}
                  >
                    <div className={`flex items-center justify-center w-7 h-7 rounded-full ${colorClasses.icon} text-white flex-shrink-0 text-sm`}>
                      {index + 1}
                    </div>
                    <span className="text-sm text-foreground/80 pt-0.5">{qual}</span>
                  </div>
                ))}
              </div>
            </section> */}
          </div>

          {/* Services */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Users className={`w-8 h-8 ${colorClasses.text}`} />
              <h2 className="text-3xl text-foreground">I Nostri Servizi</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.services.map((service, index) => (
                <div
                  key={index}
                  className={`p-5 ${colorClasses.bg} border ${colorClasses.border} rounded-xl ${colorClasses.hover} transition-all hover:shadow-lg`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full ${colorClasses.icon} mt-2 flex-shrink-0`} />
                    <span className="text-foreground/80">{service}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className={`p-8 lg:p-12 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl text-center`}>
            <h3 className="text-2xl lg:text-3xl mb-4 text-foreground">
              Hai bisogno di un {data.title}?
            </h3>
            <p className="text-foreground/70 mb-8 max-w-2xl mx-auto">
              Contattaci per una valutazione personalizzata delle tue esigenze.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                Richiedi un Preventivo
              </Button>
              <Button variant="outline">
                Parla con un Esperto
              </Button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
