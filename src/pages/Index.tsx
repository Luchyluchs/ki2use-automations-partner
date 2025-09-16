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
import { useScrollReveal, useEnhancedParallax, useMagneticCursor } from "@/hooks/useScrollAnimations";
import { useExitIntent } from "@/hooks/useExitIntent";

const Index = () => {
  useScrollReveal();
  useEnhancedParallax();
  useMagneticCursor();
  const { showExitPopup, closePopup } = useExitIntent();
  
  return (
    <>
      <ScrollProgressIndicator />
      <Layout>
        <div className="relative">
          <FloatingBackground />
          <HeroSection />
        </div>
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
