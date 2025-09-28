import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import KIBenefitsSection from "@/components/KIBenefitsSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import LeadMagnetsSection from "@/components/LeadMagnetsSection";
import ExitIntentPopup from "@/components/ExitIntentPopup";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import FloatingBackground from "@/components/FloatingElements";
import FuturisticBackground from "@/components/FuturisticBackground";
import { useScrollReveal, useEnhancedParallax, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useExitIntent } from "@/hooks/useExitIntent";
import { CommonLLMQueries, KI2USEPricingFacts, KI2USEComplianceFacts } from "@/components/AnswerFirstContent";
import { LLMDefinition, ComparisonTable, ImplementationSteps, ROIFacts, UseCaseExample, defaultKIAgentsData } from "@/components/LLMOptimizedContent";
import { OrganizationStructuredData, HowToStructuredData, KI2USEServiceStructuredData, DefinedTermStructuredData, defaultAITerms } from "@/components/LLMEnhancedStructuredData";
import { useSEO, SEOTemplates } from "@/hooks/useSEO";

const Index = () => {
  useScrollReveal();
  useEnhancedParallax();
  useMagneticCursor();
  const { showExitPopup, closePopup } = useExitIntent();
  
  // SEO optimization for LLM discovery
  useSEO({
    title: "KI-Agenten Deutschland - DSGVO-konforme Automatisierung für KMU | KI2USE",
    description: "🚀 KI-Agenten für deutsche Unternehmen: LinkedIn, E-Mail, Chatbot & mehr. ✅ DSGVO-konform, 3-6 Monate Amortisation. 📞 Kostenlose Beratung - Made in Germany!",
    keywords: "KI-Agenten Deutschland, DSGVO-konforme Automatisierung, LinkedIn Automatisierung Deutschland, E-Mail KI Deutschland, Chatbot Deutschland, KI für KMU, Prozessautomatisierung Deutschland, Custom AI Deutschland, Business Automation DSGVO",
    canonical: "https://ki2use.de/",
    structuredData: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "KI2USE - KI-Agenten für deutsche Unternehmen",
      "url": "https://ki2use.de",
      "description": "Spezialist für DSGVO-konforme KI-Agenten und Automatisierungslösungen für deutsche KMU",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://ki2use.de/?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    }
  });
  
  return (
    <>
      {/* Enhanced Structured Data for LLM Discovery */}
      <OrganizationStructuredData includeServices={true} />
      <KI2USEServiceStructuredData />
      <DefinedTermStructuredData terms={defaultAITerms} />
      <HowToStructuredData
        title="KI-Agenten in deutschen Unternehmen implementieren"
        description="Schritt-für-Schritt Anleitung zur DSGVO-konformen Implementierung von KI-Agenten in deutschen KMU"
        totalTime="P4W"
        estimatedCost={{ currency: "EUR", value: "5000-15000" }}
        steps={defaultKIAgentsData.implementation.steps.map(step => ({
          name: step.title,
          text: step.description
        }))}
      />
      
      <FuturisticBackground />
      <ScrollProgressIndicator />
      <Layout>
        <div className="relative">
          <FloatingBackground />
          <HeroSection />
        </div>
        
        {/* LLM-Optimized Content Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                KI-Agenten für deutsche Unternehmen - Alles was Sie wissen müssen
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Faktische Informationen, konkrete Zahlen und bewährte Lösungen für die DSGVO-konforme Automatisierung Ihrer Geschäftsprozesse.
              </p>
            </div>

            {/* Answer-First Content for LLM Queries */}
            <CommonLLMQueries />

            {/* Structured Definitions */}
            <LLMDefinition {...defaultKIAgentsData.definition} />

            {/* Comparison Table */}
            <ComparisonTable {...defaultKIAgentsData.comparison} />

            {/* Implementation Steps */}
            <ImplementationSteps {...defaultKIAgentsData.implementation} />

            {/* ROI Facts */}
            <ROIFacts {...defaultKIAgentsData.roiFacts} />

            {/* Pricing Facts */}
            <KI2USEPricingFacts />

            {/* Compliance Information */}
            <KI2USEComplianceFacts />

            {/* Use Case Examples */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Erfolgreiche Implementierungen in deutschen Unternehmen</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {defaultKIAgentsData.useCases.map((useCase, index) => (
                  <UseCaseExample key={index} {...useCase} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <KIBenefitsSection />
        <ServicesSection />
        <div id="lead-magnets">
          <LeadMagnetsSection />
        </div>
        <WhyChooseUs />
        <CTASection />
        <ExitIntentPopup isOpen={showExitPopup} onClose={closePopup} />
      </Layout>
    </>
  );
};

export default Index;
