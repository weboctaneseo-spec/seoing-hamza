import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import Index from "./pages/Index";
import About from "./pages/About";
import TaxCalculator from "./pages/TaxCalculator";
import NTNVerification from "./pages/NTNVerification";
import Contact from "./pages/Contact";
import ServicePage from "./pages/ServicePage";
import CityPage from "./pages/CityPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import RefundPolicy from "./pages/RefundPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const PageTransitionWrapper = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(true);
  const [displayLocation, setDisplayLocation] = useState(location);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsVisible(false);
      
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setDisplayLocation(location);
        setIsVisible(true);
      }, 350);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <div
      className={`transition-opacity duration-[350ms] ease-in-out ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
};

const LoadingSpinner = () => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
    <div className="flex flex-col items-center gap-4">
      <div className="relative">
        <div className="h-12 w-12 rounded-full border-4 border-primary/20"></div>
        <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-4 border-transparent border-t-primary animate-spin"></div>
      </div>
      <p className="text-sm text-muted-foreground animate-pulse">Loading...</p>
    </div>
  </div>
);

const AppRoutes = () => {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    if (location.pathname !== displayLocation.pathname) {
      setIsTransitioning(true);
      setShowSpinner(true);
      
      const timeout = setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
        setDisplayLocation(location);
        setIsTransitioning(false);
        setTimeout(() => setShowSpinner(false), 100);
      }, 350);

      return () => clearTimeout(timeout);
    }
  }, [location, displayLocation]);

  return (
    <>
      {showSpinner && <LoadingSpinner />}
      <div
        className={`transition-opacity duration-[350ms] ease-in-out ${
          isTransitioning ? "opacity-0" : "opacity-100"
        }`}
      >
        <Routes location={displayLocation}>
          <Route path="/" element={<Index />} />
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/ntn-verification" element={<NTNVerification />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/:service" element={<ServicePage />} />
          <Route path="/cities/:city" element={<CityPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
