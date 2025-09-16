import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Download, FileText, Calculator, Brain, ArrowRight } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import KIReadinessQuiz from './KIReadinessQuiz';
import { Link } from 'react-router-dom';

const LeadMagnetsSection = () => {
  const [activeTab, setActiveTab] = useState('checkliste');

  const leadMagnets = [
    {
      id: 'checkliste',
      icon: FileText,
      title: 'KI-Automatisierung Checkliste',
      subtitle: 'Kostenloser PDF-Download',
      description: 'Schritt-für-Schritt Anleitung zur Identifikation von Automatisierungspotentialen in Ihrem Unternehmen.',
      benefits: [
        '15 konkrete Prüfpunkte für KI-Potentiale',
        'Bewertungsmatrix für Prioritäten',
        'Kosten-Nutzen Rechner',
        'Implementierungs-Roadmap'
      ],
      cta: 'Checkliste herunterladen',
      gradient: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      id: 'rechner',
      icon: Calculator,
      title: 'ROI-Rechner',
      subtitle: 'Interaktive Kalkulation',
      description: 'Berechnen Sie in wenigen Minuten Ihr konkretes Einsparungspotential durch KI-Automatisierung.',
      benefits: [
        'Personalisierte Kosteneinsparung',
        'Amortisationszeit berechnen',
        'Verschiedene Szenarien vergleichen',
        'Detaillierte Aufschlüsselung'
      ],
      cta: 'Einsparungen berechnen',
      gradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      id: 'quiz',
      icon: Brain,
      title: 'KI-Bereitschafts-Test',
      subtitle: '5 Minuten Assessment',
      description: 'Finden Sie heraus, wie bereit Ihr Unternehmen für den Einsatz von KI-Agenten ist.',
      benefits: [
        'Personalisierte Empfehlungen',
        'Konkrete nächste Schritte',
        'Risikoeinschätzung',
        'Individueller Fahrplan'
      ],
      cta: 'Bereitschaft testen',
      gradient: 'from-purple-500/10 to-pink-500/10'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4" />
            Kostenlose Ressourcen
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Starten Sie <span className="text-primary">risikofrei</span> in die KI-Automatisierung
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nutzen Sie unsere kostenlosen Tools und Ressourcen, um das Potenzial 
            von KI-Agenten für Ihr Unternehmen zu bewerten.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {leadMagnets.map((magnet) => {
              const IconComponent = magnet.icon;
              return (
                <TabsTrigger 
                  key={magnet.id} 
                  value={magnet.id}
                  className="flex items-center gap-2 text-sm"
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="hidden sm:inline">{magnet.title}</span>
                  <span className="sm:hidden">{magnet.icon.name}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {leadMagnets.map((magnet) => {
            const IconComponent = magnet.icon;
            return (
              <TabsContent key={magnet.id} value={magnet.id}>
                <Card className={`bg-gradient-to-br ${magnet.gradient} border-primary/20`}>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary-foreground" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{magnet.title}</h3>
                            <p className="text-sm text-primary font-medium">{magnet.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground mb-6 text-lg">
                          {magnet.description}
                        </p>
                        
                        <div className="space-y-3 mb-6">
                          <div className="font-semibold text-sm">Das erhalten Sie:</div>
                          {magnet.benefits.map((benefit, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm">
                              <div className="w-2 h-2 bg-primary rounded-full"></div>
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                        
                        {magnet.id === 'rechner' ? (
                          <Button asChild className="bg-gradient-primary hover:shadow-elevated">
                            <Link to="/roi-rechner">
                              {magnet.cta}
                              <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        ) : magnet.id === 'quiz' ? (
                          <div className="text-sm text-muted-foreground">
                            Quiz wird im nächsten Abschnitt angezeigt ↓
                          </div>
                        ) : (
                          <Button className="bg-gradient-primary hover:shadow-elevated">
                            {magnet.cta}
                            <Download className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </div>
                      
                      <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                        <div className="text-center">
                          <IconComponent className="w-16 h-16 text-primary mx-auto mb-4" />
                          <div className="text-sm text-muted-foreground">
                            {magnet.id === 'checkliste' && "15-seitige PDF mit praktischen Tipps"}
                            {magnet.id === 'rechner' && "Interaktiver Web-Rechner"}
                            {magnet.id === 'quiz' && "Personalisiertes Assessment"}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Quiz Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Testen Sie Ihre KI-Bereitschaft
            </h3>
            <p className="text-muted-foreground">
              In nur 4 Fragen erfahren Sie, wie bereit Ihr Unternehmen für KI-Automatisierung ist.
            </p>
          </div>
          <KIReadinessQuiz />
        </div>

        {/* Newsletter Section */}
        <div className="mt-16">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetsSection;