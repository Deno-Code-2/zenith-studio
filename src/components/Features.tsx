
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

const features = [
  {
    title: "Expert Development",
    description: "Our team of skilled developers creates robust, scalable solutions.",
    icon: <IconTerminal2 className="w-6 h-6" />,
  },
  {
    title: "User-Centric Design",
    description: "Beautiful, intuitive interfaces that delight your users.",
    icon: <IconEaseInOut className="w-6 h-6" />,
  },
  {
    title: "Transparent Pricing",
    description: "Clear, upfront pricing with no hidden fees or surprises.",
    icon: <IconCurrencyDollar className="w-6 h-6" />,
  },
  {
    title: "Reliable Hosting",
    description: "99.9% uptime guarantee with robust cloud infrastructure.",
    icon: <IconCloud className="w-6 h-6" />,
  },
  {
    title: "Scalable Solutions",
    description: "Applications that grow with your business needs.",
    icon: <IconRouteAltLeft className="w-6 h-6" />,
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance from our dedicated team.",
    icon: <IconHelp className="w-6 h-6" />,
  },
  {
    title: "Satisfaction Guaranteed",
    description: "We work until you're completely satisfied with the results.",
    icon: <IconAdjustmentsBolt className="w-6 h-6" />,
  },
  {
    title: "Client-Focused",
    description: "Your success is our priority - we're here to help you grow.",
    icon: <IconHeart className="w-6 h-6" />,
  },
];

const Features = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-20 bg-black", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-24"> {/* Increased bottom margin */}
          <h2 className="text-4xl font-bold mb-8 font-syne text-white"> {/* Increased bottom margin */}
            Why Choose <span className="text-custom-orange">Zenith Studio</span>
          </h2>
          <p className="text-xl text-gray-400 font-jakarta max-w-2xl mx-auto">
            We deliver excellence through our comprehensive suite of services
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 gap-6">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col border border-custom-orange/20 rounded-lg p-6 relative group hover:border-custom-orange/40 transition-all duration-300 bg-black"
      )}
    >
      <div className="mb-4 relative z-10 text-custom-orange">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-custom-orange/20 group-hover:bg-custom-orange transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block text-white font-syne">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 relative z-10 font-jakarta">
        {description}
      </p>
    </div>
  );
};

export default Features;
