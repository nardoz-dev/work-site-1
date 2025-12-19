import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import {
  ArrowLeft,
  Maximize2,
  ChevronRight,
  CheckCircle2,
  Award,
  FileCheck,
} from "lucide-react";
import { ISOModal } from "./ISOModal";
import { CTABanner } from "../CTABanner";
import { isoData } from "../../data/isoData";
import { ImageWithFallback } from "../utils/fallback";

export function ISOList() {

  const [hoveredISO, setHoveredISO] = useState<string | null>(null,);
  const [visibleBanners, setVisibleBanners] = useState<Set<number>>(new Set());
  const bannerRefs = useRef<(HTMLDivElement | null)[]>([]);

  // It is used in the older version (display PopUp)
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState<string | null>(null);

  const handleISOClick = (isoCode: string) => {
    setSelectedISO(isoCode);
    setModalOpen(true);
  };

  const base = import.meta.env.BASE_URL;
  const mkLink = (path: string) => {
    const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
    
    if (path === "") return cleanBase + "/"; 
    if (path.startsWith("#")) return cleanBase + "/" + path; 
    if (path.startsWith("?")) return cleanBase + "/" + path; 
    
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}/${cleanPath}`; 
  }

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const isoToOpen = params.get('open'); 
    if (isoToOpen) {
      const isValidISO = Object.keys(isoData).includes(isoToOpen);
      if (isValidISO) {
        handleISOClick(isoToOpen);
      }
    }

    const observers: IntersectionObserver[] = [];

    bannerRefs.current.forEach((ref, index) => {
      if (ref) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleBanners((prev) =>
                  new Set(prev).add(index),
                );
              }
            });
          },
          { threshold: 0.2 },
        );

        observer.observe(ref);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (  
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      
      <div className="relative">
          {/* Header */}
          <div className="bg-blue-50/50 dark:bg-blue-950/20 border-b border-blue-200 dark:border-blue-900 backdrop-blur-sm transition-colors duration-500">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
              <a
              href={`${mkLink("#iso")}`}
              className={`mb-6 text-primary hover:bg-transparent flex items-center`}
              >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Torna alla pagina principale
              </a>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-4xl"
              >
                {/* Qui di sotto abbiamo salvato una cosa veramente carina decommenta per vedere! */}
                {/* <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-gradient-to-r from-red-600 via-blue-500 to-blue-600 dark:from-blue-400 dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent"> */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4 bg-primary bg-clip-text text-transparent">
                  Tutte le Certificazioni ISO
                </h1>
                <p className="text-lg md:text-xl text-foreground/70">
                  Esplora la nostra gamma completa di
                  certificazioni ISO per trovare quella più adatta
                  alla tua azienda
                </p>
              </motion.div>
            </div>
          </div>

        {/* Content */}
        <div className="py-8">
          <div className="space-y-5">
            {Object.values(isoData).map((iso,index) => (
              <motion.div
                key={iso.code}
                ref={(el) => (bannerRefs.current[index] = el)}
                initial={{ opacity: 0, y: 50 }}
                animate={
                  visibleBanners.has(index)
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 50 }
                }
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                }}
                onHoverStart={() => setHoveredISO(iso.code)}
                onHoverEnd={() => setHoveredISO(null)}
                onClick={() => handleISOClick(iso.code)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-80 md:h-96 overflow-hidden">
                {/* <div className="relative h-64 md:h-80 overflow-hidden"> */}
                  {/* Background Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{
                      duration: 0.8,
                      ease: "easeOut",
                    }}
                    className="absolute inset-0"
                  >
                    <ImageWithFallback
                      src={iso.imageUrl}
                      alt={iso.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/80" />
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-blue-200 to-blue-300, opacity-20`}
                    animate={{
                      opacity:
                        hoveredISO === iso.code ? 0.3 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-8 lg:px-12">
                      <div
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                          iso.textPosition === "right"
                            ? "lg:grid-flow-col-dense"
                            : ""
                        }`}
                      >
                        {/* Text Content */}
                        <motion.div
                          initial={{
                            opacity: 0,
                            x:
                              iso.textPosition === "left"
                                ? -50
                                : 50,
                          }}
                          animate={
                            visibleBanners.has(index)
                              ? { opacity: 1, x: 0 }
                              : {
                                  opacity: 0,
                                  x:
                                    iso.textPosition === "left"
                                      ? -50
                                      : 50,
                                }
                          }
                          transition={{
                            duration: 0.8,
                            delay: 0.3,
                          }}
                          className={`text-white space-y-6 ${
                            iso.textPosition === "right"
                              ? "lg:col-start-2 text-left lg:text-right"
                              : ""
                          }`}
                        >
                          {/* Badges */}
                          <div
                            className={`flex items-center space-x-3 ${
                              iso.textPosition === "right"
                                ? "lg:justify-end"
                                : ""
                            }`}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-white/20 text-white backdrop-blur-md border-white/30"
                            >
                              ISO {iso.code}
                            </Badge>
                            <Badge
                              className={`bg-gradient-to-r bg-primary text-white border-0 shadow-lg`}
                            >
                              {iso.category}
                            </Badge>
                          </div>

                          {/* Title */}
                          <motion.h3
                            className="text-3xl md:text-4xl lg:text-5xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {iso.title}
                          </motion.h3>

                          {/* Subtitle */}
                          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                            {iso.subtitle}
                          </p>
                          {/* CTA Button */}
                          <div
                            className={`flex items-center ${
                              iso.textPosition === "right"
                                ? "lg:justify-end"
                                : ""
                            }`}
                          >
                            <motion.div
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                            >
                              <Button
                                size="lg"
                                className={`bg-gradient-to-r bg-primary hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 border-0 text-white px-8 py-3`}
                              >
                                <FileCheck className="w-5 h-5 mr-2" />
                                Scopri di più
                                <motion.div
                                  animate={
                                    hoveredISO === iso.code
                                      ? { x: 5 }
                                      : { x: 0 }
                                  }
                                  transition={{
                                    type: "spring",
                                    stiffness: 400,
                                    damping: 25,
                                  }}
                                  className="ml-2"
                                >
                                  <ChevronRight className="w-5 h-5" />
                                </motion.div>
                              </Button>
                            </motion.div>
                          </div>
                        </motion.div>

                        {/* Icon Overlay (Hidden on mobile) */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          animate={
                            visibleBanners.has(index)
                              ? { scale: 1, opacity: 1 }
                              : { scale: 0, opacity: 0 }
                          }
                          transition={{
                            duration: 0.6,
                            delay: 0.5,
                          }}
                          className={`hidden lg:flex items-center justify-center ${
                            iso.textPosition === "right"
                              ? "lg:col-start-1"
                              : ""
                          }`}
                        >
                          <motion.div
                            whileHover={{
                              scale: 1.1,
                              rotate: 5,
                            }}
                            whileTap={{ scale: 0.95 }}
                            animate={
                              hoveredISO === iso.code
                                ? { scale: 1.1, rotate: 5 }
                                : { scale: 1, rotate: 0 }
                            }
                            className="bg-white/10 backdrop-blur-md rounded-full p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                          >
                            <Award className="w-16 h-16 text-white" />
                          </motion.div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
 
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <CTABanner
        title="Non trovi la certificazione che cerchi?"
        subtitle="Rivolgiti a noi per scoprire come possiamo aiutarti."
        buttonText="Contattaci"
        onButtonClick={() => window.location.href = "/#contact"}
      />

      {/* 8. Renderizza il modale in base allo stato locale */}
      {selectedISO && modalOpen && (
        <ISOModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          isoType={selectedISO}
        />
      )}

    </div>
  );
}
