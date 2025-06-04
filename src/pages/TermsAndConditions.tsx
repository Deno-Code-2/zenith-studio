
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";

const TermsAndConditions = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Terms and Conditions | Zenith Studio</title>
        <meta name="description" content="Terms and Conditions for Zenith Studio - Read our terms of service and usage policies." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 font-syne">
              Terms and Conditions
            </h1>
            
            <div className="prose prose-lg max-w-none font-jakarta">
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Acceptance of Terms</h2>
                <p className="text-gray-600 mb-4">
                  By accessing and using Zenith Studio's services, you accept and agree to be bound by the 
                  terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Services</h2>
                <p className="text-gray-600 mb-4">
                  Zenith Studio provides web development, design, and related technology services. 
                  We reserve the right to modify or discontinue our services at any time.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">User Responsibilities</h2>
                <p className="text-gray-600 mb-4">
                  You are responsible for maintaining the confidentiality of your account information 
                  and for all activities that occur under your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Intellectual Property</h2>
                <p className="text-gray-600 mb-4">
                  All content, features, and functionality of our services are owned by Zenith Studio 
                  and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Limitation of Liability</h2>
                <p className="text-gray-600 mb-4">
                  Zenith Studio shall not be liable for any indirect, incidental, special, consequential, 
                  or punitive damages resulting from your use of our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Contact Information</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about these Terms and Conditions, please contact us at 
                  support@zenith-studio.dev.
                </p>
              </section>
            </div>
          </div>
        </div>
        
        <NewFooter />
      </div>
    </main>
  );
};

export default TermsAndConditions;
