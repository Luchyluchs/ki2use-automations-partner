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
    email: { monthly: 75, setup: 1200 },
    linkedin: { monthly: 85, setup: 1500 },
    voice: { monthly: 95, setup: 1800 },
    newsletter: { monthly: 65, setup: 1000 },
    chatbot: { monthly: 80, setup: 1300 },
    application: { monthly: 100, setup: 2000 }
  };

  const currentCosts = {
    hourlyRate: avgSalary[0] / 1760, // 220 Arbeitstage * 8 Stunden
    weeklyHours: hoursPerWeek[0] * employees[0],
    monthlyHours: hoursPerWeek[0] * employees[0] * 4.33,
    monthlyCost: (avgSalary[0] / 1760) * hoursPerWeek[0] * employees[0] * 4.33
  };

  const selectedAgent = agentCosts[agentType as keyof typeof agentCosts];
  const monthlySavings = currentCosts.monthlyCost - selectedAgent.monthly;
  const yearlyROI = (monthlySavings * 12 - selectedAgent.setup) / (selectedAgent.monthly * 12 + selectedAgent.setup) * 100;
  const paybackMonths = (selectedAgent.monthly * 12 + selectedAgent.setup) / (monthlySavings * 12);

  return (
    <div className="bg-card border border-card-border rounded-2xl p-8">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">ROI-Rechner</h3>
          <p className="text-muted-foreground">Berechnen Sie Ihre Kosteneinsparungen</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6">
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

          <div className="space-y-3">
            <Label>KI-Agent Typ</Label>
            <Select value={agentType} onValueChange={setAgentType}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">E-Mail Agent (€75/Monat + €1.200 Setup)</SelectItem>
                <SelectItem value="linkedin">LinkedIn Agent (€85/Monat + €1.500 Setup)</SelectItem>
                <SelectItem value="voice">Voice Agent (€95/Monat + €1.800 Setup)</SelectItem>
                <SelectItem value="newsletter">Newsletter Agent (€65/Monat + €1.000 Setup)</SelectItem>
                <SelectItem value="chatbot">Chatbot (€80/Monat + €1.300 Setup)</SelectItem>
                <SelectItem value="application">Antragsbearbeitung (€100/Monat + €2.000 Setup)</SelectItem>
              </SelectContent>
            </Select>
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
                <span>Monatliche Einsparung:</span>
                <span className="text-accent font-semibold">€{monthlySavings.toFixed(0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Jährliche Einsparung:</span>
                <span className="text-accent font-semibold">€{(monthlySavings * 12 - selectedAgent.setup).toFixed(0)}</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950 dark:to-green-900">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-green-600" />
              <h4 className="font-semibold text-green-800 dark:text-green-200">ROI-Analyse</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>ROI pro Jahr:</span>
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
          <strong>Berechnung basiert auf:</strong> Durchschnittliche Zeitersparnis von 80% für automatisierbare Aufgaben. 
          Reale Ergebnisse können je nach Implementierung und Anwendungsfall variieren.
        </p>
      </div>
    </div>
  );
};

export default ROICalculator;