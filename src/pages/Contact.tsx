import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-syne mb-6">
              Get in <span className="text-custom-orange">Touch</span> with Us Today!
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto font-jakarta">
              Let's discuss your project and see how we can help you achieve your digital goals.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="p-6 border border-custom-orange/20 rounded-lg bg-black/50 backdrop-blur-sm hover:border-custom-orange transition-colors">
                  <Mail className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-syne">Email Us</h3>
                  <a href="mailto:contact@zenithstudio.com" className="text-gray-300 hover:text-custom-orange transition-colors font-jakarta">
                    contact@zenithstudio.com
                  </a>
                </div>
                <div className="p-6 border border-custom-orange/20 rounded-lg bg-black/50 backdrop-blur-sm hover:border-custom-orange transition-colors">
                  <Phone className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-syne">Call Us</h3>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-custom-orange transition-colors font-jakarta">
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="p-6 border border-custom-orange/20 rounded-lg bg-black/50 backdrop-blur-sm hover:border-custom-orange transition-colors">
                  <MapPin className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2 font-syne">Visit Us</h3>
                  <p className="text-gray-300 font-jakarta">
                    123 Innovation Street, Tech Valley, CA 94025
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-custom-orange/20"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-syne">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-400 mb-2 font-jakarta">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-400 mb-2 font-jakarta">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-jakarta">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                    placeholder="How can we help?"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-400 mb-2 font-jakarta">Message</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black border border-custom-orange/20 rounded-lg p-3 text-white focus:border-custom-orange transition-colors font-jakarta"
                    placeholder="Your message here..."
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-custom-orange text-white py-3 rounded-lg hover:bg-custom-orange/90 transition-colors font-jakarta font-medium"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;