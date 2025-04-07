import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SmoothScroll from "@/components/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import PreloaderScreen from "@/components/PreloaderScreen";

// Create a client
const queryClient = new QueryClient();

// Import the Index page directly to avoid dynamic import issues
import IndexPage from "@/pages/Index";

// Lazy load other pages
const AboutPage = lazy(() => import("@/pages/About"));
const ServicesPage = lazy(() => import("@/pages/Services"));
const ServiceDetailsPage = lazy(() => import("@/pages/ServiceDetails"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const BlogPage = lazy(() => import("@/pages/Blog"));
const BlogPostPage = lazy(() => import("@/pages/BlogPost"));
const PricingPage = lazy(() => import("@/pages/Pricing"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const TermsPage = lazy(() => import("@/pages/Terms"));
const PrivacyPage = lazy(() => import("@/pages/Privacy"));
const CookiePolicyPage = lazy(() => import("@/pages/CookiePolicy"));
const ServicesDetailsPage = lazy(() => import("@/pages/ServicesDetails"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

function App() {
  // Only show preloader on the first visit to the homepage
  const [loading, setLoading] = useState(window.location.pathname === '/' && sessionStorage.getItem('initialLoadComplete') !== 'true');

  // Force light mode on the document element
  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    
    // Add a class to the body to ensure light mode styles apply everywhere
    document.body.className = "bg-white text-black";
    
    // Mark that initial load is complete
    if (loading && window.location.pathname === '/') {
      sessionStorage.setItem('initialLoadComplete', 'true');
    }
  }, [loading]);

  return (
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <AnimatePresence mode="wait">
            {loading && <PreloaderScreen onComplete={() => setLoading(false)} />}
          </AnimatePresence>
          
          {/* Only render the app content when loading is complete */}
          {!loading && (
            <Router>
              <SmoothScroll />
              <Suspense fallback={
                <div className="flex items-center justify-center h-screen bg-white">
                  <div className="w-12 h-12 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin"></div>
                </div>
              }>
                <AnimatePresence mode="wait">
                  <Routes>
                    <Route path="/" element={<IndexPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/services" element={<ServicesPage />} />
                    <Route path="/services/:id" element={<ServicesDetailsPage />} />
                    <Route path="/services/strategic-business-solutions" element={<ServiceDetailsPage />} />
                    <Route path="/services/precision-marketing-branding" element={<ServiceDetailsPage />} />
                    <Route path="/services/web-design" element={<ServiceDetailsPage />} />
                    <Route path="/services/mobile-app-development" element={<ServiceDetailsPage />} />
                    <Route path="/services/seo-optimization" element={<ServiceDetailsPage />} />
                    <Route path="/services/digital-transformation" element={<ServiceDetailsPage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    {/* Keep pricing route but remove from navigation */}
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/blog" element={<BlogPage />} />
                    <Route path="/blog/:id" element={<BlogPostPage />} />
                    <Route path="/terms" element={<TermsPage />} />
                    <Route path="/privacy" element={<PrivacyPage />} />
                    <Route path="/cookie-policy" element={<CookiePolicyPage />} />
                    <Route path="/404" element={<NotFoundPage />} />
                    <Route path="*" element={<Navigate to="/404" replace />} />
                  </Routes>
                </AnimatePresence>
              </Suspense>
              <Toaster />
            </Router>
          )}
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
