import React, { useState, useCallback } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Calculator, TrendingUp, DollarSign, Clock, Users, Zap } from 'lucide-react';

const DemoROICalculator: React.FC = () => {
  const [employees, setEmployees] = useState(50);
  const [avgSalary, setAvgSalary] = useState(50000);
  const [timePerTask, setTimePerTask] = useState(15);
  const [tasksPerWeek, setTasksPerWeek] = useState(100);
  const [automationPercentage, setAutomationPercentage] = useState(70);
  const [integrationCosts, setIntegrationCosts] = useState(5000);
  const [monthlyCosts, setMonthlyCosts] = useState(500);

  const calculateROI = useCallback(() => {
    // Current costs
    const hourlyWage = avgSalary / (52 * 40); // Weekly hours
    const weeklyTaskCosts = (timePerTask / 60) * tasksPerWeek * hourlyWage;
    const annualTaskCosts = weeklyTaskCosts * 52;
    
    // Savings through automation
    const automatedTasks = tasksPerWeek * (automationPercentage / 100);
    const weeklySavings = (timePerTask / 60) * automatedTasks * hourlyWage;
    const annualSavings = weeklySavings * 52;
    
    // ROI calculation
    const annualKICosts = monthlyCosts * 12;
    const totalCosts = integrationCosts + annualKICosts;
    const netSavings = annualSavings - annualKICosts;
    const roi = ((netSavings) / totalCosts) * 100;
    const paybackMonths = integrationCosts / (weeklySavings * 4.33);
    
    return {
      annualTaskCosts: Math.round(annualTaskCosts),
      annualSavings: Math.round(annualSavings),
      annualKICosts: Math.round(annualKICosts),
      netSavings: Math.round(netSavings),
      roi: Math.round(roi),
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      weeklySavings: Math.round(weeklySavings),
      automatedTasksPerWeek: Math.round(automatedTasks),
      timeSavedPerWeek: Math.round((automatedTasks * timePerTask) / 60)
    };
  }, [employees, avgSalary, timePerTask, tasksPerWeek, automationPercentage, integrationCosts, monthlyCosts]);

  const results = calculateROI();

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-8 h-8 text-primary" />
          <h1 className="text-3xl font-bold">Demo ROI-Rechner</h1>
        </div>
        <p className="text-muted-foreground">
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
                  type="number"
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  min="1"
                />
              </div>
              
              <div>
                <Label htmlFor="avgSalary">Durchschnittsgehalt (€/Jahr)</Label>
                <Input
                  id="avgSalary"
                  type="number"
                  value={avgSalary}
                  onChange={(e) => setAvgSalary(Number(e.target.value))}
                  min="0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="timePerTask">Zeit pro Aufgabe (Min)</Label>
                <Input
                  id="timePerTask"
                  type="number"
                  value={timePerTask}
                  onChange={(e) => setTimePerTask(Number(e.target.value))}
                  min="1"
                />
              </div>
              
              <div>
                <Label htmlFor="tasksPerWeek">Aufgaben pro Woche</Label>
                <Input
                  id="tasksPerWeek"
                  type="number"
                  value={tasksPerWeek}
                  onChange={(e) => setTasksPerWeek(Number(e.target.value))}
                  min="1"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="automation">Automatisierungsgrad (%)</Label>
              <Input
                id="automation"
                type="number"
                value={automationPercentage}
                onChange={(e) => setAutomationPercentage(Math.min(100, Math.max(0, Number(e.target.value))))}
                min="0"
                max="100"
              />
            </div>

            <hr className="border-muted" />
            
            <div className="space-y-4">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                KI-Kosten
              </h3>
              
              <div>
                <Label htmlFor="integrationCosts">Einmalige Integrationskosten (€)</Label>
                <Input
                  id="integrationCosts"
                  type="number"
                  value={integrationCosts}
                  onChange={(e) => {
                    const value = e.target.value === '' ? 0 : Number(e.target.value);
                    setIntegrationCosts(value);
                  }}
                  min="0"
                />
              </div>
              
              <div>
                <Label htmlFor="monthlyCosts">Monatliche Wartungskosten (€)</Label>
                <Input
                  id="monthlyCosts"
                  type="number"
                  value={monthlyCosts}
                  onChange={(e) => {
                    const value = e.target.value === '' ? 0 : Number(e.target.value);
                    setMonthlyCosts(value);
                  }}
                  min="0"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Section */}
        <div className="space-y-6">
          {/* ROI Overview */}
          <Card className="border-primary/20 bg-primary/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                ROI-Ergebnisse
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">
                    {results.roi > 0 ? '+' : ''}{results.roi}%
                  </div>
                  <div className="text-sm text-muted-foreground">ROI im ersten Jahr</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">
                    {results.paybackMonths}
                  </div>
                  <div className="text-sm text-muted-foreground">Monate bis Amortisation</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                  <span className="text-sm">Jährliche Einsparungen:</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    €{results.annualSavings.toLocaleString()}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-card rounded-lg">
                  <span className="text-sm">Jährliche KI-Kosten:</span>
                  <Badge variant="outline">
                    €{results.annualKICosts.toLocaleString()}
                  </Badge>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/20">
                  <span className="text-sm font-medium">Netto-Einsparungen:</span>
                  <Badge className="bg-primary text-primary-foreground">
                    €{results.netSavings.toLocaleString()}
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
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <Clock className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="text-2xl font-bold">{results.timeSavedPerWeek}h</div>
                  <div className="text-sm text-muted-foreground">Zeit/Woche gespart</div>
                </div>
                
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <Users className="w-8 h-8 mx-auto mb-2 text-secondary" />
                  <div className="text-2xl font-bold">{results.automatedTasksPerWeek}</div>
                  <div className="text-sm text-muted-foreground">Automatisierte Aufgaben/Woche</div>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-center">
                  <strong>Wöchentliche Einsparungen:</strong> €{results.weeklySavings.toLocaleString()}
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