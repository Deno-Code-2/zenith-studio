import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ExternalLink } from "lucide-react";
import AgencyShowcase from "@/components/AgencyShowcase";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    
    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project, index) => {
      gsap.from(project, {
        scrollTrigger: {
          trigger: project,
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

  const projects = [
    {
      title: "Strategic Planning",
      description: "Every project begins with thorough research and strategic planning to ensure a holistic understanding of our clients' objectives and target audience.",
      image: "/lovable-uploads/b3f33bc5-09c9-48be-9b85-b448230dbcb0.png"
    },
    {
      title: "Customized Solutions",
      description: "We believe in tailoring our services to suit each project's unique requirements, resulting in solutions that perfectly align with our clients' brand identities.",
      image: "/lovable-uploads/109e990b-ee2c-458e-8383-158a22aa6437.png"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-syne">
            Key Features of <span className="text-custom-orange">Our Projects</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto font-jakarta">
            Partnering with Zenith Studio offers a multitude of advantages. Experience increased brand visibility, improved customer engagement, and higher ROI. Our tailored solutions are designed to meet your unique business needs, ensuring lasting success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white font-syne">{project.title}</h3>
                  <ExternalLink className="w-6 h-6 text-custom-orange" />
                </div>
                <p className="text-gray-400 font-jakarta">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Projects;
