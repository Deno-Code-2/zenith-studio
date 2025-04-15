
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="relative pt-32">
        <div className="container mx-auto px-8 lg:px-16 py-20">
          <h1 className="text-4xl font-bold mb-8 text-black font-syne">
            Terms and <span className="text-custom-orange">Conditions</span>
          </h1>
          <div className="prose prose-lg max-w-none text-black font-jakarta space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">1. Acceptance of Terms</h2>
              <p className="text-gray-700">
                By accessing and using the services provided by Zenith Studio ("we," "us," or "our"), you agree to comply with and be bound by these Terms and Conditions. If you do not agree with these terms, please refrain from using our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">2. Services Agreement</h2>
              <p className="text-gray-700">
                Our services include but are not limited to web development, mobile app development, UI/UX design, digital marketing, and strategic consulting as specified in individual project agreements. Any additional services not covered in the initial agreement may require separate terms and pricing.
              </p>
              <p className="text-gray-700 mt-4">
                All services are provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">3. Project Delivery & Timeline</h2>
              <p className="text-gray-700">
                We commit to delivering projects according to agreed-upon timelines. However, project timelines may be adjusted based on:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Changes to project scope or requirements</li>
                <li>Delays in receiving client feedback or necessary materials</li>
                <li>Unforeseen technical challenges</li>
                <li>Force majeure events beyond our reasonable control</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Any delays will be communicated promptly, and we'll work collaboratively to adjust schedules as needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">4. Intellectual Property Rights</h2>
              <p className="text-gray-700">
                Upon full payment of all invoices, clients receive ownership rights to the final deliverables created specifically for their project, except for:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>Third-party materials or software incorporated in the deliverables</li>
                <li>Our proprietary frameworks, tools, or methodologies</li>
                <li>Open-source components subject to their respective licenses</li>
              </ul>
              <p className="text-gray-700 mt-4">
                We retain the right to display and link to your project as part of our portfolio and to describe our work on your project for promotional purposes, unless explicitly agreed otherwise in writing.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">5. Payment Terms</h2>
              <p className="text-gray-700">
                Payment schedules and terms will be outlined in project proposals. We typically require:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>A non-refundable deposit (typically 50%) before commencing work</li>
                <li>Remaining payments tied to specific project milestones</li>
                <li>Payment within 14 days of invoice receipt unless otherwise specified</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Late payments may result in work suspension and/or late fees. All fees are exclusive of applicable taxes, which will be charged additionally where required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">6. Confidentiality</h2>
              <p className="text-gray-700">
                We maintain strict confidentiality regarding all client information and project details. We will not disclose confidential information to third parties except as required by law or as necessary to fulfill our services. Our confidentiality obligations continue even after the completion of services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">7. Limitation of Liability</h2>
              <p className="text-gray-700">
                To the maximum extent permitted by law, Zenith Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or business opportunities, resulting from your use of our services, even if we have been advised of the possibility of such damages.
              </p>
              <p className="text-gray-700 mt-4">
                Our total liability for any claims under these terms shall not exceed the amount you paid us for the services directly relating to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">8. Termination</h2>
              <p className="text-gray-700">
                Either party may terminate the service agreement with written notice if:
              </p>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                <li>The other party breaches a material term of this agreement</li>
                <li>Mutually agreed upon in writing</li>
                <li>The client fails to pay invoices within the specified timeframe</li>
              </ul>
              <p className="text-gray-700 mt-4">
                Upon termination, you are responsible for paying for all services performed up to the termination date. Non-refundable deposits will not be returned.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">9. Governing Law</h2>
              <p className="text-gray-700">
                These Terms and Conditions shall be governed by and construed in accordance with the laws of [Jurisdiction]. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts in [Jurisdiction].
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">10. Amendments</h2>
              <p className="text-gray-700">
                We reserve the right to modify these Terms and Conditions at any time. We will provide notice of significant changes by posting the updated terms on our website or direct communication. Your continued use of our services after such modifications constitutes your acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-custom-orange">11. Contact Information</h2>
              <p className="text-gray-700">
                If you have any questions or concerns regarding these Terms and Conditions, please contact us at:
              </p>
              <p className="text-gray-700 mt-2">
                <strong>Email:</strong> legal@zenithstudio.com<br />
                <strong>Address:</strong> 123 Innovation Street, Tech Valley, CA 94025
              </p>
            </section>

            <p className="text-gray-600 italic">
              Last updated: June 15, 2023
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
