import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Calendar, ChevronRight, Eye, Clock, ArrowLeft, Filter } from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";

const allNewsArticles = [
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
  },
  {
    id: 4,
    category: "News",
    title: "Nuove Linee Guida ISO 45001: Aggiornamenti per la Sicurezza sul Lavoro 2025",
    date: "Gen 15, 2025",
    excerpt: "Scopri le nuove linee guida e gli aggiornamenti per la ISO 45001 per garantire la massima sicurezza sul lavoro nella tua azienda.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    readTime: "6 min",
    views: "1.8k"
  },
  {
    id: 5,
    category: "Corsi - Eventi",
    title: "WORKSHOP: Gestione Ambientale e ISO 14001 - Strategie Avanzate",
    date: "Feb 22, 2025",
    excerpt: "Workshop pratico sulla gestione ambientale secondo ISO 14001. Casi studio e strategie per implementare un sistema di gestione efficace.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    readTime: "4 min",
    views: "945"
  },
  {
    id: 6,
    category: "Normative",
    title: "Compliance Normativa 2025: Cosa Cambia per le Aziende Italiane",
    date: "Mar 10, 2025",
    excerpt: "Panoramica completa dei cambiamenti normativi in materia di sicurezza, ambiente e qualità per le aziende italiane nel 2025.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    isNew: true,
    readTime: "10 min",
    views: "3.2k"
  },
  {
    id: 7,
    category: "News",
    title: "Digitalizzazione dei Processi di Audit: Il Futuro della Certificazione",
    date: "Dic 5, 2024",
    excerpt: "Come la digitalizzazione sta trasformando i processi di audit e certificazione. Vantaggi, strumenti e best practice.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    readTime: "7 min",
    views: "1.5k"
  },
  {
    id: 8,
    category: "Corsi - Eventi",
    title: "CORSO: Formazione RSPP - Responsabile Servizio Prevenzione Protezione",
    date: "Nov 18, 2024",
    excerpt: "Corso completo per diventare RSPP. Moduli A, B e C con esercitazioni pratiche e certificazione finale.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    readTime: "3 min",
    views: "2.4k"
  },
  {
    id: 9,
    category: "Normative",
    title: "GDPR e Sicurezza Aziendale: Integrazione con i Sistemi di Gestione",
    date: "Ott 28, 2024",
    excerpt: "Come integrare i requisiti del GDPR con i sistemi di gestione ISO 9001, 14001 e 45001 per una compliance completa.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080",
    readTime: "9 min",
    views: "1.9k"
  }
];

interface NewsPageProps {
  onBack?: () => void;
}

export function AllNews({ onBack }: NewsPageProps) {
  return (
    <section className="py-20 bg-[#f5f5f7] dark:bg-[#1d1d1f] transition-colors duration-500 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Header with Back Button */}
        <div className="mb-12">
          {onBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-6 text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla Home
            </Button>
          )}
          
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl text-gray-900 dark:text-white mb-4">
              Tutti gli Articoli
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-3xl mx-auto">
              Esplora tutti i nostri articoli su sicurezza, formazione, certificazioni e normative. 
              Rimani sempre aggiornato con le ultime novità del settore.
            </p>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap gap-3 justify-center">
          <Button variant="outline" className="bg-blue-600 text-white border-blue-600 hover:bg-blue-700">
            Tutti
          </Button>
          <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
            News
          </Button>
          <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
            Corsi - Eventi
          </Button>
          <Button variant="outline" className="border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
            Normative
          </Button>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {allNewsArticles.map((article) => (
            <Card 
              key={article.id} 
              className="group relative bg-white dark:bg-[#2d2d2f] border border-gray-200/50 dark:border-gray-700/50 hover:scale-[1.02] transition-all duration-500 overflow-hidden rounded-2xl"
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
              
              <CardContent className="pt-0">
                <CardDescription className="mb-6 line-clamp-3 text-gray-600 dark:text-gray-400">
                  {article.excerpt}
                </CardDescription>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
                >
                  Leggi tutto
                  <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-16">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Mostrando {allNewsArticles.length} articoli
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white"
          >
            Carica altri articoli
          </Button>
        </div>
      </div>
    </section>
  );
}
