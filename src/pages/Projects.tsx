
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AgencyShowcase from "@/components/AgencyShowcase";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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

// Sample projects for each category when no data is returned from Supabase
const sampleProjects: Project[] = [
  // Landing Page samples
  {
    id: "lp-1",
    title: "Fashion Brand Landing Page",
    description: "Elegant landing page for a high-end fashion brand with interactive elements and smooth animations.",
    image_url: "https://placehold.co/600x400/e4a841/ffffff?text=Fashion+Landing",
    project_url: "#",
    project_type: "Landing Page"
  },
  {
    id: "lp-2",
    title: "Mobile App Showcase",
    description: "Captivating landing page to showcase a mobile application with features highlight and conversion-focused design.",
    image_url: "https://placehold.co/600x400/41a4e4/ffffff?text=App+Showcase",
    project_url: "#",
    project_type: "Landing Page"
  },
  {
    id: "lp-3",
    title: "Event Registration Page",
    description: "Clean and effective landing page designed for an event with integrated registration form and countdown timer.",
    image_url: "https://placehold.co/600x400/41e48c/ffffff?text=Event+Page",
    project_url: "#",
    project_type: "Landing Page"
  },
  // SaaS Website samples
  {
    id: "saas-1",
    title: "CRM Tool Dashboard",
    description: "Modern SaaS platform for customer relationship management with intuitive UI and data visualization.",
    image_url: "https://placehold.co/600x400/6141e4/ffffff?text=CRM+Dashboard",
    project_url: "#",
    project_type: "SaaS Website"
  },
  {
    id: "saas-2",
    title: "Project Management System",
    description: "Comprehensive project management SaaS with task tracking, team collaboration, and reporting features.",
    image_url: "https://placehold.co/600x400/e44182/ffffff?text=Project+Management",
    project_url: "#",
    project_type: "SaaS Website"
  },
  {
    id: "saas-3",
    title: "Marketing Analytics Platform",
    description: "Data-driven marketing SaaS that offers advanced analytics, campaign tracking, and ROI visualization.",
    image_url: "https://placehold.co/600x400/41e4b7/ffffff?text=Marketing+Analytics",
    project_url: "#",
    project_type: "SaaS Website"
  },
  // Startup Website samples
  {
    id: "startup-1",
    title: "Tech Startup Homepage",
    description: "Dynamic website for a tech startup showcasing their innovative product and company culture.",
    image_url: "https://placehold.co/600x400/e47e41/ffffff?text=Tech+Startup",
    project_url: "#",
    project_type: "Startup Website"
  },
  {
    id: "startup-2",
    title: "Fintech Company Website",
    description: "Professional website for a fintech startup featuring their services, team, and investor relations.",
    image_url: "https://placehold.co/600x400/4156e4/ffffff?text=Fintech",
    project_url: "#",
    project_type: "Startup Website"
  },
  {
    id: "startup-3",
    title: "Health Tech Platform",
    description: "Accessible website for a health technology startup with patient testimonials and product information.",
    image_url: "https://placehold.co/600x400/41e463/ffffff?text=Health+Tech",
    project_url: "#",
    project_type: "Startup Website"
  },
  // E-commerce Website samples
  {
    id: "ecom-1",
    title: "Fashion E-commerce Store",
    description: "Stylish e-commerce platform for a clothing brand with advanced filtering and a seamless checkout experience.",
    image_url: "https://placehold.co/600x400/a141e4/ffffff?text=Fashion+Store",
    project_url: "#",
    project_type: "E-commerce Website"
  },
  {
    id: "ecom-2",
    title: "Electronics Marketplace",
    description: "Feature-rich e-commerce website for electronics with product comparisons and user reviews integration.",
    image_url: "https://placehold.co/600x400/e44141/ffffff?text=Electronics+Shop",
    project_url: "#",
    project_type: "E-commerce Website"
  },
  {
    id: "ecom-3",
    title: "Artisanal Food Shop",
    description: "Boutique e-commerce solution for specialty food products with subscription options and gift features.",
    image_url: "https://placehold.co/600x400/41e4d9/ffffff?text=Food+Shop",
    project_url: "#",
    project_type: "E-commerce Website"
  }
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

  // If no projects in database, return sample projects
  if (!data || data.length === 0) {
    return sampleProjects;
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
    <div className="min-h-screen bg-white">
      <Header />
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
                  : "border-custom-orange/20 text-black hover:bg-custom-orange/10"}
              `}
            >
              {option}
            </Button>
          ))}
        </div>

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredProjects?.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="project-card group relative overflow-hidden rounded-xl bg-white shadow-sm border border-custom-orange/20 hover:border-custom-orange/40 transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden max-h-[180px] flex items-center justify-center">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-black font-syne">{project.title}</h3>
                    <a 
                      href={project.project_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-custom-orange hover:text-custom-orange/80 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-600 font-jakarta text-sm">{project.description}</p>
                  <div className="mt-3">
                    <span className="bg-custom-orange/10 text-custom-orange px-2 py-1 rounded-full text-xs">
                      {project.project_type}
                    </span>
                  </div>
                </div>
              </motion.div>
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
