
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/lib/theme-provider";
import Index from "./pages/Index";
import Events from "./pages/Events";
import Members from "./pages/Members";
import Awards from "./pages/Awards";
import Contact from "./pages/Contact";
import Join from "./pages/Join";
import NotFound from "./pages/NotFound";

// About pages
import IEEE from "./pages/about/IEEE";
import IEEESOUSSB from "./pages/about/IEEESOUSSB";
import IEEEOUSSBWIE from "./pages/about/IEEEOUSSBWIE";
import IEEESOUSPSSBC from "./pages/about/IEEESOUSPSSBC";
import IEEESOUSCSSBC from "./pages/about/IEEESOUSCSSBC";
import IEEESOUSSIGHTSBG from "./pages/about/IEEESOUSSIGHTSBG";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="light">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/events" element={<Events />} />
            <Route path="/members" element={<Members />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/join" element={<Join />} />
            
            {/* About page routes */}
            <Route path="/about/ieee" element={<IEEE />} />
            <Route path="/about/ieee-sou-sb" element={<IEEESOUSSB />} />
            <Route path="/about/ieee-sou-wie-sb-ag" element={<IEEEOUSSBWIE />} />
            <Route path="/about/ieee-sou-sps-sbc" element={<IEEESOUSPSSBC />} />
            <Route path="/about/ieee-sou-cs-sbc" element={<IEEESOUSCSSBC />} />
            <Route path="/about/ieee-sou-sight-sbg" element={<IEEESOUSSIGHTSBG />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
