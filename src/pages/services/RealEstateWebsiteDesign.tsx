
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";
import { Features } from "@/components/ui/features-4";
import { Home, Search, MapPin, Camera, Users, Smartphone } from "lucide-react";

const RealEstateWebsiteDesign = () => {
  const realEstateFeatures = [
    {
      icon: <Home className="size-4" />,
      title: "Property Showcase",
      description: "Beautiful property galleries with high-resolution images and virtual tours to captivate buyers."
    },
    {
      icon: <Search className="size-4" />,
      title: "Advanced Search",
      description: "Powerful search filters by location, price, property type, and custom criteria for easy discovery."
    },
    {
      icon: <MapPin className="size-4" />,
      title: "Interactive Maps",
      description: "Google Maps integration with property markers, neighborhood info, and nearby amenities."
    },
    {
      icon: <Camera className="size-4" />,
      title: "Virtual Tours",
      description: "360° virtual tours and video walkthroughs to give buyers an immersive experience."
    },
    {
      icon: <Users className="size-4" />,
      title: "Lead Generation",
      description: "Contact forms, inquiry systems, and CRM integration to capture and manage leads effectively."
    },
    {
      icon: <Smartphone className="size-4" />,
      title: "Mobile Optimized",
      description: "Fully responsive design that works perfectly on all devices for on-the-go property hunting."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Real Estate Website Design | Zenith Studio</title>
        <meta name="description" content="Professional real estate website design services to showcase properties and attract potential buyers." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Real Estate Website Design
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              Create stunning real estate websites that showcase properties beautifully and convert visitors into clients.
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
        <Features 
          title="Real Estate Website Features That Convert"
          description="We create real estate websites with powerful property search, stunning galleries, and lead generation tools that help you close more deals."
          features={realEstateFeatures}
        />

        {/* Content Section */}
        <div id="learn-more" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
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
