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
 * Optimized for KI2USE's AI agents and automation keywords
 */
export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update title
    if (config.title) {
      document.title = config.title;
    }

    // Update meta description
    if (config.description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        document.head.appendChild(metaDescription);
      }
      metaDescription.setAttribute('content', config.description);
    }

    // Update keywords
    if (config.keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', config.keywords);
    }

    // Update canonical URL
    if (config.canonical) {
      let linkCanonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
      if (!linkCanonical) {
        linkCanonical = document.createElement('link');
        linkCanonical.setAttribute('rel', 'canonical');
        document.head.appendChild(linkCanonical);
      }
      linkCanonical.href = config.canonical;
    }

    // Update Open Graph tags
    if (config.title || config.description || config.ogImage) {
      // OG Title
      if (config.title) {
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
          ogTitle = document.createElement('meta');
          ogTitle.setAttribute('property', 'og:title');
          document.head.appendChild(ogTitle);
        }
        ogTitle.setAttribute('content', config.title);
      }

      // OG Description
      if (config.description) {
        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
          ogDescription = document.createElement('meta');
          ogDescription.setAttribute('property', 'og:description');
          document.head.appendChild(ogDescription);
        }
        ogDescription.setAttribute('content', config.description);
      }

      // OG Image
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

    // Add structured data
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

    // Handle noindex
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
  standardAgents: {
    title: "Standard KI-Assistenten Deutschland - Sofortige Automatisierung | KI2USE",
    description: "🚀 Sofort einsetzbare KI-Assistenten für deutsche KMU: LinkedIn, E-Mail, Chatbot, Sales & mehr. ✅ DSGVO-konform. Made in Germany. ⚡ 40-75% Zeitersparnis. 📞 Kostenlose Beratung!",
    keywords: "Standard KI-Assistenten Deutschland, sofort einsetzbar Deutschland, LinkedIn Assistent DSGVO, E-Mail Automatisierung Deutschland, Chatbot Deutschland, Sales Assistent DACH, bewährte KI-Lösungen Deutschland, fertige Automatisierung DSGVO-konform, KI-Assistenten kaufen Deutschland, digitale Mitarbeiter Standard DACH",
    canonical: "https://ki2use.de/standard-agenten"
  },
  
  customAgents: {
    title: "Maßgeschneiderte KI-Assistenten Deutschland - Individuelle Automatisierung | KI2USE",
    description: "🎯 Individuelle KI-Assistenten für deutsche Unternehmen. ⚙️ DSGVO-konforme Integration. 🔧 Made in Germany Entwicklung in 4-8 Wochen. 💡 100% passgenau für deutsche KMU.",
    keywords: "maßgeschneiderte KI-Assistenten Deutschland, individuelle Automatisierung DACH, custom AI assistants Deutschland, Prozess-spezifische KI DSGVO, einzigartige KI-Lösungen Deutschland, individuelle Entwicklung DACH, maßgeschneiderte Digitalisierung Deutschland, Custom Process Automation DSGVO-konform",
    canonical: "https://ki2use.de/massgeschneiderte-agenten"
  },
  
  roiCalculator: {
    title: "KI-Assistenten ROI Rechner Deutschland - Kosteneinsparungen berechnen | KI2USE",
    description: "💰 Berechnen Sie Kosteneinsparungen durch KI-Assistenten für deutsche Unternehmen! 📊 Realistische ROI-Prognose. ✨ DSGVO-konform. 🇩🇪 Speziell für deutsche KMU. Kostenlos!",
    keywords: "ROI Rechner KI-Assistenten Deutschland, Kosteneinsparungen berechnen Deutschland, KI ROI Calculator DACH, Automatisierung Kostenersparnis Deutschland, KI-Assistenten Wirtschaftlichkeit DSGVO, Business Case KI Deutschland, Amortisation KI-Investition deutsche Unternehmen",
    canonical: "https://ki2use.de/agenten-rechner"
  },
  
  training: {
    title: "KI-Schulungen Deutschland - Professionelles KI-Training für deutsche Unternehmen | KI2USE",
    description: "🎓 KI-Schulungen speziell für deutsche Teams. 💼 DSGVO-konformes Training für ChatGPT & Automatisierung. 📈 Messbare Produktivitätssteigerung. 🇩🇪 Made in Germany Qualität.",
    keywords: "KI-Schulungen Deutschland, KI-Training deutsche Unternehmen, ChatGPT Schulung DSGVO, AI Workshop Deutschland, KI Fortbildung DACH, Mitarbeiter KI-Training Deutschland, KI-Kompetenz Deutschland, Digital Skills Training DSGVO-konform",
    canonical: "https://ki2use.de/ki-schulungen"
  },
  
  contact: {
    title: "Kontakt Deutschland - Kostenlose KI-Beratung für deutsche Unternehmen | KI2USE",  
    description: "📞 Kostenlose KI-Beratung speziell für deutsche KMU! ✅ DSGVO-konforme Beratung. 🚀 Potentialanalyse deutscher Prozesse. 💡 Made in Germany Automatisierungs-Empfehlungen.",
    keywords: "KI-Beratung kostenlos Deutschland, Kontakt KI2USE Deutschland, KI-Experte DACH, Automatisierung Beratung Deutschland, kostenlose Potentialanalyse DSGVO, KI-Consultant Deutschland, Erstberatung KI-Assistenten DACH, KI-Beratung deutsche Unternehmen",
    canonical: "https://ki2use.de/kontakt"
  }
} as const;