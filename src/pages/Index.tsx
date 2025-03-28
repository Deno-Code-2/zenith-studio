
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import AgencyShowcase from "@/components/AgencyShowcase";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";
import WallOfLoveSection from "@/components/Testimonials";

const Index = () => {
  return (
    <main className="min-h-screen bg-white relative overflow-hidden">
      <GridPattern />
      <Header />
      <div className="pt-24">
        <Hero />
        <TechStack />
        <Features />
        <Services />
        <RecentProjects />
        <AgencyShowcase />
        <WallOfLoveSection/>
        <FAQ />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
