import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { CheckCircle, ArrowRight, ArrowLeft, Users, Settings, Target, Mail } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ChecklistItem {
  category: string;
  icon: any;
  title: string;
  description: string;
  benefit: string;
  detailedBenefit: string;
  timeImpact: string;
  costImpact: string;
}

const KIChecklistDownload = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});
  const [email, setEmail] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const checklistData: ChecklistItem[] = [
    {
      category: "Kundenbetreuung",
      icon: Users,
      title: "24/7 Website-Chat",
      description: "Ein KI-Assistent beantwortet Kundenanfragen sofort - auch nachts und am Wochenende",
      benefit: "60% weniger Kundenanfragen für Ihr Team",
      detailedBenefit: "Stellen Sie sich vor: Ihre Kunden bekommen sofort Antworten, auch wenn Sie schlafen. Häufige Fragen werden automatisch beantwortet, nur komplexe Anfragen landen bei Ihnen.",
      timeImpact: "2-4 Stunden täglich",
      costImpact: "150€/Monat + 1.100€ Setup"
    },
    {
      category: "E-Mail Management", 
      icon: Mail,
      title: "Intelligente E-Mail-Sortierung",
      description: "Wichtige E-Mails werden automatisch erkannt und priorisiert",
      benefit: "2-3 Stunden täglich Zeit sparen",
      detailedBenefit: "Nie wieder wichtige E-Mails übersehen! Die KI erkennt automatisch, welche E-Mails sofortige Aufmerksamkeit brauchen und sortiert den Rest weg.",
      timeImpact: "2-3 Stunden täglich",
      costImpact: "90€/Monat + 800€ Setup"
    },
    {
      category: "Lead-Generierung",
      icon: Target,
      title: "LinkedIn Kontakt-Automatisierung", 
      description: "Finden und kontaktieren Sie automatisch potenzielle Kunden",
      benefit: "300% mehr qualifizierte Business-Kontakte",
      detailedBenefit: "Während Sie arbeiten, knüpft die KI neue Geschäftskontakte. Sie finden automatisch Menschen, die Ihre Dienstleistung brauchen.",
      timeImpact: "5-10 Stunden wöchentlich",
      costImpact: "200€/Monat + 1.300€ Setup"
    },
    {
      category: "Terminmanagement",
      icon: Settings,
      title: "Automatische Terminbuchung",
      description: "Kunden buchen Termine selbst, ohne Ihr Zutun",
      benefit: "90% weniger Telefonate für Terminabsprachen", 
      detailedBenefit: "Schluss mit dem Hin-und-Her! Kunden sehen Ihre freien Zeiten und buchen direkt. Automatische Erinnerungen inklusive.",
      timeImpact: "3-5 Stunden wöchentlich",
      costImpact: "120€/Monat + 900€ Setup"
    },
    {
      category: "Kommunikation",
      icon: Users,
      title: "Newsletter-Automatisierung",
      description: "Personalisierte Newsletter werden automatisch erstellt und versendet",
      benefit: "40% höhere Öffnungsraten durch Personalisierung",
      detailedBenefit: "Ihre Kunden bekommen nur relevante Inhalte. Die KI weiß, wer sich für was interessiert und passt jeden Newsletter individuell an.",
      timeImpact: "4-6 Stunden monatlich", 
      costImpact: "180€/Monat + 1.000€ Setup"
    },
    {
      category: "Telefonsupport",
      icon: Settings,
      title: "Voice-Agent für Anrufe",
      description: "Ein KI-Agent nimmt Anrufe entgegen und hilft Kunden weiter",
      benefit: "Nie wieder einen wichtigen Anruf verpassen",
      detailedBenefit: "Auch wenn Sie nicht da sind: Die KI nimmt Anrufe entgegen, beantwortet einfache Fragen und vereinbart Rückrufe.",
      timeImpact: "Unbegrenzt verfügbar",
      costImpact: "250€/Monat + 1.600€ Setup"
    }
  ];

  const handleItemCheck = (index: number, checked: boolean) => {
    setCheckedItems(prev => ({
      ...prev,
      [index]: checked
    }));
  };

  const handleNext = () => {
    if (currentStep < checklistData.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const checkedCount = Object.values(checkedItems).filter(Boolean).length;
  const progress = ((currentStep + 1) / checklistData.length) * 100;
  const currentItem = checklistData[currentStep];

  const calculatePotentialSavings = () => {
    const selectedItems = checklistData.filter((_, index) => checkedItems[index]);
    const totalHourlySavings = selectedItems.reduce((acc, item) => {
      // Extrahiere Zahlen aus timeImpact String (z.B. "2-4 Stunden täglich" -> 2)
      const timeMatch = item.timeImpact.match(/(\d+)/);
      const hours = timeMatch ? parseInt(timeMatch[1]) : 5;
      
      if (item.timeImpact.includes('täglich')) {
        return acc + (hours * 22); // 22 Arbeitstage pro Monat
      } else if (item.timeImpact.includes('wöchentlich')) {
        return acc + (hours * 4); // 4 Wochen pro Monat
      } else if (item.timeImpact.includes('monatlich')) {
        return acc + hours;
      }
      return acc + 20; // Fallback für "unbegrenzt"
    }, 0);
    
    const monthlySavings = totalHourlySavings * 50; // 50€ pro Stunde
    return { totalHourlySavings, monthlySavings };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Sammle alle Daten für die E-Mail-Analyse
      const { totalHourlySavings, monthlySavings } = calculatePotentialSavings();
      const selectedItems = checklistData.filter((_, index) => checkedItems[index]);
      
      const analysisData = {
        email,
        timestamp: new Date().toISOString(),
        selectedAutomations: selectedItems.map(item => ({
          title: item.title,
          category: item.category,
          timeImpact: item.timeImpact,
          costImpact: item.costImpact,
          benefit: item.benefit,
          detailedBenefit: item.detailedBenefit
        })),
        summary: {
          totalSelectedItems: checkedCount,
          totalHourlySavings,
          monthlySavings,
          potentialROI: Math.round((monthlySavings / 500) * 100) // Geschätzte Investition 500€/Monat
        },
        analysisType: 'interactive_checklist'
      };

      // Hier wird später der Webhook für professionelle E-Mail-Analyse eingebaut
      console.log('Checklist Analysis Data:', analysisData);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Analyse wird versendet!",
        description: "Sie erhalten Ihre personalisierte KI-Automatisierungs-Analyse in wenigen Minuten per E-Mail.",
      });
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showResults) {
    const { totalHourlySavings, monthlySavings } = calculatePotentialSavings();
    const selectedItems = checklistData.filter((_, index) => checkedItems[index]);
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl">Ihre KI-Automatisierungs-Analyse</CardTitle>
          <p className="text-muted-foreground">
            Basierend auf Ihren {checkedCount} ausgewählten Bereichen
          </p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Potenzial-Übersicht */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{totalHourlySavings}h</div>
              <div className="font-medium">Gesparte Zeit pro Monat</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{monthlySavings.toLocaleString()}€</div>
              <div className="font-medium">Geschätzter Wert pro Monat</div>
            </div>
          </div>

          {/* Ausgewählte Automatisierungen */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Ihre gewählten Automatisierungen:</h3>
            {selectedItems.map((item, index) => (
              <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{item.detailedBenefit}</p>
                    <div className="flex gap-4 text-xs">
                      <span className="bg-green-100 dark:bg-green-900/30 text-green-700 px-2 py-1 rounded">
                        ⏱ {item.timeImpact} gesparte Zeit
                      </span>
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 px-2 py-1 rounded">
                        💰 {item.costImpact}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* E-Mail-Eingabe */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Erhalten Sie Ihre detaillierte Analyse per E-Mail
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="result-email">E-Mail-Adresse für Ihre persönliche Analyse:</Label>
                <Input
                  id="result-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.de"
                  required
                  className="mt-2"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary text-lg py-4"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird versendet..." : "Kostenlose Analyse per E-Mail erhalten"}
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Sie erhalten: Detaillierte Roadmap • ROI-Berechnung • Nächste Schritte • Kostenlose Beratung
            </p>
          </div>

          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
                setCheckedItems({});
              }}
            >
              Auswahl ändern
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <currentItem.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-xl">KI-Automatisierungs-Check</CardTitle>
              <p className="text-sm text-muted-foreground">
                Schritt {currentStep + 1} von {checklistData.length}
              </p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-muted-foreground">Ausgewählt</div>
            <div className="text-2xl font-bold text-primary">{checkedCount}</div>
          </div>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        {/* Aktueller Check-Punkt */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <input
                type="checkbox"
                id={`item-${currentStep}`}
                checked={checkedItems[currentStep] || false}
                onChange={(e) => handleItemCheck(currentStep, e.target.checked)}
                className="w-6 h-6 text-primary border-2 border-primary/30 rounded focus:ring-primary"
              />
            </div>
            <div className="flex-1">
              <label htmlFor={`item-${currentStep}`} className="cursor-pointer">
                <h3 className="text-xl font-semibold mb-2">{currentItem.title}</h3>
                <p className="text-muted-foreground mb-4">{currentItem.description}</p>
              </label>
              
              <div className="bg-gradient-subtle rounded-lg p-4 space-y-3">
                <div className="font-medium text-primary">Was bedeutet das für Sie?</div>
                <p className="text-sm">{currentItem.detailedBenefit}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3">
                    <div className="text-xs font-medium text-green-700 mb-1">ZEITERSPARNIS</div>
                    <div className="font-semibold">{currentItem.timeImpact}</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                    <div className="text-xs font-medium text-blue-700 mb-1">INVESTITION</div>
                    <div className="font-semibold">{currentItem.costImpact}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6">
          <Button 
            variant="outline" 
            onClick={handlePrev}
            disabled={currentStep === 0}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {checkedCount > 0 && `${checkedCount} Bereiche ausgewählt`}
          </div>
          
          <Button 
            onClick={handleNext}
            className="bg-gradient-primary"
          >
            {currentStep === checklistData.length - 1 ? "Analyse zeigen" : "Weiter"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KIChecklistDownload;