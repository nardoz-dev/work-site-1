import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
            // PRIMA: bg-blue-600 hover:bg-blue-700 text-white
            // DOPO: Usiamo le classi semantiche per il bottone primario
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg"
            onClick={() => window.location.href = "/#contact"}
          >
            Contattami per una consulenza gratuita
          </Button>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {securityFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isSelected = selectedFeature === feature.label;
            return (
              <button
                key={index}
                onClick={() => setSelectedFeature(isSelected ? null : feature.label)}
                // Stile dinamico basato sulle classi del tema
                className={`group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 border-2 ${
                  isSelected
                    ? "bg-accent border-primary shadow-lg" // Stato selezionato
                    : "bg-card border-transparent hover:bg-accent hover:shadow-md" // Stato non selezionato
                }`}
              >
                <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-xl transition-colors ${
                  isSelected
                    ? "bg-primary" // Icona selezionata
                    : "bg-muted group-hover:bg-accent" // Icona non selezionata
                }`}>
                  <IconComponent 
                    className={`w-8 h-8 transition-colors ${
                      isSelected
                        ? "text-primary-foreground" // Icona SVG selezionata
                        : "text-muted-foreground group-hover:text-primary" // Icona SVG non selezionata
                    }`} 
                    strokeWidth={1.5} 
                  />
                </div>
                <p className={`text-sm transition-colors ${
                  isSelected
                    ? "text-primary" // Testo selezionato
                    : "text-muted-foreground group-hover:text-foreground" // Testo non selezionato
                }`}>
                  {feature.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Feature Description */}
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">
            {selectedFeature && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                // PRIMA: bg-white dark:bg-[#1d1d1f] ... border-gray-200 dark:border-gray-800
                // DOPO: Usiamo le classi per le "card"
                className="bg-card rounded-2xl p-6 shadow-lg border border-border"
              >
                <div className="flex items-start gap-3">
                  {/* PRIMA: bg-blue-600 */}
                  {/* DOPO: bg-primary */}
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const feature = securityFeatures.find(f => f.label === selectedFeature);
                      if (!feature) return null;
                      const IconComponent = feature.icon;
                      // PRIMA: text-white
                      // DOPO: text-primary-foreground
                      return <IconComponent className="w-5 h-5 text-primary-foreground" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-foreground mb-1">{selectedFeature}</h3>
                    {/* PRIMA: text-foreground/70 */}
                    {/* DOPO: text-muted-foreground */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {securityFeatures.find(f => f.label === selectedFeature)?.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
