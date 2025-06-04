
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";
import { Features } from "@/components/ui/features-4";

const CustomWebDevelopment = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Custom Web Development | Zenith Studio</title>
        <meta name="description" content="Professional custom web development services tailored to your unique business needs and requirements." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 font-syne">
              Custom Web Development
            </h1>
            <p className="text-xl text-gray-600 mb-8 font-jakarta max-w-2xl mx-auto">
              Tailored web solutions built from scratch to meet your unique business requirements and drive growth.
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
                    <li>• Custom functionality development</li>
                    <li>• Database design and integration</li>
                    <li>• API development and integration</li>
                    <li>• Third-party service integration</li>
                    <li>• Performance optimization</li>
                    <li>• Security implementation</li>
                    <li>• Scalable architecture</li>
                    <li>• Ongoing maintenance and support</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Modern technology stack</li>
                    <li>• Responsive design</li>
                    <li>• Cross-browser compatibility</li>
                    <li>• SEO-friendly structure</li>
                    <li>• Fast loading speeds</li>
                    <li>• User-friendly interfaces</li>
                    <li>• Mobile optimization</li>
                    <li>• Analytics integration</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our Custom Development?</h3>
                <p className="text-gray-600 font-jakarta">
                  We build custom web solutions that perfectly fit your business needs. From complex web applications to 
                  simple websites, we use cutting-edge technologies to deliver scalable, secure, and high-performing solutions.
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

export default CustomWebDevelopment;
