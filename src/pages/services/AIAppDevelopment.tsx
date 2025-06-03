
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";
import GlobalPresence from "@/components/GlobalPresence";
import NewCTA from "@/components/NewCTA";

const AIAppDevelopment = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>AI App Development | Zenith Studio</title>
        <meta name="description" content="Professional AI application development services to build intelligent solutions for your business." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 font-syne">
              AI App Development
            </h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-600 mb-8 font-jakarta">
                Build cutting-edge AI applications that automate processes and provide intelligent solutions for your business.
              </p>
              
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">What We Offer</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Custom AI solutions</li>
                    <li>• Machine learning models</li>
                    <li>• Natural language processing</li>
                    <li>• Computer vision systems</li>
                    <li>• Chatbot development</li>
                    <li>• Predictive analytics</li>
                    <li>• AI API integration</li>
                    <li>• Data processing pipelines</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4 font-syne">Key Features</h3>
                  <ul className="space-y-3 font-jakarta">
                    <li>• Intelligent automation</li>
                    <li>• Real-time processing</li>
                    <li>• Scalable AI models</li>
                    <li>• Custom algorithms</li>
                    <li>• Data visualization</li>
                    <li>• Performance monitoring</li>
                    <li>• Cloud deployment</li>
                    <li>• Security compliance</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-4 font-syne">Why Choose Our AI Development?</h3>
                <p className="text-gray-600 font-jakarta">
                  We leverage the latest AI technologies to build intelligent applications that solve real business problems. 
                  Our AI solutions are designed to be scalable, efficient, and user-friendly.
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

export default AIAppDevelopment;
