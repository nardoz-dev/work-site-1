import { Button } from "../ui/button";
import { Award } from "lucide-react";
import { useState } from "react";
import { isoData } from "../../data/isoData";
import { ISOModal } from "./ISOModal";

// Main ISO - This is for the cards displayed in the main ISO section

const mainServices = Object.keys(isoData).map((isoCode) => ({
  icon: Award,
  title: isoData[isoCode].title,
  description: isoData[isoCode].description,
  bgColor: "bg-white dark:bg-gray-800",
  textColor: "text-gray-800 dark:text-white",
  iconBg: "bg-blue-600 dark:bg-blue-700",
  link: `/iso/${isoCode}`, // Link dinamico
  code: isoCode,
  modal: true,
}));

mainServices.push({
  icon: Award,
  title: "Altre ISO",
  description: "Lista completa di tutte le ISO.",
  bgColor: "bg-white dark:bg-gray-800",
  textColor: "text-gray-800 dark:text-white",
  iconBg: "bg-blue-600 dark:bg-blue-700",
  link: "/iso", // Link statico
  code: " ",
  modal: false,
});


export function ConsISO() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState<string | null>(null);

  const handleISOClick = (service: typeof mainServices[0]) => {
    if(service.modal && service.code) {
      // Open Modal for the specific ISO
      setSelectedISO(service.code);
      setModalOpen(true);
    } else if (service.link) {
      // This is for handling the case "All other ISOs"
      window.location.href = service.link;
    }

  };
  return (
    <>
      <section
        id="iso"
        className="py-20 bg-gradient-to-b bg-[#f5f5f7] dark:bg-[#1d1d1f] transition-colors duration-500"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 tracking-wide mb-2">
              LE NOSTRE PRINCIPALI CERTIFICAZIONI
            </p>
            <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
              Studio Venturiero
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Offriamo una vasta gamma di certificazioni per il
              lavoro. Ecco le nostre principali ISO, pensate per
              soddisfare le esigenze della tua azienda.
            </p>
          </div>

          {/* Main Services Grid - 2x2 layout with better spacing */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {mainServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
              <div
                key={index}
                className={`${service.bgColor} ${service.textColor} rounded-xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-500 border border-gray-200 dark:border-gray-700`}
              >
                <div className="text-center mb-4">
                <div
                  className={`${service.iconBg} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-md`}
                >
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg uppercase tracking-wide mb-2">
                  {service.title}
                </h3>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-center min-h-[2.5rem]">
                {service.description}
                </p>
                <div className="text-center">
                <Button 
                  onClick={() => {
                  handleISOClick(service);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-6 py-2 rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  Scopri di più
                </Button>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal for ISO Details */}
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


