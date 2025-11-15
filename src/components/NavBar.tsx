import React, {useState, useEffect} from "react";
import { ChevronDown, Heart, Menu } from "lucide-react"; 
import { useStore } from '@nanostores/react';
import {ThemeToggle} from "./ThemeToggle"; 
import Logo from "../assets/LogoNew.png?url"; 
import { Button } from "./ui/button";
import { activeSection } from '../stores/navigationStore'; 
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "../data/navData";
interface NavBarProps {
  currentPage?: string;
}

export function NavBar({ currentPage }: NavBarProps) {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [activeId, setActiveId] = useState(currentPage || 'home');
    const page_by_scroll = useStore(activeSection);
    
    // In locale / , in prod con GitHub Pages : work-site-1/

    const base = import.meta.env.BASE_URL; 
    const mkLink = (path: string) => {
      // Pulisce la base (es. /work-site-1/ -> /work-site-1)
      const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
      
      if (path === "") return cleanBase + "/"; 
      if (path.startsWith("#")) return cleanBase + "/" + path; // Link Hash (es. /#contact)
      if (path.startsWith("?")) return cleanBase + "/" + path; // Query (es. /?open=...)
      
      const cleanPath = path.startsWith('/') ? path.slice(1) : path;
      return `${cleanBase}/${cleanPath}`; 
    }

    // Sync activeSection with currentPage prop to handle indicator changes
    useEffect(() => {
      if (page_by_scroll !== activeId) {
        setActiveId(page_by_scroll);
      }
    }, [page_by_scroll]); 

    useEffect(() => {
      if (currentPage) {
        setActiveId(currentPage);
        activeSection.set(currentPage);
      }
    }, [currentPage]);

    const handleNavClick = (id: string) => {
      console.log("HandleNavClick del a href della navbar su ID : ", id);
      const targetElement = document.getElementById(id);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth"  });
        activeSection.set(id); // Update the indicator
      }
      setMobileMenuOpen(false);
      setActiveDropdown(null);
    };

    const openItem = navItems.find(item => item.id === activeDropdown && item.dropdown);

    return (
      <>
      <nav className="w-full fixed top-0 left-0 right-0 z-50 bg-background bg-gray-700 dark:bg-[#1d1d1f] backdrop-blur-md border-b border-border/50 transition-colors duration-500">
      {/* <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-[#1d1d1f]/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300 h-16"> */}
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center justify-between">
                {/* Logo e Titolo */}
                <a
                  href={mkLink("")} // Link corretto
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={(e) => {
                    // TODO: TO CHECK
                    if (window.location.pathname === base) { 
                      e.preventDefault(); 
                      handleNavClick("home"); 
                    }
                  }}
                >
                  <img
                    src={Logo}
                    alt="Studio Venturiero Logo"
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div className="flex flex-col">
                    <span className="text-xs  text-white/60">
                      STUDIO
                    </span>
                    <span className="tracking-wide  text-white">
                      VENTURIERO
                    </span>

                  </div>
                </a>
                
                

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
                      href={mkLink(item.href)} 
                      onClick={(e) => {
                        const isAnchorLink = item.href.startsWith('#') || item.href === "home";
                        const targetElement = document.getElementById(item.id);
                        console.log("Clicked nav item:", item.id);
                        if (isAnchorLink && targetElement ) {
                          // SOLO se è un'ancora su questa pagina, previeni e scrolla
                          e.preventDefault(); 
                          handleNavClick(item.id); 
                        }
                    
                      }}  
                      className="relative flex text-white items-center justify-center px-3 py-5 text-sm text-foreground/80 transition-colors group"
                    >
                      {/* Indicatore Attivo (Linea Blu) */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-0.5 bg-white transition-all duration-500 ${
                          activeId === item.id
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0 group-hover:opacity-50 group-hover:scale-x-100"
                        }`}
                        // bg-blue-600
                      />
                      {item.label}
                      {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                    </a>
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
              className="fixed top-18 left-0 right-0 z-50  bg-background bg-gray-700 dark:bg-[#1d1d1f] backdrop-blur-2xl border-b"
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
                          // Se il dropdown è quello della security, gestisci con handleNavClick
                          if (openItem.id === "security") {
                            return (
                              <li key={itemIdx}>
                                <button
                                  className="text-sm text-[#f5f5f7] hover:text-white transition-colors block w-full text-left bg-transparent"
                                  onClick={() => handleNavClick("security")}
                                >
                                  {item.label}
                                </button>
                              </li>
                            );
                          }
                          // Altrimenti usa il link normale
                          return (
                            <li key={itemIdx}>
                              <a
                                href={mkLink(item.href)} // Usa mkLink
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
                  <a
                    key={item.id}
                    href={mkLink(item.href)} // Usa <a> invece di <button>
                    onClick={(e) => {
                      if (item.href.startsWith("#")) {
                        e.preventDefault();
                        handleNavClick(item.id);
                      } else {
                        activeSection.set(item.id);
                      }
                    }}
                    className={`text-left px-4 py-3 text-sm rounded-lg transition-colors ${
                      activeId === item.id
                        ? "bg-blue-50 dark:bg-blue-950/20 text-blue-600 dark:text-blue-400"
                        : "text-white/80 hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </a>
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

