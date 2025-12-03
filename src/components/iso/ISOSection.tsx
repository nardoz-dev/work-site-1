import { Button } from "../ui/button";
import { Award } from "lucide-react";
import { useState } from "react";
import { isoData } from "../../data/isoData";
import { ISOModal } from "./ISOModal";

// 1. RIMOSSI I COLORI HARD-CODED. L'oggetto ora contiene solo dati.
const mainServices = Object.keys(isoData).map((isoCode) => ({
  icon: Award,
  title: isoData[isoCode].title,
  description: isoData[isoCode].subtitle,
  link: `/iso/${isoCode}`,
  code: isoCode,
  modal: true,
}));

const base = import.meta.env.BASE_URL;
const mkLink = (path: string) => {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}/${cleanPath}`; 
}

mainServices.push({
  icon: Award,
  title: "Altre ISO",
  description: "Lista completa di tutte le ISO.",
  link: mkLink("/iso"), 
  code: " ",
  modal: false,
});

export function ConsISO() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState<string | null>(null);

  const handleISOClick = (service: typeof mainServices[0]) => {
    if(service.modal && service.code) {
      setSelectedISO(service.code);
      setModalOpen(true);
    } else if (service.link) {
      window.location.href = service.link;
    }
  };

  return (
    <>
      {/* 2. UTILIZZO DELLE CLASSI SEMANTICHE DI TAILWIND */}
      <section
        id="iso"
        className="py-20 bg-background text-foreground transition-colors duration-500"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 tracking-wide mb-2">
              LE NOSTRE PRINCIPALI CERTIFICAZIONI
            </p>
            <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
              Studio Venturiero
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Offriamo una consulenza ISO completa e personalizzata, 
              con un percorso guidato che semplifica ogni fase fino alla certificazione.
              Ti accompagniamo passo dopo passo, garantendo supporto continuo 
              e assistenza dedicata durante gli audit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {mainServices.slice(0, 3).map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  // 3. Stile applicato direttamente nel JSX usando le nuove classi
                  className="bg-card text-card-foreground rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500 border border-border"
                >
                  <div className="text-center mb-4">
                    <div
                      className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                    >
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg uppercase tracking-wide mb-2">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 text-center min-h-[2.5rem]">
                    {service.description}
                  </p>
                  <div className="text-center">
                    <Button 
                      onClick={() => handleISOClick(service)}
                      // 4. Anche il bottone usa le classi semantiche
                      className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md shadow-sm hover:shadow-md transition-all"
                    >
                      Scopri di più
                    </Button>
                  </div>
                </div>
              );
            })}
            {(() => {
            const service = mainServices[mainServices.length - 1];
            const IconComponent = service.icon;
            return (
              <div              
                  className="bg-card text-card-foreground rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500 border border-border"
              >
                <div className="text-center mb-4">
                  <div
                      className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md"
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg uppercase tracking-wide mb-2">{service.title}</h3>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-center min-h-[2.5rem]">{service.description}</p>
                <div className="text-center">
                  <Button
                    onClick={() => handleISOClick(service)}                      
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-md shadow-sm hover:shadow-md transition-all"
                  >
                       Scopri di più
                  </Button>
                </div>
              </div>
            );
            })()}
          </div>
        </div>
      </section>

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