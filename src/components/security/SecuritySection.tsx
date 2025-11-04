import { Button } from "../ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Valutazione dei rischi (DVR)",
  "Valutazioni specifiche dei rischi",
  "Piani di emergenza ed evacuazione",
  "Verifiche ed audit interni",
  "Formazione dei lavoratori",
  "Sorveglianza sanitaria e visite mediche",
  "HACCP",
  "Sopralluoghi e controlli di monitoraggio",
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
                Affidati a chi fa della sicurezza un <span className="text-blue-600 dark:text-blue-400">valore</span>, non un obbligo.
                
                <br></br>
                Sicurezza sul lavoro: la nostra esperienza al servizio della tua azienda.

              </h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                La consulenza per la sicurezza sul lavoro è un servizio fondamentale per garantire la tutela dei lavoratori, la conformità alle normative vigenti e la prevenzione degli infortuni e delle malattie professionali.
                Attraverso un approccio tecnico e personalizzato, STUDIO VENTURIERO supporta le aziende nell’applicazione del D.Lgs. 81/2008 e di tutte le disposizioni in materia di salute e sicurezza, assicurando una gestione efficace, documentata e conforme del sistema sicurezza.    
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



