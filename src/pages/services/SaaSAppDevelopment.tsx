
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";

const SaaSAppDevelopment = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>SaaS App Development | Zenith Studio</title>
        <meta name="description" content="Professional SaaS application development services to build scalable software solutions for your business." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-syne">
              SaaS App Development
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-jakarta">
                Build powerful SaaS applications that scale with your business and provide exceptional user experiences.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Custom SaaS development</li>
                    <li>• User authentication systems</li>
                    <li>• Subscription management</li>
                    <li>• Multi-tenant architecture</li>
                    <li>• API development</li>
                    <li>• Database design</li>
                    <li>• Cloud deployment</li>
                    <li>• Performance optimization</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Scalable infrastructure</li>
                    <li>• Real-time features</li>
                    <li>• Security implementation</li>
                    <li>• Payment integration</li>
                    <li>• Analytics dashboard</li>
                    <li>• User management</li>
                    <li>• Data backup systems</li>
                    <li>• Mobile responsiveness</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our SaaS Development?</h3>
                <p className="text-gray-600 font-jakarta">
                  We build SaaS applications using modern technologies and best practices. Our solutions are designed to scale, 
                  secure, and provide excellent user experiences that drive customer retention and growth.
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

export default SaaSAppDevelopment;
