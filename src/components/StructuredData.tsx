import { FC } from 'react';

interface FAQStructuredDataProps {
  faqs: Array<{
    question: string;
    answer: string;
  }>;
}

/**
 * FAQ Structured Data Component for better SEO
 */
export const FAQStructuredData: FC<FAQStructuredDataProps> = ({ faqs }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface ServiceStructuredDataProps {
  name: string;
  description: string;
  features: string[];
  benefits: string[];
  priceRange?: string;
}

/**
 * Service Structured Data Component
 */
export const ServiceStructuredData: FC<ServiceStructuredDataProps> = ({ 
  name, 
  description, 
  features, 
  benefits, 
  priceRange 
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "KI2USE",
      "url": "https://ki2use.de"
    },
    "serviceType": "KI-Automatisierung",
    "areaServed": {
      "@type": "Country",
      "name": "Deutschland"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${name} Features`,
      "itemListElement": features.map((feature, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": feature,
          "description": `${feature} als Teil von ${name}`
        }
      }))
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Deutsche KMU, Kleinunternehmen, Mittelstand"
    },
    ...(priceRange && { 
      "offers": {
        "@type": "Offer",
        "priceRange": priceRange,
        "priceCurrency": "EUR"
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

interface BreadcrumbStructuredDataProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

/**
 * Breadcrumb Structured Data Component
 */
export const BreadcrumbStructuredData: FC<BreadcrumbStructuredDataProps> = ({ items }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

/**
 * Common KI2USE FAQs for SEO
 */
export const KI2USEFAQs = [
  {
    question: "Was sind KI-Agenten und wie können sie meinem Unternehmen helfen?",
    answer: "KI-Agenten sind intelligente digitale Mitarbeiter, die wiederkehrende Geschäftsprozesse automatisieren. Sie können E-Mails sortieren, LinkedIn-Netzwerke pflegen, Kundengespräche führen und vieles mehr - 24/7 ohne Unterbrechung. Dadurch sparen Sie bis zu 80% Zeit bei Routineaufgaben."
  },
  {
    question: "Wie schnell amortisiert sich die Investition in KI-Agenten?",
    answer: "Die meisten unserer KMU-Kunden amortisieren ihre Investition in 3-6 Monaten. Durch die enormen Zeitersparnisse (40-80% bei automatisierten Prozessen) und die 24/7-Verfügbarkeit rechnen sich KI-Agenten sehr schnell."
  },
  {
    question: "Sind KI-Agenten DSGVO-konform?",
    answer: "Ja, alle unsere KI-Agenten werden DSGVO-konform entwickelt und implementiert. Wir achten streng auf Datenschutz und verwenden nur europäische Server. Ihre Kundendaten bleiben sicher und rechtskonform verarbeitet."
  },
  {
    question: "Welche Geschäftsprozesse lassen sich automatisieren?",
    answer: "Fast alle wiederkehrenden Aufgaben: E-Mail-Management, LinkedIn-Akquise, Kundenservice-Chats, Terminbuchungen, Social Media Posting, Lead-Qualifizierung, Rechnungsverarbeitung und vieles mehr. Wir analysieren Ihre Prozesse und identifizieren die besten Automatisierungsmöglichkeiten."
  },
  {
    question: "Benötige ich technische Kenntnisse für KI-Agenten?",
    answer: "Nein, unsere KI-Agenten sind benutzerfreundlich gestaltet. Nach einer kurzen Einführung können Sie und Ihr Team die Agenten problemlos bedienen. Wir übernehmen die komplette technische Implementierung und bieten kontinuierlichen Support."
  }
];

/**
 * Standard Agents FAQ Component with Structured Data
 */
export const StandardAgentsFAQ: FC = () => (
  <>
    <FAQStructuredData faqs={KI2USEFAQs} />
    <BreadcrumbStructuredData 
      items={[
        { name: "Startseite", url: "https://ki2use.de/" },
        { name: "Standard KI-Agenten", url: "https://ki2use.de/standard-agenten" }
      ]}
    />
  </>
);

/**
 * Custom Agents FAQ Component with Structured Data  
 */
export const CustomAgentsFAQ: FC = () => (
  <>
    <FAQStructuredData faqs={[
      ...KI2USEFAQs,
      {
        question: "Wie lange dauert die Entwicklung eines maßgeschneiderten KI-Agenten?",
        answer: "Je nach Komplexität dauert die Entwicklung 4-8 Wochen. Wir arbeiten agil mit regelmäßigen Updates, sodass Sie den Fortschritt jederzeit verfolgen können. Einfache Automatisierungen sind oft schon in 2-3 Wochen einsatzbereit."
      },
      {
        question: "Was kostet eine individuelle KI-Lösung?",
        answer: "Die Kosten variieren je nach Umfang und Komplexität. In unserem kostenlosen Beratungsgespräch analysieren wir Ihre Anforderungen und erstellen ein transparentes Angebot. Die meisten Projekte amortisieren sich binnen 3-6 Monaten."
      }
    ]} />
    <BreadcrumbStructuredData 
      items={[
        { name: "Startseite", url: "https://ki2use.de/" },
        { name: "Maßgeschneiderte KI-Agenten", url: "https://ki2use.de/massgeschneiderte-agenten" }
      ]}
    />
  </>
);