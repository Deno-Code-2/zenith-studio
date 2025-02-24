
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import AgencyShowcase from "@/components/AgencyShowcase";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
} from "@tabler/icons-react";

gsap.registerPlugin(ScrollTrigger);

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100">
    <img 
      src="https://via.placeholder.com/600x400" 
      alt="Service" 
      className="w-full h-full object-cover rounded-xl"
    />
  </div>
);

const items = [
  {
    title: "Web Design",
    description: "Create visually stunning and user-friendly websites that leave a lasting impression on your audience.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    price: "1,500"
  },
  {
    title: "Web Development",
    description: "Transform your website into a powerful digital asset with cutting-edge development solutions.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    price: "1,800"
  },
  {
    title: "Mobile Development",
    description: "Harness the power of mobile technology to create innovative and engaging applications.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    price: "2,500"
  },
  {
    title: "Digital Marketing",
    description: "Boost your online presence and reach your target audience with strategic digital marketing.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    price: "1,900"
  }
];

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black">
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

        <div className="mb-20">
          <BentoGrid className="max-w-4xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={
                  <div>
                    <p className="mb-4">{item.description}</p>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-white font-syne">
                        Starts at ${item.price}
                      </p>
                      <Button variant="outline">
                        Book a Call
                      </Button>
                    </div>
                  </div>
                }
                header={item.header}
                icon={item.icon}
                className={i === 3 ? "md:col-span-2" : ""}
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
