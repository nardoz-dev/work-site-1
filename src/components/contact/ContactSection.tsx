import { useState } from "react";
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
          <h1 className="text-4xl lg:text-5xl text-foreground mb-8">
            Contatta Studio Venturiero
          </h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-primary rounded-2xl p-8 text-primary-foreground shadow-lg">
              <h3 className="text-xl mb-6">Parliamo del tuo progetto</h3>
              <div className="space-y-6">
                {contactInfo.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-primary-foreground mb-1">{item.title}</h4>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-primary-foreground/70 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-primary-foreground/70 text-sm mb-4">
                  Seguici sui social media
                </p>
                <div className="flex gap-3">
                  {['L', 'F', 'I'].map((social, idx) => (
                    <div 
                      key={idx} 
                      className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center cursor-pointer hover:bg-primary-foreground/30 transition-colors"
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
            <Card className="shadow-xl border-border bg-card">
              <CardHeader className="bg-muted/50 rounded-t-xl">
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-lg flex items-center justify-center">
                    <Send className="w-4 h-4" />
                  </div>
                  Invia una Richiesta
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Compila il form e ti contatteremo entro 24 ore per discutere delle tue esigenze.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-muted-foreground">Nome *</Label>
                    <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Il tuo nome" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-muted-foreground">Cognome *</Label>
                    <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Il tuo cognome" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-muted-foreground">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="la-tua-email@esempio.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-muted-foreground">Telefono</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+39 123 456 7890" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-muted-foreground">Azienda</Label>
                    <Input id="company" value={formData.company} onChange={handleChange} placeholder="Nome della tua azienda" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-muted-foreground">Servizio di Interesse</Label>
                    <Select onValueChange={handleSelectChange}> 
                      <SelectTrigger>
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Sistemi di Gestione">Sistemi di Gestione</SelectItem>
                        <SelectItem value="Sicurezza sul Lavoro">Sicurezza sul Lavoro</SelectItem>
                        <SelectItem value="Sicurezza Alimentare">Sicurezza Alimentare</SelectItem>
                        <SelectItem value="Corsi di Formazione">Corsi di Formazione</SelectItem>
                        <SelectItem value="Altro">Altro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-muted-foreground">Messaggio</Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Descrivi brevemente le tue esigenze..." className="min-h-[120px]" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <Button size="lg" onClick={handleMailto} className="flex-1 sm:flex-none">
                    <Send className="w-4 h-4 mr-2" />
                    Invia Richiesta
                  </Button>
                  <Button size="lg" variant="outline" onClick={() => window.location.href = "tel:+393333333333"} className="flex-1 sm:flex-none">
                    <Phone className="w-4 h-4 mr-2" />
                    Chiamaci Ora
                  </Button>
                </div>

                <div className="bg-muted/50 rounded-lg p-4 mt-6 border border-border">
                  <p className="text-xs text-muted-foreground flex items-start gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></span>
                    * Campi obbligatori. I tuoi dati saranno trattati secondo la normativa sulla privacy GDPR.
                    Cliccando Invia si aprirà il tuo client di posta predefinito.
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
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{testimonial.date}</p>
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