
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <PageTransition>
        <section className="pt-32 pb-20">
          <div className="max-w-4xl mx-auto px-8 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-black font-syne mb-6">
                Privacy <span className="text-custom-orange">Policy</span>
              </h1>
              <p className="text-gray-600 font-jakarta">
                Last Updated: April 2, 2025
              </p>
            </motion.div>

            <div className="prose prose-lg max-w-none font-jakarta text-black">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold font-syne mb-4">1. Introduction</h2>
                <p>
                  Welcome to Zenith Studio. We respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">2. Information We Collect</h2>
                <p>We may collect several types of information from and about users of our website, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li><strong>Personal information</strong>: Name, email address, phone number, and other contact details you provide when filling out forms on our website.</li>
                  <li><strong>Usage information</strong>: Information about how you use our website, including your browsing actions and patterns.</li>
                  <li><strong>Technical information</strong>: IP address, browser type and version, time zone setting, operating system, and other technology on the devices you use to access our website.</li>
                </ul>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">3. How We Use Your Information</h2>
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To provide and maintain our services</li>
                  <li>To process and complete transactions</li>
                  <li>To respond to your inquiries and fulfill your requests</li>
                  <li>To send administrative information</li>
                  <li>To personalize your experience on our website</li>
                  <li>To improve our website and services</li>
                  <li>To conduct data analysis and research</li>
                </ul>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">4. Disclosure of Your Information</h2>
                <p>We may disclose personal information that we collect or you provide:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>To our subsidiaries and affiliates</li>
                  <li>To contractors, service providers, and other third parties we use to support our business</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect and defend our rights or property</li>
                  <li>With your consent</li>
                </ul>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">5. Data Security</h2>
                <p>
                  We implement appropriate security measures to protect your personal information. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">6. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We have no control over and assume no responsibility for 
                  the content, privacy policies, or practices of any third-party sites or services.
                </p>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">7. Children's Privacy</h2>
                <p>
                  Our services are not intended for children under 13 years of age. We do not knowingly collect personal 
                  information from children under 13.
                </p>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">8. Changes to Our Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. Any changes will be posted on this page with an updated revision date.
                </p>

                <h2 className="text-2xl font-bold font-syne mb-4 mt-8">9. Contact Information</h2>
                <p>
                  If you have any questions about this privacy policy, please contact us at:
                </p>
                <p className="mb-4">
                  <strong>Email:</strong> <a href="mailto:syedmoinuddin106@gmail.com" className="text-custom-orange">syedmoinuddin106@gmail.com</a>
                </p>
                <p>
                  <strong>Phone:</strong> <a href="tel:+919108041057" className="text-custom-orange">+91 9108041057</a>
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </PageTransition>
      <Footer />
    </main>
  );
};

export default Privacy;
