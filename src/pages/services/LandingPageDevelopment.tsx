
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";
import { Features } from "@/components/ui/features-4";
import { Target, Zap, BarChart, Users, TestTube, Smartphone } from "lucide-react";

const LandingPageDevelopment = () => {
  const landingPageFeatures = [
    {
      icon: <Target className="size-4" />,
      title: "Conversion Optimized",
      description: "Every element strategically placed to maximize conversions and achieve your campaign goals."
    },
    {
      icon: <Zap className="size-4" />,
      title: "Lightning Fast",
      description: "Ultra-fast loading speeds that keep visitors engaged and improve your ad quality scores."
    },
    {
      icon: <BarChart className="size-4" />,
      title: "A/B Testing Ready",
      description: "Built-in testing capabilities to optimize headlines, CTAs, and layouts for better performance."
    },
    {
      icon: <Users className="size-4" />,
      title: "Lead Capture",
      description: "Optimized forms and lead magnets that capture visitor information and grow your pipeline."
    },
    {
      icon: <TestTube className="size-4" />,
      title: "Campaign Focused",
      description: "Single-purpose design that eliminates distractions and guides visitors to take action."
    },
    {
      icon: <Smartphone className="size-4" />,
      title: "Mobile First",
      description: "Responsive design that converts perfectly on all devices, especially mobile traffic."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Landing Page Development | Zenith Studio</title>
        <meta name="description" content="High-converting landing page development services designed to capture leads and drive conversions." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Landing Page Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              High-converting landing pages that capture leads, drive sales, and maximize your marketing ROI.
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
          title="Landing Pages That Convert"
          description="We create high-performing landing pages with conversion optimization, A/B testing, and lead capture systems that maximize your campaign ROI."
          features={landingPageFeatures}
        />

        {/* Content Section */}
        <div id="learn-more" className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Conversion-optimized design</li>
                    <li>• A/B testing setup</li>
                    <li>• Lead capture forms</li>
                    <li>• Compelling copywriting</li>
                    <li>• Social proof elements</li>
                    <li>• Call-to-action optimization</li>
                    <li>• Analytics integration</li>
                    <li>• Performance tracking</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Mobile-responsive design</li>
                    <li>• Fast loading speeds</li>
                    <li>• SEO optimization</li>
                    <li>• User-friendly interface</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• Integration capabilities</li>
                    <li>• Custom functionality</li>
                    <li>• Ongoing optimization</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our Landing Page Development?</h3>
                <p className="text-gray-600 font-jakarta">
                  We create landing pages that convert. Every element is strategically designed and tested to maximize your 
                  conversion rates and deliver measurable results for your marketing campaigns.
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

export default LandingPageDevelopment;
