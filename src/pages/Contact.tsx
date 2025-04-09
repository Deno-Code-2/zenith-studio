
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, ArrowRight, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import AgencyShowcase from "@/components/AgencyShowcase";

const SERVICE_TYPES = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "Digital Marketing",
  "Branding",
  "E-commerce Solutions",
  "Custom Software Development",
  "Other"
];

const PRICE_RANGES = [
  "₹35,000 - ₹75,000",
  "₹75,000 - ₹1,50,000",
  "₹1,50,000 - ₹3,00,000",
  "₹3,00,000 - ₹5,00,000",
  "₹5,00,000+"
];

const initialFormState = {
  name: "",
  email: "",
  subject: "",
  price_range: "",
  service_type: "",
  message: "",
};

const Contact = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Insert into Supabase
      const { error: dbError } = await supabase
        .from('contact_submissions')
        .insert([formData]);

      if (dbError) throw dbError;

      // Send email notification to admin
      const { error: adminEmailError } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          ...formData, 
          recipient: "syedmoinuddin106@gmail.com",
          isAdminEmail: true
        },
      });

      if (adminEmailError) throw adminEmailError;
      
      // Send confirmation email to user
      const { error: userEmailError } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          ...formData, 
          recipient: formData.email,
          isAdminEmail: false
        },
      });

      if (userEmailError) throw userEmailError;

      toast.success("Message sent successfully! We'll get back to you within 48 hours.", {
        duration: 5000,
      });
      
      // Clear the form after successful submission
      setFormData(initialFormState);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-black font-syne mb-6">
              Get in <span className="text-custom-orange">Touch</span> with Us Today!
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto font-jakarta">
            Let's discuss your project and see how we can help you achieve your digital goals. Fill out the form below and we'll get back to you within 24hr.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-12 gap-8 lg:gap-12">
            {/* Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5 lg:col-span-4 space-y-6"
            >
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 border border-gray-100 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6 font-syne">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-custom-orange/10 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-custom-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1 font-syne">Email Us</h3>
                      <a href="mailto:syedmoinuddin106@gmail.com" className="text-gray-700 hover:text-custom-orange transition-colors font-jakarta block">
                        syedmoinuddin106@gmail.com
                      </a>
                      <p className="text-gray-500 text-sm mt-1 font-jakarta">
                        We'll respond within 48 hours
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-custom-orange/10 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-custom-orange" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-black mb-1 font-syne">Call Us</h3>
                      <a href="tel:+919108041057" className="text-gray-700 hover:text-custom-orange transition-colors font-jakarta block">
                        +91 9108041057
                      </a>
                      <p className="text-gray-500 text-sm mt-1 font-jakarta">
                        Mon-Fri: 9:00 AM - 6:00 PM IST
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="text-lg font-semibold text-black mb-4 font-syne">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-custom-orange/10 p-3 rounded-full hover:bg-custom-orange/20 transition-colors">
                      <Linkedin className="w-5 h-5 text-custom-orange" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-custom-orange/10 p-3 rounded-full hover:bg-custom-orange/20 transition-colors">
                      <Twitter className="w-5 h-5 text-custom-orange" />
                    </a>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-custom-orange/10 p-3 rounded-full hover:bg-custom-orange/20 transition-colors">
                      <Facebook className="w-5 h-5 text-custom-orange" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-custom-orange/10 p-3 rounded-full hover:bg-custom-orange/20 transition-colors">
                      <Instagram className="w-5 h-5 text-custom-orange" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-custom-orange/5 rounded-2xl p-8 border border-custom-orange/10">
                <h3 className="text-xl font-bold text-black mb-4 font-syne">Ready to start your project?</h3>
                <p className="text-gray-700 mb-6 font-jakarta">
                  Book a free 30-minute consultation call to discuss your requirements.
                </p>
                <Button
                  asChild
                  className="w-full bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta"
                >
                  <a href="https://cal.com/zenith-studio/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                    Schedule a Call <ArrowRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="md:col-span-7 lg:col-span-8"
            >
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-200 shadow-sm">
                <h2 className="text-2xl font-bold text-black mb-6 font-syne">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium font-jakarta">Full Name</label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange transition-colors font-jakarta"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium font-jakarta">Email Address</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange transition-colors font-jakarta"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-jakarta">Subject</label>
                    <input 
                      type="text" 
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange transition-colors font-jakarta"
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium font-jakarta">Budget Range</label>
                      <select 
                        value={formData.price_range}
                        onChange={(e) => setFormData({...formData, price_range: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange transition-colors font-jakarta"
                        required
                      >
                        <option value="">Select a range</option>
                        {PRICE_RANGES.map((range) => (
                          <option key={range} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium font-jakarta">Service Type</label>
                      <select 
                        value={formData.service_type}
                        onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                        className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange transition-colors font-jakarta"
                        required
                      >
                        <option value="">Select a service</option>
                        {SERVICE_TYPES.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium font-jakarta">Message</label>
                    <textarea 
                      rows={5} 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full border border-gray-300 rounded-lg p-3 text-gray-700 focus:border-custom-orange focus:ring-1 focus:ring-custom-orange transition-colors font-jakarta"
                      placeholder="Tell us about your project requirements..."
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full py-3 bg-custom-orange hover:bg-custom-orange/90 text-white font-jakarta flex items-center justify-center gap-2 text-lg"
                    disabled={isSubmitting}
                    size="lg"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && <Send size={20} />}
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      <AgencyShowcase />
      <Footer />
    </main>
  );
};

export default Contact;
