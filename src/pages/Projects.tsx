import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useQuery } from "@tanstack/react-query";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { Helmet } from "react-helmet-async";
import ServiceCTA from "@/components/services/ServiceCTA";

// Declare the dataLayer property on the window object
declare global {
  interface Window {
    dataLayer: any[];
  }
}

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

// Comprehensive projects list with all the requested projects
const sampleProjects: Project[] = [
  // AI Websites
  {
    id: "ai-1",
    title: "QuantumDock AI",
    description: "A sophisticated platform for AI model training and deployment, featuring an intuitive interface for data scientists and researchers.",
    image_url: "https://placehold.co/600x400/6141e4/ffffff?text=QuantumDock+AI",
    project_url: "#",
    project_type: "AI Website"
  },
  {
    id: "ai-2",
    title: "Synthetix-AI",
    description: "Built specifically for AI startups, this website helps them present their offerings and get noticed with a modern, tech-forward design.",
    image_url: "https://placehold.co/600x400/41a4e4/ffffff?text=Synthetix-AI",
    project_url: "#",
    project_type: "AI Website"
  },
  {
    id: "ai-3",
    title: "Code Yeti",
    description: "AI-Powered Code Reviews platform offering faster, smarter, and better code analysis for development teams of all sizes.",
    image_url: "https://placehold.co/600x400/41e48c/ffffff?text=Code+Yeti",
    project_url: "#",
    project_type: "AI Website"
  },
  {
    id: "ai-4",
    title: "Signals HQ",
    description: "Website redesign for an AI Audit solution, focusing on user experience and clear presentation of complex AI compliance tools.",
    image_url: "https://placehold.co/600x400/e44182/ffffff?text=Signals+HQ",
    project_url: "#",
    project_type: "AI Website"
  },
  
  // E-commerce Websites
  {
    id: "ecom-1",
    title: "The Cloth Village",
    description: "A premium e-commerce platform for a clothing brand with advanced product filtering and a seamless checkout experience.",
    image_url: "https://placehold.co/600x400/a141e4/ffffff?text=Cloth+Village",
    project_url: "#",
    project_type: "E-commerce Website"
  },
  
  // SaaS & Service Websites
  {
    id: "saas-1",
    title: "Social Card",
    description: "An innovative SaaS platform for creating and managing digital business cards with social media integration and analytics.",
    image_url: "https://placehold.co/600x400/e47e41/ffffff?text=Social+Card",
    project_url: "#",
    project_type: "SaaS Website"
  },
  {
    id: "saas-2",
    title: "Hireme Dev",
    description: "A talent marketplace for developers with a focus on project-based hiring and skill verification through practical assessments.",
    image_url: "https://placehold.co/600x400/4156e4/ffffff?text=Hireme+Dev",
    project_url: "#",
    project_type: "SaaS Website"
  },
  {
    id: "saas-3",
    title: "Job Waala Dost",
    description: "New custom website for a client focused on job matching and career guidance, with a user-friendly interface and powerful search capabilities.",
    image_url: "https://placehold.co/600x400/41e463/ffffff?text=Job+Waala+Dost",
    project_url: "#",
    project_type: "SaaS Website"
  },
  
  // Redesign Projects
  {
    id: "redesign-1",
    title: "DevCreations",
    description: "A comprehensive redesign for a development agency, showcasing their portfolio and services with improved visual hierarchy and conversion paths.",
    image_url: "https://placehold.co/600x400/e44141/ffffff?text=DevCreations",
    project_url: "#",
    project_type: "Startup Website"
  },
  {
    id: "redesign-2",
    title: "CropNow",
    description: "Website redesign to a modern look for an agricultural technology company, emphasizing ease of use and clear information architecture.",
    image_url: "https://placehold.co/600x400/41e4d9/ffffff?text=CropNow",
    project_url: "#",
    project_type: "Startup Website"
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

  // Updated filter options to include AI Website category
  const filterOptions: ProjectType[] = [
    'All', 
    'AI Website',
    'SaaS Website', 
    'E-commerce Website',
    'Startup Website',
    'Landing Page'
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Initialize Google Analytics
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-4771BVNJVP');
    
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
        <Helmet>
        <title>Our Projects | Zenith Studio</title>
        <meta name="description" content="Get in touch with Zenith Studio for your next digital project. We're here to help transform your ideas into reality." />
        <meta property="og:title" content="Our Projects | Zenith Studio" />
        <meta property="og:description" content="Get in touch with Zenith Studio for your next digital project. We're here to help transform your ideas into reality." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenith-s.vercel.app/projects" />
        <link rel="canonical" href="https://zenith-s.vercel.app/projects" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4771BVNJVP"></script>
      </Helmet>

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

          {/* Filter Options with Animation */}
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
                      ? "bg-custom-orange text-white" 
                      : "bg-transparent text-black border border-gray-200 hover:custom-orange"}
                  `}
                >
                  {option}
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Project listing section */}
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
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="project-card group relative overflow-hidden rounded-xl bg-white shadow-md border border-custom-orange/10 hover:border-custom-orange/40 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="aspect-video overflow-hidden max-h-[200px] flex items-center justify-center">
                    <img 
                      src={project.image_url} 
                      alt={project.title}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
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
                    <p className="text-gray-600 font-jakarta text-sm mb-4">{project.description}</p>
                    <div className="mt-3">
                      <span className="bg-custom-orange/10 text-custom-orange px-3 py-1 rounded-full text-xs font-medium">
                        {project.project_type}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </main>
      </PageTransition>
      <ServiceCTA />
      <Footer />
    </div>
  );
};

export default Projects;