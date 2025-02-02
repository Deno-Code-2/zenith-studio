import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white font-syne mb-6">
              Get in <span className="text-custom-orange">Touch</span> with Us Today!
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to transform your digital presence? We're here to help! Fill out the form below or reach out through any of our contact channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Us Via Email</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "For Account Inquiries", email: "hello@zenith.com" },
                  { title: "For Business Relations", email: "partners@zenith.com" },
                  { title: "For Design Inquiries", email: "design@zenith.com" }
                ].map((item, index) => (
                  <div key={index} className="p-4 border border-custom-orange/20 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">{item.title}</p>
                    <a href={`mailto:${item.email}`} className="text-white hover:text-custom-orange">
                      {item.email}
                    </a>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-white mb-6">Contact Us by Phone</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "General Inquiries", phone: "+1 (555) 123-4567" },
                  { title: "Customer Care Center", phone: "+1 (555) 234-5678" },
                  { title: "Tech Consultation", phone: "+1 (555) 345-6789" }
                ].map((item, index) => (
                  <div key={index} className="p-4 border border-custom-orange/20 rounded-lg">
                    <p className="text-sm text-gray-400 mb-2">{item.title}</p>
                    <a href={`tel:${item.phone}`} className="text-white hover:text-custom-orange">
                      {item.phone}
                    </a>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-6 border border-custom-orange/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">New York City</h3>
                  <p className="text-gray-300">123 Park Street, Suite 345, New York, NY 10007</p>
                  <p className="text-custom-orange mt-2">+1 (555) 987-6543</p>
                </div>
                <div className="p-6 border border-custom-orange/20 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-4">San Francisco</h3>
                  <p className="text-gray-300">456 Tech Plaza, 5th Floor, San Francisco, CA 94105</p>
                  <p className="text-custom-orange mt-2">+1 (555) 789-0123</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-6">Online Inquiry Form</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2">Name</label>
                    <input type="text" className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white" />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2">Email</label>
                    <input type="email" className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white" />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Subject</label>
                  <input type="text" className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white" />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white"></textarea>
                </div>
                <button type="submit" className="w-full bg-custom-orange text-white py-3 rounded-lg hover:bg-custom-orange/90 transition-colors">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;