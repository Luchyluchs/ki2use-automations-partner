import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Download, FileText, Brain, ArrowRight } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import KIChecklistDownload from './KIChecklistDownload';
import BusinessAnalysisTool from './BusinessAnalysisTool';
import { Link } from 'react-router-dom';

const LeadMagnetsSection = () => {
  const [activeTab, setActiveTab] = useState('checkliste');

  const leadMagnets = [
    {
      id: 'checkliste',
      icon: FileText,
      title: 'Interaktiver KI-Automatisierungs-Check',
      subtitle: 'Schritt-für-Schritt Durchgang',
      description: 'Gehen Sie durch 6 konkrete Automatisierungsmöglichkeiten und erhalten Sie eine personalisierte Analyse mit Zeitersparnis und Kostenberechnung.',
      benefits: [
        'Individuelle Potenzial-Bewertung',
        'Konkrete Zeit- und Kostenersparnis',
        'Priorisierte Umsetzungsempfehlungen',
        'Personalisierte E-Mail-Analyse'
      ],
      cta: 'Interaktiv durchgehen',
      gradient: 'from-blue-500/10 to-indigo-500/10'
    },
    {
      id: 'analyse',
      icon: Brain,
      title: 'Smart Business-Analyse',
      subtitle: 'IST-Zustand vs. Potenzial',
      description: 'Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.',
      benefits: [
        'IST-Zustand vs. Automatisierungs-Potenzial',
        'ROI-Berechnung für jede Automatisierung',
        'Maßgeschneiderte Roadmap',
        'Kostenlose Beratung inklusive'
      ],
      cta: 'Business-Analyse starten',
      gradient: 'from-green-500/10 to-emerald-500/10'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Download className="w-4 h-4" />
            Kostenlose Analyse-Tools
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entdecken Sie Ihr <span className="text-primary">KI-Automatisierungs-Potenzial</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Nutzen Sie unsere intelligenten Tools, um herauszufinden, welche Automatisierungen 
            für Ihr Unternehmen am wertvollsten sind.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
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
                        
                        <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                          <div className="text-center">
                            <IconComponent className="w-16 h-16 text-primary mx-auto mb-4" />
                            <div className="text-sm text-muted-foreground">
                              {magnet.id === 'checkliste' && "Schritt-für-Schritt durch 6 Automatisierungsbereiche"}
                              {magnet.id === 'analyse' && "IST-Zustand analysieren + Potenzial bewerten"}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="lg:min-h-[600px]">
                        {magnet.id === 'checkliste' && (
                          <div id="checklist-download">
                            <KIChecklistDownload />
                          </div>
                        )}
                        
                        {magnet.id === 'analyse' && (
                          <div id="business-analysis">
                            <BusinessAnalysisTool />
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Alternative Analysis Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Oder starten Sie direkt mit der Business-Analyse
            </h3>
            <p className="text-muted-foreground">
              Analysieren Sie Ihre aktuellen Prozesse und erhalten Sie maßgeschneiderte Automatisierungs-Empfehlungen.
            </p>
          </div>
          <div className="pt-6">
            <BusinessAnalysisTool />
          </div>
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