import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import AgencyShowcase from "@/components/AgencyShowcase";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import Achievements from "@/components/Achievements";
import Features from "@/components/Features";
import Safari from "@/components/magicui/safari";
import FAQ from "@/components/FAQ";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MarqueeDemo } from "@/components/Reviews";

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

    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="min-h-screen bg-background relative overflow-hidden">
      <GridPattern />
      <Header />
      <Hero />
      
      <section className="py-20 px-4 fade-in-section">
        <div className="container mx-auto max-w-5xl">
          <Safari
            url="zenithstudio.design"
            className="w-full h-[600px]"
          />
        </div>
      </section>

      <Achievements />
      <Features />
      <Services />
      <RecentProjects />
      <MarqueeDemo />
      <AgencyShowcase />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;