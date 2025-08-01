import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
// import Chatbot from "./components/Chatbot";
import Index from "./pages/Index";
import StandardAgents from "./pages/StandardAgents";
import CustomAgents from "./pages/CustomAgents";
import ROICalculatorPage from "./pages/ROICalculator";
import Training from "./pages/Training";
import Contact from "./pages/Contact";
import HomepageCreation from "./pages/HomepageCreation";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/standard-agenten" element={<StandardAgents />} />
          <Route path="/massgeschneiderte-agenten" element={<CustomAgents />} />
          <Route path="/roi-rechner" element={<ROICalculatorPage />} />
          <Route path="/ki-schulungen" element={<Training />} />
          <Route path="/homepage-erstellung" element={<HomepageCreation />} />
          <Route path="/kontakt" element={<Contact />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Chatbot /> */}
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
