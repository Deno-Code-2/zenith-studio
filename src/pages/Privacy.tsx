import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-custom-orange">
      <Header />
      <div className="relative">
        <GridPattern
          width={1200}
          height={1000}
          className="absolute inset-x-0 -top-20 -bottom-20 [mask-image:linear-gradient(to_bottom,white_20%,transparent_80%)] -z-10"
        />
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl font-bold mb-8 text-white font-syne">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none text-text font-jakarta space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Information Collection</h2>
              <p>We collect information that you voluntarily provide to us when you use our services, including personal information such as your name, email address, and contact details.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Use of Information</h2>
              <p>We use the collected information to provide and improve our services, communicate with you, and ensure the best possible experience with our agency.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Data Protection</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access or disclosure.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
              <p>We may use third-party services to help us operate our business. These services have their own privacy policies and may collect information as per their terms.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Contact Information</h2>
              <p>If you have any questions about this Privacy Policy, please contact us through the provided contact information on our website.</p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
