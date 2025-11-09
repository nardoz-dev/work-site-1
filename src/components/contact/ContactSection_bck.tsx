import { 
  FileText, 
  Phone, 
  Calendar, 
  Shield, 
  Building2, 
  HardHat, 
  Utensils, 
  Users, 
  GraduationCap, 
  FileCheck, 
  Mail, 
  MapPin, 
  ChevronRight,
  Clock,
  MessageSquare,
  CheckCircle2
} from "lucide-react";
import { Button } from "../ui/button";

const quickActions = [
  {
    icon: FileText,
    title: "Richiedi un preventivo",
    link: "#"
  },
  {
    icon: Calendar,
    title: "Prenota una consulenza personalizzata",
    link: "#"
  },
  // {
  //   icon: CheckCircle2,
  //   title: "Verifica lo stato della pratica",
  //   link: "#"
  // }
];

const serviceCategories = [
  {
    icon: Shield,
    label: "Sicurezza sul Lavoro",
    link: "#"
  },
  {
    icon: Building2,
    label: "Sistemi di Gestione",
    link: "#"
  },
  {
    icon: HardHat,
    label: "Sicurezza Cantieri",
    link: "#"
  },
  {
    icon: Utensils,
    label: "Sicurezza Alimentare",
    link: "#"
  },
  {
    icon: Users,
    label: "Consulenza Aziendale",
    link: "#"
  },
  {
    icon: GraduationCap,
    label: "Formazione",
    link: "#"
  },
  {
    icon: FileCheck,
    label: "Verifiche e Certificazioni",
    link: "#"
  }
];

const contactMethods = [
  {
    title: "Supporto telefonico",
    description: "Puoi parlare con un o una consulente chiamando il numero di telefono del supporto del tuo Paese o della tua area geografica.",
    link: "Trova il numero per il tuo Paese",
    linkHref: "#"
  },
  {
    title: "Assistenza via email",
    description: "Visita la pagina dei moduli di contatto per inviare la tua richiesta e ricevere supporto personalizzato.",
    link: "Invia una richiesta",
    linkHref: "#"
  },
  {
    title: "Consulenza in sede",
    description: "Prenota un appuntamento presso il nostro ufficio per una consulenza personalizzata sui tuoi progetti.",
    link: "Prenota un appuntamento",
    linkHref: "#"
  }
];

const otherTopics = [
  "Operatori e consulenti certificati",
  "Verifica la copertura dell'assistenza",
  "Documenti e normative di riferimento",
  "FAQ e guide operative"
];

export function ContactNew() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl text-foreground mb-4">
            Contatta Studio Venturiero
          </h1>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {quickActions.map((action, index) => {
            const IconComponent = action.icon;
            return (
              <a
                key={index}
                href={action.link}
                className="group flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center">
                  <IconComponent className="w-12 h-12 text-foreground/80" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-blue-600 dark:text-blue-500 group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                  {action.title} →
                </p>
              </a>
            );
          })}
        </div>

        {/* Category Selection */}
        <div className="mb-20">
          <h2 className="text-center text-3xl mb-12 text-foreground">
            Scegli un servizio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {serviceCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <a
                  key={index}
                  href={category.link}
                  className="group flex flex-col items-center text-center p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition-all duration-300"
                >
                  <div className="w-14 h-14 mb-3 flex items-center justify-center">
                    <IconComponent className="w-10 h-10 text-foreground/70 group-hover:text-foreground transition-colors" strokeWidth={1.5} />
                  </div>
                  <p className="text-xs text-foreground/80 group-hover:text-foreground transition-colors">
                    {category.label}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {contactMethods.map((method, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-xl text-foreground">
                {method.title}
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                {method.description}
              </p>
              <a
                href={method.linkHref}
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group"
              >
                {method.link}
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>

        {/* Detailed Contact Info */}
        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-8 md:p-12 mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Telefono</p>
                  <a href="tel:333-------" className="text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    +39 333 -- -- ---
                  </a>
                </div>
              </div>
              <p className="text-xs text-foreground/50 ml-13">Disponibile 24/7</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Email</p>
                  <a href="mailto:info@studioventuriero.it" className="text-foreground hover:text-blue-600 dark:hover:text-blue-500 transition-colors">
                    info@studioventuriero.it
                  </a>
                </div>
              </div>
              <p className="text-xs text-foreground/50 ml-13">Risposta in 24h</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-600 dark:bg-blue-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-foreground/60">Sede</p>
                  <p className="text-foreground text-sm">Via Aaaaaa Km 106,500</p>
                  <p className="text-foreground text-sm">Aaaaaa (LT) - 04019</p>
                </div>
              </div>
              <p className="text-xs text-foreground/50 ml-13">Lun-Ven: 9:00 - 18:00</p>
            </div>
          </div>
        </div>

        {/* Other Topics */}
        <div className="text-center">
          <h2 className="text-2xl mb-8 text-foreground">
            Altri argomenti
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {otherTopics.map((topic, index) => (
              <a
                key={index}
                href="#"
                className="inline-flex items-center gap-1 text-sm text-blue-600 dark:text-blue-500 hover:text-blue-700 dark:hover:text-blue-400 transition-colors group"
              >
                {topic}
                <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
