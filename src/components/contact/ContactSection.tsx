import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Phone, Mail, MapPin, Clock, Send, Star } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    details: ["+39 333 75 58 507", "Disponibile 24/7"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@studioventuriero.it", "preventivi@studioventuriero.it"]
  },
  {
    icon: MapPin,
    title: "Sede",
    details: ["Via Aaaaaa Km 106,500", "Aaaaaa (LT) - 04019"]
  },
  {
    icon: Clock,
    title: "Orari",
    details: ["Lun-Ven: 9:00 - 18:00", "Orario Continuato"]
  }
];

const testimonials = [
  {
    name: "Marco Rossi",
    company: "Edil Costruzioni SRL",
    rating: 5,
    text: "Professionalità e competenza eccezionali. Hanno gestito tutte le pratiche di sicurezza del nostro cantiere con estrema precisione.",
    date: "2 settimane fa"
  },
  {
    name: "Laura Bianchi",
    company: "TechStart Innovation",
    rating: 5,
    text: "Grazie a Studio Venturiero abbiamo ottenuto la certificazione ISO 9001 in tempi record. Consulenti preparati e sempre disponibili.",
    date: "1 mese fa"
  },
  {
    name: "Giuseppe Verdi",
    company: "Industrie Manifatturiere SpA",
    rating: 5,
    text: "Ottimo supporto per la valutazione dei rischi e formazione del personale. Consiglio vivamente i loro servizi.",
    date: "3 settimane fa"
  }
];

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background dark:bg-[#000000] transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl text-foreground mb-8">
            Contatta Studio Venturiero
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Details Card */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-white shadow-lg">
              <h3 className="text-xl mb-6">Parliamo del tuo progetto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-white mb-1">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-blue-100 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-blue-100 text-sm mb-4">
                  Seguici sui social media
                </p>
                <div className="flex gap-3">
                  {['L', 'F', 'I'].map((social, idx) => (
                    <div 
                      key={idx} 
                      className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-white/30 transition-colors"
                    >
                      <span className="text-sm">{social}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-xl border-0 bg-white dark:bg-[#1d1d1f] dark:border dark:border-gray-800">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-[#2a2a2c] dark:to-[#2d2f3f] rounded-t-xl">
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4 text-white" />
                  </div>
                  Invia una Richiesta
                </CardTitle>
                <CardDescription className="text-foreground/60">
                  Compila il form e ti contatteremo entro 24 ore per discutere delle tue esigenze.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-foreground/80">Nome *</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Il tuo nome" 
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground/80">Cognome *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Il tuo cognome"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground/80">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="la-tua-email@esempio.com"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80">Telefono</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+39 123 456 7890"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground/80">Azienda</Label>
                    <Input 
                      id="company" 
                      placeholder="Nome della tua azienda"
                      className="border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground/80">Servizio di Interesse</Label>
                    <Select>
                      <SelectTrigger className="border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500">
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
                  <Label htmlFor="message" className="text-foreground/80">Messaggio *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Descrivi brevemente le tue esigenze..."
                    className="min-h-[120px] border-gray-200 dark:border-gray-700 dark:bg-[#2a2a2c] focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button 
                    size="lg" 
                    className="bg-blue-600 hover:bg-blue-700 text-white flex-1 sm:flex-none shadow-lg"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Invia Richiesta
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 sm:flex-none border-blue-600 text-blue-600 hover:bg-blue-50 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-950/30"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chiamaci Ora
                  </Button>
                </div>

                <div className="bg-gray-50 dark:bg-[#2a2a2c] rounded-lg p-4 mt-6 border border-gray-200 dark:border-gray-800">
                  <p className="text-xs text-foreground/60 flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-1.5 flex-shrink-0"></span>
                    * Campi obbligatori. I tuoi dati saranno trattati secondo la normativa sulla privacy GDPR.
                    Tempo di risposta garantito: 24 ore lavorative.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mt-20">
          <h2 className="text-center text-3xl mb-12 text-foreground">
            Cosa dicono i nostri clienti
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white dark:bg-[#1d1d1f] border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  {/* Testimonial Text */}
                  <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author Info */}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                    <p className="text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-foreground/60">{testimonial.company}</p>
                    <p className="text-xs text-foreground/40 mt-1">{testimonial.date}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
