import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import VoiceAgent from "@/components/VoiceAgent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, Phone, Clock, Users, Zap, Mic } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const Contact = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  
  // SEO optimization for Contact page
  useSEO(SEOTemplates.contact);
  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-subtle py-16">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center fade-in-element">
            <Button variant="ghost" size="sm" asChild className="mb-8 hover-scale">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-6 scale-in-element">
              Kontakt zu{" "}
              <span className="text-primary">KI2USE</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed fade-in-element">
              Vereinbaren Sie Ihr kostenloses Beratungsgespräch oder kontaktieren Sie uns 
              direkt. Wir freuen uns auf Ihre Anfrage!
            </p>
          </div>
        </div>
      </section>

      {/* Calendly CTA Section */}
      <section className="pt-2 pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-primary rounded-2xl p-8 py-12 text-primary-foreground hover-scale">
              <h2 className="text-2xl font-semibold mb-4">
                Kostenloses 30-minütiges Erstgespräch
              </h2>
              <p className="mb-6 opacity-90">
                Der schnellste Weg zu Ihrer individuellen KI-Lösung. Vereinbaren Sie 
                direkt einen Termin und sprechen Sie mit unseren Experten.
              </p>
              
              <CalendlyButton 
                text="Jetzt kostenlosen Termin buchen"
                variant="accent"
                size="lg"
                className="w-full bg-card text-foreground hover:bg-muted mb-4"
                icon={false}
              />
              
              <div className="grid grid-cols-3 gap-4 text-center max-w-md mx-auto">
                <div>
                  <Clock className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">30 Minuten</div>
                </div>
                <div>
                  <Users className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Persönlich</div>
                </div>
                <div>
                  <Zap className="w-6 h-6 mx-auto mb-2" />
                  <div className="text-sm">Online</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voice Agent Section */}
      <section className="pb-6 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto mb-8">
            <div className="bg-gradient-primary rounded-2xl p-6 text-center text-primary-foreground">
              <div className="flex items-center justify-center mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mr-3">
                  <Mic className="w-5 h-5 text-primary-foreground" />
                </div>
                <h2 className="text-xl font-semibold">
                  Sprechen Sie direkt mit unserem KI-Agenten
                </h2>
              </div>
              <p className="mb-4 opacity-90 text-sm max-w-2xl mx-auto">
                Unser intelligenter Sprachagent beantwortet Ihre Fragen in Echtzeit und kann 
                Sie bei der ersten Beratung unterstützen. Einfach auf "Gespräch starten" klicken und lossprechen!
              </p>
            </div>
            
            <div className="mt-6">
              <VoiceAgent />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-4">
              {/* Contact Details */}
              <div className="bg-card border border-card-border rounded-2xl p-8 shadow-card hover-lift">
                <h3 className="text-xl font-semibold mb-6">Direkter Kontakt</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">E-Mail</div>
                      <div className="text-muted-foreground">info@ki2use.de</div>
                      <div className="text-sm text-accent">Antwort innerhalb von 24h</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="font-medium">Telefon</div>
                      <div className="text-muted-foreground">+49 162 63 19 474</div>
                      <div className="text-sm text-accent">Mo-Fr: 9:00-18:00 Uhr</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* Response Time Info */}
              <div className="bg-muted border border-card-border rounded-xl p-6">
                <h4 className="font-semibold mb-3">Unsere Antwortzeiten</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">24h</div>
                    <div className="text-sm text-muted-foreground">E-Mail Antwort</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">2h</div>
                    <div className="text-sm text-muted-foreground">Dringende Anfragen</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">Sofort</div>
                    <div className="text-sm text-muted-foreground">Terminbuchung</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <ContactForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">
              Häufige Fragen zum{" "}
              <span className="text-primary">Erstgespräch</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift">
                <h4 className="font-semibold mb-3">Was passiert im Beratungsgespräch?</h4>
                <p className="text-muted-foreground text-sm">Wir analysieren Ihre aktuellen Prozesse, identifizieren Automatisierungspotenziale und entwickeln konkrete Lösungsvorschläge speziell für Ihr Unternehmen.</p>
              </div>
              
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift">
                <h4 className="font-semibold mb-3">Ist das Gespräch wirklich kostenlos?</h4>
                <p className="text-muted-foreground text-sm">Ja, absolut! Das 30-minütige Erstgespräch ist unverbindlich und kostenlos. Sie erhalten bereits wertvolle Insights für Ihr Unternehmen und das weitere Vorgehen.</p>
              </div>
              
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift">
                <h4 className="font-semibold mb-3">Welche Unterlagen sollte ich bereithalten?</h4>
                <p className="text-muted-foreground text-sm">Eine grobe Übersicht Ihrer gewünschten zu automatisierenden Geschäftsprozesse reicht aus. Wir besprechen alles Weitere gemeinsam im Gespräch.</p>
              </div>
              
              <div className="bg-card border border-card-border rounded-xl p-6 shadow-card hover-lift">
                <h4 className="font-semibold mb-3">Wie schnell kann implementiert werden?</h4>
                <p className="text-muted-foreground text-sm">Standard-Agenten können oft binnen weniger Tage aktiviert werden. Individuelle Lösungen benötigen je nach Komplexität 2-4 Wochen.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;