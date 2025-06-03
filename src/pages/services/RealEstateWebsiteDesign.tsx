
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";

const RealEstateWebsiteDesign = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Real Estate Website Design | Zenith Studio</title>
        <meta name="description" content="Professional real estate website design services to showcase properties and attract potential buyers." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-syne">
              Real Estate Website Design
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-jakarta">
                Create stunning real estate websites that showcase properties beautifully and convert visitors into clients.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Property showcase galleries</li>
                    <li>• Advanced search filters</li>
                    <li>• Interactive property maps</li>
                    <li>• Lead capture forms</li>
                    <li>• Agent profile pages</li>
                    <li>• Virtual tour integration</li>
                    <li>• Mobile-responsive design</li>
                    <li>• SEO optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• MLS integration</li>
                    <li>• Property comparison tools</li>
                    <li>• Mortgage calculators</li>
                    <li>• Contact forms</li>
                    <li>• Property alerts</li>
                    <li>• Social media integration</li>
                    <li>• Analytics and tracking</li>
                    <li>• Fast loading speeds</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our Real Estate Web Design?</h3>
                <p className="text-gray-600 font-jakarta">
                  We understand the real estate market and create websites that not only look professional but also drive results. 
                  Our designs are optimized for lead generation and provide an exceptional user experience across all devices.
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

export default RealEstateWebsiteDesign;
