import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import CTASection from "@/components/CTASection";
import VoiceAssistant from "@/components/VoiceAssistant";
import { useScrollFade } from "@/hooks/useScrollAnimations";

const Index = () => {
  useScrollFade();
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUs />
      <CTASection />
      
      {/* Voice Assistant - Fixed Position */}
      <div className="fixed bottom-4 right-4 z-40">
        <VoiceAssistant />
      </div>
    </Layout>
  );
};

export default Index;
