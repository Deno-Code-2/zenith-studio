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

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    gsap.from(".fade-in-section", {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power3.out"
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
            <Safari url="zenithstudio.com" className="w-full" />
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