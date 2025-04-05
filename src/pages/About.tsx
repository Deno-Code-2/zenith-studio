
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ProcessSection from "@/components/about/ProcessSection";
import CoreValues from "@/components/about/CoreValues";
import TeamSection from "@/components/about/TeamSection";
import Statistics from "@/components/about/Statistics";
import AboutCTA from "@/components/about/AboutCTA";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Toaster />
      
      <AboutHero />
      <OurStory />
      <MissionVision />
      <ProcessSection />
      <CoreValues />
      <TeamSection />
      <Statistics />
      <AboutCTA />
      
      <Footer />
    </div>
  );
};

export default About;
