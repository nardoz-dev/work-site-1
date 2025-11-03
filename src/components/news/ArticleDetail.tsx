import { Button } from "../ui/button";
import { ArrowLeft, Calendar, User, Clock, Share2 } from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";

interface ArticleDetailProps {
  articleId: string;
  onBack: () => void;
}

const articlesData: Record<string, {
  title: string;
  category: string;
  date: string;
  author: string;
  readTime: string;
  image: string;
  content: {
    intro: string;
    sections: Array<{
      title: string;
      content: string;
    }>;
  };
}> = {
  "1": {
    title: "Nuove Normative ISO 2024: Cosa Cambia per le Aziende",
    category: "Normative",
    date: "15 Gennaio 2024",
    author: "Dr. Marco Rossi",
    readTime: "5 min",
    image: "business meeting",
    content: {
      intro: "Le normative ISO 2024 introducono importanti cambiamenti che ogni azienda certificata deve conoscere. Questa guida completa vi aiuterà a comprendere le novità e ad adeguarvi tempestivamente.",
      sections: [
        {
          title: "Le Principali Novità",
          content: "Il 2024 porta con sé significativi aggiornamenti agli standard ISO, con particolare attenzione alla sostenibilità ambientale e alla digitalizzazione dei processi. Le aziende certificate dovranno adeguarsi entro il primo semestre per mantenere la conformità."
        },
        {
          title: "Impatto sulla ISO 9001",
          content: "La ISO 9001 subisce modifiche che rafforzano il focus sulla customer satisfaction e sull'analisi del rischio. Viene introdotto un nuovo requisito per la gestione delle informazioni documentate in formato digitale, facilitando l'audit e il monitoraggio continuo."
        },
        {
          title: "Tempistiche di Adeguamento",
          content: "Le aziende hanno tempo fino al 30 giugno 2024 per implementare le nuove modifiche. Il nostro team è a disposizione per supportarvi nella transizione, garantendo continuità della certificazione e conformità normativa."
        },
        {
          title: "Come Possiamo Aiutarvi",
          content: "GEOCAD STUDIO offre un servizio di consulenza specializzato per l'aggiornamento alle nuove normative ISO 2024. Il nostro approccio comprende un audit preliminare, la formazione del personale e l'assistenza durante tutto il processo di transizione."
        }
      ]
    }
  },
  "2": {
    title: "L'Importanza della Formazione sulla Sicurezza sul Lavoro",
    category: "Sicurezza",
    date: "10 Gennaio 2024",
    author: "Ing. Laura Bianchi",
    readTime: "4 min",
    image: "safety training",
    content: {
      intro: "La formazione sulla sicurezza non è solo un obbligo normativo, ma un investimento strategico per la tutela dei lavoratori e la riduzione degli infortuni in azienda.",
      sections: [
        {
          title: "Perché è Fondamentale",
          content: "Una corretta formazione sulla sicurezza riduce del 60% il rischio di infortuni sul lavoro. I lavoratori formati sono più consapevoli dei rischi e adottano comportamenti preventivi che salvaguardano la loro salute e quella dei colleghi."
        },
        {
          title: "Obblighi Normativi",
          content: "Il D.Lgs 81/08 impone specifici obblighi formativi al datore di lavoro. Ogni lavoratore deve ricevere formazione generale e specifica in base ai rischi della mansione, con aggiornamenti periodici obbligatori."
        },
        {
          title: "I Nostri Corsi",
          content: "GEOCAD STUDIO organizza corsi di formazione certificati per tutte le figure della sicurezza: lavoratori, preposti, dirigenti, RSPP e addetti alle emergenze. I nostri corsi sono riconosciuti e rispettano tutti i requisiti normativi."
        }
      ]
    }
  },
  "3": {
    title: "Guida alla Certificazione ISO 14001",
    category: "Ambiente",
    date: "5 Gennaio 2024",
    author: "Dr. Paolo Verdi",
    readTime: "6 min",
    image: "environmental protection",
    content: {
      intro: "La certificazione ISO 14001 è lo strumento principale per le aziende che vogliono dimostrare il proprio impegno verso la sostenibilità ambientale e la gestione responsabile delle risorse.",
      sections: [
        {
          title: "Cos'è la ISO 14001",
          content: "La ISO 14001 è lo standard internazionale per i Sistemi di Gestione Ambientale (SGA). Fornisce un framework strutturato per identificare, gestire e ridurre l'impatto ambientale delle attività aziendali."
        },
        {
          title: "Vantaggi per l'Azienda",
          content: "Oltre alla conformità normativa, la certificazione porta numerosi vantaggi: riduzione dei costi energetici, miglioramento dell'immagine aziendale, accesso a bandi green, maggiore competitività sul mercato internazionale."
        },
        {
          title: "Il Processo di Certificazione",
          content: "Il percorso verso la certificazione ISO 14001 richiede tipicamente 6-12 mesi. Include l'analisi ambientale iniziale, l'implementazione del SGA, la formazione del personale e gli audit di certificazione."
        }
      ]
    }
  }
};

export function ArticleDetail({ articleId, onBack }: ArticleDetailProps) {
  const article = articlesData[articleId];

  if (!article) {
    return (
      <div className="min-h-screen bg-background pt-20 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl mb-4">Articolo non trovato</h2>
          <Button onClick={onBack} className="bg-blue-600 hover:bg-blue-700 text-white">
            Torna agli articoli
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Header */}
      <div className="bg-blue-50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900 transition-colors duration-500">
        <div className="container mx-auto px-4 py-8">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6 text-blue-600 dark:text-blue-400 hover:bg-transparent"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna agli articoli
          </Button>
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
            <Button variant="outline" className="text-blue-600 dark:text-blue-400 border-blue-600">
              <Share2 className="w-4 h-4 mr-2" />
              Condividi
            </Button>
          </div>
        </div>

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
    </div>
  );
}
