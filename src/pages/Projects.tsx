
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
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import ProjectCard from "@/components/ProjectCard";

gsap.registerPlugin(ScrollTrigger);

type ProjectType = 'All' | 'Landing Page' | 'SaaS Website' | 'Startup Website' | 'E-commerce Website' | 'AI Website';

interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  project_type: string;
}

const filterOptions: ProjectType[] = [
  'All', 
  'AI Website',
  'SaaS Website', 
  'E-commerce Website',
  'Startup Website',
  'Landing Page'
];

const fetchProjects = async () => {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }

  return data || [];
};

const Projects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  const [activeFilter, setActiveFilter] = useState<ProjectType>('All');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

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
    <div className="min-h-screen bg-white">
      <Header />
      <PageTransition>
        <main className="max-w-7xl mx-auto px-8 lg:px-16 pt-32">
          <div className="text-center mb-16">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-6 font-syne text-black"
            >
              Our <span className="text-custom-orange">Projects</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-600 max-w-3xl mx-auto font-jakarta"
            >
              Explore our portfolio of successful projects. Each project represents our commitment to excellence and innovation in digital solutions.
            </motion.p>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {filterOptions.map((option, index) => (
              <motion.div
                key={option}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                <Button
                  onClick={() => setActiveFilter(option)}
                  variant="ghost"
                  className={`
                    rounded-full px-6 py-2 font-jakarta transition-all duration-300
                    ${activeFilter === option 
                      ? "bg-custom-orange text-white shadow-md hover:bg-custom-orange/90 hover:text-white" 
                      : "bg-transparent text-black border border-gray-200 hover:bg-gray-100 hover:text-black"}
                  `}
                >
                  {option}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {isLoading ? (
            <div className="text-center text-gray-600 py-20">
              <div className="w-10 h-10 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin mx-auto mb-4"></div>
              <p>Loading projects...</p>
            </div>
          ) : error ? (
            <div className="text-center text-red-400">Error loading projects. Please try again later.</div>
          ) : filteredProjects?.length === 0 ? (
            <div className="text-center text-gray-600 py-20">
              <p>No projects found for this category. Try selecting a different filter.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {filteredProjects?.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          )}
        </main>
      </PageTransition>
      <AgencyShowcase />
      <Footer />
    </div>
  );
};

export default Projects;
