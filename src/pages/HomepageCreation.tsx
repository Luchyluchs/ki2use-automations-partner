import { useScrollReveal, useParallax, useScrollFade } from "@/hooks/useScrollAnimations";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Smartphone, Search, Bot, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HomepageCreation = () => {
  useScrollReveal();
  useParallax();
  useScrollFade();
  const packages = [
    {
      name: "Starter Website",
      price: "ab 5.000€",
      description: "Professionelle Website mit KI-Integration",
      features: [
        "Bis zu 10 Seiten",
        "Responsive Design",
        "KI-Chatbot Integration",
        "SEO-Grundoptimierung",
        "Contact-Formulare",
        "1 Jahr Support"
      ]
    },
    {
      name: "Business Website",
      price: "ab 8.000€",
      description: "Erweiterte Website mit Automatisierungen",
      features: [
        "Bis zu 15 Seiten",
        "Premium Design",
        "KI-Chatbot + Lead-Qualifizierung",
        "Erweiterte SEO-Optimierung",
        "E-Mail Automatisierung",
        "Analytics Dashboard",
        "2 Jahre Support"
      ],
      popular: true
    },
  ];

  const features = [
    {
      icon: Globe,
      title: "Moderne Web-Technologien",
      description: "Neueste Standards für Performance und Sicherheit"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimiert für alle Endgeräte und Bildschirmgrößen"
    },
    {
      icon: Search,
      title: "SEO-Optimiert",
      description: "Bessere Sichtbarkeit in Suchmaschinen"
    },
    {
      icon: Bot,
      title: "KI-Integration",
      description: "Intelligente Automatisierungen für bessere Conversion"
    },
    {
      icon: TrendingUp,
      title: "Conversion-Optimiert",
      description: "Designed für maximale Lead-Generierung"
    },
    {
      icon: Shield,
      title: "Sicher & Wartbar",
      description: "Regelmäßige Updates und Sicherheitsmonitoring"
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        <div className="section-padding">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Hero Section with Background */}
            <div className="relative text-center mb-12 sm:mb-16 lg:mb-20 fade-in-element">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
              <div className="relative z-10 py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 scale-in-element bg-gradient-primary bg-clip-text text-transparent leading-tight">
                  Professionelle Homepage mit KI-Integration
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element leading-relaxed">
                  Moderne, statische Websites wie diese hier – responsive, schnell und mit integrierten KI-Automatisierungen, 
                  die Ihr Unternehmen digitalisieren und Ihren Umsatz steigern.
                </p>
              </div>
            </div>

            {/* Features Grid with Enhanced Design */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <div className="text-center mb-8 sm:mb-10 lg:mb-12">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Was Sie bekommen</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="group bg-card border border-card-border rounded-2xl p-6 sm:p-8 text-center hover-lift transition-all duration-300 hover:shadow-elegant">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pricing Packages with Enhanced Visual Appeal */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <div className="text-center mb-12 sm:mb-14 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">Website-Pakete</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                  Wählen Sie das passende Paket für Ihre Anforderungen. 
                  Alle Pakete beinhalten KI-Automatisierungen und moderne Web-Technologien.
                </p>
                <div className="w-24 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6"></div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 max-w-5xl mx-auto pt-8 sm:pt-10 lg:pt-12">
                {packages.map((pkg, index) => (
                  <Card key={index} className={`group relative overflow-hidden ${pkg.popular ? 'border-primary shadow-elegant lg:scale-105 bg-gradient-subtle' : 'border-card-border'} hover-lift transition-all duration-300`}>
                    {pkg.popular && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary"></div>
                    )}
                    {pkg.popular && (
                      <Badge className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-gradient-primary shadow-glow text-xs sm:text-sm z-10">
                        Beliebteste Wahl
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-4 sm:pb-6 px-4 sm:px-6">
                      <CardTitle className="text-xl sm:text-2xl mb-2 group-hover:text-primary transition-colors">{pkg.name}</CardTitle>
                      <CardDescription className="text-sm sm:text-base px-2">{pkg.description}</CardDescription>
                      <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mt-4 sm:mt-6">
                        {pkg.price}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 px-4 sm:px-6">
                      <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 sm:mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${pkg.popular ? 'bg-gradient-primary hover:shadow-glow' : ''} transition-all duration-300 py-3 sm:py-4`}
                        variant={pkg.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link to="/kontakt" className="text-sm sm:text-base">Jetzt beauftragen</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process with Timeline Design */}
            <div className="mb-16 sm:mb-20 lg:mb-24">
              <div className="text-center mb-12 sm:mb-14 lg:mb-16">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">Unser Entwicklungsprozess</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
                  Von der ersten Idee bis zur fertigen Website - 
                  wir begleiten Sie durch jeden Schritt des Entwicklungsprozesses.
                </p>
                <div className="w-24 sm:w-32 h-1 bg-gradient-primary mx-auto rounded-full mt-4 sm:mt-6"></div>
              </div>

              <div className="relative">
                {/* Connection Line */}
                <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-8 relative z-10">
                  {[
                    {
                      step: "1",
                      title: "Beratung & Konzept",
                      description: "Ausführliche Analyse Ihrer Anforderungen und Zielgruppe"
                    },
                    {
                      step: "2", 
                      title: "Design & Prototyp",
                      description: "Modernes, responsives Design passend zu Ihrer Marke"
                    },
                    {
                      step: "3",
                      title: "Entwicklung & KI-Integration",
                      description: "Technische Umsetzung mit integrierten Automatisierungen"
                    },
                    {
                      step: "4",
                      title: "Launch & Support",
                      description: "Go-Live Ihrer Website mit kontinuierlichem Support"
                    }
                  ].map((process, index) => (
                    <div key={index} className="group text-center fade-in-element">
                      <div className="relative">
                        <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 text-primary-foreground font-bold text-lg sm:text-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                          {process.step}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 group-hover:text-primary transition-colors px-2">{process.title}</h3>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed px-2">{process.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative overflow-hidden bg-gradient-subtle rounded-2xl sm:rounded-3xl p-8 sm:p-12 lg:p-16 shadow-elegant mx-4 sm:mx-0">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-transparent">Bereit für Ihre neue Website?</h2>
                <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed px-4">
                  Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen. 
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg" asChild>
                  <Link to="/kontakt">Kostenloses Beratungsgespräch</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomepageCreation;