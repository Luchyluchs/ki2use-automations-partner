
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import NewChatbot from "./components/NewChatbot";
import FloatingVoiceAgent from "./components/FloatingVoiceAgent";
import CookieConsentBanner from "./components/CookieConsentBanner";
import Index from "./pages/Index";
import StandardAgents from "./pages/StandardAgents";
import CustomAgents from "./pages/CustomAgents";
import ROICalculatorPage from "./pages/ROICalculator";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import HomepageCreation from "./pages/HomepageCreation";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  console.log('App.tsx is running!');
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        
        {/* DIREKTE TEST KOMPONENTE IN APP.TSX */}
        <div
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '10px',
            width: '120px',
            height: '120px',
            backgroundColor: '#00ff00',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px',
            fontWeight: 'bold',
            color: 'black',
            border: '5px solid #ff0000',
            borderRadius: '15px',
            cursor: 'pointer',
            boxShadow: '0 0 100px #00ff00'
          }}
          onClick={() => {
            console.log('DIRECT TEST BUTTON CLICKED!');
            alert('DIRECT TEST BUTTON WORKS!');
          }}
        >
          DIRECT TEST
        </div>
        
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/standard-agenten" element={<StandardAgents />} />
            <Route path="/massgeschneiderte-agenten" element={<CustomAgents />} />
            <Route path="/agenten-rechner" element={<ROICalculatorPage />} />
            <Route path="/roi-rechner" element={<ROICalculatorPage />} />
            <Route path="/ki-schulungen" element={<Training />} />
            <Route path="/homepage-erstellung" element={<HomepageCreation />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <NewChatbot />
          <FloatingVoiceAgent />
          <CookieConsentBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
