
import { cn } from "@/lib/utils";
import { IconAdjustmentsBolt, IconCloud, IconCurrencyDollar, IconEaseInOut, IconHeart, IconHelp, IconRouteAltLeft, IconTerminal2 } from "@tabler/icons-react";

const Features = () => {
  const features = [{
    title: "Built for Creators",
    description: "Designed for visionary developers, designers, and entrepreneurs who want to bring their ideas to life effortlessly.",
    icon: <IconTerminal2 className="w-6 h-6" />
  }, {
    title: "User-Friendly",
    description: "Simplicity at its best—just like your favorite tech. We focus on making complex things easy without sacrificing quality.",
    icon: <IconEaseInOut className="w-6 h-6" />
  }, {
    title: "Transparent Pricing",
    description: "Clear, honest pricing with no hidden fees. You pay for what you use—nothing more, nothing less.",
    icon: <IconCurrencyDollar className="w-6 h-6" />
  }, {
    title: "Reliability Guaranteed",
    description: "We ensure your site runs flawlessly, 24/7. Trust in a seamless experience that never goes down.",
    icon: <IconCloud className="w-6 h-6" />
  }, {
    title: "Scalable Solutions",
    description: "Our architecture adapts to your needs—whether you're growing your business or managing multiple clients.",
    icon: <IconRouteAltLeft className="w-6 h-6" />
  }, {
    title: "Support, Always",
    description: "We're here when you need us—whether it's us or our AI agents, we're always available to solve your problems.",
    icon: <IconHelp className="w-6 h-6" />
  }, {
    title: "Risk-Free Satisfaction",
    description: "Not satisfied? We'll work with you until we get it right—or we'll offer a refund, no questions asked.",
    icon: <IconAdjustmentsBolt className="w-6 h-6" />
  }, {
    title: "And Beyond",
    description: "Our commitment goes beyond just the basics. We're here to keep innovating and delivering beyond your expectations.",
    icon: <IconHeart className="w-6 h-6" />
  }];
  
  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-16">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 sm:mb-6 font-syne">
            The
            <span className="text-green-600">
              Arsenal
            </span> 
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto font-jakarta">
            Your website is your first impression. We make sure it’s unforgettable, high-converting, and built to dominate.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => <Feature key={feature.title} {...feature} index={index} />)}
        </div>
      </div>
    </div>
  );
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
  return (
    <div className={cn("flex flex-col lg:border-r py-6 sm:py-8 lg:py-10 relative group/feature border-gray-200 bg-white", 
      (index === 0 || index === 4) && "lg:border-l border-gray-200", 
      index < 4 && "lg:border-b border-gray-200")}
    >
      {index < 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-green-600 to-transparent pointer-events-none" />}
      {index >= 4 && <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-green-600 to-transparent pointer-events-none" />}
      <div className="mb-3 sm:mb-4 relative z-10 px-6 sm:px-8 lg:px-10 text-black group-hover/feature:text-custom-green transition-colors">
        {icon}
      </div>
      <div className="text-lg sm:text-xl font-bold mb-2 relative z-10 px-6 sm:px-8 lg:px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-300 group-hover/feature:bg-green transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-gray-800 font-syne group-hover/feature:text-green">
          {title}
        </span>
      </div>
      <p className="text-sm max-w-xs relative z-10 px-6 sm:px-8 lg:px-10 text-gray-600 font-jakarta">
        {description}
      </p>
    </div>
  );
};

export default Features;
