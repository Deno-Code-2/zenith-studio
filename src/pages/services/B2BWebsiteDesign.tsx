
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";

const B2BWebsiteDesign = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>B2B Website Design | Zenith Studio</title>
        <meta name="description" content="Professional B2B website design services that convert prospects into customers and drive business growth." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-syne">
              B2B Website Design
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-jakarta">
                Create powerful B2B websites that establish credibility, generate leads, and drive business growth.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Professional corporate design</li>
                    <li>• Lead generation systems</li>
                    <li>• Product/service showcases</li>
                    <li>• Client testimonials</li>
                    <li>• Case studies sections</li>
                    <li>• Contact and quote forms</li>
                    <li>• Industry-specific solutions</li>
                    <li>• CRM integration</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Professional branding</li>
                    <li>• Trust signals</li>
                    <li>• Clear value propositions</li>
                    <li>• Resource downloads</li>
                    <li>• Newsletter signup</li>
                    <li>• Social proof</li>
                    <li>• Security features</li>
                    <li>• Analytics integration</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our B2B Web Design?</h3>
                <p className="text-gray-600 font-jakarta">
                  We create B2B websites that speak to decision-makers and drive conversions. Our designs focus on building 
                  trust, showcasing expertise, and generating qualified leads for your business.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <GlobalPresence />
        <NewCTA />
        <NewFooter />
      </div>
    </main>
  );
};

export default B2BWebsiteDesign;
