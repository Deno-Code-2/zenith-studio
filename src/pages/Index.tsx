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
import Features from "@/components/Features";
import { SafariWindow } from "@/components/magicui/safari-window";
import { NumberTicker } from "@/components/magicui/number-ticker";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <main className={`min-h-screen bg-black relative overflow-hidden ${isLoading ? 'hidden' : ''}`}>
        <GridPattern />
        <Header />
        <Hero />
        
        {/* Safari Window Demo */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <SafariWindow>
              <div className="p-8">
                <h2 className="text-4xl font-bold text-white mb-6 font-syne">
                  Transforming Digital <span className="text-custom-orange">Experiences</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <NumberTicker 
                      value={250} 
                      className="text-4xl font-bold text-custom-orange"
                    />
                    <p className="text-white mt-2">Projects Completed</p>
                  </div>
                  <div className="text-center">
                    <NumberTicker 
                      value={180} 
                      className="text-4xl font-bold text-custom-orange"
                    />
                    <p className="text-white mt-2">Happy Clients</p>
                  </div>
                  <div className="text-center">
                    <NumberTicker 
                      value={98} 
                      className="text-4xl font-bold text-custom-orange"
                    />
                    <p className="text-white mt-2">Success Rate</p>
                  </div>
                </div>
              </div>
            </SafariWindow>
          </div>
        </section>

        <Achievements />
        <Features />
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