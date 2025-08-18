import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import KIAssistentsExplainer from "@/components/KIAssistentsExplainer";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ValuePropositionSection from "@/components/ValuePropositionSection";
import CTASection from "@/components/CTASection";
import { useScrollFade } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollFade();
  return (
    <Layout>
      <HeroSection />
      <KIAssistentsExplainer />
      <ServicesSection />
      <WhyChooseUs />
      <ValuePropositionSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
