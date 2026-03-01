import { useScrollReveal, useParallax, useScrollFade, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import VoiceAgent from "@/components/VoiceAgent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone, Clock, MessageCircle, Headphones, Search, Lightbulb, Rocket } from "lucide-react";
import CalendlyButton from "@/components/CalendlyButton";

const Contact = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  useMagneticCursor();
  
  useSEO(SEOTemplates.contact);
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-6 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Button variant="ghost" size="sm" asChild className="mb-6">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück
              </Link>
            </Button>
            
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-thin mb-4 tracking-tight">
                Ihr Weg zur KI beginnt{" "}
                <span className="text-primary font-light">mit einem Gespräch</span>
              </h1>
              <p className="text-lg text-muted-foreground font-light">
                Analyse · Empfehlung · Umsetzung — drei Schritte zu Ihrer individuellen KI-Lösung
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            
            {/* Primary: Beratungsgespräch mit 3-Schritt-Prozess */}
            <div className="mb-16 scroll-reveal">
              <div className="border border-card-border/30 rounded-2xl p-6 md:p-10 max-w-5xl mx-auto">
                <div>
                  <h2 className="text-2xl md:text-3xl font-thin mb-3 text-foreground tracking-tight">
                    Kostenloses Erstgespräch
                  </h2>
                  <p className="text-muted-foreground font-light mb-6">
                    30 Minuten persönliche KI-Beratung — individuell auf Ihr Unternehmen zugeschnitten.
                  </p>
                  
                  {/* 3-Schritt Beratungsprozess */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Search className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-foreground">Analyse</p>
                        <p className="text-sm text-muted-foreground font-light">Wir analysieren Ihre Prozesse und identifizieren KI-Potenziale</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Lightbulb className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-foreground">Empfehlung</p>
                        <p className="text-sm text-muted-foreground font-light">Sie erhalten konkrete, unverbindliche Handlungsempfehlungen</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Rocket className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm font-light text-foreground">Umsetzung</p>
                        <p className="text-sm text-muted-foreground font-light">Gemeinsam setzen wir die passende Lösung für Sie um</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <CalendlyButton 
                      text="Beratungsgespräch vereinbaren"
                      variant="cta"
                      size="lg"
                      className="max-w-md w-full"
                      icon={false}
                    />
                    <div className="mt-3 text-sm text-muted-foreground font-light">
                      <Clock className="w-4 h-4 inline mr-1" />
                      100% kostenlos & unverbindlich
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sekundäre Optionen */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              
              {/* Contact Form */}
              <div className="border border-card-border/30 rounded-2xl p-8 h-full scroll-reveal">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light">Nachricht senden</h3>
                    <p className="text-sm text-muted-foreground font-light">Antwort binnen 24h</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-light mb-6">
                  Beschreiben Sie Ihr Anliegen und erhalten Sie eine 
                  persönliche Antwort von unseren Experten.
                </p>
                
                <ContactForm />
              </div>

              {/* Voice Agent */}
              <div className="border border-card-border/30 rounded-2xl p-8 h-full scroll-reveal">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-light">KI-Agent sprechen</h3>
                    <p className="text-sm text-muted-foreground font-light">Sofort verfügbar</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground font-light mb-6">
                  Starten Sie ein Gespräch mit unserem intelligenten Voice-Agent. 
                  Ideal für erste Fragen und schnelle Beratung.
                </p>
                
                <VoiceAgent />
              </div>
            </div>

            {/* Direkter Kontakt */}
            <div className="border-t border-card-border/20 pt-8 scroll-reveal">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                  <h4 className="font-light mb-2">Direkter Kontakt bevorzugt?</h4>
                  <p className="text-sm text-muted-foreground font-light">
                    Rufen Sie an oder schreiben Sie eine E-Mail
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-light">info@ki2use.de</div>
                      <div className="text-xs text-muted-foreground font-light">24h Antwortzeit</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div>
                      <div className="font-light">+49 162 63 19 474</div>
                      <div className="text-xs text-muted-foreground font-light">Mo-Fr: 9-18 Uhr</div>
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
