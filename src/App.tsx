
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NewChatbot from "./components/NewChatbot";
import FloatingVoiceAgent from "./components/FloatingVoiceAgent";
import CookieConsentBanner from "./components/CookieConsentBanner";
import SecurityMonitor from "./components/SecurityMonitor";
import MobileBottomNav from "./components/MobileBottomNav";
import Index from "./pages/Index";
import StandardAgents from "./pages/StandardAgents";
import CustomAgents from "./pages/CustomAgents";
import ROICalculatorPage from "./pages/ROICalculator";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import Beratung from "./pages/Beratung";
import Foerderung from "./pages/Foerderung";

import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";
import DemoPortal from "./pages/DemoPortal";
import KIEinfuehrung from "./pages/KIEinfuehrung";
import KIFuerUnternehmen from "./pages/KIFuerUnternehmen";
import KIBeratungMittelstand from "./pages/blog/KIBeratungMittelstand";
import KIFoerderung2025 from "./pages/blog/KIFoerderung2025";
import ChatbotUnternehmen from "./pages/blog/ChatbotUnternehmen";
import KIAutomatisierungKMU from "./pages/blog/KIAutomatisierungKMU";
import KIKostenROI from "./pages/blog/KIKostenROI";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SecurityMonitor />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ki-einfuehrung" element={<KIEinfuehrung />} />
          <Route path="/ki-fuer-unternehmen" element={<KIFuerUnternehmen />} />
          <Route path="/standard-agenten" element={<StandardAgents />} />
          <Route path="/massgeschneiderte-agenten" element={<CustomAgents />} />
          <Route path="/agenten-rechner" element={<ROICalculatorPage />} />
          <Route path="/roi-rechner" element={<ROICalculatorPage />} />
          <Route path="/ki-schulungen" element={<Training />} />
          
          <Route path="/beratung" element={<Beratung />} />
          <Route path="/foerderung" element={<Foerderung />} />
          <Route path="/förderung" element={<Navigate to="/foerderung" replace />} />
          <Route path="/foerderungen" element={<Navigate to="/foerderung" replace />} />
          <Route path="/förderungen" element={<Navigate to="/foerderung" replace />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
          <Route path="/demoportal" element={<DemoPortal />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <NewChatbot />
        <FloatingVoiceAgent />
        <CookieConsentBanner />
        <MobileBottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
