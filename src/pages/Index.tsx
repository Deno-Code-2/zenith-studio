import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import GridPattern from "@/components/GridPattern";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-green relative">
      <GridPattern />
      <Header />
      <Hero />
      <Services />
      <RecentProjects />
    </div>
  );
};

export default Index;