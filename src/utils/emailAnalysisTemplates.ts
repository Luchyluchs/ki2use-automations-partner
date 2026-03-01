// Professionelle E-Mail-Analyse Templates für KI2USE

export interface ChecklistAnalysisData {
  email: string;
  timestamp: string;
  selectedAutomations: Array<{
    title: string;
    category: string;
    timeImpact: string;
    costImpact: string;
    benefit: string;
    detailedBenefit: string;
  }>;
  summary: {
    totalSelectedItems: number;
    totalHourlySavings: number;
    monthlySavings: number;
    potentialROI: number;
  };
  analysisType: 'interactive_checklist';
}

export interface BusinessAnalysisData {
  email: string;
  timestamp: string;
  currentSituation: {
    totalWeeklyTimeSpent: number;
    monthlyTimeCost: number;
    painScore: number;
    processDetails: Array<{
      category: string;
      question: string;
      answer: string;
      answerLabel: string;
      timeSpent: number;
      painLevel: number;
    }>;
  };
  interestedAutomations: Array<{
    category: string;
    title: string;
    description: string;
    timeSaved: string;
    cost: string;
    roi: string;
    interested: boolean;
  }>;
  potentialImpact: {
    interestedAreas: number;
    potentialMonthlySavings: number;
    estimatedROI: number;
    paybackPeriod: string | number;
  };
  analysisType: 'business_analysis';
}

export type AnalysisData = ChecklistAnalysisData | BusinessAnalysisData;

export const generateProfessionalAnalysisEmail = (data: AnalysisData): string => {
  const isBusinessAnalysis = data.analysisType === 'business_analysis';
  const businessData = data as BusinessAnalysisData;
  const checklistData = data as ChecklistAnalysisData;

  return `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ihre personalisierte KI-Automatisierungs-Analyse - KI2USE</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa; }
        .container { max-width: 600px; margin: 0 auto; background: white; }
        .header { background: linear-gradient(135deg, #2c3e50 0%, #3498db 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 28px; font-weight: 600; }
        .header p { margin: 10px 0 0; opacity: 0.9; font-size: 16px; }
        .content { padding: 30px; }
        .highlight-box { background: #f8f9fa; border-left: 4px solid #3498db; padding: 20px; margin: 20px 0; border-radius: 0 8px 8px 0; }
        .stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 25px 0; }
        .stat-card { background: #ffffff; border: 2px solid #e9ecef; border-radius: 8px; padding: 20px; text-align: center; }
        .stat-number { font-size: 32px; font-weight: bold; color: #3498db; margin-bottom: 5px; }
        .stat-label { font-size: 14px; color: #6c757d; font-weight: 500; }
        .automation-item { background: #f8f9fa; border-radius: 8px; padding: 20px; margin: 15px 0; border-left: 4px solid #28a745; }
        .cta-section { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; margin: 30px 0; border-radius: 12px; text-align: center; }
        .cta-button { display: inline-block; background: #ffffff; color: #28a745; padding: 15px 30px; text-decoration: none; border-radius: 6px; font-weight: 600; margin-top: 15px; }
        .footer { background: #343a40; color: #adb5bd; padding: 25px; text-align: center; font-size: 14px; }
        .priority-high { border-left-color: #dc3545; }
        .priority-medium { border-left-color: #ffc107; }
        .priority-low { border-left-color: #28a745; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Ihre KI-Automatisierungs-Analyse</h1>
            <p>Erstellt am ${new Date(data.timestamp).toLocaleDateString('de-DE', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
        </div>
        
        <div class="content">
            <h2>Zusammenfassung Ihrer aktuellen Situation</h2>
            
            ${isBusinessAnalysis ? `
            <div class="highlight-box">
                <h3>📊 Ihre IST-Analyse</h3>
                <p>Basierend auf Ihren Antworten haben wir Ihre aktuelle Geschäftssituation analysiert:</p>
                <ul>
                    <li><strong>Wöchentlicher Zeitaufwand für manuelle Prozesse:</strong> ${businessData.currentSituation.totalWeeklyTimeSpent} Stunden</li>
                    <li><strong>Monatliche Kosten für manuelle Arbeit:</strong> ${businessData.currentSituation.monthlyTimeCost.toLocaleString()}€</li>
                    <li><strong>Frustrations-Level bei aktuellen Prozessen:</strong> ${businessData.currentSituation.painScore}%</li>
                </ul>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${businessData.currentSituation.totalWeeklyTimeSpent}h</div>
                    <div class="stat-label">Wöchentlicher Aufwand</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${businessData.potentialImpact.interestedAreas}</div>
                    <div class="stat-label">Interessante Automatisierungen</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${businessData.potentialImpact.potentialMonthlySavings.toLocaleString()}€</div>
                    <div class="stat-label">Monatliches Einsparpotenzial</div>
                </div>
            </div>

            <h3>💡 Ihre ausgewählten Automatisierungen:</h3>
            ${businessData.interestedAutomations.map(automation => `
                <div class="automation-item">
                    <h4>${automation.title}</h4>
                    <p>${automation.description}</p>
                    <p><strong>Zeitersparnis:</strong> ${automation.timeSaved}</p>
                    <p><strong>Investition:</strong> ${automation.cost}</p>
                    <p><strong>Amortisation:</strong> ${automation.roi}</p>
                </div>
            `).join('')}
            ` : `
            <div class="highlight-box">
                <h3>📋 Ihre Checkliste-Auswahl</h3>
                <p>Sie haben ${checklistData.summary.totalSelectedItems} von 6 möglichen Automatisierungsbereichen ausgewählt:</p>
            </div>

            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">${checklistData.summary.totalHourlySavings}h</div>
                    <div class="stat-label">Monatliche Zeitersparnis</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${checklistData.summary.monthlySavings.toLocaleString()}€</div>
                    <div class="stat-label">Monatliche Ersparnis</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">${checklistData.summary.potentialROI}%</div>
                    <div class="stat-label">Geschätzter ROI</div>
                </div>
            </div>

            <h3>🎯 Ihre priorisierten Automatisierungen:</h3>
            ${checklistData.selectedAutomations.map(automation => `
                <div class="automation-item">
                    <h4>${automation.title}</h4>
                    <p>${automation.detailedBenefit}</p>
                    <p><strong>Zeitersparnis:</strong> ${automation.timeImpact}</p>
                    <p><strong>Investition:</strong> ${automation.costImpact}</p>
                    <p><strong>Nutzen:</strong> ${automation.benefit}</p>
                </div>
            `).join('')}
            `}

            <div class="cta-section">
                <h3>🎯 Ihre nächsten Schritte</h3>
                <p><strong>Basierend auf Ihrer Analyse empfiehlt KI2USE ein kostenloses 30-minütiges Strategiegespräch.</strong></p>
                <p>In diesem Gespräch:</p>
                <ul style="text-align: left; display: inline-block;">
                    <li>Ihre Automatisierungsstrategie wird verfeinert</li>
                    <li>Erstellen einen konkreten Implementierungsplan</li>
                    <li>Berechnen exakte ROI-Zahlen für Ihr Unternehmen</li>
                    <li>Definieren Quick-Wins für den sofortigen Einstieg</li>
                </ul>
                <a href="https://calendly.com/ki2use/beratung" class="cta-button">Jetzt kostenloses Beratungsgespräch buchen</a>
            </div>

            <div class="highlight-box">
                <h3>⚡ Warum KI2USE der richtige Partner für Sie ist:</h3>
                <ul>
                    <li><strong>Spezialisiert auf deutsche KMUs:</strong> KI2USE versteht Ihre Herausforderungen</li>
                    <li><strong>DSGVO-konform:</strong> Alle Lösungen entsprechen deutschen Datenschutzstandards</li>
                    <li><strong>Bewährte Methodik:</strong> Über 200 erfolgreiche KI-Implementierungen</li>
                    <li><strong>Komplettservice:</strong> Von der Beratung bis zur Implementierung</li>
                    <li><strong>Nachhaltige Partnerschaften:</strong> Langfristige Betreuung und Optimierung</li>
                </ul>
            </div>

            <p><strong>Haben Sie Fragen zu Ihrer Analyse?</strong><br>
            Antworten Sie einfach auf diese E-Mail oder rufen Sie uns an: <strong>+49 (0) XXX XXXXXXX</strong></p>
        </div>
        
        <div class="footer">
            <p><strong>KI2USE GmbH</strong> - Ihr Partner für professionelle KI-Automatisierung</p>
            <p>📧 info@ki2use.de | 🌐 www.ki2use.de</p>
            <p><em>Diese Analyse wurde automatisch erstellt und basiert auf Ihren Angaben vom ${new Date(data.timestamp).toLocaleDateString('de-DE')}.</em></p>
        </div>
    </div>
</body>
</html>
  `.trim();
};

// Webhook-Datenstruktur für die E-Mail-Analyse
export const prepareAnalysisForWebhook = (data: AnalysisData) => {
  return {
    to: data.email,
    subject: `🚀 Ihre KI-Automatisierungs-Analyse - ${data.analysisType === 'business_analysis' ? 'Business-Analyse' : 'Checkliste'} von KI2USE`,
    html: generateProfessionalAnalysisEmail(data),
    data: data // Rohdaten für weitere Verarbeitung
  };
};