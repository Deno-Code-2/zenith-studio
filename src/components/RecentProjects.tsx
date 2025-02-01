import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Alphankela",
    image: "/lovable-uploads/My-Logo.png",
    description: "E-commerce fashion website with latest collections",
    link: "#"
  },
  {
    id: 2,
    name: "Brownway Medical",
    image: "/lovable-uploads/My-Logo.png",
    description: "Medical equipment and supplies platform",
    link: "#"
  },
  {
    id: 3,
    name: "Nagar Security Group",
    image: "/lovable-uploads/My-Logo.png",
    description: "Security services company website",
    link: "#"
  },
  {
    id: 4,
    name: "Beauty Essence",
    image: "/lovable-uploads/My-Logo.png",
    description: "Beauty products e-commerce platform",
    link: "#"
  }
];

const RecentProjects = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-hunter-green to-dark-green">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-syne">
            Recent <span className="text-moss-green">Projects</span>
          </h2>
          <p className="text-gray-300 font-jakarta max-w-2xl mx-auto">
            Zenith Studio's recent projects feature cutting-edge design, user-friendly interfaces, and tailored solutions for clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-fern-green/10 backdrop-blur-sm border border-moss-green/20 transition-all duration-300 hover:border-moss-green/40"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-mindaro font-syne">{project.name}</h3>
                  <a 
                    href={project.link}
                    className="text-moss-green hover:text-mindaro transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-gray-300 font-jakarta text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;