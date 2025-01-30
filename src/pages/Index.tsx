import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RecentProjects from "@/components/RecentProjects";
import { MarqueeDemo } from "@/components/Reviews";
import GridPattern from "@/components/GridPattern";

const Index = () => {
  return (
    <div className="min-h-screen bg-jet relative">
      <GridPattern />
      <Header />
      <Hero />
      <Services />
      <RecentProjects />
      <section className="py-20 bg-gradient-to-b from-jet to-indigo-dye">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-white font-syne">
              Hear From Our Clients
            </h2>
            <p className="text-platinum font-jakarta max-w-2xl mx-auto">
              Discover what our satisfied clients have to say about their experiences with us.
            </p>
          </div>
          <MarqueeDemo />
        </div>
      </section>
    </div>
  );
};

export default Index;