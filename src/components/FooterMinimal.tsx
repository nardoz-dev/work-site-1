import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter ,ArrowUp} from "lucide-react";


const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export function FooterMinimal() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#1d1d1f] border-t border-border/50 transition-colors duration-500">

        {/* Back to Top Button */}
        <div className="border-b border-border/50">
        <div className="container mx-auto px-4">
            <button
            onClick={() => {
                console.log("QUI CI SONO?")
                scrollToTop()
            }}
            className="w-full py-4 group flex items-center justify-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
            >
            <span className="text-sm">Torna su</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
            </button>
        </div>
        </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contatti */}
          <div>
            <h4 className="text-foreground mb-6">Contatti</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                <a
                  href="tel:+393337558507"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  +39 333 -- -- ---
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                <a
                  href="mailto:info@studioventuriero.it"
                  className="text-foreground/70 hover:text-foreground transition-colors"
                >
                  info@studioventuriero.it
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-500 mt-0.5 flex-shrink-0" />
                <div className="text-foreground/70">
                  <div>Via Aaaaaa Km 106,500</div>
                  <div>Aaaaaa (LT) - 04019</div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-foreground mb-6">Seguici</h4>
            <div className="flex gap-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center transition-all group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-foreground/70 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-foreground/70 group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-foreground/10 hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-foreground/70 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-foreground/60 text-center md:text-left">
              &copy; 2025 STUDIO VENTURIERO. Tutti i diritti riservati.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <a
                href="#"
                
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <span className="text-foreground/30 hidden md:inline">|</span>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Termini di Servizio
              </a>
              <span className="text-foreground/30 hidden md:inline">|</span>
              <a
                href="#"
                className="text-foreground/60 hover:text-foreground transition-colors"
              >
                Cookie Policy
              </a>
              <span className="text-foreground/30 hidden md:inline">|</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
