
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative pt-32">
        <div className="container mx-auto px-8 lg:px-16 py-20">
          <h1 className="text-4xl font-bold mb-8 text-white font-syne">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-white font-jakarta space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>This Privacy Policy outlines how Zenith Studio collects, uses, and safeguards your personal information when you use our services or visit our website.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <p>We may collect personal information such as your name, email address, phone number, and other details when you interact with our services. Additionally, we gather non-personal information through cookies and analytics tools.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p>The information we collect is used to improve our services, personalize your experience, process transactions, and communicate with you regarding our offerings.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p>We implement robust security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Services</h2>
              <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their policies.</p>
            </section>
          </div>
        </div>
      </div>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Privacy;
