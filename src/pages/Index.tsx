import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import AgencyShowcase from "@/components/AgencyShowcase";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import { Features } from "@/components/Features";
import FAQ from "@/components/FAQ";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpeedInsights } from "@vercel/speed-insights/next";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
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

    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GridPattern />
      <Header />
      <div className="pt-24">
        <Hero />
        <Features />
        <Services />
        <RecentProjects />
        <AgencyShowcase />
        <FAQ />
        <Footer />
      </div>
      <SpeedInsights />
    </main>
  );
};

export default Index;