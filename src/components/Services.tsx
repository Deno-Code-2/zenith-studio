import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ThreeDCard } from "@/components/ui/3d-card";
import { Button } from "@/components/ui/button";
import {
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
} from "@tabler/icons-react";

const items = [
  {
    title: "Web Development",
    description:
      "Crafting stunning and responsive websites tailored to your unique needs.",
    header: "Front-end & Back-end",
    icon: IconBoxAlignTopLeft,
    price: "999",
  },
  {
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing interfaces that enhance user experience.",
    header: "User-Centric Design",
    icon: IconBoxAlignRightFilled,
    price: "799",
  },
  {
    title: "Content Creation",
    description:
      "Producing high-quality, engaging content that resonates with your target audience.",
    header: "Blogs, Articles, Copywriting",
    icon: IconClipboardCopy,
    price: "499",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website's visibility and ranking on search engines to drive organic traffic.",
    header: "Keyword Research & Analysis",
    icon: IconFileBroken,
    price: "599",
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-syne">
            Our <span className="text-custom-orange">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-jakarta">
            We provide comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </div>

        <BentoGrid className="max-w-4xl mx-auto">
          {items.map((item, i) => (
            <ThreeDCard key={i} className={i === 3 ? "md:col-span-2" : ""}>
              <BentoGridItem
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
              >
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-white font-syne">
                    Starts at ${item.price}
                  </p>
                  <Button variant="outline">
                    Book a Call
                  </Button>
                </div>
              </BentoGridItem>
            </ThreeDCard>
          ))}
        </BentoGrid>
      </div>
    </section>
  );
};

export default Services;
