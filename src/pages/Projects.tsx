
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";
import { Button } from "@/components/ui/button";

gsap.registerPlugin(ScrollTrigger);

type ProjectType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  project_type: string;
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

  const [activeFilter, setActiveFilter] = useState<ProjectType>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  // Filter options
  const filterOptions: ProjectType[] = [
    'All', 
    'Landing Page', 
    'SaaS Website', 
    'Startup Website', 
    'E-commerce Website'
  ];

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

  useEffect(() => {
    if (!projects) return;
    
    if (activeFilter === 'All') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.project_type === activeFilter)
      );
    }
  }, [activeFilter, projects]);

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main className="max-w-7xl mx-auto px-8 lg:px-16 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-syne">
            Our <span className="text-custom-orange">Projects</span>
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto font-jakarta">
            Explore our portfolio of successful projects. Each project represents our commitment to excellence and innovation in digital solutions.
          </p>
        </div>

        {/* Filter Options */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filterOptions.map((option) => (
            <Button
              key={option}
              onClick={() => setActiveFilter(option)}
              variant={activeFilter === option ? "default" : "outline"}
              className={`
                rounded-full px-6 py-2 font-jakarta
                ${activeFilter === option 
                  ? "bg-custom-orange hover:bg-custom-orange/90 text-white" 
                  : "border-custom-orange/20 text-white hover:bg-custom-orange/10"}
              `}
            >
              {option}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="text-center text-gray-400 py-20">
            <div className="w-10 h-10 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin mx-auto mb-4"></div>
            <p>Loading projects...</p>
          </div>
        ) : error ? (
          <div className="text-center text-red-400">Error loading projects. Please try again later.</div>
        ) : filteredProjects?.length === 0 ? (
          <div className="text-center text-gray-400 py-20">
            <p>No projects found for this category. Try selecting a different filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects?.map((project) => (
              <div
                key={project.id}
                className="project-card group relative overflow-hidden rounded-xl bg-black/50 backdrop-blur-sm border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden max-h-[180px]">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white font-syne">{project.title}</h3>
                    <a 
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-orange hover:text-custom-orange/80 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 font-jakarta text-sm">{project.description}</p>
                  <div className="mt-3">
                    <span className="bg-custom-orange/10 text-custom-orange px-2 py-1 rounded-full text-xs">
                      {project.project_type}
                    </span>
                  </div>
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
