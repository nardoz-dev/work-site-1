import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Shield, Building2, FileSearch, CheckCircle } from "lucide-react";

import { assData } from "../../data/assData"
// const base = import.meta.env.BASE_URL;
// const mkLink = (path: string) => `${base}${path}`;
const base = import.meta.env.BASE_URL;
const mkLink = (path: string) => {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  
  if (path === "") return cleanBase + "/"; 
  if (path.startsWith("#")) return cleanBase + "/" + path; 
  if (path.startsWith("?")) return cleanBase + "/" + path; 
  
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}/${cleanPath}`; 
}

// NOTE: Questo è il modo con il quale posso rendere globale il mkLink nel momento in cui si fà un deploy ( almeno per github pages )
const mainAssignment = Object.keys(assData).map((assCode) => {
  const { icon: IconComponent, title, description, features, badge } = assData[assCode];
  return {
    icon: IconComponent, // Passa il componente React valido
    title,
    description,
    features,
    badge,
    badgeColor: "text-blue-600 border-blue-600",
    //link: `/assignment/${assCode}`,
    link: mkLink(`/assignment/${assCode}`), // Link dinamico
  };
});

export function Assignments() {
  
  return (
    <section id="assignment" className="py-20 bg-gray-50 dark:bg-[#000000] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-blue-600 dark:text-blue-400 tracking-wide mb-2">
            INCARICHI PROFESSIONALI
          </p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Soluzioni su misura per la tua azienda
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Affida a Studio Venturiero la gestione professionale degli incarichi critici 
            per la sicurezza, l'ambiente e la qualità della tua organizzazione.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {mainAssignment.map((assignment, index) => {
            const IconComponent = assignment.icon;
            return (
              <Card
                key={index}
                className="hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 bg-card dark:bg-gray-800 flex flex-col border-2 border-gray-200 dark:border-gray-700 rounded-2xl"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-700 rounded-lg flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <Badge
                      variant="outline"
                      className={`${assignment.badgeColor} text-xs`}
                    >
                      {assignment.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {assignment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col flex-grow">
                  <CardDescription className="text-foreground/70 leading-relaxed">
                    {assignment.description}
                  </CardDescription>

                  <div className="space-y-2 flex-grow">
                    {assignment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white mt-auto">
                    Richiedi Informazioni
                  </Button> */}

                  <a
                    href={assignment.link}
                    className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all inline-block"
                  >
                    Cerca Informazioni
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
