
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
            
            {/* Add About page routes */}
            {/* These will be implemented later */}
            <Route path="/about/ieee" element={<NotFound />} />
            <Route path="/about/ieee-sou-sb" element={<NotFound />} />
            <Route path="/about/ieee-sou-wie-sb-ag" element={<NotFound />} />
            <Route path="/about/ieee-sou-sps-sbc" element={<NotFound />} />
            <Route path="/about/ieee-sou-cs-sbc" element={<NotFound />} />
            <Route path="/about/ieee-sou-sight-sbg" element={<NotFound />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
