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

const Features = () => {
  const features = [
    {
      title: "Strategic Design Solutions",
      description:
        "We craft intuitive and engaging digital experiences that captivate your audience.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Seamless Integration",
      description:
        "Our solutions integrate perfectly with your existing systems and workflows.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Competitive Pricing",
      description:
        "Premium digital solutions at competitive rates that deliver exceptional ROI.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Cloud Infrastructure",
      description: "Robust cloud solutions ensuring 99.9% uptime and reliability.",
      icon: <IconCloud />,
    },
    {
      title: "Scalable Architecture",
      description: "Future-proof solutions that grow with your business needs.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Expert Support",
      description:
        "Round-the-clock support from our dedicated team of professionals.",
      icon: <IconHelp />,
    },
    {
      title: "Performance Optimization",
      description:
        "Continuous optimization to ensure peak performance and efficiency.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Client-Centric Approach",
      description: "Your success is our priority - we're committed to your growth.",
      icon: <IconHeart />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 font-syne">
          <span className="text-custom-orange">Innovative</span> Features
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto font-jakarta">
          Discover the powerful features that set us apart and drive your digital success
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
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
        "flex flex-col lg:border-r border-zinc-800 py-10 relative group/feature",
        (index === 0 || index === 4) && "lg:border-l",
        index < 4 && "lg:border-b"
      )}
    >
      <div className="mb-4 relative z-10 px-10 text-custom-orange">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-custom-orange group-hover/feature:bg-custom-orange transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white font-syne">
          {title}
        </span>
      </div>
      <p className="text-sm text-gray-400 max-w-xs relative z-10 px-10 font-jakarta">
        {description}
      </p>
    </div>
  );
};

export default Features;
