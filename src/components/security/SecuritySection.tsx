import { Button } from "../ui/button";
import { 
  Shield, 
  FileText, 
  HardHat, 
  FileCheck, 
  Stethoscope, 
  Settings,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const securityFeatures = [
  {
    icon: Shield,
    label: "Valutazione dei Rischi (DVR)",
    description: "Analisi approfondita dei rischi aziendali con soluzioni personalizzate per ogni ambiente di lavoro."
  },
  {
    icon: FileText,
    label: "Valutazioni specifiche dei rischi",
    description: "Documento di Valutazione dei Rischi conforme al D.Lgs 81/08 con aggiornamenti periodici inclusi."
  },
  {
    icon: HardHat,
    label: "Piani di emergenza ed evacuazione",
    description: "POS per cantieri e attività complesse, garantendo la massima sicurezza durante i lavori."
  },
  {
    icon: FileCheck,
    label: "Verifiche ed audit interni",
    description: "Supporto completo per tutti gli adempimenti normativi in materia di sicurezza sul lavoro."
  },
  {
    icon: Stethoscope,
    label: "Formazione dei lavoratori",
    description: "Coordinamento delle visite mediche periodiche e gestione della documentazione sanitaria."
  },
  {
    icon: Settings,
    label: "Sorveglianza sanitaria e visite mediche",
    description: "Verifica e manutenzione programmata di impianti e attrezzature secondo le normative vigenti."
  },
  {
    icon: FileText,
    label: "HACCP",
    description: "Analisi e gestione dei rischi alimentari secondo il protocollo HACCP."
  },
  {
    icon: HardHat,
    label: "Sopralluoghi e controlli di monitoraggio",
    description: "Verifiche periodiche per garantire la sicurezza nei luoghi di lavoro."
  },
];

export function Security() {
  const [selectedFeature, setSelectedFeature] = useState<string | null>(null);

  return (
    <section id="security" className="py-20 bg-[#f5f5f7] dark:bg-[#000000] transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 tracking-wide mb-4">SICUREZZA SUL LAVORO</p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Affidati a chi fa della sicurezza un valore, <span className="text-blue-600 dark:text-blue-400">non un obbligo.</span>
            <br />
            Sicurezza sul lavoro: la nostra esperienza al servizio della tua azienda.
          </h2>
          <p className="text-foreground/70 text-lg leading-relaxed max-w-3xl mx-auto">
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
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
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
                className={`group flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 border-2 ${
                  isSelected
                    ? "bg-blue-50 dark:bg-blue-950/20 border-blue-600 dark:border-blue-500 shadow-lg"
                    : "bg-white dark:bg-[#1d1d1f] border-transparent hover:bg-gray-50 dark:hover:bg-white/5 hover:shadow-md"
                }`}
              >
                <div className={`w-16 h-16 mb-4 flex items-center justify-center rounded-xl transition-colors ${
                  isSelected
                    ? "bg-blue-600 dark:bg-blue-600"
                    : "bg-gray-100 dark:bg-gray-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/30"
                }`}>
                  <IconComponent 
                    className={`w-8 h-8 transition-colors ${
                      isSelected
                        ? "text-white"
                        : "text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                    }`} 
                    strokeWidth={1.5} 
                  />
                </div>
                <p className={`text-sm transition-colors ${
                  isSelected
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-foreground/80 group-hover:text-foreground"
                }`}>
                  {feature.label}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Feature Description - Fixed Height Container */}
        <div className="min-h-[120px]">
          <AnimatePresence mode="wait">
            {selectedFeature && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-[#1d1d1f] rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    {(() => {
                      const feature = securityFeatures.find(f => f.label === selectedFeature);
                      if (!feature) return null;
                      const IconComponent = feature.icon;
                      return <IconComponent className="w-5 h-5 text-white" />;
                    })()}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg text-foreground mb-1">{selectedFeature}</h3>
                    <p className="text-foreground/70 text-sm leading-relaxed">
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