import { FC } from 'react';

/**
 * Enhanced Structured Data Components for LLM Discovery
 * Optimized for German market and SME-specific queries
 */

interface OrganizationStructuredDataProps {
  includeServices?: boolean;
}

export const OrganizationStructuredData: FC<OrganizationStructuredDataProps> = ({ 
  includeServices = true 
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "KI2USE",
    "alternateName": "KI2USE - KI-Agenten für deutsche Unternehmen",
    "url": "https://ki2use.de",
    "logo": "https://ki2use.de/ki2use-favicon.png",
    "description": "Spezialist für DSGVO-konforme KI-Agenten und Automatisierungslösungen für deutsche KMU. Entwicklung maßgeschneiderter KI-Assistenten mit garantierter 3-6 Monate Amortisation.",
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "DE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Kundenservice",
      "availableLanguage": "German",
      "areaServed": "DE",
      "serviceType": "KI-Beratung"
    },
    "sameAs": [
      "https://linkedin.com/company/ki2use"
    ],
    "expertise": [
      "KI-Agenten Entwicklung",
      "DSGVO-konforme Automatisierung", 
      "LinkedIn Automatisierung",
      "E-Mail Marketing Automatisierung",
      "Chatbot Entwicklung Deutschland",
      "Prozessautomatisierung KMU",
      "Custom AI Assistants Deutschland"
    ],
    "industry": "Artificial Intelligence Consulting",
    "knowsAbout": [
      "Künstliche Intelligenz",
      "Prozessautomatisierung",
      "DSGVO-Compliance",
      "Deutsche KMU-Bedürfnisse",
      "Business Process Automation",
      "Custom AI Development",
      "German SME Market"
    ],
    "makesOffer": includeServices ? [
      {
        "@type": "Offer",
        "name": "Standard KI-Agenten",
        "description": "Sofort einsetzbare KI-Assistenten für LinkedIn, E-Mail, Chatbots und mehr",
        "category": "Standard AI Agents Deutschland",
        "priceRange": "€999-€4,999",
        "priceCurrency": "EUR",
        "availability": "InStock",
        "areaServed": "DE",
        "validFrom": "2024-01-01"
      },
      {
        "@type": "Offer", 
        "name": "Maßgeschneiderte KI-Agenten",
        "description": "Individuelle KI-Lösungen für spezifische Geschäftsprozesse",
        "category": "Custom AI Development Deutschland",
        "priceRange": "€5,000-€25,000",
        "priceCurrency": "EUR",
        "availability": "PreOrder",
        "areaServed": "DE",
        "deliveryLeadTime": "P4W"
      },
      {
        "@type": "Offer",
        "name": "KI-Schulungen für deutsche Teams",
        "description": "DSGVO-konforme KI-Trainings für Mitarbeiter deutscher Unternehmen",
        "category": "AI Training Deutschland",
        "priceRange": "€1,500-€8,000", 
        "priceCurrency": "EUR",
        "availability": "InStock",
        "areaServed": "DE"
      }
    ] : undefined
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface HowToStructuredDataProps {
  title: string;
  description: string;
  steps: Array<{
    name: string;
    text: string;
    image?: string;
  }>;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
}

export const HowToStructuredData: FC<HowToStructuredDataProps> = ({
  title,
  description,
  steps,
  totalTime,
  estimatedCost
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "totalTime": totalTime,
    "estimatedCost": estimatedCost,
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Bestehende Geschäftsprozesse"
      },
      {
        "@type": "HowToSupply", 
        "name": "DSGVO-konforme Infrastruktur"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "KI2USE Plattform"
      }
    ],
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.image && { "image": step.image })
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface SoftwareApplicationStructuredDataProps {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  features: string[];
  price?: {
    currency: string;
    amount: string;
  };
}

export const SoftwareApplicationStructuredData: FC<SoftwareApplicationStructuredDataProps> = ({
  name,
  description,
  applicationCategory,
  operatingSystem = "Web Browser",
  features,
  price
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": price ? {
      "@type": "Offer",
      "price": price.amount,
      "priceCurrency": price.currency
    } : undefined,
    "featureList": features,
    "provider": {
      "@type": "Organization",
      "name": "KI2USE",
      "url": "https://ki2use.de"
    },
    "inLanguage": "de",
    "availableOnDevice": "Desktop, Mobile, Tablet",
    "browserRequirements": "Chrome, Firefox, Safari, Edge",
    "memoryRequirements": "Keine besonderen Anforderungen",
    "releaseNotes": "DSGVO-konforme KI-Lösung für deutsche Unternehmen"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface DefinedTermStructuredDataProps {
  terms: Array<{
    name: string;
    description: string;
    sameAs?: string;
  }>;
}

export const DefinedTermStructuredData: FC<DefinedTermStructuredDataProps> = ({ terms }) => {
  const structuredData = terms.map(term => ({
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    "name": term.name,
    "description": term.description,
    "inDefinedTermSet": {
      "@type": "DefinedTermSet", 
      "name": "KI-Begriffe für deutsche Unternehmen",
      "description": "Glossar der wichtigsten KI-Begriffe für deutsche KMU"
    },
    ...(term.sameAs && { "sameAs": term.sameAs })
  }));

  return (
    <>
      {structuredData.map((data, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
    </>
  );
};

// Predefined structured data for common KI2USE services
export const KI2USEServiceStructuredData: FC = () => (
  <>
    <SoftwareApplicationStructuredData
      name="KI2USE LinkedIn Agent"
      description="Automatisierte LinkedIn-Akquise für deutsche Unternehmen. DSGVO-konforme Lead-Generierung mit personalisierten Nachrichten."
      applicationCategory="Business Software"
      features={[
        "Automatische Prospect-Recherche",
        "Personalisierte Nachrichten",
        "DSGVO-konforme Datenverarbeitung",
        "Deutschsprachige Vorlagen",
        "ROI-Tracking"
      ]}
      price={{ currency: "EUR", amount: "1999" }}
    />
    
    <SoftwareApplicationStructuredData
      name="KI2USE Email Agent"
      description="Intelligente E-Mail-Automatisierung für deutsche KMU. Automatische Klassifizierung und Antwortgenerierung."
      applicationCategory="Email Marketing Software"
      features={[
        "E-Mail-Klassifizierung",
        "Automatische Antworten",
        "DSGVO-konforme Verarbeitung",
        "Deutsche Rechtschreibprüfung",
        "CRM-Integration"
      ]}
      price={{ currency: "EUR", amount: "1499" }}
    />

    <SoftwareApplicationStructuredData
      name="KI2USE Chatbot Agent"
      description="DSGVO-konformer Chatbot für deutsche Webseiten. 24/7 Kundenservice mit deutschsprachiger KI."
      applicationCategory="Customer Service Software"
      features={[
        "24/7 Verfügbarkeit",
        "Deutschsprachige KI",
        "DSGVO-konforme Datenhaltung",
        "Webseitenbuch-Integration",
        "Eskalationsmanagement"
      ]}
      price={{ currency: "EUR", amount: "999" }}
    />
  </>
);

// Default definitions for German AI market
export const defaultAITerms = [
  {
    name: "KI-Agent",
    description: "Ein KI-Agent ist ein spezialisiertes Software-Programm, das mithilfe künstlicher Intelligenz eigenständig Aufgaben erledigt und Entscheidungen trifft. In deutschen Unternehmen werden KI-Agenten für E-Mail-Automatisierung, Kundenservice und Lead-Generierung eingesetzt."
  },
  {
    name: "DSGVO-konforme KI",
    description: "KI-Systeme, die vollständig der EU-Datenschutz-Grundverordnung entsprechen. Dies umfasst Datenminimierung, Zweckbindung, Transparenz und die Gewährleistung von Betroffenenrechten bei der KI-gestützten Datenverarbeitung."
  },
  {
    name: "Prozessautomatisierung",
    description: "Die Automatisierung wiederkehrender Geschäftsprozesse durch KI-Technologie. Typische Anwendungen sind E-Mail-Sortierung, Terminbuchungen, Lead-Qualifizierung und Kundenservice-Anfragen."
  },
  {
    name: "LinkedIn Automatisierung",
    description: "Automatisierte LinkedIn-Akquise durch KI-Agenten, die Prospects recherchieren, personalisierte Nachrichten senden und Follow-ups durchführen. In Deutschland besonders wichtig: DSGVO-konforme Implementierung."
  },
  {
    name: "Custom AI Development",
    description: "Entwicklung maßgeschneiderter KI-Lösungen für spezifische Geschäftsanforderungen deutscher Unternehmen. Umfasst Analyse, Design, Entwicklung und DSGVO-konforme Implementierung."
  }
];