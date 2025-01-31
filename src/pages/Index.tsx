import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import Testimonials from "@/components/Testimonials";
import GridPattern from "@/components/GridPattern";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      <GridPattern />
      <Header />
      <Hero />
      <Services />
      <RecentProjects />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;