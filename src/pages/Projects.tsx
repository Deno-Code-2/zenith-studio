
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
}

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }

  return data;
};

const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((project, index) => {
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

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="container mx-auto px-8 lg:px-16 pt-32">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-syne">
            Our <span className="text-custom-orange">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto font-jakarta">
            Explore our portfolio of successful projects. Each project represents our commitment to excellence and innovation in digital solutions.
          </p>
        </div>

        {isLoading ? (
          <div className="text-center text-gray-400">Loading projects...</div>
        ) : error ? (
          <div className="text-center text-red-400">Error loading projects. Please try again later.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects?.map((project) => (
              <div
                key={project.id}
                className="project-card group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white font-syne">{project.title}</h3>
                    <a 
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-orange hover:text-custom-orange/80 transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <p className="text-gray-400 font-jakarta">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Projects;
