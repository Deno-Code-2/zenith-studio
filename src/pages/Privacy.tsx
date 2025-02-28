
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative pt-32">
        <div className="container mx-auto px-8 lg:px-16 py-20">
          <h1 className="text-4xl font-bold mb-8 text-white font-syne">
            Privacy <span className="text-custom-orange">Policy</span>
          </h1>
          <div className="prose prose-lg max-w-none text-white font-jakarta space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">1. Introduction</h2>
              <p className="text-gray-300">
                At Zenith Studio, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-300 mt-4">
                By accessing or using our services, you consent to the practices described in this Privacy Policy. We encourage you to read this document carefully to understand our policies and practices regarding your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">2. Information We Collect</h2>
              <p className="text-gray-300">
                We may collect several types of information from and about users of our services:
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">2.1 Personal Information</h3>
              <p className="text-gray-300">
                This includes information that can identify you as an individual, such as:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Name, email address, and contact information</li>
                <li>Billing information and payment details</li>
                <li>Company name and job title</li>
                <li>User preferences and communication preferences</li>
                <li>Any other information you choose to provide</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">2.2 Non-Personal Information</h3>
              <p className="text-gray-300">
                We also collect non-identifying information, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>IP address and device identifiers</li>
                <li>Access times and referring website addresses</li>
                <li>Information about your interaction with our website</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-white">2.3 Collection Methods</h3>
              <p className="text-gray-300">
                We collect this information:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Directly from you when you provide it to us through forms or communications</li>
                <li>Automatically as you navigate through our website (using cookies and similar technologies)</li>
                <li>From third parties, such as business partners and analytics providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">3. How We Use Your Information</h2>
              <p className="text-gray-300">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Providing and maintaining our services</li>
                <li>Processing transactions and managing your account</li>
                <li>Personalizing your experience and delivering content tailored to your interests</li>
                <li>Improving our website, products, and services</li>
                <li>Communicating with you about updates, services, and promotional offers</li>
                <li>Responding to your inquiries and providing customer support</li>
                <li>Understanding usage patterns and optimizing our operations</li>
                <li>Protecting our services and users from fraudulent or harmful activities</li>
                <li>Complying with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-300">
                We use cookies, web beacons, and similar tracking technologies to collect information about your browsing activities and to improve your experience on our website.
              </p>
              <p className="text-gray-300 mt-4">
                These technologies help us remember your preferences, understand how you use our website, and customize our services accordingly. They also allow us to compile aggregate data about site traffic and site interaction.
              </p>
              <p className="text-gray-300 mt-4">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">5. Data Security</h2>
              <p className="text-gray-300">
                We implement appropriate technical and organizational measures to protect the security, integrity, and confidentiality of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
              <p className="text-gray-300 mt-4">
                Our security measures include:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Encryption of sensitive data</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication procedures</li>
                <li>Secure network infrastructures</li>
                <li>Employee training on data protection</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">6. Data Retention</h2>
              <p className="text-gray-300">
                We retain your personal information only for as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
              </p>
              <p className="text-gray-300 mt-4">
                To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorized use or disclosure, and applicable legal requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">7. Disclosure of Your Information</h2>
              <p className="text-gray-300">
                We may disclose personal information that we collect or you provide:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>To contractors, service providers, and other third parties who support our business operations</li>
                <li>To fulfill the purpose for which you provided it</li>
                <li>For any other purpose disclosed by us when you provide the information</li>
                <li>To comply with any court order, law, or legal process</li>
                <li>To protect the rights, property, or safety of our company, our users, or others</li>
                <li>In connection with a business transfer, such as a merger, acquisition, or asset sale</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">8. Your Rights and Choices</h2>
              <p className="text-gray-300">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-300">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal data</li>
                <li>Restriction or objection to processing</li>
                <li>Data portability</li>
                <li>Withdrawal of consent</li>
              </ul>
              <p className="text-gray-300 mt-4">
                To exercise these rights or to ask questions about them, please contact us using the information provided in Section 12.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">9. Third-Party Websites and Services</h2>
              <p className="text-gray-300">
                Our website may contain links to third-party websites, plugins, or applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy practices.
              </p>
              <p className="text-gray-300 mt-4">
                We encourage you to read the privacy policy of every website you visit when leaving our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">10. Children's Privacy</h2>
              <p className="text-gray-300">
                Our services are not intended for children under 16 years of age. We do not knowingly collect personal information from children under 16. If you are a parent or guardian and believe your child has provided us with personal information, please contact us, and we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">11. Changes to Our Privacy Policy</h2>
              <p className="text-gray-300">
                We may update our Privacy Policy from time to time. If we make material changes, we will notify you by email or by posting a notice on our website prior to the change becoming effective. Your continued use of our services after the effective date of the revised Privacy Policy constitutes your acceptance of the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">12. Contact Information</h2>
              <p className="text-gray-300">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:
              </p>
              <p className="text-gray-300 mt-2">
                <strong>Email:</strong> privacy@zenithstudio.com<br />
                <strong>Address:</strong> 123 Innovation Street, Tech Valley, CA 94025
              </p>
            </section>

            <p className="text-gray-400 italic">
              Last updated: June 15, 2023
            </p>
          </div>
        </div>
      </div>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Privacy;
