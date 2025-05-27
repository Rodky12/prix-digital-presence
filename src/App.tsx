
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ClientArea from "./pages/ClientArea";
import NotFound from "./pages/NotFound";
import MagazinePelicano from "./pages/MagazinePelicano";
import SaoFelipeComercial from "./pages/SaoFelipeComercial";
import MultiploFIDC from "./pages/MultiploFIDC";
import PrivacyPolicy from "./pages/PrivacyPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cliente" element={<ClientArea />} />
          <Route path="/magazine-pelicano" element={<MagazinePelicano />} />
          <Route path="/sao-felipe-comercial" element={<SaoFelipeComercial />} />
          <Route path="/multiplo-fidc" element={<MultiploFIDC />} />
          <Route path="/politica-privacidade" element={<PrivacyPolicy />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
