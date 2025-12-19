import { Button } from "../ui/button";
import { 
  Shield, 
  FileText, 
  HardHat, 
  FileCheck, 
  Stethoscope, 
  Settings,
  X,
} from "lucide-react";
import { useState, useEffect } from "react";
import { securityFeatures } from "../../data/securityData";
import { activeFeature } from "../../stores/navigationStore";
import { useStore } from "@nanostores/react";

export function Security() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);
  const featureToOpen = useStore(activeFeature);
  useEffect(() => {
    if (featureToOpen) {
      const feature = securityFeatures.find(f => f.id === featureToOpen);
      if (feature) {
        setSelectedFeature(feature.label);
      }
    } else {
      setSelectedFeature(null);
    }
  }, [featureToOpen]);

  return (
    // PRIMA: bg-[#f5f5f7] dark:bg-[#1d1d1f]
    // DOPO: Usiamo le variabili di background del tema. 'muted' per il grigio chiaro.
    <section id="security" className="py-20 bg-muted text-foreground transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          {/* Manteniamo un blu specifico come accento, ma potremmo usare text-primary */}
          <p className="text-destructive tracking-wide mb-4">SICUREZZA SUL LAVORO</p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Affidati a chi fa della sicurezza un valore, <span className="text-destructive">non un obbligo.</span>
            <br />
            Sicurezza sul lavoro: la nostra esperienza al servizio della tua azienda.
          </h2>
          {/* PRIMA: text-foreground/70 */}
          {/* DOPO: Usiamo il colore "muted" per il testo secondario */}
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            La consulenza per la sicurezza sul lavoro è un servizio fondamentale per garantire la tutela dei lavoratori, 
            la conformità alle normative vigenti e la prevenzione degli infortuni e delle malattie professionali.
            Attraverso un approccio tecnico e personalizzato, STUDIO VENTURIERO supporta le aziende nell’applicazione del D.Lgs.
             81/2008 e di tutte le disposizioni in materia di salute e sicurezza, assicurando una gestione efficace, 
             documentata e conforme del sistema sicurezza.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-8">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            onClick={() => window.location.href = "/#contact"}
          >
            Contattami per una consulenza gratuita
          </Button>
        </div>

        {/* Feature Cards Grid */}
        <div className="h-[650px] bg-card/50 rounded-3xl p-6 backdrop-blur-sm border border-gray-200/50 dark:border-gray-800/50">
          <div className="h-full grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-4" style={{ gridAutoFlow: 'dense' }}>
            {securityFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              const isSelected = selectedFeature === feature.label;
              const isLastElement = index === securityFeatures.length - 1; //To handle last case
              const isLastElement_v2 = index == securityFeatures.length -2; //To handle last case even if the last is selected
              
              const selectedSpanClass = isSelected 
              ? "col-span-3 row-span-3"
              : "col-span-3 row-span-3";

              return (
                <button
                  key={index}
                  onClick={() => setSelectedFeature(isSelected ? null : feature.label)}
                  className={`group flex rounded-2xl transition-all duration-300 border-2 relative overflow-hidden ${
                    isSelected
                      ? `${selectedSpanClass} bg-blue-50 dark:bg-blue-950/20 border-primary shadow-lg p-6 items-start`
                      : "bg-white dark:bg-[#1d1d1f] border-transparent hover:bg-gray-50 dark:hover:bg-white/5 hover:shadow-md p-6 flex-col items-center text-center justify-center"
                  }`}
                  style={
                    isSelected && (isLastElement || isLastElement_v2)
                      ? { gridRow: '1 / 3', gridColumn: '3 / 5' }
                      : undefined
                  }
              >
                  {isSelected ? (
                    // Expanded Layout
                    <div className="flex items-start h-full w-full">
                      <div className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-xl bg-primary">
                        <IconComponent className="w-6 h-6 text-white" strokeWidth={1.5} />
                      </div>
                      
                      <div className="flex-1 text-left ml-4 pr-12 h-full flex flex-col">
                        <p className="text-destructive text-lg mb-3">
                          {feature.label}
                        </p>
                        <p className="text-foreground/70 text-sm leading-relaxed">
                          {feature.description}
                        </p>

                        <Button 
                          size="lg" 
                          className="mt-auto text-white hover:text-white/90 px-0"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.location.href = "/#contact";
                          }}
                        >
                          Contattaci
                        </Button>
                      </div>
                      
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedFeature(null);
                        }}
                        className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ) : (
                    // Collapsed Layout
                    <>
                      <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30 transition-colors">
                        <IconComponent 
                          className="w-8 h-8 text-gray-700 dark:text-gray-300 group-hover:text-primary dark:group-hover:text-primary transition-colors" 
                          strokeWidth={1.5} 
                        />
                      </div>
                      <p className="text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                        {feature.label}
                      </p>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
