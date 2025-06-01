import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import GlobalPresence from "@/components/GlobalPresence";
import Bookacall from "@/components/Book-a-call";

const Pricing = () => {
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      title: "Silver Package",
      price: "₹35,999",
      billing: "one-time payment",
      description: "Ideal for individuals and small businesses",
      features: [
        "Custom website design (up to 5 pages)",
        "Basic SaaS application setup",
        "Basic e-commerce website setup",
        "Up to 10 client revisions",
        "Core API Integration",
        "Full source code ownership",
        "Performance optimization report",
        "SEO audit report",
        "Logo design consultation",
        "1-month free website maintenance",
        "2 weeks delivery time"
      ],
      buttonText: "Choose Silver",
      highlighted: false,
      emailSubject: "Inquiry about Silver Package",
      emailBody: "Hi Zenith Studio,\n\nI'm interested in the Silver Package (₹35,999). I'd like to discuss how this package can meet my requirements.\n\nLooking forward to hearing from you!"
    },
    {
      title: "Golden Package",
      price: "₹75,999",
      billing: "one-time payment",
      description: "Perfect for growing businesses and startups",
      features: [
        "Custom website (up to 10 pages)",
        "Full SaaS platform development",
        "Cross-platform mobile app",
        "Advanced e-commerce setup",
        "API + CMS integration",
        "Unlimited client revisions",
        "Source code + Figma files",
        "AI chatbot integration",
        "2 months social media marketing",
        "Monthly performance reports",
        "3 months free website maintenance",
        "3 weeks delivery time"
      ],
      buttonText: "Choose Golden",
      highlighted: true,
      emailSubject: "Inquiry about Golden Package",
      emailBody: "Hi Zenith Studio,\n\nI'm interested in the Golden Package (₹75,999). I'd like to discuss how this package can meet my business requirements.\n\nLooking forward to hearing from you!"
    },
    {
      title: "Platinum Package",
      price: "₹1,99,000",
      billing: "one-time payment",
      description: "For established businesses needing high-end solutions",
      features: [
        "Custom website (up to 20 pages)",
        "MVP development (Next.js powered)",
        "Mobile app prototype",
        "Enterprise e-commerce solution",
        "API + CMS + database integration",
        "Unlimited revisions",
        "6 months free website maintenance",
        "5 months social media content creation",
        "Advanced SEO + analytics",
        "10 professional blog posts",
        "Email marketing system",
        "Security hardening",
        "Dedicated training session",
        "4 weeks delivery time"
      ],
      buttonText: "Choose Platinum",
      highlighted: false,
      emailSubject: "Inquiry about Platinum Package",
      emailBody: "Hi Zenith Studio,\n\nI'm interested in the Platinum Package (₹1,99,000). I'd like to discuss how this premium package can meet my business requirements.\n\nLooking forward to hearing from you!"
    },
    {
      title: "Custom Enterprise",
      price: "Custom Quote",
      billing: "tailored payment plans",
      description: "For large-scale operations and corporations",
      features: [
        "Unlimited pages website",
        "Custom SaaS product development",
        "iOS/Android mobile apps",
        "Scalable e-commerce platform",
        "1-year free website maintenance",
        "Dedicated account manager",
        "WhatsApp Business API integration",
        "GST invoice generation system",
        "Bulk SMS & Email marketing system",
        "Lead generation automation",
        "50+ professional blog posts",
        "1-year social media management",
        "Enterprise-level security setup",
        "Custom payment plans available"
      ],
      buttonText: "Contact Sales",
      highlighted: false,
      emailSubject: "Inquiry about Custom Enterprise Solution",
      emailBody: "Hi Zenith Studio,\n\nI'm interested in discussing a Custom Enterprise solution for my business. I'd like to explore how your services can meet our specific requirements.\n\nLooking forward to hearing from you!"
    }
  ];

  // Create mailto links with pre-filled subject and body
  const createMailtoLink = (subject: string, body: string) => {
    return `mailto:support@zenith-studio.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-lg font-medium text-custom-orange mb-2 font-jakarta">
              Choose the plan that suits you
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-black font-syne mb-5">
              Transparent <span className="text-custom-orange">Pricing</span>
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto font-jakarta">
              Budget-friendly solutions with no hidden costs. Everything included as mentioned.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative p-6 rounded-lg border-2 transition-all duration-300 flex flex-col h-full group
                  ${plan.highlighted ? "border-custom-orange bg-custom-orange/5 shadow-md" : "border-gray-200 hover:border-custom-orange"}`}
              >
                {plan.highlighted && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                    className="absolute top-0 right-0 bg-custom-orange text-black px-3 py-1 rounded-bl-lg rounded-tr-lg text-xs font-bold"
                  >
                    POPULAR CHOICE
                  </motion.div>
                )}
                <div className="mb-5">
                  <h3 className="text-lg font-bold text-black mb-1 font-syne">{plan.title}</h3>
                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-3xl font-bold text-black font-syne">{plan.price}</span>
                    {plan.price !== "Custom Quote" && <span className="text-gray-500 text-sm mb-1">/ INR</span>}
                  </div>
                  <p className="text-xs text-gray-500 uppercase mb-3 font-jakarta">{plan.billing}</p>
                  <p className="text-gray-700 text-sm font-jakarta">{plan.description}</p>
                </div>
                <motion.ul className="space-y-2.5 mb-7 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 + index * 0.05 + featureIndex * 0.03 }}
                      className="flex items-start gap-2 text-gray-700 text-sm font-jakarta"
                    >
                      <Check className="w-4 h-4 text-custom-orange flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    variant="default"
                    className={`w-full mt-auto font-medium group-hover:bg-black group-hover:text-white transition-all duration-300 ${plan.highlighted ? "bg-custom-orange hover:bg-custom-orange/90 text-black" : "bg-white border border-custom-orange text-black"}`}
                    asChild
                  >
                    <a href={createMailtoLink(plan.emailSubject, plan.emailBody)}>
                      {plan.buttonText}
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <GlobalPresence />
      <Bookacall />
      <Footer />
    </main>
  );
};

export default Pricing;
