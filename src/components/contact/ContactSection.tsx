import { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Phone, Mail, MapPin, Clock, Send, Star, MessageSquare } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefono",
    details: ["+39 333 -- -- ---", "Disponibile 24/7"]
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
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });

  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleMailto = () => {

    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Per favore compila almeno Nome, Cognome");
      return;
    }
    const mailTo = "info@studioventuriero.it";
    
    const subject = `Sito Web: ${formData.service || "Informazioni Generiche"} - ${formData.firstName} ${formData.lastName}`;

    const body = `
Buongiorno Studio Venturiero,

Vorrei richiedere informazioni riguardo: ${formData.service || "N/D"}.

--- DATI CONTATTO ---
Nome: ${formData.firstName} ${formData.lastName}
Azienda: ${formData.company || "Privato"}
Email: ${formData.email}
Telefono: ${formData.phone || "N/D"}

--- MESSAGGIO ---
${formData.message}

Cordiali saluti,
${formData.firstName} ${formData.lastName}
    `.trim();

    window.location.href = `mailto:${mailTo}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });

  };

  return (
    <section id="contact" className="py-20 bg-background text-foreground transition-colors duration-500">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          {/* * Header Section * */}
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-primary dark:text-blue-400 px-4 py-2 rounded-full text-sm mb-4">
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

        {/* Main Contact Section */}
        <div className="grid lg:grid-cols-5 gap-8 mb-20">
          {/* Contact Info Cards - Left Side */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary dark:from-blue-700 dark:to-blue-800 rounded-2xl p-8 text-white shadow-xl">
              <h3 className="text-2xl mb-6">Parliamo del tuo progetto</h3>
              <div className="mt-8 pt-8 border-t border-white/20"> 
              </div>
              <p className="text-blue-100 mb-8">
                Compila il form oppure contattaci direttamente attraverso uno dei canali qui sotto.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4 group cursor-pointer">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-white/30 transition-colors">
                        <IconComponent className="w-6 h-6" />
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
              
              <div className="mt-8 pt-8 border-t border-white/20">
               
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 bg-white dark:bg-gray-900 dark:border dark:border-gray-800">
              <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-950/30 rounded-t-xl border-b border-gray-200 dark:border-gray-800">
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                    <Send className="w-5 h-5 text-white" />
                  </div>
                  Invia una Richiesta
                </CardTitle>
                <CardDescription className="text-foreground/60 text-base">
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
                      className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-foreground/80">Cognome *</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Il tuo cognome"
                      className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
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
                      className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground/80">Telefono</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+39 123 456 7890"
                      className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground/80">Azienda</Label>
                    <Input 
                      id="company" 
                      placeholder="Nome della tua azienda"
                      className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground/80">Servizio di Interesse</Label>
                    <Select>
                      <SelectTrigger className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500">
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sistemi-gestione">Sistemi di Gestione</SelectItem>
                        <SelectItem value="sicurezza-lavoro">Sicurezza sul Lavoro</SelectItem>
                        <SelectItem value="sicurezza-alimentare">Sicurezza Alimentare</SelectItem>
                        <SelectItem value="formazione">Corsi di Formazione</SelectItem>
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
                    className="min-h-[140px] border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-blue-700 text-white flex-1 h-12 shadow-lg hover:shadow-xl transition-all"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Invia Richiesta
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="flex-1 h-12 border-primary text-primary hover:bg-blue-50 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-950/30"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Chiamaci Ora
                  </Button>
                </div>

                <div className="bg-blue-50 dark:bg-blue-950/20 rounded-xl p-4 border border-blue-200 dark:border-blue-900">
                  <p className="text-xs text-foreground/60 flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    * Campi obbligatori. I tuoi dati saranno trattati secondo la normativa sulla privacy GDPR.
                    Tempo di risposta garantito: 24 ore lavorative.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials and Review Form Section */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Existing Testimonials */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl text-foreground mb-2">
                Cosa dicono i nostri <span className="text-blue-600 dark:text-blue-400">clienti</span>
              </h2>
              <p className="text-foreground/60">
                Le recensioni dei nostri clienti soddisfatti
              </p>
            </div>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-all hover:scale-[1.02] duration-300">
                  <CardContent className="p-6">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    {/* Testimonial Text */}
                    <p className="text-foreground/80 mb-4 leading-relaxed italic">
                      "{testimonial.text}"
                    </p>
                    
                    {/* Author Info */}
                    <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
                      <div>
                        <p className="text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-foreground/60">{testimonial.company}</p>
                      </div>
                      <p className="text-xs text-foreground/40">{testimonial.date}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Leave a Review Form */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl text-foreground mb-2">
                Lascia una <span className="text-blue-600 dark:text-blue-400">recensione</span>
              </h2>
              <p className="text-foreground/60">
                Condividi la tua esperienza con noi
              </p>
            </div>

            <Card className="shadow-xl border-0 bg-white dark:bg-gray-900 dark:border dark:border-gray-800 sticky top-24">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-t-xl border-b border-gray-200 dark:border-gray-800">
                <CardTitle className="text-xl text-foreground flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary dark:bg-blue-700 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>
                  La tua opinione conta
                </CardTitle>
                <CardDescription className="text-foreground/60">
                  Aiutaci a migliorare i nostri servizi con il tuo feedback
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                {/* Rating Selection */}
                <div className="space-y-3">
                  <Label className="text-foreground/80">Valutazione *</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        onMouseEnter={() => setHoveredRating(star)}
                        onMouseLeave={() => setHoveredRating(0)}
                        className="transition-transform hover:scale-125 focus:outline-none"
                      >
                        <Star
                          className={`w-10 h-10 transition-colors ${
                            (hoveredRating || rating) >= star
                              ? "fill-yellow-400 text-yellow-400"
                              : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-sm text-foreground/60">
                      Hai selezionato {rating} {rating === 1 ? "stella" : "stelle"}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reviewName" className="text-foreground/80">Nome *</Label>
                  <Input 
                    id="reviewName" 
                    placeholder="Il tuo nome" 
                    className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reviewCompany" className="text-foreground/80">Azienda</Label>
                  <Input 
                    id="reviewCompany" 
                    placeholder="Nome della tua azienda (opzionale)" 
                    className="h-12 border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reviewText" className="text-foreground/80">La tua recensione *</Label>
                  <Textarea 
                    id="reviewText" 
                    placeholder="Raccontaci la tua esperienza..."
                    className="min-h-[140px] border-gray-300 dark:border-gray-700 dark:bg-gray-800 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  size="lg" 
                  className="w-full h-12 bg-primary hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Invia Recensione
                </Button>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-foreground/60">
                    La tua recensione sarà visibile dopo la verifica del nostro team. Grazie per il tuo contributo!
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