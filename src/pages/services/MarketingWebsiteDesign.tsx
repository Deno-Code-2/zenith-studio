
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";
import { Features } from "@/components/ui/features-4";

const MarketingWebsiteDesign = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Marketing Website Design | Zenith Studio</title>
        <meta name="description" content="Professional marketing website design services that convert visitors into customers and drive business growth." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Marketing Website Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              High-converting marketing websites designed to capture leads, engage visitors, and drive your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cal.com/zenithstudio/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors font-jakarta"
              >
                Get Started Today
              </a>
              <a
                href="#learn-more"
                className="border border-gray-300 text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors font-jakarta"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <Features />

        {/* Content Section */}
        <div id="learn-more" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Conversion-optimized landing pages</li>
                    <li>• Lead capture forms</li>
                    <li>• A/B testing setup</li>
                    <li>• Analytics integration</li>
                    <li>• Email marketing integration</li>
                    <li>• Social proof elements</li>
                    <li>• Call-to-action optimization</li>
                    <li>• Performance tracking</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Mobile-first design</li>
                    <li>• Fast loading speeds</li>
                    <li>• SEO optimization</li>
                    <li>• User experience focus</li>
                    <li>• Conversion tracking</li>
                    <li>• Social media integration</li>
                    <li>• Content management</li>
                    <li>• Multi-platform compatibility</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our Marketing Web Design?</h3>
                <p className="text-gray-600 font-jakarta">
                  We create marketing websites that are strategically designed to convert. Every element is crafted with your 
                  business goals in mind, from compelling copy to optimized user flows that turn visitors into customers.
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

export default MarketingWebsiteDesign;
