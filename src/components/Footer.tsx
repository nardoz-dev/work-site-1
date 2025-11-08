import { Separator } from "./ui/separator";
import { Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ArrowUp } from "lucide-react";

const footerSections = [
  {
    title: "Servizi Principali",
    links: [
      { name: "Sistemi di Gestione", href: "#" },
      { name: "Sicurezza Cantieri", href: "#" },
      { name: "Sicurezza sul Lavoro", href: "#" },
      { name: "Sicurezza Alimentare", href: "#" },
      { name: "Corsi di Formazione", href: "#" },
      { name: "Verifica Impianti", href: "#" }
    ]
  },
  {
    title: "Formazione",
    links: [
      { name: "AS&C Academy", href: "#" },
      { name: "Lead Auditor ISO 9001", href: "#" },
      { name: "Lead Auditor ISO 14001", href: "#" },
      { name: "Lead Auditor ISO 45001", href: "#" },
      { name: "Coordinatore Sicurezza", href: "#" },
      { name: "HACCP", href: "#" }
    ]
  },
  {
    title: "Settori",
    links: [
      { name: "Edilizia e Costruzioni", href: "#" },
      { name: "Manifatturiero", href: "#" },
      { name: "Servizi", href: "#" },
      { name: "Alimentare", href: "#" },
      { name: "Sanitario", href: "#" },
      { name: "Pubblica Amministrazione", href: "#" }
    ]
  },
  {
    title: "Azienda",
    links: [
      { name: "Chi Siamo", href: "#about" },
      { name: "News", href: "#news" },
      { name: "Contatti", href: "#contact" },
      { name: "Certificazioni", href: "#" },
      { name: "Lavora con Noi", href: "#" }
    ]
  }
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

export function Footer() {
  return (
    <footer className="bg-[#f5f5f7] dark:bg-[#1d1d1f] border-t border-border/50 transition-colors duration-500">
      {/* Back to Top Button */}
      <div className="border-b border-border/50">
        <div className="container mx-auto px-4">
          <button
            onClick={scrollToTop}
            className="w-full py-4 group flex items-center justify-center gap-2 text-foreground/70 hover:text-foreground transition-colors"
          >
            <span className="text-sm">Torna su</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Footer Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h4 className="text-foreground">{section.title}</h4>
              <ul className="space-y-2.5">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-colors block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company Info & Contact */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 space-y-6">
            <div>
              <h4 className="text-foreground mb-4">Contatti</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <a href="tel:+393337558507" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    +39 333 75 58 507
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-blue-600 dark:text-blue-500 flex-shrink-0" />
                  <a href="mailto:info@studioventuriero.it" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
                    info@studioventuriero.it
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 dark:text-blue-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-foreground/60">
                    <div>Via Aaaaaa Km 106,500</div>
                    <div>Aaaaaa (LT) - 04019</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-foreground mb-4">Seguici</h4>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-foreground/10 hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center transition-all group"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-foreground/70 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-foreground/10 hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center transition-all group"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 text-foreground/70 group-hover:text-white transition-colors" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full bg-foreground/10 hover:bg-blue-600 dark:hover:bg-blue-500 flex items-center justify-center transition-all group"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4 text-foreground/70 group-hover:text-white transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-foreground/60 text-center md:text-left">
              © 2024 GEOCAD STUDIO. Tutti i diritti riservati.
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <span className="text-foreground/30 hidden md:inline">|</span>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Termini di Servizio
              </a>
              <span className="text-foreground/30 hidden md:inline">|</span>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Cookie Policy
              </a>
              <span className="text-foreground/30 hidden md:inline">|</span>
              <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}