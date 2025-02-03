import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import AgencyShowcase from "@/components/AgencyShowcase";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import Achievements from "@/components/Achievements";
import Features from "@/components/Features";
import Safari from "@/components/magicui/safari";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // GSAP animations for sections
    const sections = document.querySelectorAll('.fade-in-section');
    
    sections.forEach((section) => {
      gsap.from(section, {
        scrollTrigger: {
          trigger: section,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className={`min-h-screen bg-black relative overflow-hidden ${isLoading ? 'hidden' : ''}`}>
        <GridPattern />
        <Header />
        <Hero />
        
        {/* Safari Demo Section */}
        <section className="py-20 px-4 fade-in-section">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-syne">
                Experience Our <span className="text-custom-orange">Platform</span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto font-jakarta">
                Discover how our powerful platform can transform your digital presence
              </p>
            </div>
            <Safari url="zenithstudio.com" className="w-full shadow-2xl" />
          </div>
        </section>

        <Achievements />
        <Features />
        <Services />
        <RecentProjects />
        <Testimonials />
        <AgencyShowcase />
        <Footer />
      </main>
    </>
  );
};

export default Index;