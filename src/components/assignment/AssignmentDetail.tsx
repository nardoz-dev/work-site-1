import { CTABanner } from "../CTABanner";
import { Button } from "../ui/button";
import { ArrowLeft, Shield, HardHat, ClipboardCheck, Building2, FileText, Users, CheckCircle2 } from "lucide-react";
import { assData } from "../../data/assData";
interface AssignmentDetailProps {
  assignmentType: string;
}

export function AssignmentDetail({ assignmentType }: AssignmentDetailProps) {
  const data = assData[assignmentType] || assData["hse"];
  const IconComponent = data.icon;

  // Usa sempre il colore blu per tutti gli incarichi
  const colorClasses = {
    bg: "bg-blue-50 dark:bg-blue-950/20",
    text: "text-blue-600 dark:text-blue-400",
    border: "border-blue-200 dark:border-blue-900",
    hover: "hover:bg-blue-100 dark:hover:bg-blue-900/30",
    icon: "bg-blue-600 dark:bg-blue-700"
  };

  const base = import.meta.env.BASE_URL;
  const mkLink = (path: string) => {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    
    if (path === "") return cleanBase + "/"; 
    if (path.startsWith("#")) return cleanBase + "/" + path; 
    if (path.startsWith("?")) return cleanBase + "/" + path; 
    
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}/${cleanPath}`; 
  }


  return (
    <>
    <div className="min-h-screen  bg-background">
      {/* Header */}
      <div className={`${colorClasses.bg} border-b ${colorClasses.border} transition-colors duration-500`}>
        <div className="container mx-auto px-4 py-12">
          <a
          href={`${mkLink("#assignment")}`}
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
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Description */}
          <section>
            <div className={`p-8 ${colorClasses.bg} border ${colorClasses.border} rounded-2xl`}>
              <p className="text-lg leading-relaxed text-foreground/80">
                {data.description}
              </p>
            </div>
          </section>
       
          {/* Services */}
          <section>
            <div className="flex items-center gap-3 mb-8">
              <Users className={`w-8 h-8 ${colorClasses.text}`} />
              <h2 className="text-3xl text-foreground">I Nostri Servizi</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data.features.map((service, index) => (
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
     
        </div>
      </div>
    </div>

    {/* CTA Banner */}
    <CTABanner
      title={`Hai bisogno di un ${data.title}?`}
      subtitle="Affidati a noi per una valutazione personalizzata delle tue esigenze."
      buttons={[
        { text: "Contattaci", onClick: () => window.location.href = "/#contact" },
        { text: "Parla con un esperto", onClick: () => window.location.href = "/#contact", className: "bg-gray-100 text-blue-600 hover:bg-gray-200" }
      ]}
    />
    </>

  );
}
