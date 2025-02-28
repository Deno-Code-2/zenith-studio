
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import AgencyShowcase from "@/components/AgencyShowcase";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initial page load animation
    const tl = gsap.timeline();
    
    tl.from(".header-anim", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    
    tl.from(".hero-anim", {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.2,
    }, "-=0.4");
    
    // Scroll animations
    gsap.utils.toArray(".section-anim").forEach((section, i) => {
      gsap.from(section, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: section as Element,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });
    
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GridPattern />
      <div className="header-anim">
        <Header />
      </div>
      <div className="pt-24">
        <div className="hero-anim">
          <Hero />
        </div>
        <div className="section-anim">
          <Features />
        </div>
        <div className="section-anim">
          <Services />
        </div>
        <div className="section-anim">
          <RecentProjects />
        </div>
        <div className="section-anim">
          <AgencyShowcase />
        </div>
        <div className="section-anim">
          <FAQ />
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Index;
