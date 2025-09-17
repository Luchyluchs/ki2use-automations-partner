import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Brain } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import BusinessAnalysisTool from './BusinessAnalysisTool';

const LeadMagnetsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Brain className="w-4 h-4" />
            Kostenlose Business-Analyse
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entdecken Sie Ihr <span className="text-primary">KI-Automatisierungs-Potenzial</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <Brain className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">Smart Business-Analyse</h3>
                      <p className="text-sm text-primary font-medium">IST-Zustand vs. Potenzial</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 text-lg">
                    Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="font-semibold text-sm">Das erhalten Sie:</div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>IST-Zustand vs. Automatisierungs-Potenzial</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>ROI-Berechnung für jede Automatisierung</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Maßgeschneiderte Roadmap</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Kostenlose Beratung inklusive</span>
                    </div>
                  </div>
                  
                  <div className="bg-background/50 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-primary mx-auto mb-4" />
                      <div className="text-sm text-muted-foreground">
                        IST-Zustand analysieren + Potenzial bewerten
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:min-h-[600px]">
                  <div id="business-analysis">
                    <BusinessAnalysisTool />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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