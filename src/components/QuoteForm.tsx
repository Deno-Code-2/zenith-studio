
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';
import { supabase } from '@/integrations/supabase/client';

const QuoteForm = () => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Store the quote request in the database
      const { error: dbError } = await supabase
        .from('quote_requests')
        .insert([formData]);

      if (dbError) throw dbError;

      // Send notification email
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: { 
          ...formData, 
          recipient: "support@zenith-studio.dev",
          subject: "New Quick Quote Request",
          isAdminEmail: true
        },
      });

      if (error) throw error;

      toast({
        title: "Quote Request Submitted",
        description: "We'll get back to you within 24 hours with a personalized quote.",
      });
      
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        timeline: '',
      });
    } catch (error) {
      console.error('Error submitting quote request:', error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-white to-green-50 p-6 rounded-xl border border-green-200 shadow-sm"
    >
      <h3 className="text-xl font-bold mb-4 font-syne">Get a Quick Quote</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Project Type
          </label>
          <select
            value={formData.projectType}
            onChange={(e) => setFormData({...formData, projectType: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
            required
          >
            <option value="">Select Project Type</option>
            <option value="Website">Website</option>
            <option value="Mobile App">Mobile App</option>
            <option value="E-commerce">E-commerce</option>
            <option value="SaaS">SaaS Product</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Budget Range
            </label>
            <select
              value={formData.budget}
              onChange={(e) => setFormData({...formData, budget: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select Budget</option>
              <option value="$1,000 - $5,000">$1,000 - $5,000</option>
              <option value="$5,000 - $10,000">$5,000 - $10,000</option>
              <option value="$10,000 - $25,000">$10,000 - $25,000</option>
              <option value="$25,000+">$25,000+</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Timeline
            </label>
            <select
              value={formData.timeline}
              onChange={(e) => setFormData({...formData, timeline: e.target.value})}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500"
              required
            >
              <option value="">Select Timeline</option>
              <option value="ASAP (1-2 weeks)">ASAP (1-2 weeks)</option>
              <option value="Soon (2-4 weeks)">Soon (2-4 weeks)</option>
              <option value="Flexible (1-2 months)">Flexible (1-2 months)</option>
              <option value="Long-term (3+ months)">Long-term (3+ months)</option>
            </select>
          </div>
        </div>

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-green-500 hover:bg-green-600"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            'Request Quote'
          )}
        </Button>
      </form>
    </motion.div>
  );
};

export default QuoteForm;
