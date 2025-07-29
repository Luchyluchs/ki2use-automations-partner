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
      price: "5.000€",
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
      price: "8.500€",
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
            {/* Header */}
            <div className="text-center mb-16 fade-in-element">
              <h1 className="mb-6 scale-in-element">
                Professionelle Homepage mit KI-Integration
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto fade-in-element">
                Moderne, responsive Websites mit integrierten KI-Automatisierungen, 
                die Ihr Unternehmen digitalisieren und Ihren Umsatz steigern.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="text-center fade-in-element">
                    <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 hover-scale">
                      <IconComponent className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Pricing Packages */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Website-Pakete</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Wählen Sie das passende Paket für Ihre Anforderungen. 
                  Alle Pakete beinhalten KI-Automatisierungen und moderne Web-Technologien.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {packages.map((pkg, index) => (
                  <Card key={index} className={`relative ${pkg.popular ? 'border-primary shadow-lg scale-105' : ''} hover-lift`}>
                    {pkg.popular && (
                      <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-primary">
                        Beliebteste Wahl
                      </Badge>
                    )}
                    <CardHeader className="text-center">
                      <CardTitle>{pkg.name}</CardTitle>
                      <CardDescription>{pkg.description}</CardDescription>
                      <div className="text-3xl font-bold text-primary mt-4">
                        {pkg.price}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full mt-6" 
                        variant={pkg.popular ? "default" : "outline"}
                        asChild
                      >
                        <Link to="/kontakt">Jetzt beauftragen</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Process */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Unser Entwicklungsprozess</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Von der ersten Idee bis zur fertigen Website - 
                  wir begleiten Sie durch jeden Schritt des Entwicklungsprozesses.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
                  <div key={index} className="text-center fade-in-element">
                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold">
                      {process.step}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{process.title}</h3>
                    <p className="text-muted-foreground text-sm">{process.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-subtle rounded-2xl p-12">
              <h2 className="text-3xl font-bold mb-4">Bereit für Ihre neue Website?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen. 
                Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
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