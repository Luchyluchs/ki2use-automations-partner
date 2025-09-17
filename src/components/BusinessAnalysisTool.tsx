import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { CheckCircle, ArrowRight, ArrowLeft, Brain, Users, Mail, Calendar, Clock, TrendingUp } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface AnalysisQuestion {
  id: string;
  category: string;
  icon: any;
  question: string;
  currentStateQuestion: string;
  options: {
    value: string;
    label: string;
    timeSpent: number; // Stunden pro Woche
    painLevel: number; // 1-5
  }[];
  automationPotential: {
    title: string;
    description: string;
    timeSaved: string;
    cost: string;
    roi: string;
  };
}

const BusinessAnalysisTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [interests, setInterests] = useState<Record<string, boolean>>({});
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const analysisQuestions: AnalysisQuestion[] = [
    {
      id: "customer_service",
      category: "Kundenbetreuung",
      icon: Users,
      question: "Wie interessiert sind Sie an einer Automatisierung der Kundenbetreuung?",
      currentStateQuestion: "Wie handhaben Sie aktuell Kundenanfragen außerhalb der Geschäftszeiten?",
      options: [
        { value: "manual", label: "Kunden müssen bis zum nächsten Tag warten", timeSpent: 0, painLevel: 3 },
        { value: "phone", label: "Wir haben einen Anrufbeantworter", timeSpent: 2, painLevel: 2 },
        { value: "email", label: "E-Mails werden am nächsten Tag bearbeitet", timeSpent: 1, painLevel: 2 },
        { value: "none", label: "Wir haben 24/7 Bereitschaft", timeSpent: 10, painLevel: 5 }
      ],
      automationPotential: {
        title: "24/7 KI-Chat-Assistent",
        description: "Ihre Kunden erhalten sofort Antworten auf häufige Fragen. Komplexe Anfragen werden automatisch an Sie weitergeleitet.",
        timeSaved: "15-20 Stunden/Woche",
        cost: "150€/Monat + 1.100€ Setup",
        roi: "ROI nach 3-4 Monaten"
      }
    },
    {
      id: "email_management", 
      category: "E-Mail Verwaltung",
      icon: Mail,
      question: "Wie interessiert sind Sie an intelligenter E-Mail-Sortierung?",
      currentStateQuestion: "Wie viel Zeit verbringen Sie täglich mit E-Mail-Verwaltung?",
      options: [
        { value: "minimal", label: "Unter 30 Minuten", timeSpent: 2, painLevel: 1 },
        { value: "moderate", label: "1-2 Stunden", timeSpent: 7, painLevel: 2 },
        { value: "significant", label: "3-4 Stunden", timeSpent: 15, painLevel: 4 },
        { value: "overwhelming", label: "Mehr als 4 Stunden", timeSpent: 20, painLevel: 5 }
      ],
      automationPotential: {
        title: "Intelligente E-Mail-Sortierung",
        description: "Wichtige E-Mails werden automatisch priorisiert. Spam und unwichtige E-Mails verschwinden automatisch.",
        timeSaved: "10-15 Stunden/Woche",
        cost: "90€/Monat + 800€ Setup", 
        roi: "ROI nach 2-3 Monaten"
      }
    },
    {
      id: "lead_generation",
      category: "Kundengewinnung", 
      icon: TrendingUp,
      question: "Wie interessiert sind Sie an automatisierter Kundengewinnung?",
      currentStateQuestion: "Wie finden Sie aktuell neue Kunden?",
      options: [
        { value: "referrals", label: "Hauptsächlich durch Empfehlungen", timeSpent: 2, painLevel: 2 },
        { value: "networking", label: "Aktives Networking und Kaltakquise", timeSpent: 10, painLevel: 3 },
        { value: "linkedin", label: "Manuelle LinkedIn-Suche", timeSpent: 8, painLevel: 4 },
        { value: "struggling", label: "Kundenakquise ist ein großes Problem", timeSpent: 15, painLevel: 5 }
      ],
      automationPotential: {
        title: "LinkedIn-Automatisierung",
        description: "Die KI findet und kontaktiert automatisch potenzielle Kunden in Ihrer Zielgruppe.",
        timeSaved: "20-25 Stunden/Woche",
        cost: "200€/Monat + 1.300€ Setup",
        roi: "ROI nach 2-3 Monaten"
      }
    },
    {
      id: "appointment_booking",
      category: "Terminplanung",
      icon: Calendar, 
      question: "Wie interessiert sind Sie an automatischer Terminbuchung?",
      currentStateQuestion: "Wie vereinbaren Sie aktuell Termine mit Kunden?",
      options: [
        { value: "phone", label: "Telefonisch - viel Hin und Her", timeSpent: 5, painLevel: 4 },
        { value: "email", label: "Per E-Mail - dauert lange", timeSpent: 3, painLevel: 3 },
        { value: "calendar", label: "Online-Kalender, aber nicht optimal", timeSpent: 2, painLevel: 2 },
        { value: "automated", label: "Bereits vollständig automatisiert", timeSpent: 0, painLevel: 1 }
      ],
      automationPotential: {
        title: "Automatische Terminbuchung",
        description: "Kunden buchen Termine selbstständig. Automatische Erinnerungen und Bestätigungen inklusive.",
        timeSaved: "8-12 Stunden/Woche",
        cost: "120€/Monat + 900€ Setup",
        roi: "ROI nach 2-3 Monaten"
      }
    }
  ];

  const currentQuestion = analysisQuestions[currentStep];
  const progress = ((currentStep + 1) / analysisQuestions.length) * 100;
  const currentAnswer = answers[currentQuestion?.id] || '';

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: value
    }));
  };

  const handleInterestChange = (questionId: string, interested: boolean) => {
    setInterests(prev => ({
      ...prev,
      [questionId]: interested
    }));
  };

  const handleNext = () => {
    if (currentStep < analysisQuestions.length - 1) {
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

  const calculateBusinessImpact = () => {
    let totalWeeklyTimeSpent = 0;
    let totalPainPoints = 0;
    let interestedAreas = 0;
    let potentialMonthlySavings = 0;

    analysisQuestions.forEach(question => {
      const answer = answers[question.id];
      const isInterested = interests[question.id];
      
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalWeeklyTimeSpent += option.timeSpent;
          totalPainPoints += option.painLevel;
        }
      }
      
      if (isInterested) {
        interestedAreas++;
        // Extrahiere Zahlen aus timeSaved String (z.B. "15-20 Stunden/Woche" -> 15)
        const timeSavedMatch = question.automationPotential.timeSaved.match(/(\d+)/);
        const timeSavedNum = timeSavedMatch ? parseInt(timeSavedMatch[1]) : 10;
        
        // Berechne Einsparungen basierend auf aktueller Antwort
        const currentAnswer = answers[question.id];
        if (currentAnswer) {
          const currentOption = question.options.find(opt => opt.value === currentAnswer);
          if (currentOption) {
            // Berechne Ersparnis: (aktuelle Zeit - verbleibende Zeit nach Automatisierung) * 50€/h * 4 Wochen
            const currentWeeklyTime = currentOption.timeSpent;
            const remainingTime = Math.max(0, currentWeeklyTime - timeSavedNum);
            const actualTimeSaved = currentWeeklyTime - remainingTime;
            potentialMonthlySavings += actualTimeSaved * 50 * 4;
          }
        }
      }
    });

    const monthlyTimeCost = totalWeeklyTimeSpent * 4 * 50; // 50€/Stunde
    const painScore = Math.round((totalPainPoints / (analysisQuestions.length * 5)) * 100);

    return {
      totalWeeklyTimeSpent,
      monthlyTimeCost,
      painScore,
      interestedAreas,
      potentialMonthlySavings
    };
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !companyName) return;

    setIsSubmitting(true);
    
    try {
      // Sammle alle Daten für die professionelle E-Mail-Analyse
      const impact = calculateBusinessImpact();
      const interestedQuestions = analysisQuestions.filter(q => interests[q.id]);
      
      const analysisData = {
        email,
        companyName,
        timestamp: new Date().toISOString(),
        currentSituation: {
          totalWeeklyTimeSpent: impact.totalWeeklyTimeSpent,
          monthlyTimeCost: impact.monthlyTimeCost,
          painScore: impact.painScore,
          processDetails: analysisQuestions.map(q => ({
            category: q.category,
            question: q.currentStateQuestion,
            answer: answers[q.id],
            answerLabel: q.options.find(opt => opt.value === answers[q.id])?.label || "Nicht beantwortet",
            timeSpent: q.options.find(opt => opt.value === answers[q.id])?.timeSpent || 0,
            painLevel: q.options.find(opt => opt.value === answers[q.id])?.painLevel || 0
          }))
        },
        interestedAutomations: interestedQuestions.map(q => ({
          category: q.category,
          title: q.automationPotential.title,
          description: q.automationPotential.description,
          timeSaved: q.automationPotential.timeSaved,
          cost: q.automationPotential.cost,
          roi: q.automationPotential.roi,
          interested: interests[q.id]
        })),
        potentialImpact: {
          interestedAreas: impact.interestedAreas,
          potentialMonthlySavings: impact.potentialMonthlySavings,
          estimatedROI: impact.potentialMonthlySavings > 0 ? Math.round((impact.potentialMonthlySavings / 800) * 100) : 0, // Geschätzte Investition 800€/Monat
          paybackPeriod: impact.potentialMonthlySavings > 800 ? Math.ceil(2000 / (impact.potentialMonthlySavings - 800)) : "12+" // Setup-Kosten 2000€
        },
        analysisType: 'business_analysis'
      };

      // Hier wird später der Webhook für professionelle E-Mail-Analyse eingebaut
      console.log('Business Analysis Data:', analysisData);
      
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Analyse wird versendet!",
        description: "Sie erhalten Ihre detaillierte Business-Analyse in wenigen Minuten per E-Mail.",
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
    const impact = calculateBusinessImpact();
    const interestedQuestions = analysisQuestions.filter(q => interests[q.id]);
    
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-3xl">Ihre Business-Automatisierungs-Analyse</CardTitle>
          <p className="text-muted-foreground">
            Personalisierte Empfehlungen basierend auf Ihrer aktuellen Situation
          </p>
        </CardHeader>
        
        <CardContent className="space-y-8">
          {/* Aktuelle Situation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">{impact.totalWeeklyTimeSpent}h</div>
              <div className="font-medium">Zeitaufwand pro Woche</div>
              <div className="text-sm text-muted-foreground">für manuelle Prozesse</div>
            </div>
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-red-600 mb-2">{impact.painScore}%</div>
              <div className="font-medium">Frustrations-Level</div>
              <div className="text-sm text-muted-foreground">bei aktuellen Prozessen</div>
            </div>
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{impact.monthlyTimeCost.toLocaleString()}€</div>
              <div className="font-medium">Monatliche Kosten</div>
              <div className="text-sm text-muted-foreground">für manuelle Arbeit</div>
            </div>
          </div>

          {/* Debug Info - Temporär zur Fehlerbehebung */}
          <details className="bg-gray-100 p-4 rounded text-xs">
            <summary>Debug Info (wird später entfernt)</summary>
            <pre>{JSON.stringify({
              answers,
              interests,
              impact
            }, null, 2)}</pre>
          </details>

          {/* Automatisierungs-Potenzial */}
          {impact.interestedAreas > 0 && (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-4">
                🚀 Ihr Automatisierungs-Potenzial
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{impact.potentialMonthlySavings.toLocaleString()}€</div>
                  <div className="font-medium">Potenzielle Ersparnis/Monat</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">{impact.interestedAreas}</div>
                  <div className="font-medium">Interessante Automatisierungen</div>
                </div>
              </div>
            </div>
          )}

          {/* Empfohlene Automatisierungen */}
          {interestedQuestions.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Ihre ausgewählten Automatisierungen:</h3>
              {interestedQuestions.map((question, index) => (
                <div key={index} className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                    <div className="flex-1">
                      <h4 className="font-semibold">{question.automationPotential.title}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{question.automationPotential.description}</p>
                      <div className="flex gap-4 text-xs">
                        <span className="bg-green-100 dark:bg-green-900/30 text-green-700 px-2 py-1 rounded">
                          ⏱ {question.automationPotential.timeSaved} gesparte Zeit
                        </span>
                        <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 px-2 py-1 rounded">
                          💰 {question.automationPotential.cost}
                        </span>
                        <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-700 px-2 py-1 rounded">
                          📈 {question.automationPotential.roi}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* E-Mail-Eingabe */}
          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Erhalten Sie Ihre detaillierte Analyse + Roadmap
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="company-name">Ihr Unternehmen:</Label>
                <Input
                  id="company-name"
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ihr Firmenname"
                  required
                  className="mt-2"
                />
              </div>
              
              <div>
                <Label htmlFor="business-email">E-Mail für Ihre personalisierte Business-Analyse:</Label>
                <Input
                  id="business-email"
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
                {isSubmitting ? "Wird versendet..." : "Detaillierte Analyse erhalten"}
                <Mail className="w-5 h-5 ml-2" />
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center mt-4">
              Sie erhalten: Detaillierte Roadmap • Priorisierung • Zeitplan • ROI-Berechnung • 30min Beratungsgespräch
            </p>
          </div>

          <div className="text-center">
            <Button 
              variant="ghost" 
              onClick={() => {
                setShowResults(false);
                setCurrentStep(0);
                setAnswers({});
                setInterests({});
              }}
            >
              Analyse wiederholen
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!currentQuestion) return null;

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
              <currentQuestion.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <CardTitle className="text-xl">Business-Analyse</CardTitle>
              <p className="text-sm text-muted-foreground">
                Schritt {currentStep + 1} von {analysisQuestions.length}
              </p>
            </div>
          </div>
        </div>
        <Progress value={progress} className="w-full" />
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="space-y-6">
          {/* IST-Zustand Frage */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">
              📊 Wie ist Ihre aktuelle Situation?
            </h3>
            <p className="text-muted-foreground">{currentQuestion.currentStateQuestion}</p>
            
            <RadioGroup value={currentAnswer} onValueChange={handleAnswerChange}>
              {currentQuestion.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                    <div className="flex justify-between items-center">
                      <span>{option.label}</span>
                      {option.timeSpent > 0 && (
                        <span className="text-xs text-muted-foreground">
                          ~{option.timeSpent}h/Woche
                        </span>
                      )}
                    </div>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Automatisierungs-Potenzial anzeigen */}
          {currentAnswer && (
            <div className="bg-gradient-subtle rounded-lg p-4 space-y-4">
              <h3 className="text-lg font-semibold text-primary">
                🚀 Automatisierungs-Möglichkeit für Sie:
              </h3>
              <div className="space-y-3">
                <h4 className="font-semibold">{currentQuestion.automationPotential.title}</h4>
                <p className="text-sm text-muted-foreground">
                  {currentQuestion.automationPotential.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded p-3">
                    <div className="text-xs font-medium text-green-700 mb-1">ZEITERSPARNIS</div>
                    <div className="font-semibold">{currentQuestion.automationPotential.timeSaved}</div>
                  </div>
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3">
                    <div className="text-xs font-medium text-blue-700 mb-1">INVESTITION</div>
                    <div className="font-semibold">{currentQuestion.automationPotential.cost}</div>
                  </div>
                  <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded p-3">
                    <div className="text-xs font-medium text-purple-700 mb-1">AMORTISATION</div>
                    <div className="font-semibold">{currentQuestion.automationPotential.roi}</div>
                  </div>
                </div>

                {/* Interesse abfragen */}
                <div className="pt-3 border-t">
                  <p className="font-medium text-primary mb-3">{currentQuestion.question}</p>
                  <div className="flex gap-3">
                    <Button
                      variant={interests[currentQuestion.id] === true ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleInterestChange(currentQuestion.id, true)}
                    >
                      ✅ Ja, interessiert mich
                    </Button>
                    <Button
                      variant={interests[currentQuestion.id] === false ? "default" : "outline"}
                      size="sm"
                      onClick={() => handleInterestChange(currentQuestion.id, false)}
                    >
                      ❌ Nicht relevant
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
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
            {Object.values(interests).filter(Boolean).length > 0 && 
              `${Object.values(interests).filter(Boolean).length} Automatisierungen ausgewählt`
            }
          </div>
          
          <Button 
            onClick={handleNext}
            disabled={!currentAnswer}
            className="bg-gradient-primary"
          >
            {currentStep === analysisQuestions.length - 1 ? "Analyse zeigen" : "Weiter"}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessAnalysisTool;