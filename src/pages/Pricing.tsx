
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";

const Pricing = () => {
  const plans = [
    {
      title: "Starter Package",
      subtitle: "$1,999",
      description: "For solopreneurs & small businesses. Launch fast with essential features.",
      features: [
        "Custom Website (up to 5 pages)",
        "Basic SaaS Setup (1-2 core features)",
        "Mobile-App Ready (React Native base)",
        "E-Commerce Lite (Payments + Catalog)",
        "20 Client Revisions",
        "API Integration (Stripe, Google, etc.)",
        "Source Code Ownership",
        "1-Month Social Media Management",
        "SEO Audit Report",
        "Logo + Brand Guide"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      title: "Growth Package",
      subtitle: "$4,999",
      description: "For scaling startups & established businesses. Our most popular plan.",
      features: [
        "Advanced Website (up to 10 pages)",
        "Full SaaS Platform (User auth, dashboard)",
        "Cross-Platform Mobile App",
        "E-Commerce Pro (Checkout, subscriptions)",
        "1 Year Free Maintenance",
        "Unlimited Revisions",
        "AI Chatbot Integration",
        "Figma Design Files",
        "Custom CMS (Blog, portfolios)",
        "3-Month Social Media Ads",
        "On-Page SEO",
        "Monthly Analytics Reports",
        "Complete Branding Package"
      ],
      buttonText: "Choose Plan",
      highlighted: true
    },
    {
      title: "Enterprise Package",
      subtitle: "$12,999",
      description: "For corporations & high-traffic platforms. White-glove service included.",
      features: [
        "30+ Page Website (Next.js optimized)",
        "MVP Development (Full-stack SaaS)",
        "App Prototype + User Testing",
        "E-Commerce Ultra (Multi-currency, AI)",
        "3-Month Priority Support",
        "42 Blog Posts (SEO-optimized)",
        "Multilingual Setup",
        "Email Marketing System",
        "Security Hardening",
        "Mobile/Tablet Optimization",
        "Dedicated Training Session"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Header />

      <section className="pt-28 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-black font-syne mb-6">
              Need custom components or websites?<br />
              <span className="text-custom-orange">We've got you covered</span>
            </h1>
            <p className="text-gray-700 max-w-2xl mx-auto font-jakarta">
              From custom components to complete website tailored to your needs. Simple pricing, no hidden fees.
              Choose the perfect plan for your agency's needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan, index) => (
              <div
                key={plan.title}
                className={`relative p-8 rounded-xl border ${
                  plan.highlighted
                    ? "border-custom-orange bg-custom-orange/5"
                    : "border-custom-orange/20 hover:border-custom-orange/40"
                } transition-all duration-300`}
              >
                <div className="mb-8">
                  <h3 className="text-custom-orange mb-2 font-jakarta">{plan.title}</h3>
                  <div className="text-3xl font-bold text-black mb-4 font-syne">{plan.subtitle}</div>
                  <p className="text-gray-700 text-sm font-jakarta">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3 text-gray-700 font-jakarta">
                      <Check className="w-5 h-5 text-custom-orange flex-shrink-0 mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant="default"
                  className={`w-full ${
                    plan.highlighted
                      ? "bg-custom-orange hover:bg-custom-orange/90 text-black"
                      : "bg-white border border-custom-orange/20 hover:border-custom-orange text-black"
                  }`}
                >
                  {plan.buttonText}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <AgencyShowcase />
      <Footer />
    </main>
  );
};

export default Pricing;
