import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Download, FileText, CheckCircle, Target, Users, Settings } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface ChecklistItem {
  category: string;
  icon: any;
  items: {
    title: string;
    description: string;
    priority: 'Hoch' | 'Mittel' | 'Niedrig';
    benefit: string;
  }[];
}

const KIChecklistDownload = () => {
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const { toast } = useToast();

  const checklistData: ChecklistItem[] = [
    {
      category: "Sofortige Automatisierung",
      icon: Users,
      items: [
        {
          title: "24/7 Website-Chat",
          description: "Kunden sofort antworten, auch nachts",
          priority: "Hoch",
          benefit: "60% weniger Kundenanfragen für Ihr Team"
        },
        {
          title: "E-Mail Sortierung",
          description: "Wichtige E-Mails automatisch nach oben",
          priority: "Hoch",
          benefit: "2-3 Stunden täglich Zeit sparen"
        }
      ]
    },
    {
      category: "Mittelfristige Projekte",
      icon: Settings,
      items: [
        {
          title: "LinkedIn Kontakte",
          description: "Automatisch neue Kunden finden",
          priority: "Mittel",
          benefit: "300% mehr Business-Kontakte"
        },
        {
          title: "Terminplanung",
          description: "Kunden buchen Termine selbst",
          priority: "Mittel",
          benefit: "90% weniger Telefonate für Termine"
        }
      ]
    },
    {
      category: "Langfristige Vision",
      icon: Target,
      items: [
        {
          title: "Voice-Agent",
          description: "Telefon-KI nimmt Anrufe entgegen",
          priority: "Niedrig",
          benefit: "Nie wieder einen Anruf verpassen"
        },
        {
          title: "Newsletter-Automatik",
          description: "Kunden automatisch informieren",
          priority: "Niedrig",
          benefit: "40% höhere Öffnungsraten"
        }
      ]
    }
  ];

  const generatePDF = () => {
    // Create a comprehensive checklist in HTML format for PDF generation
    const checklistHTML = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>KI-Automatisierung Checkliste - KI2USE</title>
    <style>
        body { 
            font-family: 'Inter', Arial, sans-serif; 
            line-height: 1.6; 
            color: hsl(215, 20%, 15%); 
            max-width: 800px; 
            margin: 0 auto; 
            padding: 40px 20px;
        }
        .header { 
            text-align: center; 
            border-bottom: 3px solid hsl(215, 60%, 25%); 
            padding-bottom: 20px; 
            margin-bottom: 40px; 
        }
        .header h1 { 
            color: hsl(215, 60%, 25%); 
            font-size: 2.2em; 
            margin-bottom: 10px; 
        }
        .header p { 
            color: hsl(215, 12%, 50%); 
            font-size: 1.1em; 
        }
        .category { 
            margin-bottom: 30px; 
            break-inside: avoid; 
        }
        .category h2 { 
            background: linear-gradient(135deg, hsl(215, 60%, 25%), hsl(215, 45%, 45%)); 
            color: white; 
            padding: 15px 20px; 
            border-radius: 8px; 
            margin-bottom: 15px; 
            font-size: 1.3em; 
        }
        .checklist-item { 
            border: 1px solid hsl(215, 15%, 92%); 
            border-radius: 8px; 
            padding: 20px; 
            margin-bottom: 15px; 
            background: white; 
        }
        .item-header { 
            display: flex; 
            align-items: center; 
            margin-bottom: 10px; 
        }
        .checkbox { 
            width: 20px; 
            height: 20px; 
            border: 2px solid hsl(215, 60%, 25%); 
            border-radius: 4px; 
            margin-right: 15px; 
            flex-shrink: 0; 
        }
        .priority { 
            padding: 4px 12px; 
            border-radius: 20px; 
            font-size: 0.8em; 
            font-weight: 600; 
            margin-left: auto; 
        }
        .priority.hoch { 
            background: hsl(0, 70%, 95%); 
            color: hsl(0, 70%, 40%); 
        }
        .priority.mittel { 
            background: hsl(45, 70%, 95%); 
            color: hsl(45, 70%, 40%); 
        }
        .priority.niedrig { 
            background: hsl(120, 70%, 95%); 
            color: hsl(120, 70%, 40%); 
        }
        .item-title { 
            font-weight: 600; 
            font-size: 1.1em; 
            flex-grow: 1; 
        }
        .item-description { 
            margin-bottom: 8px; 
            color: hsl(215, 12%, 50%); 
        }
        .item-benefit { 
            background: hsl(215, 60%, 97%); 
            padding: 10px; 
            border-radius: 6px; 
            border-left: 4px solid hsl(215, 60%, 25%); 
            font-size: 0.9em; 
        }
        .evaluation-grid { 
            display: grid; 
            grid-template-columns: 1fr 80px 80px 80px; 
            gap: 10px; 
            margin-top: 20px; 
            font-size: 0.9em; 
        }
        .eval-header { 
            font-weight: 600; 
            border-bottom: 2px solid hsl(215, 60%, 25%); 
            padding-bottom: 5px; 
        }
        .next-steps { 
            background: hsl(215, 60%, 97%); 
            border: 2px solid hsl(215, 60%, 25%); 
            border-radius: 12px; 
            padding: 25px; 
            margin-top: 40px; 
        }
        .next-steps h3 { 
            color: hsl(215, 60%, 25%); 
            margin-bottom: 15px; 
        }
        .step { 
            margin-bottom: 10px; 
            padding-left: 30px; 
            position: relative; 
        }
        .step::before { 
            content: counter(step-counter); 
            counter-increment: step-counter; 
            position: absolute; 
            left: 0; 
            top: 0; 
            background: hsl(215, 60%, 25%); 
            color: white; 
            width: 20px; 
            height: 20px; 
            border-radius: 50%; 
            display: flex; 
            align-items: center; 
            justify-content: center; 
            font-size: 0.8em; 
            font-weight: 600; 
        }
        .steps-container { 
            counter-reset: step-counter; 
        }
        @media print { 
            body { padding: 20px; } 
            .category { page-break-inside: avoid; } 
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>KI-Automatisierung Checkliste</h1>
        <p>Ihr systematischer Leitfaden für erfolgreiche KI-Implementierung</p>
        <p><strong>Erstellt für:</strong> ${company || 'Ihr Unternehmen'} | <strong>KI2USE GmbH</strong> | www.ki2use.de</p>
    </div>

    ${checklistData.map(category => `
        <div class="category">
            <h2>${category.category}</h2>
            ${category.items.map(item => `
                <div class="checklist-item">
                    <div class="item-header">
                        <div class="checkbox"></div>
                        <div class="item-title">${item.title}</div>
                        <div class="priority ${item.priority.toLowerCase()}">${item.priority}</div>
                    </div>
                    <div class="item-description">${item.description}</div>
                    <div class="item-benefit">
                        <strong>Nutzen:</strong> ${item.benefit}
                    </div>
                    <div class="evaluation-grid">
                        <div class="eval-header">Bewertungskriterien</div>
                        <div class="eval-header">Aufwand</div>
                        <div class="eval-header">Nutzen</div>
                        <div class="eval-header">Priorität</div>
                        <div>Technische Umsetzbarkeit</div>
                        <div>□ Niedrig □ Mittel □ Hoch</div>
                        <div>□ Niedrig □ Mittel □ Hoch</div>
                        <div>□ 1 □ 2 □ 3</div>
                        <div>Organisatorische Bereitschaft</div>
                        <div>□ Niedrig □ Mittel □ Hoch</div>
                        <div>□ Niedrig □ Mittel □ Hoch</div>
                        <div>□ 1 □ 2 □ 3</div>
                        <div>Mitarbeiterakzeptanz</div>
                        <div>□ Niedrig □ Mittel □ Hoch</div>
                        <div>□ Niedrig □ Mittel □ Hoch</div>
                        <div>□ 1 □ 2 □ 3</div>
                    </div>
                </div>
            `).join('')}
        </div>
    `).join('')}

    <div class="next-steps">
        <h3>Ihre nächsten Schritte zur KI-Automatisierung</h3>
        <div class="steps-container">
            <div class="step"><strong>Bewertung durchführen:</strong> Nutzen Sie die Bewertungsraster, um Ihre individuellen Prioritäten zu definieren.</div>
            <div class="step"><strong>Quick Wins identifizieren:</strong> Beginnen Sie mit Prozessen, die hohen Nutzen bei geringem Aufwand bieten.</div>
            <div class="step"><strong>Budget planen:</strong> Kalkulieren Sie Ihre Investition mit unserem ROI-Rechner auf www.ki2use.de/roi-rechner</div>
            <div class="step"><strong>Beratungsgespräch buchen:</strong> Lassen Sie sich von unseren KI-Experten individuell beraten.</div>
            <div class="step"><strong>Pilotprojekt starten:</strong> Beginnen Sie mit einem ausgewählten Bereich für erste Erfahrungen.</div>
        </div>
    </div>

    <div style="margin-top: 40px; text-align: center; border-top: 2px solid hsl(215, 15%, 92%); padding-top: 20px; color: hsl(215, 12%, 50%);">
        <p><strong>KI2USE GmbH</strong> - Ihr Partner für professionelle KI-Automatisierung</p>
        <p>📧 info@ki2use.de | 🌐 www.ki2use.de | 📱 Kostenloses Beratungsgespräch buchen</p>
        <p><em>Diese Checkliste wurde speziell für deutsche KMUs entwickelt und berücksichtigt DSGVO-Anforderungen.</em></p>
    </div>
</body>
</html>`;

    // Create and download PDF
    const blob = new Blob([checklistHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `KI-Automatisierung-Checkliste-KI2USE-${company || 'Unternehmen'}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate and download the PDF
      generatePDF();
      
      toast({
        title: "Download gestartet!",
        description: `Die KI-Schnellcheck-Liste wird heruntergeladen.`,
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

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader className="text-center">
        <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
          <FileText className="w-8 h-8 text-primary-foreground" />
        </div>
        <CardTitle className="text-2xl">
          KI-Schnellcheck für Ihr Unternehmen
        </CardTitle>
        <p className="text-muted-foreground">
          6 konkrete Automatisierungs-Möglichkeiten mit sofortiger Prioritätsbewertung.
          Perfekt für den schnellen Überblick - keine komplizierte Analyse.
        </p>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {!showPreview ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">6 konkrete Schritte</div>
                <div className="text-xs text-muted-foreground">Sofort umsetzbar</div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">Klare Prioritäten</div>
                <div className="text-xs text-muted-foreground">Was zuerst angehen</div>
              </div>
              <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 text-center">
                <Settings className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="font-semibold text-sm">Keine Technik-Vorkenntnisse</div>
                <div className="text-xs text-muted-foreground">Einfach verständlich</div>
              </div>
            </div>

            <Button 
              variant="ghost" 
              onClick={() => setShowPreview(true)}
              className="w-full mb-4"
            >
              Kurz-Checkliste ansehen
            </Button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="checklist-email">E-Mail für sofortigen Download *</Label>
                <Input
                  id="checklist-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ihre@email.de"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-primary hover:shadow-elevated text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Wird heruntergeladen..." : "Sofort kostenlos herunterladen"}
                <Download className="w-5 h-5 ml-2" />
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground text-center">
              Sofortiger Download • 100% kostenlos • Keine Anmeldung • Nur 1 Seite
            </p>
          </>
        ) : (
          <div className="space-y-6">
            <Button 
              variant="outline" 
              onClick={() => setShowPreview(false)}
              className="mb-4"
            >
              ← Zurück zum Download
            </Button>
            
            <div className="space-y-6 max-h-96 overflow-y-auto border rounded-lg p-4">
              {checklistData.map((category, categoryIndex) => {
                const IconComponent = category.icon;
                return (
                  <div key={categoryIndex} className="space-y-3">
                    <div className="flex items-center gap-3 pb-2 border-b">
                      <IconComponent className="w-5 h-5 text-primary" />
                      <h4 className="font-semibold text-lg">{category.category}</h4>
                    </div>
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="border rounded-lg p-4 bg-muted/30">
                        <div className="flex items-start gap-3 mb-2">
                          <div className="w-4 h-4 border-2 border-primary rounded mt-1 flex-shrink-0"></div>
                          <div className="flex-1">
                            <div className="flex items-start justify-between">
                              <h5 className="font-medium">{item.title}</h5>
                              <span className={`text-xs px-2 py-1 rounded-full ${
                                item.priority === 'Hoch' ? 'bg-red-100 text-red-800' :
                                item.priority === 'Mittel' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {item.priority}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                            <div className="bg-primary/10 p-2 rounded text-sm">
                              <strong>Nutzen:</strong> {item.benefit}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default KIChecklistDownload;