import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import VoiceAgent from "@/components/VoiceAgent";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Mail, Phone } from "lucide-react";
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
          <div className="max-w-3xl mx-auto text-center">
            <Button variant="ghost" size="sm" asChild className="mb-8">
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Zurück zur Startseite
              </Link>
            </Button>
            
            <h1 className="mb-6">
              Kostenlose{" "}
              <span className="text-primary">Beratung vereinbaren</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Sprechen Sie mit unseren KI-Experten und entdecken Sie Ihr Automatisierungspotenzial.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Single Column Layout */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-12">
            
            {/* Primary CTA */}
            <div className="text-center">
              <div className="bg-gradient-primary rounded-2xl p-8 text-primary-foreground">
                <h2 className="text-2xl font-bold mb-4">
                  30-Minuten Beratungsgespräch
                </h2>
                <p className="opacity-90 mb-6">
                  Vereinbaren Sie einen Termin und erhalten Sie eine individuelle Analyse 
                  Ihres Automatisierungspotenzials.
                </p>
                
                <CalendlyButton 
                  text="Kostenlosen Termin buchen"
                  variant="cta"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-50"
                  icon={true}
                />
              </div>
            </div>

            {/* Voice Agent */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">
                Oder sprechen Sie sofort mit unserem KI-Agenten
              </h3>
              <div className="bg-muted rounded-2xl p-6">
                <VoiceAgent />
              </div>
            </div>

            {/* Contact Form */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">
                Schriftliche Anfrage senden
              </h3>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="bg-muted rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-center mb-6">
                Direkter Kontakt
              </h3>
              
              <div className="space-y-6 max-w-md mx-auto">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">info@ki2use.de</div>
                    <div className="text-sm text-muted-foreground">Antwort innerhalb 24h</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-medium">+49 162 63 19 474</div>
                    <div className="text-sm text-muted-foreground">Mo-Fr: 9:00-18:00 Uhr</div>
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