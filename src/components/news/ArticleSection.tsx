import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, ChevronRight, Eye, Clock } from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";

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
  return (
    <section id="news"className="py-20 bg-[#f5f5f7] dark:bg-[#1d1d1f] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
            NEWS - EVENTI
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Rimani aggiornato sulle ultime novità in materia di sicurezza, 
            formazione e certificazioni con i nostri articoli e eventi.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.map((article) => (
            <Card 
              key={article.id} 
              className="group relative bg-white dark:bg-[#2d2d2f] border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden rounded-2xl flex flex-col"
            >
              <div className="relative">
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Category Badge - Bottom Left */}
                  <div className="absolute bottom-4 left-4">
                    <Badge className="bg-white/95 dark:bg-gray-800/95 text-gray-800 dark:text-white backdrop-blur-sm">
                      {article.category}
                    </Badge>
                  </div>
                  
                  {/* New Badge - Top Right */}
                  {article.isNew && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white shadow-lg">
                        NUOVO
                      </Badge>
                    </div>
                  )}
                  
                  {/* Stats overlay */}
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
                <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>{article.date}</span>
                </div>
                
                <CardTitle className="text-lg leading-tight text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-500 transition-colors cursor-pointer">
                  {article.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0 flex-grow flex flex-col">
                <CardDescription className="mb-6 line-clamp-3 text-gray-600 dark:text-gray-400 flex-grow">
                  {article.excerpt}
                </CardDescription>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400 self-start mt-auto"
                >
                  Leggi tutto
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/news/"
            className="inline-block px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white rounded-lg transition-colors"
          >
            Vedi tutti gli articoli
          </a>
        </div>
      </div>
    </section>
  );
}