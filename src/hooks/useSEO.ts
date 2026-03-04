import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
  noindex?: boolean;
}

/**
 * Custom hook for managing SEO metadata dynamically
 * Optimized for KI2USE's AI consulting, implementation and funding keywords
 */
export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    if (config.title) {
      document.title = config.title;
    }

    if (config.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', config.description);
    }

    if (config.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords);
    }

    if (config.canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      // Ensure absolute URL
      const absoluteCanonical = config.canonical.startsWith('http') 
        ? config.canonical 
        : `https://ki2use.de${config.canonical}`;
      linkCanonical.href = absoluteCanonical;
    }

    if (config.title || config.description || config.ogImage) {
      if (config.title) {
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
          ogTitle = document.createElement('meta');
          ogTitle.setAttribute('property', 'og:title');
          document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', config.title);
      }

      if (config.description) {
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
          ogDescription = document.createElement('meta');
          ogDescription.setAttribute('property', 'og:description');
          document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', config.description);
      }

      if (config.ogImage) {
        let ogImage = document.querySelector('meta[property="og:image"]');
        if (!ogImage) {
          ogImage = document.createElement('meta');
          ogImage.setAttribute('property', 'og:image');
          document.head.appendChild(ogImage);
        }
        ogImage.setAttribute('content', config.ogImage);
      }
    }

    if (config.structuredData) {
      const existingScript = document.querySelector('script[data-seo-structured]');
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-structured', 'true');
      script.textContent = JSON.stringify(config.structuredData);
      document.head.appendChild(script);
    }

    if (config.noindex) {
      let robotsMeta = document.querySelector('meta[name="robots"]');
      if (!robotsMeta) {
        robotsMeta = document.createElement('meta');
        robotsMeta.setAttribute('name', 'robots');
        document.head.appendChild(robotsMeta);
      }
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    }
  }, [config]);
};

/**
 * Predefined SEO configurations for common pages
 */
export const SEOTemplates = {
  beratung: {
    title: "KI-Beratung für den Mittelstand | Strategie & KI-Einführung | KI2USE",
    description: "Professionelle KI-Beratung und Begleitung bei der KI-Einführung. Individuelle Analyse, konkrete Handlungsempfehlungen und Fördermittelberatung. IHK-zertifiziert, DSGVO-konform.",
    keywords: "KI Beratung, KI Einführung, KI Beratung Mittelstand, KI Beratung Deutschland, Künstliche Intelligenz Beratung, KI für Unternehmen, KI Implementierung, KI Strategie, KI Beratung KMU, DSGVO-konforme KI",
    canonical: "https://ki2use.de/beratung"
  },

  foerderung: {
    title: "KI-Förderung & Zuschüsse für den Mittelstand | KI2USE",
    description: "Staatliche Förderprogramme für KI-Projekte: Digital Jetzt, ZIM, Landesfoerderungen. Kostenlose Erstpruefung der Foerderfaehigkeit. KI2USE vermittelt an spezialisierte Foerderberater.",
    keywords: "KI Förderung, Fördermittel KI, Förderung Digitalisierung, Digital Jetzt, ZIM Förderung, KI Zuschüsse, Förderung Mittelstand, Digitalisierungsprämie, KI Investition Förderung, Förderprogramme KMU",
    canonical: "https://ki2use.de/foerderung"
  },

  standardAgents: {
    title: "Standard KI-Assistenten Deutschland – Sofortige Automatisierung | KI2USE",
    description: "Sofort einsetzbare KI-Assistenten fuer deutsche KMU: LinkedIn, E-Mail, Chatbot, Sales und mehr. DSGVO-konform. Made in Germany. 40-75% Zeitersparnis. Kostenlose Beratung.",
    keywords: "Standard KI-Assistenten, KI Programme, KI Agenten, KI für Unternehmen, LinkedIn Assistent, Chatbot Deutschland, E-Mail Automatisierung, Sales Assistent, KI Lösungen KMU, DSGVO-konforme KI",
    canonical: "https://ki2use.de/standard-agenten"
  },
  
  customAgents: {
    title: "Maßgeschneiderte KI-Assistenten – Individuelle KI-Einführung | KI2USE",
    description: "Individuelle KI-Assistenten und KI-Programme fuer deutsche Unternehmen. DSGVO-konforme Integration. Made in Germany Entwicklung in 4-8 Wochen. 100% passgenau fuer Ihre Prozesse.",
    keywords: "maßgeschneiderte KI, individuelle KI-Einführung, Custom KI Programme, KI Implementierung, KI Entwicklung Deutschland, individuelle Automatisierung, KI-Lösung nach Maß, Prozessautomatisierung KI",
    canonical: "https://ki2use.de/massgeschneiderte-agenten"
  },
  
  roiCalculator: {
    title: "KI ROI-Rechner – Kosteneinsparungen durch KI berechnen | KI2USE",
    description: "Berechnen Sie Kosteneinsparungen durch KI-Einführung in Ihrem Unternehmen. Realistische ROI-Prognose. Speziell fuer deutsche KMU. Kostenlos und unverbindlich.",
    keywords: "KI ROI Rechner, Kosteneinsparungen KI, KI Wirtschaftlichkeit, Return on Investment KI, KI Kosten Nutzen, Automatisierung Kostenersparnis, KI Business Case, KI Investition berechnen",
    canonical: "https://ki2use.de/agenten-rechner"
  },
  
  training: {
    title: "KI-Schulungen Deutschland – KI-Training für Unternehmen | KI2USE",
    description: "KI-Schulungen speziell fuer deutsche Teams. DSGVO-konformes Training fuer ChatGPT und Automatisierung. Messbare Produktivitaetssteigerung. Praxisnah und verstaendlich.",
    keywords: "KI Schulungen, KI Training, KI Workshop, KI Weiterbildung, ChatGPT Schulung, KI Kompetenz aufbauen, KI Fortbildung Deutschland, Mitarbeiter KI-Training, KI lernen Unternehmen",
    canonical: "https://ki2use.de/ki-schulungen"
  },
  
  contact: {
    title: "Kontakt – Kostenlose KI-Beratung für Unternehmen | KI2USE",  
    description: "Kostenlose KI-Beratung fuer deutsche KMU. DSGVO-konforme Beratung. Potentialanalyse Ihrer Prozesse. Unverbindliches Erstgespraech in 20-30 Minuten.",
    keywords: "KI Beratung kostenlos, KI Erstgespräch, KI Experte Deutschland, Automatisierung Beratung, KI Potentialanalyse, KI Consultant, KI Beratung buchen, KI Einführung Beratung",
    canonical: "https://ki2use.de/kontakt"
  }
} as const;