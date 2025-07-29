import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Globe, Smartphone, Search, Bot, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const HomepageCreation = () => {
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
            <div className="relative text-center mb-20 fade-in-element">
              <div className="absolute inset-0 bg-gradient-primary opacity-5 rounded-3xl"></div>
              <div className="relative z-10 py-16 px-8">
                <h1 className="mb-8 scale-in-element bg-gradient-primary bg-clip-text text-transparent">
                  Professionelle Homepage mit KI-Integration
                </h1>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element leading-relaxed">
                  Moderne, statische Websites wie diese hier – responsive, schnell und mit integrierten KI-Automatisierungen, 
                  die Ihr Unternehmen digitalisieren und Ihren Umsatz steigern.
                </p>
              </div>
            </div>

            {/* Features Grid with Enhanced Design */}
            <div className="mb-24">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Was Sie bekommen</h2>
                <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const IconComponent = feature.icon;
                  return (
                    <div key={index} className="group bg-card border border-card-border rounded-2xl p-8 text-center hover-lift transition-all duration-300 hover:shadow-elegant">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-glow">
                        <IconComponent className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Pricing Packages with Enhanced Visual Appeal */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Website-Pakete</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Wählen Sie das passende Paket für Ihre Anforderungen. 
                  Alle Pakete beinhalten KI-Automatisierungen und moderne Web-Technologien.
                </p>
                <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto pt-8">
                {packages.map((pkg, index) => (
                  <Card key={index} className={`group relative overflow-hidden ${pkg.popular ? 'border-primary shadow-elegant scale-105 bg-gradient-subtle' : 'border-card-border'} hover-lift transition-all duration-300`}>
                    {pkg.popular && (
                      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary"></div>
                    )}
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary shadow-glow">
                        Beliebteste Wahl
                      </Badge>
                    )}
                    <CardHeader className="text-center pb-6">
                      <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">{pkg.name}</CardTitle>
                      <CardDescription className="text-base">{pkg.description}</CardDescription>
                      <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mt-6">
                        {pkg.price}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-4 mb-8">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center group-hover:translate-x-1 transition-transform duration-200">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full ${pkg.popular ? 'bg-gradient-primary hover:shadow-glow' : ''} transition-all duration-300`}
                        variant={pkg.popular ? "default" : "outline"}
                        size="lg"
                        asChild
                      >
                        <Link to="/kontakt">Jetzt beauftragen</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process with Timeline Design */}
            <div className="mb-24">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Unser Entwicklungsprozess</h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Von der ersten Idee bis zur fertigen Website - 
                  wir begleiten Sie durch jeden Schritt des Entwicklungsprozesses.
                </p>
                <div className="w-32 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
              </div>

              <div className="relative">
                {/* Connection Line */}
                <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-primary opacity-30 transform -translate-y-1/2"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
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
                        <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 text-primary-foreground font-bold text-xl shadow-glow group-hover:scale-110 transition-transform duration-300">
                          {process.step}
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">{process.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{process.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced CTA Section */}
            <div className="relative overflow-hidden bg-gradient-subtle rounded-3xl p-16 shadow-elegant">
              <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
              <div className="relative z-10 text-center">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">Bereit für Ihre neue Website?</h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
                  Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen. 
                  Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
                </p>
                <Button size="lg" className="bg-gradient-primary hover:shadow-glow transition-all duration-300 px-12 py-6 text-lg" asChild>
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