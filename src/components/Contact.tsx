
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin } from "lucide-react";
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
  "$500 - $1,000",
  "$1,000 - $2,500",
  "$2,500 - $5,000",
  "$5,000 - $10,000",
  "$10,000+"
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    price_range: "",
    service_type: "",
    message: "",
  });
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

      // Send email notification
      const { error: emailError } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (emailError) throw emailError;

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        price_range: "",
        service_type: "",
        message: "",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <section className="pt-40 pb-20">
        <div className="container mx-auto px-8 lg:px-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white font-syne mb-6">
              Get in <span className="text-custom-orange">Touch</span> With Us Today
            </h1>
            <p className="text-gray-300 max-w-3xl mx-auto font-jakarta text-lg">
              Whether you're starting from scratch or looking to revamp your digital presence, 
              our team is here to turn your vision into reality. Let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="grid grid-cols-1 gap-8">
                <div className="p-8 border border-neutral-800 rounded-lg bg-black/50 backdrop-blur-sm hover:border-custom-orange/40 transition-colors">
                  <Mail className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4 font-syne">Let's Talk Business</h3>
                  <a href="mailto:contact@zenithstudio.com" className="text-gray-300 hover:text-custom-orange transition-colors font-jakarta block mb-2">
                    contact@zenithstudio.com
                  </a>
                  <p className="text-gray-400 font-jakarta">
                    For business inquiries, partnerships, and general information
                  </p>
                </div>

                <div className="p-8 border border-neutral-800 rounded-lg bg-black/50 backdrop-blur-sm hover:border-custom-orange/40 transition-colors">
                  <Phone className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4 font-syne">Call Us Directly</h3>
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-custom-orange transition-colors font-jakarta block mb-2">
                    +1 (234) 567-890
                  </a>
                  <p className="text-gray-400 font-jakarta">
                    Available Monday to Friday, 9:00 AM - 6:00 PM EST
                  </p>
                </div>

                <div className="p-8 border border-neutral-800 rounded-lg bg-black/50 backdrop-blur-sm hover:border-custom-orange/40 transition-colors">
                  <MapPin className="w-8 h-8 text-custom-orange mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4 font-syne">Visit Our Office</h3>
                  <p className="text-gray-300 font-jakarta mb-2">
                    123 Innovation Street
                  </p>
                  <p className="text-gray-400 font-jakarta">
                    Tech Valley, CA 94025<br />
                    United States
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-neutral-800"
            >
              <h2 className="text-2xl font-bold text-white mb-8 font-syne">Start Your Project</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-jakarta">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-custom-orange outline-none font-jakarta"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-jakarta">Email</label>
                    <input 
                      type="email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-custom-orange outline-none font-jakarta"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 font-jakarta">Subject</label>
                  <input 
                    type="text" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-custom-orange outline-none font-jakarta"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-300 mb-2 font-jakarta">Budget Range</label>
                    <select 
                      value={formData.price_range}
                      onChange={(e) => setFormData({...formData, price_range: e.target.value})}
                      className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-custom-orange outline-none font-jakarta"
                      required
                    >
                      <option value="">Select a range</option>
                      {PRICE_RANGES.map((range) => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2 font-jakarta">Service Type</label>
                    <select 
                      value={formData.service_type}
                      onChange={(e) => setFormData({...formData, service_type: e.target.value})}
                      className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-custom-orange outline-none font-jakarta"
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
                  <label className="block text-gray-300 mb-2 font-jakarta">Project Details</label>
                  <textarea 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black border border-neutral-800 rounded-lg p-3 text-white focus:border-custom-orange outline-none font-jakarta"
                    placeholder="Tell us about your project goals and requirements..."
                    required
                  ></textarea>
                </div>

                <Button 
                  type="submit" 
                  variant="outline"
                  className="w-full font-jakarta"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Submit Request"}
                </Button>
              </form>
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
