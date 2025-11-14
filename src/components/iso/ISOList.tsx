import { Button } from "../ui/button";
import { useEffect } from "react";
import { ArrowLeft, Award, CheckCircle2 } from "lucide-react";
import { ISOModal } from "./ISOModal";
import { useState } from "react";
import { CTABanner } from "../CTABanner";
import { isoData } from "../../data/isoData";

export function ISOList() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState<string | null>(null);

  const handleISOClick = (isoCode: string) => {
    setSelectedISO(isoCode);
    setModalOpen(true);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isoToOpen = params.get('open'); 
    if (isoToOpen) {
      const isValidISO = Object.keys(isoData).includes(isoToOpen);
      if (isValidISO) {
        handleISOClick(isoToOpen);
      }
    }
  }, []);

  return (  
    <>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900 transition-colors duration-500">
          <div className="container mx-auto px-4 py-12">
              <a
              href={`/#iso`}
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
              {Object.entries(isoData).map(([code, iso]) => (
                <div
                  key={code}
                  className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleISOClick(code)}
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
                    <span>Scopri di piu</span>
                    <CheckCircle2 className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            {/* <div className="mt-16 p-8 lg:p-12 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-2xl text-center">
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
            </div> */}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <CTABanner
        title="Non trovi la certificazione che cerchi?"
        subtitle="Rivolgiti a noi per scoprire come possiamo aiutarti."
        buttonText="Contattaci"
        onButtonClick={() => window.location.href = "/#contact"}
      />

      {/* 8. Renderizza il modale in base allo stato locale */}
      {selectedISO && modalOpen && (
        <ISOModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          isoType={selectedISO}
        />
      )}


    
    </>
  );
}
