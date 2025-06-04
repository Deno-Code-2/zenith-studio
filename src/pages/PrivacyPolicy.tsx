
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import NewFooter from "@/components/NewFooter";

const PrivacyPolicy = () => {
  return (
    <main className="min-h-screen bg-white">
      <Helmet>
        <title>Privacy Policy | Zenith Studio</title>
        <meta name="description" content="Privacy Policy for Zenith Studio - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-8 font-syne">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg max-w-none font-jakarta">
              <p className="text-gray-600 mb-8">
                Last updated: {new Date().toLocaleDateString()}
              </p>
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  contact us, or use our services. This may include your name, email address, phone number, 
                  and any other information you choose to provide.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">How We Use Your Information</h2>
                <p className="text-gray-600 mb-4">
                  We use the information we collect to provide, maintain, and improve our services, 
                  communicate with you, and comply with legal obligations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Information Sharing</h2>
                <p className="text-gray-600 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties 
                  without your consent, except as described in this privacy policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Data Security</h2>
                <p className="text-gray-600 mb-4">
                  We implement appropriate security measures to protect your personal information against 
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4 font-syne">Contact Us</h2>
                <p className="text-gray-600 mb-4">
                  If you have any questions about this Privacy Policy, please contact us at 
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

export default PrivacyPolicy;
