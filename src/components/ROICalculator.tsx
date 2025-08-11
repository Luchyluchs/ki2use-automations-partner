import { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Calculator, TrendingUp, Clock, Euro } from "lucide-react";

const ROICalculator = () => {
  const [employees, setEmployees] = useState([10]);
  const [avgSalary, setAvgSalary] = useState([45000]);
  const [hoursPerWeek, setHoursPerWeek] = useState([5]);
  const [agentType, setAgentType] = useState("email");

  const agentCosts = {
    email: { monthly: 50, setup: 1000 },
    linkedin: { monthly: 50, setup: 1300 },
    voice: { monthly: 50, setup: 1600 },
    newsletter: { monthly: 50, setup: 800 },
    chatbot: { monthly: 50, setup: 1100 },
    socialmedia: { monthly: 50, setup: 1200 },
    sales: { monthly: 50, setup: 1400 },
    appointment: { monthly: 50, setup: 900 }
  };

  const currentCosts = {
    hourlyRate: avgSalary[0] / 1760, // 220 Arbeitstage * 8 Stunden
    weeklyHours: hoursPerWeek[0] * employees[0],
    monthlyHours: hoursPerWeek[0] * employees[0] * 4.33,
    monthlyCost: (avgSalary[0] / 1760) * hoursPerWeek[0] * employees[0] * 4.33
  };

  const selectedAgent = agentCosts[agentType as keyof typeof agentCosts];
  const monthlySavings = currentCosts.monthlyCost - selectedAgent.monthly;
  const totalInvestmentFirstYear = selectedAgent.setup + (selectedAgent.monthly * 12);
  const totalSavingsFirstYear = monthlySavings * 12;
  const netSavingsFirstYear = totalSavingsFirstYear - totalInvestmentFirstYear;
  const yearlyROI = totalInvestmentFirstYear > 0 ? (netSavingsFirstYear / totalInvestmentFirstYear) * 100 : 0;
  const paybackMonths = monthlySavings > 0 ? totalInvestmentFirstYear / monthlySavings : 0;

  return (
    <div className="bg-card border border-card-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Agenten-Rechner</h3>
          <p className="text-muted-foreground">Berechnen Sie Ihre Kosteneinsparungen</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-3 p-4 border-2 border-primary/20 rounded-lg bg-gradient-to-br from-primary/5 to-accent/5">
            <Label className="text-lg font-semibold text-primary flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              KI-Agent Typ auswählen
            </Label>
            <p className="text-sm text-muted-foreground mb-3">
              Wählen Sie den gewünschten Agenten für Ihre Berechnung
            </p>
            <Select value={agentType} onValueChange={setAgentType}>
              <SelectTrigger className="h-12 border-2 border-primary/30 bg-background/80 hover:border-primary/50 transition-colors font-medium text-base">
                <SelectValue placeholder="Agent auswählen..." />
              </SelectTrigger>
              <SelectContent className="bg-card border-2 border-primary/30 shadow-2xl z-50">
                <SelectItem value="email" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">E-Mail Agent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €1.000 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="linkedin" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">LinkedIn Agent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €1.300 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="voice" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">Voice Agent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €1.600 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="newsletter" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">Newsletter Agent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €800 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="chatbot" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">Chatbot</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €1.100 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="socialmedia" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">Social Media Agent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €1.200 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="sales" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">Sales Agent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €1.400 Setup*</span>
                  </div>
                </SelectItem>
                <SelectItem value="appointment" className="py-3 pl-10 pr-4 text-base">
                  <div className="flex flex-col">
                    <span className="font-semibold">Terminbuchungsagent</span>
                    <span className="text-sm text-muted-foreground">€50/Monat + €900 Setup*</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-3">
            <Label>Anzahl Mitarbeiter: {employees[0]}</Label>
            <Slider
              value={employees}
              onValueChange={setEmployees}
              max={100}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Durchschnittliches Jahresgehalt: €{avgSalary[0].toLocaleString()}</Label>
            <Slider
              value={avgSalary}
              onValueChange={setAvgSalary}
              max={100000}
              min={25000}
              step={5000}
              className="w-full"
            />
          </div>

          <div className="space-y-3">
            <Label>Stunden pro Woche für Aufgaben: {hoursPerWeek[0]}</Label>
            <Slider
              value={hoursPerWeek}
              onValueChange={setHoursPerWeek}
              max={20}
              min={1}
              step={1}
              className="w-full"
            />
          </div>
        </div>

        <div className="space-y-4">
          <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
            <div className="flex items-center gap-2 mb-4">
              <Euro className="w-5 h-5 text-primary" />
              <h4 className="font-semibold">Aktuelle Kosten</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Stundensatz:</span>
                <span>€{currentCosts.hourlyRate.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Wöchentliche Stunden:</span>
                <span>{currentCosts.weeklyHours} Std.</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Monatliche Kosten:</span>
                <span>€{currentCosts.monthlyCost.toFixed(0)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/5 to-secondary/5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h4 className="font-semibold">Mit KI-Agent</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Setup-Kosten:</span>
                <span>€{selectedAgent.setup}</span>
              </div>
              <div className="flex justify-between">
                <span>Monatliche Wartung:</span>
                <span>€{selectedAgent.monthly}/Monat</span>
              </div>
              <div className="flex justify-between">
                <span>Gesamtinvestition (1. Jahr):</span>
                <span className="font-semibold">€{totalInvestmentFirstYear}</span>
              </div>
              <div className="flex justify-between">
                <span>Monatliche Einsparung:</span>
                <span className="text-accent font-semibold">€{monthlySavings.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Jährliche Einsparung:</span>
                <span className="text-accent font-semibold">€{totalSavingsFirstYear.toFixed(0)}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Netto-Einsparung (1. Jahr):</span>
                <span className={`font-semibold ${netSavingsFirstYear >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  €{netSavingsFirstYear.toFixed(0)}
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-green-800 dark:text-green-200">Agenten-Analyse</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Agenten pro Jahr:</span>
                <span className="text-green-600 font-bold text-lg">
                  {yearlyROI > 0 ? '+' : ''}{yearlyROI.toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>Amortisation:</span>
                <span className="font-semibold">
                  {paybackMonths > 0 ? `${paybackMonths.toFixed(1)} Monate` : 'Sofort'}
                </span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      <div className="mt-6 p-4 bg-muted rounded-lg">
        <p className="text-sm text-muted-foreground">
          <strong>*Hinweis:</strong> Die angezeigten Preise sind Beispielwerte. Tatsächliche Kosten können je nach Projektkomplexität, 
          individuellen Anforderungen und Umfang der Integration variieren. Genaue Preise und eine detaillierte 
          Kostenschätzung erhalten Sie in einem kostenlosen, unverbindlichen Beratungsgespräch.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;