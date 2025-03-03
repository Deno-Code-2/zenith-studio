
import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";

const IndexPage = lazy(() => import("@/pages/Index"));
const AboutPage = lazy(() => import("@/pages/About"));
const ServicesPage = lazy(() => import("@/pages/Services"));
const ProjectsPage = lazy(() => import("@/pages/Projects"));
const BlogPage = lazy(() => import("@/pages/Blog"));
const PricingPage = lazy(() => import("@/pages/Pricing"));
const ContactPage = lazy(() => import("@/pages/Contact"));
const PrivacyPage = lazy(() => import("@/pages/Privacy"));
const TermsPage = lazy(() => import("@/pages/Terms"));
const CookiePolicyPage = lazy(() => import("@/pages/CookiePolicy"));
const ServicesDetailsPage = lazy(() => import("@/pages/ServicesDetails"));
const NotFoundPage = lazy(() => import("@/pages/NotFound"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div className="flex h-screen w-full items-center justify-center bg-black">
        <div className="text-center">
          <div className="h-16 w-16 animate-spin rounded-full border-t-4 border-custom-orange mx-auto"></div>
          <p className="mt-4 text-white">Loading...</p>
        </div>
      </div>}>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:id" element={<ServicesDetailsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog" element={<BlogPage />} />
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
  );
}

export default App;
