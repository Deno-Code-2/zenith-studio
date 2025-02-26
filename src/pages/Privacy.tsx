import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";

const Terms = () => {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <div className="relative pt-32">
        <div className="container mx-auto px-8 lg:px-16 py-20">
          <h1 className="text-4xl font-bold mb-8 text-white font-syne">Terms and Conditions</h1>
          <div className="prose prose-lg max-w-none text-white font-jakarta space-y-6">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Services Agreement</h2>
              <p>By engaging with our agency, you agree to these terms and conditions. We provide digital marketing, web development, and creative services as specified in individual project agreements.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Project Delivery</h2>
              <p>We commit to delivering projects according to agreed-upon timelines. Any delays will be communicated promptly, and we'll work collaboratively to adjust schedules as needed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Intellectual Property</h2>
              <p>Upon full payment, clients receive ownership rights to the final deliverables. We retain rights to showcase the work in our portfolio unless otherwise agreed.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p>Payment schedules and terms will be outlined in project proposals. We typically require a deposit before beginning work, with remaining payments tied to project milestones.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
              <p>We maintain strict confidentiality regarding all client information and project details. Non-disclosure agreements are available upon request.</p>
            </section>
          </div>
        </div>
      </div>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Terms;
