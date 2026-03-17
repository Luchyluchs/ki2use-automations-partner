
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";
import NewChatbot from "./components/NewChatbot";
import FloatingVoiceAgent from "./components/FloatingVoiceAgent";
import CookieConsentBanner from "./components/CookieConsentBanner";
import SecurityMonitor from "./components/SecurityMonitor";
import MobileBottomNav from "./components/MobileBottomNav";

// Eager load: Homepage (critical path)
import Index from "./pages/Index";

// Lazy load: All other pages
const StandardAgents = lazy(() => import("./pages/StandardAgents"));
const CustomAgents = lazy(() => import("./pages/CustomAgents"));
const ROICalculatorPage = lazy(() => import("./pages/ROICalculator"));
const Training = lazy(() => import("./pages/Training"));
const Contact = lazy(() => import("./pages/Contact"));
const Beratung = lazy(() => import("./pages/Beratung"));
const Foerderung = lazy(() => import("./pages/Foerderung"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));
const AGB = lazy(() => import("./pages/AGB"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DemoPortal = lazy(() => import("./pages/DemoPortal"));
const KIEinfuehrung = lazy(() => import("./pages/KIEinfuehrung"));
const KIFuerUnternehmen = lazy(() => import("./pages/KIFuerUnternehmen"));
const KIBeratungMittelstand = lazy(() => import("./pages/blog/KIBeratungMittelstand"));
const KIFoerderung2025 = lazy(() => import("./pages/blog/KIFoerderung2025"));
const ChatbotUnternehmen = lazy(() => import("./pages/blog/ChatbotUnternehmen"));
const KIAutomatisierungKMU = lazy(() => import("./pages/blog/KIAutomatisierungKMU"));
const KIKostenROI = lazy(() => import("./pages/blog/KIKostenROI"));

const queryClient = new QueryClient();

const PageFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <SecurityMonitor />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<PageFallback />}>
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
            <Route path="/blog/ki-beratung-mittelstand" element={<KIBeratungMittelstand />} />
            <Route path="/blog/ki-foerderung-2025" element={<KIFoerderung2025 />} />
            <Route path="/blog/chatbot-unternehmen" element={<ChatbotUnternehmen />} />
            <Route path="/blog/ki-automatisierung-kmu" element={<KIAutomatisierungKMU />} />
            <Route path="/blog/ki-kosten-roi" element={<KIKostenROI />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <NewChatbot />
        <FloatingVoiceAgent />
        <CookieConsentBanner />
        <MobileBottomNav />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;