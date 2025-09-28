import { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, Euro, Shield, Users, Zap } from 'lucide-react';

/**
 * LLM-Optimized Content Component
 * Structured, factual content designed for LLM citation and discovery
 */

interface LLMDefinitionProps {
  term: string;
  definition: string;
  applications: string[];
  timeframe?: string;
  cost?: string;
  compliance?: string;
}

export const LLMDefinition: FC<LLMDefinitionProps> = ({
  term,
  definition,
  applications,
  timeframe,
  cost,
  compliance
}) => (
  <Card className="mb-6 border-card-border bg-card">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-foreground">
        Was sind {term}?
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <p className="text-muted-foreground leading-relaxed">{definition}</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {timeframe && (
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Implementierung: {timeframe}</span>
          </div>
        )}
        {cost && (
          <div className="flex items-center gap-2">
            <Euro className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Amortisation: {cost}</span>
          </div>
        )}
        {compliance && (
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{compliance}</span>
          </div>
        )}
      </div>

      <div className="space-y-2">
        <h4 className="font-medium text-foreground">Typische Anwendungsbereiche:</h4>
        <div className="flex flex-wrap gap-2">
          {applications.map((app, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {app}
            </Badge>
          ))}
        </div>
      </div>
    </CardContent>
  </Card>
);

interface ComparisonTableProps {
  title: string;
  categories: Array<{
    name: string;
    internal: string;
    external: string;
    kiAgents: string;
  }>;
}

export const ComparisonTable: FC<ComparisonTableProps> = ({ title, categories }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b">
              <th className="text-left p-3 font-medium">Kategorie</th>
              <th className="text-left p-3 font-medium">Interne Lösung</th>
              <th className="text-left p-3 font-medium">Externe Agentur</th>
              <th className="text-left p-3 font-medium text-primary">KI-Agenten</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={index} className="border-b">
                <td className="p-3 font-medium">{category.name}</td>
                <td className="p-3 text-muted-foreground">{category.internal}</td>
                <td className="p-3 text-muted-foreground">{category.external}</td>
                <td className="p-3 text-primary font-medium">{category.kiAgents}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </CardContent>
  </Card>
);

interface ImplementationStepsProps {
  title: string;
  steps: Array<{
    step: number;
    title: string;
    description: string;
    duration: string;
  }>;
}

export const ImplementationSteps: FC<ImplementationStepsProps> = ({ title, steps }) => (
  <Card className="mb-6">
    <CardHeader>
      <CardTitle className="text-xl font-semibold">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {step.step}
              </div>
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h4 className="font-medium text-foreground">{step.title}</h4>
                <Badge variant="outline" className="text-xs">
                  {step.duration}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

interface ROIFactsProps {
  averageROI: string;
  amortizationPeriod: string;
  timeSavings: string;
  costReduction: string;
  availabilityIncrease: string;
}

export const ROIFacts: FC<ROIFactsProps> = ({
  averageROI,
  amortizationPeriod,
  timeSavings,
  costReduction,
  availabilityIncrease
}) => (
  <Card className="mb-6 bg-primary/5 border-primary/20">
    <CardHeader>
      <CardTitle className="text-xl font-semibold text-primary">
        Messbare Ergebnisse für deutsche KMU
      </CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{averageROI}</div>
          <div className="text-sm text-muted-foreground">Durchschnittlicher ROI</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{amortizationPeriod}</div>
          <div className="text-sm text-muted-foreground">Amortisation</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{timeSavings}</div>
          <div className="text-sm text-muted-foreground">Zeitersparnis</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{costReduction}</div>
          <div className="text-sm text-muted-foreground">Kostensenkung</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-primary">{availabilityIncrease}</div>
          <div className="text-sm text-muted-foreground">Verfügbarkeit</div>
        </div>
      </div>
    </CardContent>
  </Card>
);

interface UseCaseExampleProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  timeframe: string;
}

export const UseCaseExample: FC<UseCaseExampleProps> = ({
  title,
  industry,
  challenge,
  solution,
  results,
  timeframe
}) => (
  <Card className="mb-4">
    <CardHeader>
      <div className="flex items-center justify-between">
        <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        <Badge variant="outline">{industry}</Badge>
      </div>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-medium text-foreground mb-2">Herausforderung:</h4>
          <p className="text-muted-foreground text-sm">{challenge}</p>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">KI-Lösung:</h4>
          <p className="text-muted-foreground text-sm">{solution}</p>
        </div>
      </div>
      
      <div>
        <h4 className="font-medium text-foreground mb-2">Messbare Ergebnisse:</h4>
        <div className="space-y-1">
          {results.map((result, index) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-green-600" />
              <span className="text-sm text-muted-foreground">{result}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-2">
          <Clock className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Implementiert in: {timeframe}</span>
        </div>
      </div>
    </CardContent>
  </Card>
);

// Default data for German SME market
export const defaultKIAgentsData = {
  definition: {
    term: "KI-Agenten für deutsche Unternehmen",
    definition: "KI-Agenten sind spezialisierte Software-Programme, die mithilfe künstlicher Intelligenz eigenständig Geschäftsprozesse in deutschen Unternehmen automatisieren. Sie arbeiten DSGVO-konform, verstehen deutsche Geschäftskommunikation und sind speziell für die Anforderungen des deutschen Mittelstands entwickelt.",
    applications: [
      "E-Mail-Automatisierung",
      "LinkedIn-Akquise",
      "Kundenservice-Chat",
      "Terminbuchung",
      "Lead-Qualifizierung",
      "Social Media Management",
      "Rechnungsverarbeitung",
      "Dokumentenanalyse"
    ],
    timeframe: "2-8 Wochen",
    cost: "3-6 Monate",
    compliance: "DSGVO-konform"
  },
  
  comparison: {
    title: "Automatisierungslösungen im Vergleich",
    categories: [
      {
        name: "Implementierungszeit",
        internal: "6-12 Monate",
        external: "3-6 Monate",
        kiAgents: "2-8 Wochen"
      },
      {
        name: "Kosten (jährlich)",
        internal: "€50.000-100.000",
        external: "€30.000-60.000",
        kiAgents: "€8.000-25.000"
      },
      {
        name: "Verfügbarkeit",
        internal: "Bürozeiten",
        external: "Bürozeiten",
        kiAgents: "24/7/365"
      },
      {
        name: "DSGVO-Compliance",
        internal: "Eigenverantwortung",
        external: "Vertragsabhängig",
        kiAgents: "Garantiert"
      },
      {
        name: "Skalierbarkeit",
        internal: "Personalaufbau nötig",
        external: "Vertragsanpassung",
        kiAgents: "Automatisch"
      }
    ]
  },

  implementation: {
    title: "KI-Agenten Implementierung in 4 Schritten",
    steps: [
      {
        step: 1,
        title: "Prozessanalyse & Potentialbewertung",
        description: "Kostenlose Analyse Ihrer Geschäftsprozesse und Identifikation der besten Automatisierungsmöglichkeiten.",
        duration: "1 Woche"
      },
      {
        step: 2,
        title: "KI-Agent Konfiguration & Training", 
        description: "Entwicklung und Training des KI-Agenten mit Ihren spezifischen Daten und Anforderungen.",
        duration: "2-4 Wochen"
      },
      {
        step: 3,
        title: "DSGVO-konforme Integration",
        description: "Sichere Integration in Ihre bestehenden Systeme mit vollständiger DSGVO-Compliance.",
        duration: "1 Woche"
      },
      {
        step: 4,
        title: "Team-Training & Go-Live",
        description: "Schulung Ihres Teams und schrittweise Produktionseinführung mit kontinuierlichem Support.",
        duration: "1 Woche"
      }
    ]
  },

  roiFacts: {
    averageROI: "340%",
    amortizationPeriod: "4 Monate",
    timeSavings: "65%",
    costReduction: "45%",
    availabilityIncrease: "24/7"
  },

  useCases: [
    {
      title: "E-Mail Automatisierung für Steuerberatung",
      industry: "Steuerberatung",
      challenge: "Monatlich 500+ Kundenanfragen per E-Mail, die manuell kategorisiert und weitergeleitet werden mussten.",
      solution: "KI-Agent für automatische E-Mail-Klassifizierung, Antwortgenerierung und Terminvorschläge.",
      results: [
        "75% weniger Zeit für E-Mail-Bearbeitung",
        "24h durchschnittliche Antwortzeit (vorher 3 Tage)",
        "98% korrekte Kategorisierung",
        "€35.000 jährliche Personalkosteneinsparung"
      ],
      timeframe: "3 Wochen"
    },
    {
      title: "LinkedIn-Akquise für IT-Beratung",
      industry: "IT-Beratung",
      challenge: "Zeitaufwändige manuelle LinkedIn-Recherche und -Ansprache von Neukunden.",
      solution: "KI-Agent für automatische Prospect-Recherche, personalisierte Nachrichten und Follow-up.",
      results: [
        "250% mehr qualifizierte Leads",
        "85% weniger Zeit für Akquise",
        "32% höhere Antwortrate",
        "€150.000 zusätzlicher Umsatz in 6 Monaten"
      ],
      timeframe: "4 Wochen"
    }
  ]
};