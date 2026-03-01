import { useState } from "react";
import { Card } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Calculator, TrendingUp, Clock, Euro } from "lucide-react";

const CustomROICalculator = () => {
  const [employees, setEmployees] = useState([10]);
  const [avgSalary, setAvgSalary] = useState([45000]);
  const [hoursPerWeek, setHoursPerWeek] = useState([8]);

  // Kosten für maßgeschneiderte Lösung
  const customAgentCosts = {
    monthly: 100,
    setup: 2000
  };

  const currentCosts = {
    hourlyRate: avgSalary[0] / 1760, // 220 Arbeitstage * 8 Stunden
    weeklyHours: hoursPerWeek[0] * employees[0],
    monthlyHours: hoursPerWeek[0] * employees[0] * 4.33,
    monthlyCost: (avgSalary[0] / 1760) * hoursPerWeek[0] * employees[0] * 4.33
  };

  const monthlySavings = currentCosts.monthlyCost - customAgentCosts.monthly;
  const totalInvestmentFirstYear = customAgentCosts.setup + (customAgentCosts.monthly * 12);
  const totalSavingsFirstYear = monthlySavings * 12;
  const netSavingsFirstYear = totalSavingsFirstYear - totalInvestmentFirstYear;
  const yearlyROI = totalInvestmentFirstYear > 0 ? (netSavingsFirstYear / totalInvestmentFirstYear) * 100 : 0;
  const paybackMonths = monthlySavings > 0 ? totalInvestmentFirstYear / monthlySavings : 0;

  return (
    <div className="bg-card border border-card-border rounded-2xl p-4 sm:p-6 lg:p-8">
      <div className="flex items-center gap-3 mb-6 sm:mb-8">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
          <Calculator className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
        </div>
        <div>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Assistenten-Rechner für maßgeschneiderte Lösung</h3>
          <p className="text-muted-foreground text-sm sm:text-base">Berechnen Sie Ihre Kosteneinsparungen</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
        <div className="space-y-6">
          <div className="space-y-4">
            <Label className="text-sm sm:text-base font-medium">Anzahl Mitarbeiter: {employees[0]}</Label>
            <Slider
              value={employees}
              onValueChange={setEmployees}
              max={100}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm sm:text-base font-medium">Durchschnittliches Jahresgehalt: €{avgSalary[0].toLocaleString()}</Label>
            <Slider
              value={avgSalary}
              onValueChange={setAvgSalary}
              max={100000}
              min={25000}
              step={5000}
              className="w-full"
            />
          </div>

          <div className="space-y-4">
            <Label className="text-sm sm:text-base font-medium">Stunden pro Woche für zu automatisierende Aufgaben: {hoursPerWeek[0]}</Label>
            <Slider
              value={hoursPerWeek}
              onValueChange={setHoursPerWeek}
              max={40}
              min={1}
              step={1}
              className="w-full"
            />
          </div>

          <div className="bg-accent/10 rounded-lg p-4">
            <h4 className="font-semibold mb-2 text-accent">Maßgeschneiderte KI-Lösung</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Individuell entwickelt für Ihre spezifischen Geschäftsprozesse
            </p>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Entwicklungskosten:</span>
                <span className="font-semibold">Ab {customAgentCosts.setup.toLocaleString()}€</span>
              </div>
              <div className="flex justify-between">
                <span>Monatliche Wartung:</span>
                <span className="font-semibold">{customAgentCosts.monthly}€/Monat</span>
              </div>
            </div>
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
                <span className="font-medium">{currentCosts.hourlyRate.toFixed(2)}€</span>
              </div>
              <div className="flex justify-between">
                <span>Wöchentliche Stunden:</span>
                <span className="font-medium">{currentCosts.weeklyHours} Std.</span>
              </div>
              <div className="flex justify-between font-semibold text-lg border-t pt-2">
                <span>Monatliche Kosten:</span>
                <span className="text-foreground">{currentCosts.monthlyCost.toFixed(0)}€</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/5 to-secondary/5">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-accent" />
              <h4 className="font-semibold">Mit maßgeschneiderter KI-Lösung</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Entwicklungskosten:</span>
                <span className="font-medium">Ab {customAgentCosts.setup.toLocaleString()}€</span>
              </div>
              <div className="flex justify-between">
                <span>Monatliche Wartung:</span>
                <span className="font-medium">{customAgentCosts.monthly}€/Monat</span>
              </div>
              <div className="flex justify-between">
                <span>Gesamtinvestition (1. Jahr):</span>
                <span className="font-semibold text-foreground">{totalInvestmentFirstYear.toLocaleString()}€</span>
              </div>
              <div className="flex justify-between">
                <span>Monatliche Einsparung:</span>
                <span className="text-accent font-semibold">{monthlySavings.toFixed(0)}€</span>
              </div>
              <div className="flex justify-between">
                <span>Jährliche Einsparung:</span>
                <span className="text-accent font-semibold">{totalSavingsFirstYear.toFixed(0)}€</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span>Netto-Einsparung (1. Jahr):</span>
                <span className={`font-semibold ${netSavingsFirstYear >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {netSavingsFirstYear.toFixed(0)}€
                </span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5 hover-lift">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="w-5 h-5 text-accent" />
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                <h4 className="font-semibold">ROI-Analyse</h4>
                <div className="text-xs bg-accent/10 px-2 py-1 rounded-full text-muted-foreground">
                  Return on Investment = Rendite der Investition
                </div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Jährliche Rendite:</span>
                <span className="text-accent font-bold text-lg">
                  {yearlyROI > 0 ? '+' : ''}{yearlyROI.toFixed(0)}%
                </span>
              </div>
              <div className="flex justify-between">
                <span>ROI-Erklärung:</span>
                <span className="font-medium text-sm">
                  {yearlyROI > 0 
                    ? `Für jeden investierten Euro erhalten Sie ${(yearlyROI/100 + 1).toFixed(2)}€ zurück`
                    : "Investition amortisiert sich nicht im ersten Jahr"
                  }
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
          <strong>*Hinweis:</strong> Die angezeigten Preise sind Richtwerte für maßgeschneiderte Lösungen. 
          Tatsächliche Kosten können je nach Projektkomplexität, individuellen Anforderungen und Umfang 
          der Entwicklung variieren. Eine genaue Kostenschätzung erhalten Sie in einem kostenlosen Beratungsgespräch.
        </p>
      </div>
    </div>
  );
};

export default CustomROICalculator;