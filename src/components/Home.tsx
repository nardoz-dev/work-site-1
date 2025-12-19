import { Button } from "./ui/button";
import { useState,useEffect } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface HomeProps{
  logo: {
    src: string;
    width: number;
    height: number;
  };
  sliderImages: {
    src: string;
    width: number;
    height: number;
  }[];
}
export function Home({ logo, sliderImages }: HomeProps) {


  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [sliderImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden"
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-950" />
      
      {/* Background Slider */}
      <div className="absolute inset-0 z-0">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: currentSlide === index ? 1 : 0,
              backgroundImage: `url(${image.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        ))}
        {/* Dark overlay for text readability */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 via-blue-100/80 to-gray-800/75 dark:from-gray-950/90 dark:via-blue-950/85 dark:to-gray-950/90" /> */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 via-white/40 to-gray-950 dark:from-gray-700/90 dark:via-blue-950/85 dark:to-gray-950/90" />
      </div>

      {/* Slider Navigation Controls */}
      <div className="absolute bottom-32 right-8 z-30 flex gap-3">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-background bg-gray-700 dark:bg-[#1d1d1f] backdrop-blur-md border border-gray-800/30 dark:border-white/20 flex items-center justify-center hover:bg-gray-800/90 dark:hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-white dark:text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-background bg-gray-700 dark:bg-[#1d1d1f] backdrop-blur-md border border-gray-800/30 dark:border-white/20 flex items-center justify-center hover:bg-gray-800/90 dark:hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-white dark:text-white group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Slider Dots */}
      <div className="absolute bottom-[120px] left-1/2 transform -translate-x-1/2 z-30 flex gap-2">
        {sliderImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? 'bg-white w-8'
                : 'bg-gray-800/40 dark:bg-white/50 hover:bg-gray-800/60 dark:hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Radial gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Overline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 flex items-center justify-center gap-4"
          >
            <img
              src={logo.src}
              alt="Studio Venturiero Logo"
              className="w-12 h-12 rounded object-cover flex-shrink-0"
            />
            {/* <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-sm tracking-wide border border-blue-200 dark:border-blue-900"> */}
            <span className="px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 text-sm tracking-wide border border-blue-200 dark:border-blue-900">
              Studio Venturiero
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6 tracking-tight"
          >
            <span className="block text-gray-900 dark:text-white mb-2">
              Il lavoro nobilita
            </span>
            <span className="block text-[var(--logonew)] ">
              la sicurezza protegge
            </span>
          </motion.h1>

          {/* Subheadline */}
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Consulenza specializzata in sicurezza sul lavoro, certificazioni ISO
            e formazione aziendale
          </motion.p> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="py-4 flex flex-col sm:flex-row gap-4 justify-center items-center mb-20"
          >
            <a
              href="#about"
              className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 hover:text-dark transition-all"
            >
              Chi Siamo
            </a>

            <a
              href="#contact"
              className="bg-white text-gray-900 dark:text-primary hover:bg-gray-900 dark:hover:bg-white hover:text-white hover:bg-primary dark:hover:text-black px-8 py-3 rounded-lg transition-all"
            >
              Contattaci 
            </a>

          </motion.div>

          {/* Key Services Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-3 justify-center max-w-2xl mx-auto"
          >
            {[
              "Consulenza Iso",
              "Sicurezza",
              "Incarichi",
              "Articoli di Aggiornamento",
              "Sicurezza Cantieri",
              "Formazione",
            ].map((service, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-sm border border-gray-200 dark:border-gray-800"
              >
                {service}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection("chi-siamo")}
          className="flex flex-col items-center gap-2 text-white transition-colors group"
        >
          <span className="text-xs tracking-wider uppercase">Scorri</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </motion.div>
    </section>
  );
}
