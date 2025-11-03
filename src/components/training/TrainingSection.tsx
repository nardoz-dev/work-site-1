import { ImageWithFallback } from "../utils/fallback"
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Calendar, Clock, Users, BookOpen } from "lucide-react";

const courses = [
  {
    title: "Lead Auditor Qualità ISO 9001",
    description:
      "Corso di formazione per Lead Auditor per sistemi di gestione qualità secondo la norma ISO 9001.",
    duration: "40 ore",
    participants: "Max 15",
    level: "Avanzato",
    category: "Qualità",
  },
  {
    title: "Lead Auditor Ambiente ISO 14001",
    description:
      "Formazione completa per Lead Auditor ambientale secondo la norma ISO 14001.",
    duration: "40 ore",
    participants: "Max 15",
    level: "Avanzato",
    category: "Ambiente",
  },
  {
    title: "Lead Auditor Sicurezza ISO 45001",
    description:
      "Corso per Lead Auditor per sistemi di gestione della sicurezza sul lavoro ISO 45001.",
    duration: "40 ore",
    participants: "Max 15",
    level: "Avanzato",
    category: "Sicurezza",
  },
  {
    title: "Formazione Lavoratori",
    description:
      "Corso di formazione generale e specifica per lavoratori secondo D.Lgs 81/08.",
    duration: "8-16 ore",
    participants: "Max 35",
    level: "Base",
    category: "Sicurezza",
  },
  {
    title: "HACCP - Sicurezza Alimentare",
    description:
      "Corso di formazione per addetti alla manipolazione degli alimenti secondo Reg. CE 852/04.",
    duration: "8 ore",
    participants: "Max 25",
    level: "Base",
    category: "Alimentare",
  },
  {
    title: "Coordinatore Sicurezza",
    description:
      "Corso per Coordinatore della Sicurezza nei cantieri temporanei e mobili.",
    duration: "120 ore",
    participants: "Max 20",
    level: "Specialistico",
    category: "Sicurezza",
  },
];

export function Training() {
  return (
    <section id="training" className="py-20  bg-white dark:bg-gray-950  transition-colors duration-500">
      <div className="container mx-auto px-4">

        {/* Courses Grid */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl text-foreground mb-4">
              I Nostri Corsi di Formazione
            </h3>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Offriamo una vasta gamma di corsi di formazione
              professionale per la sicurezza, qualità e
              ambiente, tenuti da esperti qualificati del
              settore.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow duration-300 dark:bg-gray-800"
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge
                      variant="secondary"
                      className="text-xs bg-gray-200 dark:bg-gray-700"
                    >
                      {course.category}
                    </Badge>
                    <Badge
                      variant={
                        course.level === "Avanzato"
                          ? "destructive"
                          : course.level === "Specialistico"
                            ? "default"
                            : "secondary"
                      }
                      className="text-xs"
                    >
                      {course.level}
                    </Badge>
                  </div>
                  
                  <CardTitle className="text-lg">
                    {course.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 ">
                  <CardDescription className="text-gray-600 leading-relaxed dark:text-white">
                    {course.description}
                  </CardDescription>

                  <div className="space-y-2 text-sm text-gray-600 dark:text-white">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>Durata: {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>
                        Partecipanti: {course.participants}
                      </span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Maggiori Info
                  </Button>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}