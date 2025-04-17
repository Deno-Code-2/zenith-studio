import { useEffect, useRef } from "react";
import {
  Sparkles,
  Zap,
  Rocket,
  Code,
  Layout,
  ShoppingCart,
  Database,
  Server,
  BarChart2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import DisplayCards from "@/components/ui/display-cards";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProcessSection from "@/components/about/ProcessSection";
import ServiceCTA from "@/components/services/ServiceCTA";
import { FeaturesSectionWithBentoGrid } from "@/components/feature-section-with-bento-grid";
import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

export default function FullServicesPage() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const section = sectionRef.current;
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);


  return (
    <>
      <Header />
      <section ref={sectionRef} className="section-animate relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center rounded-full bg-custom-orange/10 px-3 py-1 text-sm font-medium text-custom-orange">
              <Sparkles className="mr-1 h-4 w-4" />
              <span>Welcome to Zenith Studio</span>
            </div>
          </div>

          <h1 className="animate-fade-in-up mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">India's #1 Startup Agency</span>
            <span className="block text-custom-orange">We Build, You Scale</span>
          </h1>

          <p className="animate-fade-in-up animate-delay-100 mx-auto mb-8 max-w-2xl text-lg text-gray-600 sm:text-xl">
            An <span className="text-custom-orange">AI-powered</span> startup studio that helps founders launch MVPs in record time — with beautiful design, automation, and long-term support.
          </p>

          <div className="animate-fade-in-up animate-delay-200 flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90 text-white rounded-full px-8">
              Book a Free Strategy Call
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-custom-orange text-custom-orange hover:bg-custom-orange/10 px-8">
              Explore Services
            </Button>
          </div>

          <div className="animate-fade-in-up animate-delay-300 mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Zap className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">Fast Delivery</h3>
              <p className="text-sm text-gray-500">Under 5 Weeks</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Sparkles className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">AI-Powered</h3>
              <p className="text-sm text-gray-500">Efficient & Smart</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Rocket className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">Built for Growth</h3>
              <p className="text-sm text-gray-500">Ready to Scale</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="mb-3 rounded-full bg-custom-orange/10 p-3">
                <Layout className="h-6 w-6 text-custom-orange" />
              </div>
              <h3 className="font-medium">Custom Designs</h3>
              <p className="text-sm text-gray-500">Tailored to You</p>
            </div>
          </div>
        </div>
      </section>

      <section ref={sectionRef} id="services" className="section-animate bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From <span className="text-custom-orange">SaaS</span> to <span className="text-custom-orange">e-commerce</span> to <span className="text-custom-orange">AI</span>, we deliver results. All projects come with <strong className="text-custom-orange">3-4 months free maintenance</strong> for early clients.
            </p>
          </div>
          </div>
          

      </section>
      <ProcessSection />
        <ServiceCTA />
      <Footer />
    </>
  );
}