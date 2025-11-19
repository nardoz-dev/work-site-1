import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { CheckCircle } from "lucide-react";
import { assData } from "../../data/assData";

const base = import.meta.env.BASE_URL;
const mkLink = (path: string) => {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  if (path === "") return cleanBase + "/"; 
  if (path.startsWith("#")) return cleanBase + "/" + path; 
  if (path.startsWith("?")) return cleanBase + "/" + path; 
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}/${cleanPath}`; 
}

// 1. RIMOSSA la proprietà 'badgeColor' dall'oggetto. Lo stile ora è nel JSX.
const mainAssignment = Object.keys(assData).map((assCode) => {
  const { icon: IconComponent, title, description, features, badge } = assData[assCode];
  return {
    icon: IconComponent,
    title,
    description,
    features,
    badge,
    link: mkLink(`/assignment/${assCode}`),
  };
});

export function Assignments() {
  return (
    // 2. Sostituiti i colori di sfondo con le classi del tema
    <section id="assignment" className="py-20 bg-background text-foreground transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          {/* Manteniamo il blu come accento specifico per i titoli di sezione */}
          <p className="text-destructive tracking-wide mb-2">
            INCARICHI PROFESSIONALI
          </p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            Soluzioni su misura per la tua azienda
          </h2>
          {/* 3. Usiamo 'text-muted-foreground' per il testo secondario */}
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
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
                // 4. Stile della card unificato con le classi del tema
                className="bg-card text-card-foreground flex flex-col rounded-2xl border border-border hover:shadow-2xl hover:scale-[1.02] transition-all duration-500"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-4">
                    {/* 5. Icona con colori primari */}
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-lg flex items-center justify-center shadow-md">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    {/* 6. Badge con colori primari */}
                    <Badge
                      variant="outline"
                      className="text-primary border-primary text-xs"
                    >
                      {assignment.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-foreground">
                    {assignment.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 flex flex-col flex-grow">
                  {/* 7. Descrizione con colore 'muted' */}
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {assignment.description}
                  </CardDescription>

                  <div className="space-y-2 flex-grow">
                    {assignment.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        {/* Manteniamo il verde per le spunte, è un colore di stato universale */}
                        <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* 8. Link stilizzato come un bottone primario */}
                  <a
                    href={assignment.link}
                    className="mt-auto inline-block text-center bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
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