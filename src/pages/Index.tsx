import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import KIAgentsExplainer from "@/components/KIAgentsExplainer";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import { useScrollFade } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollFade();
  return (
    <Layout>
      <HeroSection />
      <KIAgentsExplainer />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
    </Layout>
  );
};

export default Index;
