
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";

const Pricing = () => {
  const plans = [
    {
      title: "Existing Components",
      subtitle: "Free",
      description: "All the components that are freely available on the website are free to use.",
      features: [
        "A growing library of awesome components",
        "React / Next.js / Tailwind CSS code",
        "Serves a wide variety of audience",
        "MIT Licence. Personal or commercial projects",
        "Contact over chat for support"
      ],
      buttonText: "Browse Components",
      highlighted: false
    },
    {
      title: "Custom Components",
      subtitle: "$4995/mo",
      description: "Standalone components tailored to your needs and easily integrated. Perfect for website elements or sections.",
      features: [
        "As many components as possible in a month",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "24-hour support response time",
        "Private communication channel",
        "4-7 days turnaround time",
        "Pause or cancel anytime"
      ],
      buttonText: "Buy Now",
      highlighted: false
    },
    {
      title: "Pages",
      subtitle: "$6995/mo",
      description: "Best for early-stage startups and businesses that need a marketing site and ongoing developmental work.",
      features: [
        "One request / page at a time",
        "React / Next.js / Tailwind CSS code",
        "Design + Development",
        "Unlimited Revisions",
        "CMS integration",
        "Search Engine Optimization",
        "24-hour support response time",
        "Private communication channel",
        "7-10 days turnaround time",
        "Pause or cancel anytime"
      ],
      buttonText: "Buy Now",
      highlighted: true
    },
    {
      title: "Multi Page Website",
      subtitle: "$19,499",
      description: "Best for small businesses and startups that need a performant website that looks great and converts visitors to customers.",
      features: [
        "Multi-page landing page website",
        "Web Apps and SaaS Development",
        "AI Apps development",
        "Design + Development",
        "24-hour support response time",
        "Private communication channel",
        "Unlimited Revisions",
        "Negotiable delivery time"
      ],
      buttonText: "Contact Us",
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
