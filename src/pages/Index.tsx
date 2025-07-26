import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StandardAgentsPreview from "@/components/StandardAgentsPreview";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <StandardAgentsPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <CTASection />
      <Chatbot />
    </Layout>
  );
};

export default Index;
