import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import {
  Shield,
  Settings,
  HardHat,
  Utensils,
  GraduationCap,
  Zap,
  Award,
  BookOpen,
  Users,
  UserCheck,
  FileCheck,
  Wrench,
} from "lucide-react";

import { isoData } from "../../data/isoData";

// Main Services Grid (matching the second image)

const mainServices = Object.keys(isoData).map((isoCode) => ({
  icon: Award,
  title: isoData[isoCode].title,
  description: isoData[isoCode].description,
  bgColor: "bg-white dark:bg-gray-800",
  textColor: "text-gray-800 dark:text-white",
  iconBg: "bg-blue-600 dark:bg-blue-700",
  link: `/iso/${isoCode}`, // Link dinamico
}));

mainServices.push({
  icon: Award,
  title: "Altre ISO",
  description: "NAVIGA NEL NOSTRO SITO PER VEDERNE ALTRE!",
  bgColor: "bg-white dark:bg-gray-800",
  textColor: "text-gray-800 dark:text-white",
  iconBg: "bg-blue-600 dark:bg-blue-700",
  link: "/iso", // Link statico
});

export function ConsISO() {

  return (
    <section
      id="iso"
      className="py-20 bg-gradient-to-b bg-[#f5f5f7] dark:bg-[#1d1d1f] transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 dark:text-blue-400 tracking-wide mb-2">
            LE NOSTRE CERTIFICAZIONI
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
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {mainServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className={`${service.bgColor} ${service.textColor} rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 border border-gray-200 dark:border-gray-700`}
              >
                <div className="text-center mb-6">
                  <div
                    className={`${service.iconBg} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}
                  >
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl uppercase tracking-wide mb-4">
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-6 text-center min-h-[3rem]">
                  {service.description}
                </p>
                <div className="text-center">
                  {/* <Button
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                    onClick={() => {
                      if (service.title === "Altre ISO") {
                        navigate("/iso");
                      } else {
                        const isoCode = service.title.split(" ")[1]; // Extract ISO code from title
                        navigate(`/iso/${isoCode}`);
                      }
                    }}
                  >
                    Scopri di più
                  </Button> */}
                  <a
                    href={service.link}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all inline-block"
                  >
                    Scopri di più
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


