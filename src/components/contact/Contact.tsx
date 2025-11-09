import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { ImageWithFallback } from "../utils/fallback";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    details: ["+39 333 33 33 333", "Disponibile 24/7"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@studioventuriero.it", "preventivi@studioventuriero.it"]
  },
  {
    icon: MapPin,
    title: "Sede",
    details: ["Viaaaaa aaa aa 106,500", "Aaaaaa (LT) - 04013"]
  },
  {
    icon: Clock,
    title: "Orari",
    details: ["Lun-Ven: 9:00 - 18:00", "Orario Continuato"]
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-[#f5f5f7] dark:bg-[#1d1d1f] transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm mb-4">
            <Send className="w-4 h-4" />
            CONTATTACI
          </div>
          <h2 className="text-3xl lg:text-4xl text-gray-900 dark:text-white mb-4">
            Richiedi una <span className="text-blue-600 dark:text-blue-500">Consulenza Gratuita</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Siamo qui per aiutarti a rendere il tuo ambiente di lavoro più sicuro. 
            Contattaci per una valutazione preliminare gratuita.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-white mb-8 shadow-lg dark:shadow-blue-900/20">
              <h3 className="text-xl mb-6">Parliamo del tuo progetto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-blue-100 dark:text-blue-200 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20 dark:border-white/10">
                <p className="text-blue-100 dark:text-blue-200 text-sm mb-4">
                  Seguici sui social media
                </p>
                <div className="flex gap-3">
                  {['LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                    <div key={social} className="w-8 h-8 bg-white/20 dark:bg-white/10 rounded-lg flex items-center justify-center text-xs cursor-pointer hover:bg-white/30 dark:hover:bg-white/20 transition-colors">
                      {social[0]}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1675093022653-59233299f8ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjaWxpdHklMjBzYWZldHl8ZW58MXx8fHwxNzU3Njg2NDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Industrial facility safety"
                className="w-full h-48 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="text-sm">La sicurezza è il nostro lavoro</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl dark:shadow-blue-900/10 border-0 dark:border dark:border-gray-800 bg-white/80 dark:bg-[#2d2d2f]/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-[#2a2a2c] dark:to-[#2d2f3f] rounded-t-lg">
                <CardTitle className="text-2xl text-gray-900 dark:text-white flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 dark:bg-blue-700 rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Invia una Richiesta
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-400">
                  Compila il form e ti contatteremo entro 24 ore per discutere delle tue esigenze.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 dark:text-gray-300">Nome *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Il tuo nome" 
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 dark:text-gray-300">Cognome *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Il tuo cognome"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-gray-700 dark:text-gray-300">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="la-tua-email@esempio.com"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-gray-700 dark:text-gray-300">Telefono</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+39 123 456 7890"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-gray-700 dark:text-gray-300">Azienda</Label>
                    <Input 
                      id="company" 
                      placeholder="Nome della tua azienda"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-gray-700 dark:text-gray-300">Servizio di Interesse</Label>
                    <Select>
                      <SelectTrigger className="border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600">
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sistemi-gestione">Sistemi di Gestione</SelectItem>
                        <SelectItem value="sicurezza-cantieri">Sicurezza Cantieri</SelectItem>
                        <SelectItem value="sicurezza-lavoro">Sicurezza sul Lavoro</SelectItem>
                        <SelectItem value="sicurezza-alimentare">Sicurezza Alimentare</SelectItem>
                        <SelectItem value="formazione">Corsi di Formazione</SelectItem>
                        <SelectItem value="verifica-impianti">Verifica Impianti</SelectItem>
                        <SelectItem value="altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 dark:text-gray-300">Messaggio *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descrivi brevemente le tue esigenze..."
                    className="min-h-[120px] border-gray-200 dark:border-gray-700 dark:bg-[#1a1a1c] dark:text-white focus:border-blue-500 focus:ring-blue-500 dark:focus:border-blue-600"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-700 dark:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 flex-1 sm:flex-none shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Invia Richiesta
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 sm:flex-none border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-950/30"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chiamaci Ora
                  </Button>
                </div>

                <div className="bg-gray-50 dark:bg-[#1a1a1c] rounded-lg p-4 mt-6 border border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-gray-500 dark:text-gray-400 flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 dark:bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></span>
                    * Campi obbligatori. I tuoi dati saranno trattati secondo la normativa sulla privacy GDPR.
                    Tempo di risposta garantito: 24 ore lavorative.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}