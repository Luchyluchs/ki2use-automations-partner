import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ROICatcherSection from "@/components/ROICatcherSection";
import ServicesSection from "@/components/ServicesSection";
import StandardAgentsPreview from "@/components/StandardAgentsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ROICatcherSection />
      <ServicesSection />
      <StandardAgentsPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
