import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import ProcessSection from "@/components/about/ProcessSection";
import CoreValues from "@/components/about/CoreValues";
//import TeamSection from "@/components/about/TeamSection";
import Statistics from "@/components/about/Statistics";
import AboutCTA from "@/components/about/AboutCTA";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import { motion } from "framer-motion";
import GlobalPresence from "@/components/GlobalPresence";
import Bookacall from "@/components/Book-a-call";
import Header from "@/components/Header";
import AboutHero from "@/components/about/AboutHero";

// Declare the dataLayer property on the window object
declare global {
  interface Window {
    dataLayer: any[];
  }
}

gsap.registerPlugin(ScrollTrigger);
 
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-4771BVNJVP');
  }, []);
 
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>About Us | Zenith Studio - Digital Innovation Agency</title>
        <meta name="description" content="Learn about Zenith Studio's mission, values, and team. We're passionate about creating exceptional digital experiences and driving business growth through innovative solutions." />
        <link rel="canonical" href="https://www.zenith-studio.dev/about" />
      </Helmet>
      <Header />
      <div className="pt-16">
        <AboutHero />
        <Toaster />

        <section className="pt-28 pb-10">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-10"
            >
              <span className="text-custom-orange font-medium mb-2 block">About Us</span>
              <h1 className="text-4xl md:text-5xl font-bold font-syne mb-4">
                The Story Behind <span className="text-custom-orange">Our Success</span>
              </h1>
              <p className="text-gray-700">
                Get to know the team and values that drive our passion for creating outstanding digital experiences that help businesses grow.
              </p>
            </motion.div>
          </div>
        </section>

        <OurStory />
        <MissionVision />
        <ProcessSection />
        <CoreValues />
        <Statistics />
        <AboutCTA />
        <GlobalPresence />
        <Bookacall/>
      </div>
      
      <Footer />
    </div>
  );
};
 
export default About;
