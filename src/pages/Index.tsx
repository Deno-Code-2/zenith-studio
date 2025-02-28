
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import AgencyShowcase from "@/components/AgencyShowcase";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import FAQ from "@/components/FAQ";

const Index = () => {
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
    </main>
  );
};

export default Index;
