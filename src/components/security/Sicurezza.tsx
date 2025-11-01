import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Valutazione dei rischi aziendali personalizzata",
  "Documento di Valutazione dei Rischi (DVR) completo",
  "Piano Operativo di Sicurezza (POS) per cantieri",
  "Supporto per adempimenti D.Lgs 81/08",
  "Sorveglianza sanitaria e visite mediche",
  "Gestione degli impianti e manutenzioni"
];

export function Security() {
  return (
    <section id="security" className="py-20 bg-white dark:bg-gray-950 transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-blue-600 dark:text-blue-400 tracking-wide">SICUREZZA SUL LAVORO</p>
              <h2 className="text-3xl lg:text-4xl text-foreground">
                Proteggiamo il tuo ambiente di lavoro con <span className="text-blue-600 dark:text-blue-400">competenza</span>
              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La sicurezza sul lavoro è un obbligo normativo ma anche un investimento sul capitale umano. 
                Studio Venturiero offre consulenza completa per rendere la tua azienda sicura e conforme 
                alle normative vigenti, riducendo i rischi e migliorando il benessere dei lavoratori.
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{feature}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800">
                Richiedi una consulenza
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
