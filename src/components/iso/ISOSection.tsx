import { Button } from "../ui/button";
import { useRef, useState, useEffect} from "react";
import { isoData } from "../../data/isoData";
import { ISOModal } from "./ISOModal";
import { motion } from "framer-motion";
import {
  ChevronRight,
  FileCheck,
  Award,
  Grid3x3,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../utils/fallback";

const base = import.meta.env.BASE_URL;
const mkLink = (path: string) => {
  const cleanBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}/${cleanPath}`; 
}

export function ConsISO() {
  const [hoveredISO, setHoveredISO] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedISO, setSelectedISO] = useState<string | null>(null);

  const handleISOClick = (isoCode: string) => {
    const iso = Object.values(isoData).find(i => i.code === isoCode);
    console.log("ISO Data:", iso);
    if (isoCode) {
      setSelectedISO(isoCode);
      setModalOpen(true);
    } else if (iso?.link) {
      window.location.href = iso.link;
    }
  };

  const onViewISOList = () => {
    window.location.href = mkLink("iso");
  };

  
  const homeISOs = Object.values(isoData).filter(iso => iso.home).slice(0, 3);

  return (
    <>
      <section
        id="iso"
        className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500"
      >
        <div className="relative">
          <div className="text-center mb-16">
            <p className="text-blue-600 dark:text-blue-400 tracking-wide mb-2">
              LE NOSTRE PRINCIPALI CERTIFICAZIONI
            </p>
            <h2 className="text-3xl lg:text-4xl text-foreground mb-4">
              Studio Venturiero
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Offriamo una consulenza ISO completa e personalizzata, 
              con un percorso guidato che semplifica ogni fase fino alla certificazione.
              Ti accompagniamo passo dopo passo, garantendo supporto continuo 
              e assistenza dedicata durante gli audit.
            </p>
          </div>

          {/* ISO Banner List */}
          <div className="space-y-6 mx-auto">
            {homeISOs.map((iso, index) => (
              <motion.div
                key={iso.code}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                }}
                onHoverStart={() => setHoveredISO(iso.code)}
                onHoverEnd={() => setHoveredISO(null)}
                onClick={() => handleISOClick(iso.code)}
                className="relative group cursor-pointer"
              >
                <div className="relative h-64 md:h-80 overflow-hidden ">
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
                      opacity: hoveredISO === iso.code ? 0.3 : 0.2,
                    }}
                    transition={{ duration: 0.3 }}
                  />

                  {/* Content Container */}
                  <div className="absolute inset-0 flex items-center py-10 px-4">
                    <div className="w-full px-4 sm:px-8 lg:px-12">
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
                            x: iso.textPosition === "left" ? -50 : 50,
                          }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.8,
                            delay: 0.3,
                          }}
                          className={`text-white space-y-4 ${
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
                            className="text-2xl md:text-3xl lg:text-4xl"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                          >
                            {iso.title}
                          </motion.h3>

                          {/* Subtitle */}
                          <p className="text-base md:text-lg text-white/90 leading-relaxed">
                            {iso.subtitle}
                          </p>
                          {/* CTA Button */}
                          <div
                            className={`flex items-center pt-2 ${
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
                          animate={{ scale: 1, opacity: 1 }}
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

            {/* "Altre ISO" Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              onHoverStart={() => setHoveredISO("list")}
              onHoverEnd={() => setHoveredISO(null)}
              onClick={onViewISOList}
              className="relative group cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden  bg-primary dark:bg-blue-800 ">
                {/* Decorative Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                      backgroundSize: "40px 40px",
                    }}
                  ></div>
                </div>

                {/* Animated Gradient Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600/30 to-blue-600/30"
                  animate={{
                    opacity: hoveredISO === "list" ? 0.5 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center text-white ">
                    <motion.div
                      animate={
                        hoveredISO === "list"
                          ? { scale: 1.1, rotate: 5 }
                          : { scale: 1, rotate: 0 }
                      }
                      transition={{ duration: 0.3 }}
                      className="flex justify-center"
                    >
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/30">
                        <Grid3x3 className="w-12 h-12 text-white" />
                      </div>
                    </motion.div>

                    <h3 className="text-3xl md:text-4xl">
                      Altre Certificazioni ISO
                    </h3>
                    
                    <p className="text-lg text-white/90 max-w-md mx-auto py-2">
                      Esplora tutte le altre certificazioni ISO offerte
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        size="lg"
                        className="bg-white text-primary hover:bg-white/90 px-8 py-3"
                      >
                        Visualizza tutte
                        <motion.div
                          animate={
                            hoveredISO === "list" ? { x: 5 } : { x: 0 }
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
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    
      {selectedISO && modalOpen && (
        <ISOModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          isoType={selectedISO}
        />
      )}
    </>
  );
}