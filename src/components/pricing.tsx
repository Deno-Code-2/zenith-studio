
import { Check, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface Plan {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
  cta: string;
  emailSubject: string;
  emailBody: string;
  isPopular?: boolean;
}

const plans: Plan[] = [
  {
    title: "Landing Revamp",
    subtitle: "Ideal for innovative startups seeking rapid design solutions to accelerate their growth.",
    price: "Starts at $375",
    features: [
      "Figma Design",
      "Up to 10 Requests",
      "One Active Request",
      "48 Hour Delivery",
      "Unlimited Revisions",
      "Private Slack Channel",
      "Align with your timeline",
    ],
    cta: "Get Started Today",
    emailSubject: "Inquiry about Landing Revamp Package",
    emailBody: "Hi Zenith Studio,\n\nI'm interested in the Landing Revamp package (starting at $375). I'd like to discuss how this package can meet my requirements.\n\nLooking forward to hearing from you!",
    isPopular: false,
  },
  {
    title: "MVP Launchpad",
    subtitle: "Suited for businesses seeking strategic design & ideas, paired with the expertise of a senior designer.",
    price: "Starts at $1,799",
    features: [
      "Figma Design",
      "Full Stack Development",
      "Deployment Finalization",
      "One Active Request",
      "4 - 6 Weeks Delivery",
      "PRD based Revisions",
      "Private Slack Channel",
    ],
    cta: "Get Started Today",
    emailSubject: "Inquiry about MVP Launchpad Package",
    emailBody: "Hi Zenith Studio,\n\nI'm interested in the MVP Launchpad package (starting at $1,799). I'd like to discuss how this package can meet my business requirements.\n\nLooking forward to hearing from you!",
    isPopular: true,
  },
  {
    title: "Custom",
    subtitle: "We Offer Extensive Digital Solutions to take your business to the skies!",
    price: "$3,200+/month",
    features: [
      "Figma Design",
      "Framer Development",
      "Branding",
      "Web Apps",
      "Unlimited Requests",
      "One Active Request",
      "And More...",
    ],
    cta: "Contact Us",
    emailSubject: "Inquiry about Custom Enterprise Solution",
    emailBody: "Hi Zenith Studio,\n\nI'm interested in discussing a Custom Enterprise solution for my business. I'd like to explore how your services can meet our specific requirements.\n\nLooking forward to hearing from you!",
    isPopular: false,
  },
];

export default function PricingPage() {
  // Create mailto links with pre-filled subject and body
  const createMailtoLink = (subject: string, body: string) => {
    return `mailto:support@zenith-studio.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="bg-white text-black py-20 px-4">
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
        <h1 className="text-4xl font-bold sm:text-5xl text-black">
          Transparent Pricing,
          <br />
          <span className="text-green-600">No Surprises Guaranteed</span>
        </h1>
        <p className="text-muted-foreground text-lg">
          We offer comprehensive web design and development services, including custom solutions, e-commerce platforms,
          responsive designs, and maintenance, as well as digital marketing, SEO, and IT consulting services.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative p-8 border rounded-xl shadow-sm bg-white ${
              plan.isPopular ? "border-green-600 shadow-lg" : "border-gray-200"
            }`}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 bg-green-600 text-white text-xs px-3 py-1 rounded-bl-xl flex items-center gap-1">
                <Sparkles className="h-4 w-4" />
                Popular
              </div>
            )}

            <h3 className="text-xl font-semibold text-black">{plan.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{plan.subtitle}</p>

            <p className="mt-4 text-2xl font-bold text-green-700">{plan.price}</p>

            <ul className="mt-6 flex flex-col gap-2 text-sm text-black">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 mt-1" />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={createMailtoLink(plan.emailSubject, plan.emailBody)}
              className={`mt-6 inline-block w-full text-center py-2 px-4 rounded-md font-semibold transition-all ${
                plan.isPopular
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "border border-black text-black hover:bg-black hover:text-white"
              }`}
            >
              {plan.cta}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
