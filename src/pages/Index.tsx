import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ScrollProgressIndicator from "@/components/ScrollProgressIndicator";
import FloatingBackground from "@/components/FloatingElements";
import FuturisticBackground from "@/components/FuturisticBackground";
import LLMDiscoveryLayer from "@/components/LLMDiscoveryLayer";
import EnhancedStructuredData from "@/components/EnhancedStructuredData";
import LLMMetaTags from "@/components/LLMMetaTags";
import { useScrollReveal, useEnhancedParallax, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useExitIntent } from "@/hooks/useExitIntent";
import { lazy, Suspense } from "react";

// Lazy load heavy sections below the fold
const KIBenefitsSection = lazy(() => import("@/components/KIBenefitsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const WhyChooseUs = lazy(() => import("@/components/WhyChooseUs"));
const CTASection = lazy(() => import("@/components/CTASection"));
const LeadMagnetsSection = lazy(() => import("@/components/LeadMagnetsSection"));
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
      {/* LLM Discovery Optimization Layer - Invisible to users */}
      <LLMMetaTags />
      <EnhancedStructuredData />
      <LLMDiscoveryLayer />
      
      <FuturisticBackground />
      <ScrollProgressIndicator />
      <Layout>
        <div className="relative">
          <FloatingBackground />
          <HeroSection />
        </div>
        <Suspense fallback={<SectionFallback />}>
          <KIBenefitsSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <ServicesSection />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <div id="lead-magnets">
            <LeadMagnetsSection />
          </div>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <WhyChooseUs />
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
