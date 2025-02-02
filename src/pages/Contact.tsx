import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";
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
            <p className="text-gray-300 max-w-2xl mx-auto font-jakarta">
              Ready to transform your digital presence? We're here to help! Fill out the form below or reach out through any of our contact channels.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="grid grid-cols-1 gap-8">
                <div className="p-6 border border-custom-orange/20 rounded-lg hover:border-custom-orange transition-colors">
                  <Mail className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-syne">Email Us</h3>
                  <a href="mailto:hello@zenith.com" className="text-gray-300 hover:text-custom-orange transition-colors font-jakarta">
                    hello@zenith.com
                  </a>
                </div>
                <div className="p-6 border border-custom-orange/20 rounded-lg hover:border-custom-orange transition-colors">
                  <Phone className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-syne">Call Us</h3>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-custom-orange transition-colors font-jakarta">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="p-6 border border-custom-orange/20 rounded-lg hover:border-custom-orange transition-colors">
                  <MapPin className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-syne">Visit Us</h3>
                  <p className="text-gray-300 font-jakarta">
                    123 Innovation Street, Tech Valley, CA 94025
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/50 p-8 rounded-lg border border-custom-orange/20">
              <h2 className="text-2xl font-bold text-white mb-6 font-syne">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 font-jakarta">Name</label>
                    <input 
                      type="text" 
                      className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 font-jakarta">Email</label>
                    <input 
                      type="email" 
                      className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-jakarta">Subject</label>
                  <input 
                    type="text" 
                    className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-jakarta">Message</label>
                  <textarea 
                    rows={4} 
                    className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-custom-orange text-white py-3 rounded-lg hover:bg-custom-orange/90 transition-colors font-jakarta font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <AgencyShowcase />
      <Footer />
    </main>
  );
};

export default Contact;