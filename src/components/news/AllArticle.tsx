import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  ArrowLeft,
  Search,
  Filter,
  Calendar,
  Clock,
} from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";
import { CTABanner } from "../CTABanner";


const allArticles = [
  {
    id: "1",
    title:
      "Nuove Normative ISO 2024: Cosa Cambia per le Aziende",
    excerpt:
      "Scopri tutti gli aggiornamenti delle normative ISO 2024 e come adeguare la tua azienda ai nuovi standard internazionali.",
    category: "Normative",
    date: "15 Gennaio 2024",
    readTime: "5 min",
    image: "business meeting",
  },
  {
    id: "2",
    title:
      "L'Importanza della Formazione sulla Sicurezza sul Lavoro",
    excerpt:
      "Una guida completa sull'importanza della formazione in materia di sicurezza e gli obblighi normativi secondo il D.Lgs 81/08.",
    category: "Sicurezza",
    date: "10 Gennaio 2024",
    readTime: "4 min",
    image: "safety training",
  },
  {
    id: "3",
    title: "Guida alla Certificazione ISO 14001",
    excerpt:
      "Tutto quello che devi sapere sulla certificazione ambientale ISO 14001 e i vantaggi per la tua azienda.",
    category: "Ambiente",
    date: "5 Gennaio 2024",
    readTime: "6 min",
    image: "environmental protection",
  },
  {
    id: "4",
    title:
      "Come Scegliere il Consulente per la Sicurezza Giusto",
    excerpt:
      "Criteri e consigli per selezionare il professionista più adatto alle esigenze della tua impresa.",
    category: "Sicurezza",
    date: "28 Dicembre 2023",
    readTime: "4 min",
    image: "business consultation",
  },
  {
    id: "5",
    title:
      "ISO 45001: Prevenzione e Sicurezza nei Luoghi di Lavoro",
    excerpt:
      "Approfondimento sullo standard internazionale per la gestione della salute e sicurezza sul lavoro.",
    category: "Normative",
    date: "20 Dicembre 2023",
    readTime: "7 min",
    image: "workplace safety",
  },
  {
    id: "6",
    title: "Digitalizzazione dei Processi di Certificazione",
    excerpt:
      "Le nuove tecnologie digitali stanno trasformando il processo di certificazione ISO. Scopri come.",
    category: "Innovazione",
    date: "15 Dicembre 2023",
    readTime: "5 min",
    image: "digital technology",
  },
];

const categories = [
  "Tutte",
  "Normative",
  "Sicurezza",
  "Ambiente",
  "Innovazione",
];

export function ArticleList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("Tutte");

  const filteredArticles = allArticles.filter((article) => {
    const matchesSearch =
      article.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      article.excerpt
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "Tutte" ||
      article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900 transition-colors duration-500">
        <div className="container mx-auto px-4 py-12">
          <a
            href="/#news"
            className="mb-6 text-blue-600 dark:text-blue-400 hover:bg-transparent flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna alla pagina principale
          </a>
          <div className="max-w-4xl">
            <h1 className="text-4xl lg:text-5xl mb-4 text-blue-600 dark:text-blue-400">
              Tutti gli Articoli
            </h1>
            <p className="text-xl text-foreground/70">
              Resta aggiornato su normative, sicurezza e best
              practice per la tua azienda
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/40 w-5 h-5" />
              <Input
                type="text"
                placeholder="Cerca articoli..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 text-lg border-2 border-gray-200 dark:border-gray-700 focus:border-blue-600 dark:focus:border-blue-600"
              />
            </div>
          </div>

          {/* Category Filters */}
          <div className="mb-8 flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-foreground/60" />
            <span className="text-sm text-foreground/60">
              Filtra per categoria:
            </span>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  selectedCategory === category
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-gray-800 text-foreground/70 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Results Count */}
          <div className="mb-6 text-foreground/60">
            {filteredArticles.length}{" "}
            {filteredArticles.length === 1
              ? "articolo trovato"
              : "articoli trovati"}
          </div>

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredArticles.map((article) => (
              <a
                key={article.id}
                className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl overflow-hidden hover:shadow-2xl hover:scale-[1.02] hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-300 cursor-pointer group"
                href={`/news/${article.id}`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={`https://source.unsplash.com/800x400/?${article.image}`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-3 text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-foreground/70 mb-4 line-clamp-2">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* No Results */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-foreground/60 mb-4">
                Nessun articolo trovato
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tutte");
                }}
                className="text-blue-600 dark:text-blue-400 border-blue-600"
              >
                Ripristina filtri
              </Button>
            </div>
          )}

        </div>

      </div>

      {/* CTA Banner */}
      <CTABanner
        title="Hai bisogno di supporto?"
        subtitle="Contattaci per una consulenza personalizzata"
        buttonText="Contattaci"
        onButtonClick={() => window.location.href = "/#contact"}
      />
    </div>
  );
}