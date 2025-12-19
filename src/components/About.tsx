import { User, Shield, CheckCircle, Award, Target, Sparkles } from "lucide-react";
import Logo from "../assets/LogoNew.png?url"; 
import { motion } from "framer-motion";
import {useState, useEffect, useRef} from "react";

export function About() {

  return (
    <section id="about" className="py-12 bg-muted text-foreground transition-colors duration-500">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 py-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with decorative line */}
         
          <motion.div
            initial={{ opacity: 1, y: 40 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl mb-8 tracking-tight">
              Chi <span className="text-blue-500">Siamo</span>
            </h2>

          </motion.div>
         

          <div className="grid lg:grid-cols-[300px_1fr] gap-12 items-stretch">
            {/* Left Side - Visual Element */}
            <div className="hidden lg:block h-full">
              <div className="relative group h-full">
                {/* Main card */}
                <div className="relative bg-primary dark:bg-blue-800 p-8 rounded-3xl shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500 h-full flex flex-col">
                  {/* Decorative grid pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                      backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
                      backgroundSize: '20px 20px'
                    }}></div>
                  </div>
                  
                  {/* Icons arrangement */}
                  <div className="relative space-y-6 flex-1">
                    <div className="flex justify-center">
                      <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 group-hover:scale-110 transition-transform duration-500">
                        <img
                        src={Logo}
                        alt="Studio Venturiero Logo"
                        className="w-20 h-20 rounded object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-white/30 rounded-tr-xl"></div>
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-white/30 rounded-bl-xl"></div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8">
              {/* Mobile icon */}
              <div className="lg:hidden flex justify-center mb-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 rounded-2xl blur-xl opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-500 dark:to-blue-600 p-6 rounded-2xl shadow-xl">
                    <Shield className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>

              {/* Text content */}
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900/50 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 hover:border-primary dark:hover:border-primary transition-all duration-300">
                  <p className="text-foreground/90 leading-relaxed text-lg">
                    Sono un <span className="text-primary font-medium">professionista specializzato in sicurezza sul lavoro e sistemi di gestione conformi agli standard ISO</span>, con una consolidata esperienza pluriennale sviluppata in contesti organizzativi eterogenei.
                    Metto a disposizione delle aziende <span className="text-primary font-medium">competenze qualificate, capacità analitiche e un approccio operativo strutturato</span>, garantendo interventi tempestivi, efficaci e perfettamente integrabili nei processi interni.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}