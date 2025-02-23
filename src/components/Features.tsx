import { cn } from "@/lib/utils";
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconTerminal2 } from "@tabler/icons-react";
const Features = () => {
  const features = [{
    title: "Built for developers",
    description: "Built for engineers, developers, dreamers, thinkers and doers.",
    icon: <IconTerminal2 className="w-6 h-6" />
  }, {
    title: "Ease of use",
    description: "It's as easy as using an Apple, and as expensive as buying one.",
    icon: <IconEaseInOut className="w-6 h-6" />
  }, {
    title: "Pricing like no other",
    description: "Our prices are best in the market. No cap, no lock, no credit card required.",
    icon: <IconCurrencyDollar className="w-6 h-6" />
  }, {
    title: "100% Uptime guarantee",
    description: "We just cannot be taken down by anyone.",
    icon: <IconCloud className="w-6 h-6" />
  }, {
    title: "Multi-tenant Architecture",
    description: "You can simply share passwords instead of buying new seats",
    icon: <IconRouteAltLeft className="w-6 h-6" />
  }, {
    title: "24/7 Customer Support",
    description: "We are available a 100% of the time. Atleast our AI Agents are.",
    icon: <IconHelp className="w-6 h-6" />
  }, {
    title: "Money back guarantee",
    description: "If you donot like EveryAI, we will convince you to like us.",
    icon: <IconAdjustmentsBolt className="w-6 h-6" />
  }, {
    title: "And everything else",
    description: "I just ran out of copy ideas. Accept my sincere apologies",
    icon: <IconHeart className="w-6 h-6" />
  }];
  return <div className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Features
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the powerful features that make our platform stand out
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => <Feature key={feature.title} {...feature} index={index} />)}
        </div>
      </div>
    </div>;
};
const Feature = ({
  title,
  description,
  icon,
  index
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return <div className={cn("flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800", (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800", index < 4 && "lg:border-b dark:border-neutral-800")}>
      {index < 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />}
      {index >= 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-50">
          {title}
        </span>
      </div>
      <p className="text-sm max-w-xs relative z-10 px-10 text-orange-50">
        {description}
      </p>
    </div>;
};
export default Features;