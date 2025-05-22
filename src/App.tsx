
import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { HelmetProvider } from "react-helmet-async";
import SmoothScroll from "@/components/SmoothScroll";
import { AnimatePresence } from "framer-motion";
import PreloaderScreen from "@/components/PreloaderScreen";
import ZenithChatbot from "@/components/ZenithChatbot";

// Create a client
const queryClient = new QueryClient();

// Import the Index page directly to avoid dynamic import issues
import IndexPage from "@/pages/Index";

// Lazy load other pages
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const PricingPage = lazy(() => import("@/pages/Pricing")); 
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

// Microsoft Clarity initialization
const initClarity = () => {
  // @ts-ignore
  window.clarity = window.clarity || function () { (window.clarity.q = window.clarity.q || []).push(arguments) };
  // @ts-ignore
  window.clarity("consent");
  // @ts-ignore
  window.clarity("identify", "anonymous");
};

// Separate component to handle the preloader logic
const AppWithPreloader = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [loading, setLoading] = useState(isHomePage && sessionStorage.getItem('initialLoadComplete') !== 'true');

  // Mark initial load as complete when preloader finishes
  useEffect(() => {
    if (loading && isHomePage) {
      // Don't set this immediately, let the preloader finish first
      return;
    }
    
    // Force light mode on the document element
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");
    
    // Add a class to the body to ensure light mode styles apply everywhere
    document.body.className = "bg-white text-black";
    
    // Initialize Microsoft Clarity
    initClarity();
  }, [loading, isHomePage]);

  const handlePreloaderComplete = () => {
    setLoading(false);
    sessionStorage.setItem('initialLoadComplete', 'true');
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <PreloaderScreen onComplete={handlePreloaderComplete} />}
      </AnimatePresence>
      
      {/* Only render the app content when loading is complete or not on homepage */}
      {(!loading || !isHomePage) && (
        <>
          <SmoothScroll />
          <Suspense fallback={
            <div className="flex items-center justify-center h-screen bg-white">
              <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin"></div>
            </div>
          }>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/404" element={<NotFoundPage />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            </AnimatePresence>
          </Suspense>
          
          {/* Chatbot visible on all pages */}
          <ZenithChatbot />
        </>
      )}
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Router>
            <AppWithPreloader />
            <Toaster />
          </Router>
        </QueryClientProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
