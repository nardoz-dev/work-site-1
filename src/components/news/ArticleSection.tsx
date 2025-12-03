import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, ChevronRight, Eye, Clock } from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";

// ... (newsArticles data and mkLink function remain the same)
const base = import.meta.env.BASE_URL;
const mkLink = (path: string) => `${base}${path}`;

const newsArticles = [
  {
    id: 1,
    category: "News",
    title: "Certificazione ISO per PMI: cos'è, vantaggi, costi e come ottenerla",
    date: "Set 8, 2025",
    excerpt: "Guida completa alla certificazione ISO per le piccole e medie imprese. Scopri tutti i vantaggi e i passaggi necessari per ottenere la certificazione.",
    image: "https://images.unsplash.com/photo-1530984794059-26f732e6b7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG5ld3MlMjBhcnRpY2xlJTIwb2ZmaWNlJTIwZG9jdW1lbnRzfGVufDF8fHx8MTc1NzY5MDIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    readTime: "5 min",
    views: "1.2k"
  },
  {
    id: 2,
    category: "Corsi - Eventi",
    title: "CORSO LEAD AUDITOR ISO 9001",
    date: "Apr 7, 2025",
    excerpt: "Formazione online, discussione, esperienza pratica nelle diverse fasi dell'audit. Diventa un auditor certificato.",
    image: "https://images.unsplash.com/photo-1755548413928-4aaeba7c740e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYWZldHklMjB0cmFpbmluZyUyMHdvcmtzaG9wJTIwbWVldGluZ3xlbnwxfHx8fDE3NTc2OTAyMjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    readTime: "3 min",
    views: "890"
  },
  {
    id: 3,
    category: "Normative",
    title: "COME LA ISO 37301 RAFFORZA IL MODELLO 231: GUIDA ALLA NUOVA UNI 11961:2024",
    date: "Apr 30, 2025",
    excerpt: "Analisi approfondita di come la ISO 37301 rafforza il Modello 231 con la nuova norma UNI 11961:2024.",
    image: "https://images.unsplash.com/photo-1706517212966-43695534fe88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBzYWZldHklMjBndWlkZWxpbmVzJTIwZG9jdW1lbnR8ZW58MXx8fHwxNzU3NjkwMjMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    isNew: true,
    readTime: "8 min",
    views: "2.1k"
  }
];


export function NewsSection() {
  const base = import.meta.env.BASE_URL; 
  const mkLink = (path: string) => {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    
    if (path === "") return cleanBase + "/"; 
    if (path.startsWith("#")) return cleanBase + "/" + path; 
    if (path.startsWith("?")) return cleanBase + "/" + path; 
    
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}/${cleanPath}`; 
  }

  return (
    // 1. Sfondo della sezione unificato con il tema
    <section id="article" className="py-20 bg-muted text-foreground transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          {/* 2. Testi unificati con il tema */}
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
            NEWS - EVENTI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Rimani aggiornato sulle ultime novità in materia di sicurezza, 
            formazione e certificazioni con i nostri articoli e eventi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <a
              key={article.id}
              href={mkLink(`/news/${article.id}`)}
              className="group h-full"
            >
              <Card 
                key={article.id} 
                // 3. Stile della card unificato
                className="group relative bg-card border border-border hover:scale-[1.02] transition-all duration-500 overflow-hidden rounded-2xl flex flex-col h-full"
              >
                <div className="relative">
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    
                    {/* 4. Badge della categoria unificato */}
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-card/95 text-card-foreground backdrop-blur-sm">
                        {article.category}
                      </Badge>
                    </div>
                    
                    {/* 5. Badge "NUOVO" unificato */}
                    {article.isNew && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-primary text-primary-foreground shadow-lg">
                          NUOVO
                        </Badge>
                      </div>
                    )}
                    
                    {/* Stats overlay - i colori qui sono stilistici e possono rimanere */}
                    <div className="absolute bottom-4 right-4 flex items-center gap-3 text-white text-xs">
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                        <Clock className="w-3 h-3" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  {/* 6. Testo della data unificato */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  
                  {/* 7. Titolo della card unificato */}
                  <CardTitle className="text-lg leading-tight text-foreground group-hover:text-primary transition-colors cursor-pointer">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="pt-0 flex-grow flex flex-col">
                  {/* 8. Descrizione della card unificata */}
                  <CardDescription className="mb-6 line-clamp-3 text-muted-foreground flex-grow">
                    {article.excerpt}
                  </CardDescription>
                  
                  {/* 9. Link "Leggi tutto" unificato */}
                  <div
                    className="p-0 text-primary group-hover:text-primary/90 self-start mt-auto font-medium"
                  >
                    Leggi tutto 
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        <div className="text-center mt-12">
          {/* 10. Bottone "Vedi tutti" unificato (stile outline) */}
          <a
            href={mkLink("/news")}
            className="inline-block px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
          >
            Vedi tutti gli articoli
          </a>
        </div>
      </div>
    </section>
  );
}