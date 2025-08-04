import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import { useScrollFade } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollFade();
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
