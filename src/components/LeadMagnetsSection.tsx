import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Brain } from 'lucide-react';
import NewsletterSignup from './NewsletterSignup';
import BusinessAnalysisTool from './BusinessAnalysisTool';

const LeadMagnetsSection = () => {
  return (
    <section className="py-16 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh"></div>
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-thin text-white mb-6">
            Entdecken Sie Ihr <span className="text-primary">KI-Automatisierungs-Potenzial</span>
          </h2>
          
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-8 font-light">
            Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                <div>
                  <div className="mb-4">
                      <h3 className="text-2xl font-light text-white">Smart Business-Analyse</h3>
                      <p className="text-sm text-primary font-light">IST-Zustand vs. Potenzial</p>
                  </div>
                  
                  <p className="text-white/60 mb-6 text-lg font-light">
                    Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="font-light text-sm text-white/80">Das erhalten Sie:</div>
                    <div className="flex items-center gap-2 text-sm">
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>IST-Zustand vs. Automatisierungs-Potenzial</span>
                    </div>
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>IST-Zustand vs. Automatisierungs-Potenzial</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>ROI-Berechnung für jede Automatisierung</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Maßgeschneiderte Roadmap</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-white/60">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Kostenlose Beratung inklusive</span>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-xl p-6 backdrop-blur-sm border border-white/10">
                    <div className="text-center">
                      <Brain className="w-16 h-16 text-primary mx-auto mb-4 opacity-60" />
                      <div className="text-sm text-white/50 font-light">
                        IST-Zustand analysieren + Potenzial bewerten
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:min-h-[500px]">
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