import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2, Check } from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";
import { CTABanner } from "../CTABanner";
import { articlesData } from "../../data/articlesData";

interface ArticleDetailProps {
  articleId: string;
}


export function ArticleDetail({ articleId, onBack }: ArticleDetailProps) {
  const article = articlesData[articleId];

  // 2. Aggiungi uno stato per il feedback "Copiato!"
  const [isCopied, setIsCopied] = useState(false);

  // 3. Crea la funzione di condivisione
  const handleShare = async () => {
    // Dati da condividere
    const shareData = {
      title: article.title,
      text: article.content.intro, // Usa l'intro come testo
      url: window.location.href, // L'URL della pagina corrente
    };

    // Controlla se l'API Web Share è disponibile
    if (navigator.share) {
      try {
        // --- Metodo Moderno (Mobile/Chrome) ---
        await navigator.share(shareData);
        console.log("Articolo condiviso con successo!");
      } catch (err) {
        // L'utente ha chiuso la condivisione, non è un errore
        console.log("Condivisione annullata.");
      }
    } else {
      // --- Fallback: Copia negli appunti (Desktop/Firefox) ---
      try {
        await navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        // Resetta il bottone dopo 2 secondi
        setTimeout(() => setIsCopied(false), 2000); 
      } catch (err) {
        console.error("Impossibile copiare il link:", err);
      }
    }
  };

  if (!article) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Articolo non trovato</h2>
          <a href="/news" className="bg-blue-600 hover:bg-blue-700 text-white">
            Torna agli articoli
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900 transition-colors duration-500">
        <div className="container mx-auto px-4 py-8">
          <a
            href="/news"
            className="mb-6 text-blue-600 dark:text-blue-400 hover:bg-transparent flex items-center"
            //className="mb-6 text-blue-600 dark:text-blue-400 hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna agli articoli
          </a>
        </div>
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Category Badge */}
        <div className="mb-4">
          <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm">
            {article.category}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl lg:text-5xl mb-6 text-foreground">
          {article.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-6 mb-8 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{article.readTime} di lettura</span>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-12 rounded-2xl overflow-hidden">
          <ImageWithFallback
            src={`https://source.unsplash.com/1200x600/?${article.image}`}
            alt={article.title}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Introduction */}
        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl text-foreground/80 leading-relaxed">
            {article.content.intro}
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-10">
          {article.content.sections.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl lg:text-3xl mb-4 text-foreground">
                {section.title}
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Share Section */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-foreground/80">Condividi questo articolo</h3>
            
            {/* Aggiungi onClick e gestisci lo stato (isCopied) */}
            <Button
              variant="outline"
              className="text-blue-600 dark:text-blue-400 border-blue-600"
              onClick={handleShare}
              disabled={isCopied} // Disabilita brevemente il bottone
            >
              {isCopied ? (
                // Stato "Copiato"
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Link Copiato!
                </>
              ) : (
                // Stato Normale
                <>
                  <Share2 className="w-4 h-4 mr-2" />
                  {/* Cambia il testo se il fallback è attivo */}
                  {navigator.share ? "Condividi" : "Copia Link"}
                </>
              )}
            </Button>
          </div>
        </div>
        {/* <div className="mt-16 pt-8 border-t border-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg text-foreground/80">Condividi questo articolo</h3>
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600">
              <Share2 className="w-4 h-4 mr-2" />
              Condividi
            </Button>
          </div>
        </div> */}

        {/* CTA Section */}
        <div className="mt-12 p-8 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-2xl text-center">
          <h3 className="text-2xl mb-4 text-foreground">
            Hai bisogno di consulenza specializzata?
          </h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Il nostro team di esperti è a tua disposizione per supportarti in ogni fase del processo di certificazione e conformità normativa.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
            Contattaci Ora
          </Button>
        </div>
      </article>

      <CTABanner
        title="Hai bisogno di supporto?"
        subtitle="Contattaci per una consulenza personalizzata"
        buttonText="Contattaci"
        onButtonClick={() => window.location.href = "/#contact"}
      />
    </div>
  );
}
