import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GridPattern from "@/components/GridPattern";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative">
      <GridPattern />
      <Header />
      <Hero />
    </div>
  );
};

export default Index;