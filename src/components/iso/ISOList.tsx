import { Button } from "../ui/button";
import { useEffect } from "react";
import { ArrowLeft, Award, CheckCircle2, ChevronRight } from "lucide-react";
import { ISOModal } from "./ISOModal";
import { useState } from "react";
import { CTABanner } from "../CTABanner";
import { isoData } from "../../data/isoData";
import { ImageWithFallback } from "../utils/fallback";

export function ISOList() {

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState<string | null>(null);

  const handleISOClick = (isoCode: string) => {
    setSelectedISO(isoCode);
    setModalOpen(true);
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
              href={`${mkLink("#iso")}`}
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
            {/* <div className="grid md:grid-cols-2 gap-6">
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
            </div> */}
            <div className="space-y-6">
            {Object.entries(isoData).map(([code,iso]) => (
              <div
                key={code}
                onClick={() => handleISOClick(code)}
                className="relative w-full h-[250px] overflow-hidden rounded-2xl cursor-pointer group transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src={iso.imageUrl}
                    alt={iso.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex items-center">
                  <div className="container mx-auto px-8">
                    <div className="max-w-3xl">

                      {/* Title */}
                      <h2 className="text-3xl lg:text-4xl text-white mb-3 group-hover:text-blue-400 transition-colors">
                        {iso.title}
                      </h2>

                      {/* Subtitle */}
                      <h3 className="text-xl text-white/90 mb-4">
                        {iso.subtitle}
                      </h3>

                      {/* Description */}
                      <p className="text-white/80 text-sm lg:text-base leading-relaxed mb-4 line-clamp-2">
                        {iso.description}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center text-blue-400 group-hover:text-blue-300 transition-colors">
                        <span className="mr-2">Scopri di più</span>
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

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
