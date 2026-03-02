import { Card, CardContent } from "./ui/card";
import NewsletterSignup from './NewsletterSignup';
import BusinessAnalysisTool from './BusinessAnalysisTool';

const LeadMagnetsSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 scroll-reveal">
          <h2 className="text-3xl md:text-4xl font-thin text-foreground mb-6">
            Entdecken Sie Ihr <span className="text-primary">KI-Automatisierungs-Potenzial</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 font-light">
            Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="border border-primary/20 rounded-2xl p-8 scroll-scale">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div>
                <div className="mb-4">
                    <h3 className="text-2xl font-light text-foreground">Smart Business-Analyse</h3>
                    <p className="text-sm text-primary font-light">IST-Zustand vs. Potenzial</p>
                </div>
                
                <p className="text-muted-foreground mb-6 text-lg font-light">
                  Intelligente Analyse Ihrer aktuellen Prozesse mit personalisierten Automatisierungs-Empfehlungen basierend auf Ihrer Situation.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="font-light text-sm text-foreground/80">Das erhalten Sie:</div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>IST-Zustand vs. Automatisierungs-Potenzial</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>ROI-Berechnung für jede Automatisierung</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Maßgeschneiderte Roadmap</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>Kostenlose Beratung inklusive</span>
                  </div>
                </div>
                
              </div>
              
              <div className="lg:min-h-[500px]">
                <div id="business-analysis">
                  <BusinessAnalysisTool />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 scroll-reveal">
          <NewsletterSignup />
        </div>
      </div>
    </section>
  );
};

export default LeadMagnetsSection;
