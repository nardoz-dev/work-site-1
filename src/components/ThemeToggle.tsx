import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  // Usiamo useState e useEffect, quindi questo componente DEVE essere
  // renderizzato sul client. Funziona perché in 'index.astro'
  // hai messo <Hero client:load />, e Hero importa questo.
  
  const [theme, setTheme] = React.useState("light");

  // Al caricamento, controlliamo le preferenze del browser o il localStorage
  React.useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDarkMode = savedTheme 
      ? savedTheme === "dark" 
      : window.matchMedia("(prefers-color-scheme: dark)").matches;

    setTheme(isDarkMode ? "dark" : "light");
  }, []);

  // Quando lo stato 'theme' cambia, aggiorniamo la classe sull'elemento <html>
  React.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  // Funzione per invertire il tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme" className="hover:bg-transparent">
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-white duration-700" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 duration-700" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
