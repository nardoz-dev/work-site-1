import React, {useState} from "react";
import { ChevronDown, Menu } from "lucide-react"; 
import { useStore } from '@nanostores/react';
import {ThemeToggle} from "./ThemeToggle"; 
import Logo from "../assets/LogoNew.png?url"; 
import { Button } from "./ui/button";
import { activeSection } from '../stores/navigationStore'; 

export function NavBar({
}) {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
        { href: "/iso/9001", label: "ISO 9001" },
        { href: "/iso/14001", label: "ISO 14001" },
        { href: "/iso/45001", label: "ISO 45001" },
        { href: "/iso/", label: "Altre ISO" },
      ],
    },
    { id: "security", label: "Sicurezza", href: "/#security", dropdown: false },
    {
        id: "assignment",
        label: "Incarichi",
        href: "/#assignment",
        dropdown: true,
        dropdownLinks: [
          { href: "/assignment/rspp", label: "RSPP Esterno" },
          { href: "/assignment/hse", label: "Incarico HSE" },
          { href: "/assignment/auditor", label: "Auditor Esterno" },
        ],
      },
      { id: "training", label: "Formazione", href: "/#training", dropdown: false },
      { id: "news", label: "News", href: "/#news", dropdown: false },
      { id: "contact", label: "Contatti", href: "/#contact", dropdown: false },
    ];


    const handleNavClick = (id: string) => {
      activeSection.set(id);
      setMobileMenuOpen(false);
    };


    const isoLinks = [
      { code: "9001", label: "ISO 9001" },
      { code: "14001", label: "ISO 14001" },
      { code: "45001", label: "ISO 45001" },
    ];

    const assignmentLinks = [
      { code: "rspp", label: "RSPP Esterno" },
      { code: "hse", label: "Incarico HSE" },
      { code: "auditor", label: "Auditor Esterno" },
    ];

    return (
    // Top Navigation - Sticky
    <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-background/80 bg-gray-900/80 dark:bg-[#1d1d1f]/80 backdrop-blur-md border-b border-border/50 transition-colors duration-500">
    {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-[#1d1d1f]/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300 h-16"> */}
        <div className="container mx-auto px-4 py-2.5">
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
                  <span className="tracking-wide  text-white">
                    VENTURIERO
                  </span>
                  <span className="text-xs  text-white/60">
                    STUDIO
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
                  onMouseEnter={() => item.dropdown && setOpenDropdown(item.id)}
                  onMouseLeave={() => item.dropdown && setOpenDropdown(null)}
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
                  {item.dropdown && openDropdown === item.id && (
                    <div className="absolute left-0 mt-0 w-48 bg-gray-800 text-white rounded shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
                      {/* Loop sui link del dropdown */}
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
                  )}
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

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                    currentPage === item.id
                      ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                      : "text-foreground/80 hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}

        </div>
    </nav>
   
    );
}

