
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";

const RefundPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Refund Policy | Zenith Studio</title>
        <meta name="description" content="Refund Policy for Zenith Studio - Learn about our refund terms and conditions." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 font-syne">
              Refund Policy
            </h1>
            
            <div className="prose prose-lg max-w-none font-jakarta">
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">General Policy</h2>
                <p className="text-gray-600 mb-4">
                  We want you to be completely satisfied with our services. If you are not satisfied, 
                  we offer refunds under certain conditions outlined in this policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Refund Eligibility</h2>
                <p className="text-gray-600 mb-4">
                  Refunds may be requested within 14 days of service delivery, provided that the work 
                  has not been used or implemented in a live environment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Refund Process</h2>
                <p className="text-gray-600 mb-4">
                  To request a refund, please contact our support team at support@zenith-studio.dev 
                  with your order details and reason for the refund request.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Processing Time</h2>
                <p className="text-gray-600 mb-4">
                  Approved refunds will be processed within 5-10 business days and will be credited 
                  back to the original payment method.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Exceptions</h2>
                <p className="text-gray-600 mb-4">
                  Custom development work that has been completed and delivered according to 
                  specifications may not be eligible for refund.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about our refund policy, please contact us at 
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

export default RefundPolicy;
