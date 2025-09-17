import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Progress } from "./ui/progress";
import { CheckCircle, ArrowRight, Brain } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface QuizQuestion {
  id: string;
  question: string;
  options: { value: string; label: string; score: number }[];
}

const questions: QuizQuestion[] = [
  {
    id: "processes",
    question: "Wie viele wiederkehrende Prozesse haben Sie in Ihrem Unternehmen?",
    options: [
      { value: "few", label: "Wenige (1-3)", score: 1 },
      { value: "some", label: "Einige (4-10)", score: 2 },
      { value: "many", label: "Viele (10+)", score: 3 }
    ]
  },
  {
    id: "employees",
    question: "Wie viele Mitarbeiter beschäftigen Sie?",
    options: [
      { value: "small", label: "1-10 Mitarbeiter", score: 1 },
      { value: "medium", label: "11-50 Mitarbeiter", score: 2 },
      { value: "large", label: "50+ Mitarbeiter", score: 3 }
    ]
  },
  {
    id: "tech",
    question: "Wie schätzen Sie Ihre technische Affinität ein?",
    options: [
      { value: "low", label: "Eher gering", score: 1 },
      { value: "medium", label: "Durchschnittlich", score: 2 },
      { value: "high", label: "Sehr hoch", score: 3 }
    ]
  },
  {
    id: "budget",
    question: "Welches monatliche Budget steht für Automatisierung zur Verfügung?",
    options: [
      { value: "low", label: "Unter 500€", score: 1 },
      { value: "medium", label: "500€ - 2.000€", score: 2 },
      { value: "high", label: "Über 2.000€", score: 3 }
    ]
  }
];

const KIReadinessQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const currentAnswerValue = answers[questions[currentQuestion]?.id] || '';
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestion === questions.length - 1;
  const isQuizComplete = Object.keys(answers).length === questions.length;

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value
    }));
  };

  const handleNext = () => {
    if (isLastQuestion && currentAnswerValue) {
      setShowResult(true);
    } else if (currentAnswerValue) {
      setCurrentQuestion(prev => prev + 1);
    }
  };

  const calculateScore = () => {
    return questions.reduce((total, question) => {
      const answer = answers[question.id];
      const option = question.options.find(opt => opt.value === answer);
      return total + (option?.score || 0);
    }, 0);
  };

  const getRecommendation = (score: number) => {
    if (score >= 10) {
      return {
        title: "Perfekt bereit für KI-Automatisierung!",
        description: "Ihr Unternehmen hat ideale Voraussetzungen für umfassende KI-Automatisierung. Sie könnten sofort mit mehreren Agenten starten.",
        action: "Kostenloses Strategiegespräch buchen"
      };
    } else if (score >= 7) {
      return {
        title: "Gute Ausgangslage für KI-Agenten",
        description: "Ihr Unternehmen ist bereit für KI-Automatisierung. Ein schrittweiser Einstieg wird empfohlen.",
        action: "Beratungstermin vereinbaren"
      };
    } else {
      return {
        title: "Erste Schritte zur KI-Bereitschaft",
        description: "Mit der richtigen Vorbereitung können auch Sie von KI-Automatisierung profitieren. Lassen Sie uns gemeinsam den optimalen Weg finden.",
        action: "Unverbindliches Gespräch führen"
      };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Analyse gesendet!",
        description: "Sie erhalten Ihre detaillierte KI-Bereitschaftsanalyse per E-Mail.",
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

  if (showResult) {
    const score = calculateScore();
    const recommendation = getRecommendation(score);
    
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl">{recommendation.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-4">{score}/12 Punkte</div>
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-6">
              <p className="text-lg font-medium mb-2">{recommendation.description}</p>
              <div className="mt-4 space-y-2">
                {score >= 10 && (
                  <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                    ✅ <strong>Empfehlung:</strong> Sie können sofort mit 2-3 KI-Agenten starten
                  </div>
                )}
                {score >= 7 && score < 10 && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg">
                    💡 <strong>Empfehlung:</strong> Beginnen Sie mit einem Chat-Bot oder E-Mail-Sortierung
                  </div>
                )}
                {score < 7 && (
                  <div className="bg-orange-50 dark:bg-orange-900/20 p-3 rounded-lg">
                    🎯 <strong>Empfehlung:</strong> Lassen Sie uns gemeinsam den perfekten Einstieg finden
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              className="w-full bg-gradient-primary text-lg py-4"
              onClick={() => window.open('https://calendly.com/ki2use/beratung', '_blank')}
            >
              {recommendation.action}
            </Button>
            
            <div className="mt-4 space-y-2">
              <Button 
                variant="ghost" 
                className="w-full"
                onClick={() => {
                  setShowResult(false);
                  setCurrentQuestion(0);
                  setAnswers({});
                }}
              >
                Test wiederholen
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!isQuizComplete) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-3 mb-4">
            <Brain className="w-8 h-8 text-primary" />
            <div>
              <CardTitle>KI-Bereitschafts-Check</CardTitle>
              <p className="text-sm text-muted-foreground">
                Frage {currentQuestion + 1} von {questions.length}
              </p>
            </div>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        <CardContent className="space-y-6">
          {questions[currentQuestion] && (
            <>
              <h3 className="text-lg font-semibold">
                {questions[currentQuestion].question}
              </h3>
              
              <RadioGroup value={currentAnswerValue} onValueChange={handleAnswerChange}>
                {questions[currentQuestion].options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
              
              <Button 
                onClick={handleNext} 
                disabled={!currentAnswerValue}
                className="w-full"
              >
                {isLastQuestion ? "Ergebnis anzeigen" : "Weiter"}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </>
          )}
        </CardContent>
      </Card>
    );
  }

  return null;
};

export default KIReadinessQuiz;