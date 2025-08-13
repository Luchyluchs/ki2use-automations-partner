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
    title: "Standard KI-Agenten für sofortige Automatisierung | KI2USE",
    description: "🚀 Sofort einsetzbare KI-Agenten: LinkedIn, E-Mail, Chatbot, Sales & mehr. ✅ Bewährt bei 100+ KMU. ⚡ 40-75% Zeitersparnis garantiert. 📞 Kostenlose Beratung!",
    keywords: "Standard KI-Agenten, sofort einsetzbar, LinkedIn Agent, E-Mail Automatisierung, Chatbot, Sales Agent, bewährte KI-Lösungen, fertige Automatisierung, KI-Agenten kaufen, digitale Mitarbeiter Standard",
    canonical: "https://ki2use.de/standard-agenten"
  },
  
  customAgents: {
    title: "Maßgeschneiderte KI-Agenten & individuelle Automatisierung | KI2USE",
    description: "🎯 Individuelle KI-Agenten exakt für Ihre Prozesse entwickelt. ⚙️ Nahtlose Integration. 🔧 Agile Entwicklung in 4-8 Wochen. 💡 100% passgenau für Ihr KMU.",
    keywords: "maßgeschneiderte KI-Agenten, individuelle Automatisierung, custom AI agents, Prozess-spezifische KI, einzigartige KI-Lösungen, individuelle Entwicklung, maßgeschneiderte Digitalisierung, Custom Process Automation",
    canonical: "https://ki2use.de/massgeschneiderte-agenten"
  },
  
  roiCalculator: {
    title: "KI-Agenten ROI Rechner - Kosteneinsparungen berechnen | KI2USE",
    description: "💰 Berechnen Sie Ihre Kosteneinsparungen durch KI-Agenten! 📊 Realistische ROI-Prognose in 2 Minuten. ✨ Individuell für Ihr Unternehmen. Jetzt kostenlos testen!",
    keywords: "ROI Rechner KI-Agenten, Kosteneinsparungen berechnen, KI ROI Calculator, Automatisierung Kostenersparnis, KI-Agenten Wirtschaftlichkeit, Business Case KI, Amortisation KI-Investition",
    canonical: "https://ki2use.de/agenten-rechner"
  },
  
  training: {
    title: "KI-Schulungen & Training für Unternehmen | KI2USE Deutschland",
    description: "🎓 Professionelle KI-Schulungen für Ihr Team. 💼 Praxisnahes Training für ChatGPT, Automatisierung & Co. 📈 Messbare Produktivitätssteigerung. 🇩🇪 Deutschlandweit.",
    keywords: "KI-Schulungen, KI-Training Unternehmen, ChatGPT Schulung, AI Workshop, Künstliche Intelligenz Fortbildung, Mitarbeiter KI-Training, KI-Kompetenz Aufbau, Digital Skills Training",
    canonical: "https://ki2use.de/ki-schulungen"
  },
  
  contact: {
    title: "Kontakt & Kostenlose KI-Beratung | KI2USE - Ihr KI-Experte",  
    description: "📞 Kostenlose KI-Beratung für deutsche KMU! ✅ Unverbindliches Erstgespräch. 🚀 Potentialanalyse Ihrer Prozesse. 💡 Konkrete Automatisierungs-Empfehlungen.",
    keywords: "KI-Beratung kostenlos, Kontakt KI2USE, KI-Experte Deutschland, Automatisierung Beratung, kostenlose Potentialanalyse, KI-Consultant, Erstberatung KI-Agenten",
    canonical: "https://ki2use.de/kontakt"
  }
} as const;