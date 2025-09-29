import { FC } from 'react';

export const EnhancedStructuredData: FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KI2USE",
    "url": "https://ki2use.de",
    "description": "Deutsche Spezialagentur für KI-Agent Implementierung und Business Process Automation. DSGVO-konforme KI-Lösungen für Unternehmen.",
    "foundingDate": "2024",
    "areaServed": "Deutschland",
    "knowsAbout": [
      "Künstliche Intelligenz",
      "Business Process Automation",
      "KI-Agenten Entwicklung",
      "LinkedIn Automation",
      "E-Mail Marketing Automatisierung",
      "Chatbot Entwicklung",
      "DSGVO-konforme KI-Implementierung"
    ],
    "expertise": [
      "KI-Agent Implementation",
      "Business Automation Consulting",
      "Custom AI Development",
      "DSGVO Compliance"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "KI-Agent Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LinkedIn KI-Agent",
            "description": "Automatisierte LinkedIn-Leadgenerierung und Networking durch KI-Agenten"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "E-Mail Marketing KI-Agent",
            "description": "Intelligente E-Mail-Kampagnen und Follow-up-Automatisierung"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kundenservice Chatbot",
            "description": "24/7 KI-basierter Kundenservice mit deutscher Sprache"
          }
        }
      ]
    }
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "KI2USE Business Automation Platform",
    "description": "Plattform für die Entwicklung und Verwaltung von KI-Agenten für deutsche Unternehmen",
    "applicationCategory": "Business Automation Software",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "2500",
      "priceCurrency": "EUR",
      "priceRange": "2500-15000 EUR",
      "description": "KI-Agent Implementierung ab 2.500€"
    },
    "featureList": [
      "DSGVO-konforme KI-Implementation",
      "Custom Agent Development",
      "Multi-Platform Integration",
      "Deutsche Sprachunterstützung",
      "24/7 Support"
    ]
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "KI-Agenten in deutschen Unternehmen implementieren",
    "description": "Schritt-für-Schritt Anleitung zur erfolgreichen Implementierung von KI-Agenten",
    "totalTime": "P4W",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "EUR",
      "value": "5000"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Prozessanalyse",
        "text": "Identifikation automatisierbarer Geschäftsprozesse und Definition der Use Cases"
      },
      {
        "@type": "HowToStep",
        "name": "DSGVO-Compliance Planung",
        "text": "Sicherstellung der Datenschutzkonformität und rechtlichen Anforderungen"
      },
      {
        "@type": "HowToStep",
        "name": "Agent-Entwicklung",
        "text": "Entwicklung und Konfiguration der KI-Agenten nach Kundenanforderungen"
      },
      {
        "@type": "HowToStep",
        "name": "Testing und Deployment",
        "text": "Umfassende Tests und schrittweise Einführung in die Produktionsumgebung"
      }
    ]
  };

  const researchProjectSchema = {
    "@context": "https://schema.org",
    "@type": "ResearchProject",
    "name": "Deutsche KI-Agent Implementierung Studie",
    "description": "Untersuchung der Effektivität von KI-Agenten in deutschen KMU-Umgebungen",
    "result": "Durchschnittlich 300-500% ROI-Steigerung innerhalb von 6 Monaten bei korrekter KI-Agent Implementierung",
    "funding": {
      "@type": "Organization",
      "name": "KI2USE Research"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(researchProjectSchema) }}
      />
    </>
  );
};

export default EnhancedStructuredData;