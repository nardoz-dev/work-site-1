import React, {useState} from "react";
import { ChevronDown, Heart, Menu } from "lucide-react"; 
import { useStore } from '@nanostores/react';
import {ThemeToggle} from "./ThemeToggle"; 
import Logo from "../assets/LogoNew.png?url"; 
import { Button } from "./ui/button";
import { activeSection } from '../stores/navigationStore'; 
import { motion, AnimatePresence } from "framer-motion";

export function NavBar() 
 {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const page_by_scroll = useStore(activeSection);

    const navItems = [
    { id: "home", label: "Home", href: "/", dropdown: false },
    {
      id: "iso",
      label: "Cons. ISO",
      href: "/#iso", // Link per lo scroll sulla pagina
      dropdown: true,
      dropdownLinks: [
        {
          title: "Sistemi di Gestione Qualità",
          items: [
            { label: "ISO 9001", id: "iso-9001", href: "/iso" },
            { label: "ISO 14001", id: "iso-14001", href: "/iso" },
            { label: "ISO 45001", id: "iso-45001", href: "/iso" },
          ]
        },
        {
          title: "Sicurezza e Compliance",
          items: [
            { label: "ISO 27001", id: "iso-27001", href: "/iso" },
            { label: "ISO 37001", id: "iso-37001", href: "/iso" },
            { label: "ISO 22000", id: "iso-22000", href: "/iso" },
          ]
        },
        {
          title: "Altro",
          items: [
            { label: "Tutte le certificazioni ISO", id: "all-iso", href: "/iso" },
            { label: "Consulenza personalizzata", id: "custom-consulting", href: "/#contact" },
          ]
        }
      ],
    },
    {
      id: "security",
      label: "Sicurezza",
      href: "/#security",
      dropdown: false,
    },
    {
        id: "assignment",
        label: "Incarichi",
        href: "/#assignment",
        dropdown: true,
        dropdownLinks: [{
          title: "Sistemi di Gestione Qualità",
          items: [
            { label: "RSPP Esterno", id: "rspp", href: "/assignment/rspp" },
            { label: "Incarico HSE", id: "hse", href: "/assignment/hse" },
            { label: "Auditor Esterno", id: "auditor", href: "/assignment/auditor" },
          ]
        },
      ], 
      },
      { id: "news", label: "News", href: "/#news", dropdown: false },
      { id: "contact", label: "Contatti", href: "/#contact", dropdown: false },
    ];


    const handleNavClick = (id: string) => {
      activeSection.set(id);
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };

    const openItem = navItems.find(item => item.id === activeDropdown && item.dropdown);

    return (
      <>
      <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-background bg-gray-700 dark:bg-[#1d1d1f]/80 backdrop-blur-md border-b border-border/50 transition-colors duration-500">
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-[#1d1d1f]/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300 h-16"> */}
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
                {/* Logo e Titolo */}
                <div
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={() => handleNavClick("home")}
                >
                  <a
                    href="/"
                  >
                    <img
                      src={Logo}
                      alt="Studio Venturiero Logo"
                      className="w-12 h-12 rounded object-cover"
                    />
                  </a>
                  <div className="flex flex-col">
                    <span className="text-xs  text-white/60">
                      STUDIO
                    </span>
                    <span className="tracking-wide  text-white">
                      VENTURIERO
                    </span>
  
                  </div>
                </div>

                

              {/* --- 3. Loop di Rendering Dinamico --- */}
              <nav className="hidden lg:flex items-center space-x-1">
                {navItems.map((item) => (
                  <div
                    key={item.id}
                    className="relative group flex-1 min-w-[110px]"
                    // Gestori hover SUL genitore
                    onMouseEnter={() => item.dropdown && setActiveDropdown(item.id)}
                    onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                  >
                    <a
                      href={item.href}
                      onClick={() => handleNavClick(item.id)}
                      className="relative flex text-white items-center justify-center px-3 py-5 text-sm text-foreground/80 transition-colors group"
                    >
                      {/* Indicatore Attivo (Linea Blu) */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-0.5 bg-white transition-all duration-500 ${
                          page_by_scroll === item.id
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                        }`}
                        // bg-blue-600
                      />
                      {item.label}
                      {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                    </a>

                    {/* Dropdown Menu: */}
                    {/* {item.dropdown && activeDropdown === item.id && (
                      <div className="absolute left-0 mt-0 w-48 bg-gray-800 text-white rounded shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                        {item.dropdownLinks?.map((link) => (
                          <a
                            key={link.href}
                            href={link.href} // Link Astro per cambiare pagina
                            className="block px-4 py-2 hover:bg-gray-700 text-sm"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )} */}
                  </div>
                ))}
                </nav>

                {/* Right side - Theme Toggle */}
                <div className="flex items-center space-x-4">
                  <ThemeToggle />

                  {/* Mobile menu button */}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  >
                    <Menu className="w-5 h-5" />
                  </Button>
                </div>
            </div>
       </div>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {openItem && (// && navItems[activeDropdown as keyof typeof navItems] && (
          <>
            {/* Dropdown Content */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-18 left-0 right-0 z-50  bg-background bg-gray-700 dark:bg-[#1d1d1f]/80 backdrop-blur-2xl border-b"
              onMouseEnter={() => setActiveDropdown(activeDropdown)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto">
                  {openItem?.dropdownLinks?.map((section, idx) => (
                    <div key={idx}>
                      <h3 className="text-xs text-[#f5f5f7]/50 mb-3 tracking-wide uppercase">
                        {section.title}
                      </h3>
                      <ul className="space-y-2">
                        {section.items.map((item, itemIdx) => {
                          console.log(item);
                          return (
                            <li key={itemIdx}>
                              <a
                                href={item.href}
                                className="text-sm text-[#f5f5f7] hover:text-white transition-colors block"
                              >
                              {item.label}
                            </a>
                          </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed top-16 left-0 right-0 z-40 bg-background bg-gray-700 dark:bg-[#1d1d1f] "
          >
            <nav className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                      page_by_scroll === item.id
                        ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                        : "text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
  </nav>
  </>
  );
}

