import { useState } from "react";
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

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className={`min-h-screen bg-black relative overflow-hidden ${isLoading ? 'hidden' : ''}`}>
        <GridPattern />
        <Header />
        <Hero />
        <Achievements />
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