import { Button } from "./ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useState, useEffect } from "react";
import { ImageWithFallback } from "./utils/fallback";
import { number } from "astro:schema";


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
export function Home( {logo, sliderImages}: HomeProps) {

  const [currentSlide, setCurrentSlide] = useState(0);


  // Auto-advance slides
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


  return (
    <section
      id="home"
      className="relative min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-gray-100 dark:from-gray-900 dark:via-blue-900 dark:to-gray-800 overflow-hidden transition-colors duration-500"
    >

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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 via-blue-100/80 to-gray-800/75 dark:from-gray-950/90 dark:via-blue-950/85 dark:to-gray-950/90" />
      </div>

      {/* Slider Navigation Controls */}
      <div className="absolute bottom-32 right-8 z-30 flex gap-3">
        <button
          onClick={goToPrevious}
          className="w-12 h-12 rounded-full bg-gray-800/20 dark:bg-white/10 backdrop-blur-md border border-gray-800/30 dark:border-white/20 flex items-center justify-center hover:bg-gray-800/30 dark:hover:bg-white/20 transition-all duration-300 group"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
        </button>
        <button
          onClick={goToNext}
          className="w-12 h-12 rounded-full bg-gray-800/20 dark:bg-white/10 backdrop-blur-md border border-gray-800/30 dark:border-white/20 flex items-center justify-center hover:bg-gray-800/30 dark:hover:bg-white/20 transition-all duration-300 group"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-900 dark:text-white group-hover:scale-110 transition-transform" />
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

      {/* Main Content */}
      <div className="container mx-auto px-4 pt-32 pb-32 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[70vh]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-block">
                <span className="text-blue-600 dark:text-blue-800 text-sm tracking-wider uppercase font-semibold">
                  Studio Venturiero
                </span>
              </div>

              <h1 className="text-4xl lg:text-6xl text-foreground leading-tight">
                Il lavoro <br />
                nobilita l'uomo, <br />
                la sicurezza <br />
                lo protegge.
              </h1>

              <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
                HSE Manager • Sicurezza Cantieri • Sicurezza sul
                Lavoro • Coordinamento
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Contattaci
              </Button>
            </div>

            {/* Services Dropdown Preview */}
            {/* <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
              <h3 className="text-sm text-gray-500 mb-4">I NOSTRI SERVIZI</h3>
              <div className="space-y-3">
                <div className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Sistemi di Gestione</div>
                <div className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Sicurezza sui cantieri</div>
                <div className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Sicurezza Alimentare</div>
                <div className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Sicurezza sul Lavoro</div>
                <div className="text-gray-700 hover:text-blue-600 cursor-pointer transition-colors">Sicurezza sui cantieri</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative flex items-center justify-center">
            {/* Logo */}
            <div className="relative z-10 flex items-center justify-center">
              <img 
                src={logo.src}
                width={logo.width}
                height={logo.height}
                decoding="async"
                alt="Studio Latina Consulenza iso lavoro diritti sicurezza formazione consulente Logo"
                className=" rounded object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-muted-foreground text-sm mb-2">
          Scorri per saperne di più
        </p>
        <ChevronDown className="w-6 h-6 text-muted-foreground mx-auto animate-bounce" />
      </div>
    </section>
  );
}