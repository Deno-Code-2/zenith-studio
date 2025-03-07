
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

const IndexPage = lazy(() => import("@/pages/Index"));
const AboutPage = lazy(() => import("@/pages/About"));
const ServicesPage = lazy(() => import("@/pages/Services"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const BlogPage = lazy(() => import("@/pages/Blog"));
const BlogPostPage = lazy(() => import("@/pages/BlogPost"));
const PricingPage = lazy(() => import("@/pages/Pricing"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const PrivacyPage = lazy(() => import("@/pages/Privacy"));
const TermsPage = lazy(() => import("@/pages/Terms"));
const CookiePolicyPage = lazy(() => import("@/pages/CookiePolicy"));
const ServicesDetailsPage = lazy(() => import("@/pages/ServicesDetails"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Suspense fallback={
          <div className="flex items-center justify-center h-screen bg-black">
            <div className="w-12 h-12 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin"></div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:id" element={<ServicesDetailsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
        <Toaster />
      </Router>
    </QueryClientProvider>
  );
}

export default App;
