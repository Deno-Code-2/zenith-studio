
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Zap, MonitorSmartphone, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AgencyShowcase from "@/components/AgencyShowcase";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);

const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description: "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const services = document.querySelectorAll('.service-card');
    services.forEach((service, index) => {
      gsap.from(service, {
        scrollTrigger: {
          trigger: service,
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        delay: index * 0.2,
        ease: "power3.out"
      });
    });
  }, []);

  const services = [
    {
      icon: <MonitorSmartphone className="w-8 h-8" />,
      title: "Web Design",
      description: "Our Web Design service is all about creating visually stunning and user-friendly websites that leave a lasting impression on your audience.",
      price: "1,500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Web Development",
      description: "Our Web Development service is focused on turning your website into a powerful digital asset.",
      price: "1,800"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile App Development",
      description: "With our Mobile App Development service, we harness the power of mobile technology to create cutting-edge applications.",
      price: "2,500"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "In the digital age, marketing is a critical aspect of your business's success.",
      price: "1,900"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <LoadingScreen />
      <Header />
      <main className="container mx-auto px-4 pt-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-syne">
            Our <span className="text-custom-orange">Services</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto font-jakarta">
            At Zenith Studio, we are committed to providing exceptional digital solutions tailored to suit your unique business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card bg-black/50 backdrop-blur-sm border border-neutral-800 rounded-xl p-8 hover:border-neutral-700 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-6">
                <div className="text-neutral-400">
                  {service.icon}
                </div>
              </div>
              <h2 className="text-2xl font-bold text-white mb-4 font-syne">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-6 font-jakarta">
                {service.description}
              </p>
              <div className="flex items-center justify-between">
                <p className="text-white font-syne">
                  Starts at ${service.price}
                </p>
                <Button variant="outline">
                  Book a Call
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Services;
