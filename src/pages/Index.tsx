import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import FloatingBackground from "@/components/FloatingElements";
import LLMDiscoveryLayer from "@/components/LLMDiscoveryLayer";
import EnhancedStructuredData from "@/components/EnhancedStructuredData";
import LLMMetaTags from "@/components/LLMMetaTags";
import { useScrollReveal, useEnhancedParallax, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useExitIntent } from "@/hooks/useExitIntent";
import { lazy, Suspense } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const KIBenefitsSection = lazy(() => import("@/components/KIBenefitsSection"));
const LeadMagnetsSection = lazy(() => import("@/components/LeadMagnetsSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
const CTASection = lazy(() => import("@/components/CTASection"));
const ExitIntentPopup = lazy(() => import("@/components/ExitIntentPopup"));

const SectionFallback = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const Index = () => {
  useScrollReveal();
  useEnhancedParallax();
  useMagneticCursor();
  const { showExitPopup, closePopup } = useExitIntent();
  
  return (
    <>
      <LLMMetaTags />
      <EnhancedStructuredData />
      <LLMDiscoveryLayer />
      
      <ScrollProgressIndicator />
      <ScrollProgressIndicator />
      <Layout>
        <div className="relative">
          <FloatingBackground />
          <HeroSection />
        </div>
        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <KIBenefitsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div id="lead-magnets">
            <LeadMagnetsSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <FAQSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <CTASection />
        </Suspense>
        <Suspense fallback={null}>
          <ExitIntentPopup isOpen={showExitPopup} onClose={closePopup} />
        </Suspense>
      </Layout>
    </>
  );
};

export default Index;
