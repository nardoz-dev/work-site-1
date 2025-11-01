import React, {useState} from "react";
import { ChevronDown } from "lucide-react"; 
import {ThemeToggle} from "./ThemeToggle"; 
import Logo from "../assets/LogoNew.png?url"; 

export function NavBar() {

    const [isoDropdown, setIsoDropdown] = useState(false);
    const [assignmentDropdown, setAssignmentDropdown] = useState(false);
    const [securityDropdown, setSecurityDropdown] = useState(false);
    const [assignmentsDropdown, setAssignmentsDropdown] = useState(false);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 dark:bg-[#1d1d1f]/80 backdrop-blur-lg border-b border-white/10 transition-all duration-300 h-16">
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center justify-between">
              {/* Logo e Titolo */}
              <div className="flex items-center space-x-3">
              <img
                  src={Logo}
                  alt="Studio Venturiero Logo"
                  className="w-12 h-12 rounded object-cover"
              />
              <span className="text-lg tracking-wider text-white">
                  STUDIO VENTURIERO
              </span>
              </div>

              {/* Navbar Links */}
              <nav className="hidden md:flex items-center space-x-6 text-sm">
              <a
                  href="/"
                  className="text-white hover:text-blue-400 transition-colors border-b-2 border-transparent hover:border-blue-500"
              >
                  Home
              </a>
              {/* Dropdown Consulenza ISO */}
              <div
                className="relative group"
                onMouseEnter={() => setIsoDropdown(true)}
                onMouseLeave={() => setIsoDropdown(false)}
              >
                <a
                  href="/#iso"
                  className="text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Consulenza ISO <ChevronDown className="w-3.5 h-3.5" />
                </a>
                {isoDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
                      {isoLinks.map((iso) => (
                      <a
                        key={iso.code}
                        href={`/iso/${iso.code}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        >
                        {iso.label}
                      </a>
                      ))}
                      <a
                      href="/iso/"
                      className="block px-4 py-2 hover:bg-gray-700"
                      >
                      Altre ISO
                      </a>
                  </div>
                )}
              </div>
              <div className="relative group">
                  <a
                  href="/#security"
                  className="text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                  >
                  Consulenza Sicurezza <ChevronDown className="w-3.5 h-3.5" />
                  </a>
              </div>
              <div
                className="relative group"
                onMouseEnter={() => setAssignmentDropdown(true)}
                onMouseLeave={() => setAssignmentDropdown(false)}
              >
                <a
                  href="/#assignments"
                  className="text-white hover:text-blue-400 transition-colors flex items-center gap-1"
                >
                  Incarichi <ChevronDown className="w-3.5 h-3.5" />
                </a>
                {assignmentDropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg">
                      {assignmentLinks.map((assignment) => (
                      <a
                        key={assignment.code}
                        href={`/assignment/${assignment.code}`}
                        className="block px-4 py-2 hover:bg-gray-700"
                        >
                        {assignment.label}
                      </a>
                      ))}
                  </div>
                )}
              </div>

              <a
                  href="/#training"
                  className="text-white hover:text-blue-400 transition-colors"
              >
                  Formazione
              </a>
              <a
                  href="/#news"
                  className="text-white hover:text-blue-400 transition-colors"
              >
                  News
              </a>
              <a
                  href="/#contact"
                  className="text-white hover:text-blue-400 transition-colors"
              >
                  Contatti
              </a>
              <ThemeToggle />
              </nav>
          </div>
        </div>
    </nav>
    );
}