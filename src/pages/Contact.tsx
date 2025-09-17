import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import VoiceAgent from "@/components/VoiceAgent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, Phone, Clock, Users, Zap, Mic, CheckCircle } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const Contact = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  
  // SEO optimization for Contact page
  useSEO(SEOTemplates.contact);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-subtle py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in-element">
            <Button variant="ghost" size="sm" asChild className="mb-8 hover-scale">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-6 scale-in-element">
              Starten Sie Ihre{" "}
              <span className="text-primary">KI-Automatisierung</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-element max-w-3xl mx-auto">
              Vereinbaren Sie Ihr kostenloses Beratungsgespräch und entdecken Sie, 
              wie KI Ihr Unternehmen effizienter macht.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            
            {/* Primary CTA - Calendly */}
            <div className="mb-16">
              <div className="bg-gradient-primary rounded-3xl p-12 text-center text-primary-foreground shadow-elevated">
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">
                    Kostenloses 30-Minuten Beratungsgespräch
                  </h2>
                  <p className="text-xl opacity-90 mb-8">
                    Der schnellste Weg zu Ihrer individuellen KI-Automatisierung. 
                    Sprechen Sie direkt mit unseren Experten.
                  </p>
                  
                  <CalendlyButton 
                    text="Jetzt kostenlosen Termin buchen"
                    variant="cta"
                    size="lg"
                    className="w-full max-w-md mx-auto bg-white text-primary hover:bg-gray-50 mb-8"
                    icon={true}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <Clock className="w-6 h-6" />
                      </div>
                      <div className="font-medium">30 Minuten</div>
                      <div className="text-sm opacity-80">Intensive Beratung</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <Users className="w-6 h-6" />
                      </div>
                      <div className="font-medium">Persönlich</div>
                      <div className="text-sm opacity-80">Individuelle Analyse</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                        <CheckCircle className="w-6 h-6" />
                      </div>
                      <div className="font-medium">Unverbindlich</div>
                      <div className="text-sm opacity-80">Kostenlose Beratung</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Contact Methods */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Voice Agent */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">
                    Sprechen Sie mit unserem KI-Agenten
                  </h3>
                  <p className="text-muted-foreground">
                    Unser intelligenter Sprachagent beantwortet Ihre Fragen sofort 
                    und kann Sie bei der ersten Beratung unterstützen.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20">
                  <VoiceAgent />
                </div>
              </div>

              {/* Contact Form */}
              <div className="space-y-6">
                <div className="text-center lg:text-left">
                  <h3 className="text-2xl font-bold mb-4">
                    Schriftliche Anfrage
                  </h3>
                  <p className="text-muted-foreground">
                    Senden Sie uns eine Nachricht und erhalten Sie innerhalb von 24 Stunden 
                    eine persönliche Antwort von unseren Experten.
                  </p>
                </div>
                
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div className="mt-16">
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-center mb-8">Direkter Kontakt</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">E-Mail</div>
                      <div className="text-muted-foreground">info@ki2use.de</div>
                      <div className="text-sm text-primary">Antwort innerhalb 24h</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-semibold">Telefon</div>
                      <div className="text-muted-foreground">+49 162 63 19 474</div>
                      <div className="text-sm text-primary">Mo-Fr: 9:00-18:00 Uhr</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <div className="inline-flex items-center space-x-8 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span>Schnelle Antwortzeiten</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span>Kostenlose Beratung</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span>Individuelle Lösungen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;