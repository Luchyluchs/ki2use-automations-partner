import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import VoiceAgent from "@/components/VoiceAgent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, Phone, Clock, MessageCircle, Headphones } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const Contact = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  
  // SEO optimization for Contact page
  useSEO(SEOTemplates.contact);
  
  return (
    <Layout>
      {/* Hero Section - Compact */}
      <section className="bg-gradient-subtle pt-12 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Link>
            </Button>
            
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Sprechen wir über Ihre{" "}
                <span className="text-primary">KI-Automatisierung</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Drei einfache Wege, um mit uns in Kontakt zu treten
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Asymmetric Grid */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Primary Action - Calendly (Prominent but not overwhelming) */}
            <div className="mb-16">
              <div className="bg-gradient-primary rounded-2xl p-6 md:p-10 text-primary-foreground max-w-5xl mx-auto shadow-elevated">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-3">
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                      Kostenloses Beratungsgespräch
                    </h2>
                    <p className="text-lg mb-2 opacity-90">
                      30 Minuten persönliche KI-Beratung
                    </p>
                    <p className="opacity-80">
                      Individuelle Analyse Ihres Automatisierungspotenzials 
                      mit konkreten, unverbindlichen Empfehlungen.
                    </p>
                  </div>
                  <div className="lg:col-span-2 text-center lg:text-right">
                    <CalendlyButton 
                      text="Kostenlosen Beratungstermin buchen"
                      variant="cta"
                      size="lg"
                      className="bg-white text-primary hover:bg-gray-50 w-full px-6 py-4 text-base font-semibold"
                      icon={false}
                    />
                    <div className="mt-3 text-sm opacity-80">
                      <Clock className="w-4 h-4 inline mr-1" />
                      100% kostenlos & unverbindlich
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Alternative Options - Balanced Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Voice Agent */}
              <div className="bg-card border border-card-border rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">KI-Agent sprechen</h3>
                    <p className="text-sm text-muted-foreground">Sofort verfügbar</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Starten Sie ein Gespräch mit unserem intelligenten Voice-Agent. 
                  Ideal für erste Fragen und schnelle Beratung.
                </p>
                
                <VoiceAgent />
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-card-border rounded-2xl p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Nachricht senden</h3>
                    <p className="text-sm text-muted-foreground">Antwort binnen 24h</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Beschreiben Sie Ihr Anliegen und erhalten Sie eine 
                  persönliche Antwort von unseren Experten.
                </p>
                
                <ContactForm />
              </div>
            </div>

            {/* Direct Contact - Compact Footer */}
            <div className="bg-muted rounded-2xl p-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Direkter Kontakt bevorzugt?</h4>
                  <p className="text-sm text-muted-foreground">
                    Rufen Sie an oder schreiben Sie eine E-Mail
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">info@ki2use.de</div>
                      <div className="text-xs text-muted-foreground">24h Antwortzeit</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-medium">+49 162 63 19 474</div>
                      <div className="text-xs text-muted-foreground">Mo-Fr: 9-18 Uhr</div>
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