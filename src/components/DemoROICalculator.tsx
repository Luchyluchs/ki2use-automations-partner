import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap } from 'lucide-react';

const DemoROICalculator: React.FC = () => {
  const [employees, setEmployees] = useState("50");
  const [avgSalary, setAvgSalary] = useState("50000");
  const [timePerTask, setTimePerTask] = useState("15");
  const [tasksPerWeek, setTasksPerWeek] = useState("100");
  const [automationPercentage, setAutomationPercentage] = useState("70");
  const [integrationCosts, setIntegrationCosts] = useState("5000");
  const [monthlyCosts, setMonthlyCosts] = useState("500");

  const calculateROI = useCallback(() => {
    // Convert strings to numbers, defaulting to 0 if empty or invalid
    const numEmployees = Number(employees) || 0;
    const numAvgSalary = Number(avgSalary) || 0;
    const numTimePerTask = Number(timePerTask) || 0;
    const numTasksPerWeek = Number(tasksPerWeek) || 0;
    const numAutomationPercentage = Number(automationPercentage) || 0;
    const numIntegrationCosts = Number(integrationCosts) || 0;
    const numMonthlyCosts = Number(monthlyCosts) || 0;

    // Current costs - include number of employees
    const hourlyWage = numAvgSalary / (52 * 40); // Yearly salary / (weeks * hours per week)
    const totalWeeklyTasks = numTasksPerWeek * numEmployees; // Total tasks across all employees
    const weeklyTaskCosts = (numTimePerTask / 60) * totalWeeklyTasks * hourlyWage;
    const annualTaskCosts = weeklyTaskCosts * 52;
    
    // Savings through automation - based on total tasks
    const automatedTasks = totalWeeklyTasks * (numAutomationPercentage / 100);
    const weeklySavings = (numTimePerTask / 60) * automatedTasks * hourlyWage;
    const annualSavings = weeklySavings * 52;
    
    // ROI calculation - Fixed logic
    const annualKICosts = numMonthlyCosts * 12;
    const netSavings = annualSavings - annualKICosts; // Net savings per year
    const roi = numIntegrationCosts > 0 ? (netSavings / numIntegrationCosts) * 100 : 0; // ROI based on integration investment
    const paybackMonths = weeklySavings > 0 ? numIntegrationCosts / (weeklySavings * 4.33) : 0;
    
    // Debug logging
    console.log('ROI Calculation Debug:', {
      inputs: { numEmployees, numAvgSalary, numTimePerTask, numTasksPerWeek, numAutomationPercentage, numIntegrationCosts, numMonthlyCosts },
      hourlyWage: Math.round(hourlyWage * 100) / 100,
      totalWeeklyTasks,
      weeklyTaskCosts: Math.round(weeklyTaskCosts),
      annualTaskCosts: Math.round(annualTaskCosts),
      automatedTasks: Math.round(automatedTasks),
      weeklySavings: Math.round(weeklySavings),
      annualSavings: Math.round(annualSavings),
      annualKICosts: Math.round(annualKICosts),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi)
    });
    
    return {
      annualTaskCosts: Math.round(annualTaskCosts),
      annualSavings: Math.round(annualSavings),
      annualKICosts: Math.round(annualKICosts),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      weeklySavings: Math.round(weeklySavings),
      automatedTasksPerWeek: Math.round(automatedTasks),
      timeSavedPerWeek: Math.round((automatedTasks * numTimePerTask) / 60)
    };
  }, [employees, avgSalary, timePerTask, tasksPerWeek, automationPercentage, integrationCosts, monthlyCosts]);

  const results = calculateROI();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-4">
          <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
          <h1 className="text-2xl sm:text-3xl font-bold text-center">Demo ROI-Rechner</h1>
        </div>
        <p className="text-muted-foreground text-sm sm:text-base text-center px-4">
          Berechnen Sie Ihre individuelle Kostenersparnis durch KI-Automatisierung
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Input Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              Unternehmensparameter
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="employees">Anzahl Mitarbeiter</Label>
                <Input
                  id="employees"
                  type="text"
                  value={employees}
                  onChange={(e) => setEmployees(e.target.value)}
                  placeholder="50"
                  className="placeholder:text-muted-foreground/50 text-foreground font-medium"
                />
              </div>
              
              <div>
                <Label htmlFor="avgSalary">Durchschnittsgehalt</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">€</span>
                  <Input
                    id="avgSalary"
                    type="text"
                    value={avgSalary}
                    onChange={(e) => setAvgSalary(e.target.value)}
                    placeholder="50000"
                    className="pl-8 placeholder:text-muted-foreground/50 text-foreground font-medium"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timePerTask">Zeit pro Aufgabe (Min)</Label>
                <Input
                  id="timePerTask"
                  type="text"
                  value={timePerTask}
                  onChange={(e) => setTimePerTask(e.target.value)}
                  placeholder="15"
                  className="placeholder:text-muted-foreground/50 text-foreground font-medium"
                />
              </div>
              
              <div>
                <Label htmlFor="tasksPerWeek">Aufgaben pro Mitarbeiter/Woche</Label>
                <Input
                  id="tasksPerWeek"
                  type="text"
                  value={tasksPerWeek}
                  onChange={(e) => setTasksPerWeek(e.target.value)}
                  placeholder="100"
                  className="placeholder:text-muted-foreground/50 text-foreground font-medium"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="automation">Automatisierungsgrad (%)</Label>
              <Input
                id="automation"
                type="text"
                value={automationPercentage}
                onChange={(e) => {
                  const value = e.target.value;
                  const num = Math.min(100, Math.max(0, Number(value) || 0));
                  setAutomationPercentage(value === '' ? '' : num.toString());
                }}
                placeholder="70"
                className="placeholder:text-muted-foreground/50 text-foreground font-medium"
              />
            </div>

            <hr className="border-muted" />
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <span className="text-primary font-bold">€</span>
                KI-Kosten
              </h3>
              
              <div>
                <Label htmlFor="integrationCosts">Einmalige Integrationskosten</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">€</span>
                  <Input
                    id="integrationCosts"
                    type="text"
                    value={integrationCosts}
                    onChange={(e) => setIntegrationCosts(e.target.value)}
                    placeholder="5000"
                    className="pl-8 placeholder:text-muted-foreground/50 text-foreground font-medium"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="monthlyCosts">Monatliche Wartungskosten</Label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">€</span>
                  <Input
                    id="monthlyCosts"
                    type="text"
                    value={monthlyCosts}
                    onChange={(e) => setMonthlyCosts(e.target.value)}
                    placeholder="500"
                    className="pl-8 placeholder:text-muted-foreground/50 text-foreground font-medium"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          {/* ROI Overview */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  ROI-Ergebnisse
                </div>
                <div className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground">
                  Return on Investment = Rendite der Investition
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    {results.roi > 0 ? '+' : ''}{results.roi}%
                  </div>
                  <div className="text-sm text-muted-foreground">ROI im ersten Jahr</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {results.roi > 0 
                      ? `Für jeden investierten Euro erhalten Sie ${(results.roi/100 + 1).toFixed(2)}€ zurück`
                      : "Investition amortisiert sich nicht im ersten Jahr"
                    }
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600">
                    {results.paybackMonths}
                  </div>
                  <div className="text-sm text-muted-foreground">Monate bis Amortisation</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                  <span className="text-sm">Jährliche Einsparungen:</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {results.annualSavings.toLocaleString()}€
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                  <span className="text-sm">Jährliche KI-Kosten:</span>
                  <Badge variant="outline">
                    {results.annualKICosts.toLocaleString()}€
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-sm font-medium">Netto-Einsparungen:</span>
                  <Badge className="bg-primary text-primary-foreground">
                    {results.netSavings.toLocaleString()}€
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Efficiency Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Effizienz-Metriken
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="text-center p-3 sm:p-4 bg-accent/10 rounded-lg">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold">{results.timeSavedPerWeek}h</div>
                  <div className="text-sm text-muted-foreground">Zeit/Woche gespart</div>
                </div>
                
                <div className="text-center p-3 sm:p-4 bg-secondary/10 rounded-lg">
                  <Users className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <div className="text-2xl font-bold">{results.automatedTasksPerWeek}</div>
                  <div className="text-sm text-muted-foreground">Automatisierte Aufgaben/Woche</div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-center">
                  <strong>Wöchentliche Einsparungen:</strong> {results.weeklySavings.toLocaleString()}€
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DemoROICalculator;