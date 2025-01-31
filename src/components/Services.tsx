import { Card } from "./ui/card";

const services = [
  {
    title: "Web Development",
    description: "Building responsive websites with custom designs, secure hosting, and efficient domain management for businesses and startups.",
    image: "/lovable-uploads/897f3ea0-40cb-437c-bd9f-b222cedf0f46.png"
  },
  {
    title: "UI/UX Design",
    description: "Designing visually appealing, user-centered interfaces for seamless navigation, ensuring optimal user engagement and satisfaction.",
    image: "/lovable-uploads/2866c035-24bd-4228-bf9f-af01f2e821da.png"
  },
  {
    title: "Web Design",
    description: "Crafting visually stunning websites with intuitive navigation, ensuring a seamless user experience across all devices.",
    image: "/lovable-uploads/86b95d70-fc21-4992-a2b3-f3a5c0f8bf4c.png"
  },
  {
    title: "Hosting Services",
    description: "Providing reliable hosting solutions with high uptime, security features, and scalable options for business websites.",
    image: "/lovable-uploads/897f3ea0-40cb-437c-bd9f-b222cedf0f46.png"
  },
  {
    title: "WordPress & Shopify",
    description: "Customizing WordPress, Wix, and Shopify platforms for unique, user-friendly websites tailored to your brand.",
    image: "/lovable-uploads/195a50df-31db-4c8f-941c-e9bdab720cf1.png"
  },
  {
    title: "SEO Optimization",
    description: "Optimizing website content and structure to improve visibility on search engines, driving organic traffic growth.",
    image: "/lovable-uploads/195a50df-31db-4c8f-941c-e9bdab720cf1.png"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-custom-orange font-syne text-4xl font-bold mb-4">ALL SERVICES</h2>
          <h3 className="text-white font-syne text-5xl font-bold mb-6">
            Complete Business <span className="text-custom-orange">Solutions</span> Delivered
          </h3>
          <p className="text-gray-300 font-jakarta max-w-3xl mx-auto">
            We offer comprehensive business solutions, expertly designed to enhance efficiency, drive growth, and achieve exceptional results for your company.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-black/10 backdrop-blur-sm border-custom-orange/20 p-6 hover:transform hover:-translate-y-2 transition-all duration-300">
              <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-white font-syne text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-gray-300 font-jakarta text-sm mb-4">{service.description}</p>
              <a href="#" className="text-custom-orange hover:text-white font-jakarta font-medium transition-colors">
                Learn More →
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;