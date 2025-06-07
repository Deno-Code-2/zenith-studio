
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SmoothScroll from "@/components/SmoothScroll";
import { AnimatePresence } from "framer-motion";

// Create a client
const queryClient = new QueryClient();

// Import the Index page directly to avoid dynamic import issues
import IndexPage from "@/pages/Index";

// Lazy load other pages
const AboutPage = lazy(() => import("@/pages/About"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const PricingPage = lazy(() => import("@/pages/Pricing")); 
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

// Lazy load legal pages
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("@/pages/TermsAndConditions"));
const RefundPolicy = lazy(() => import("@/pages/RefundPolicy"));

// Lazy load service pages
const RealEstateWebsiteDesign = lazy(() => import("@/pages/services/RealEstateWebsiteDesign"));
const B2BWebsiteDesign = lazy(() => import("@/pages/services/B2BWebsiteDesign"));
const SaaSAppDevelopment = lazy(() => import("@/pages/services/SaaSAppDevelopment"));
const AIAppDevelopment = lazy(() => import("@/pages/services/AIAppDevelopment"));
const MedicalWebsiteDesign = lazy(() => import("@/pages/services/MedicalWebsiteDesign"));
const RestaurantWebsiteDesign = lazy(() => import("@/pages/services/RestaurantWebsiteDesign"));
const MarketingWebsiteDesign = lazy(() => import("@/pages/services/MarketingWebsiteDesign"));
const CustomWebDevelopment = lazy(() => import("@/pages/services/CustomWebDevelopment"));
const LandingPageDevelopment = lazy(() => import("@/pages/services/LandingPageDevelopment"));

// Microsoft Clarity initialization
const initClarity = () => {
  // @ts-ignore
  window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments) };
  // @ts-ignore
  window.clarity("consent");
  // @ts-ignore
  window.clarity("identify", "anonymous");
};

// Separate component to handle the app logic
const AppContent = () => {
  const location = useLocation();

  useEffect(() => {
    // Force light mode on the document element
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    
    // Add a class to the body to ensure light mode styles apply everywhere
    document.body.className = "bg-white text-black";
    
    // Initialize Microsoft Clarity
    initClarity();
  }, [location]);

  return (
    <>
      <SmoothScroll />
      <Suspense fallback={
        <div className="flex items-center justify-center h-screen bg-background">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
        </div>
      }>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/refund" element={<RefundPolicy />} />
            
            {/* Service Pages */}
            <Route path="/services/real-estate-website-design" element={<RealEstateWebsiteDesign />} />
            <Route path="/services/b2b-website-design" element={<B2BWebsiteDesign />} />
            <Route path="/services/saas-app-development" element={<SaaSAppDevelopment />} />
            <Route path="/services/ai-app-development" element={<AIAppDevelopment />} />
            <Route path="/services/medical-website-design" element={<MedicalWebsiteDesign />} />
            <Route path="/services/restaurant-website-design" element={<RestaurantWebsiteDesign />} />
            <Route path="/services/marketing-website-design" element={<MarketingWebsiteDesign />} />
            <Route path="/services/custom-web-development" element={<CustomWebDevelopment />} />
            <Route path="/services/landing-page-development" element={<LandingPageDevelopment />} />
            
            <Route path="/404" element={<NotFoundPage />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AppContent />
            <Toaster />
          </Router>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
