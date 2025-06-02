
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import NewFooter from "@/components/NewFooter";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

// Categories for filtering
const categories = ["All", "Landing Page", "Web Application", "Mobile Application", "UI/UX Design"];

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
  const [filter, setFilter] = useState("All");
  
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  const filteredProjects = filter === "All" 
    ? projects || []
    : (projects || []).filter(project => project.project_type === filter);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Our Projects | Zenith Studio - Portfolio & Case Studies</title>
          <meta name="description" content="Explore our portfolio of successful web development projects, mobile applications, and digital solutions. See how we've helped businesses transform their digital presence." />
          <link rel="canonical" href="https://www.zenith-studio.dev/projects" />
        </Helmet>
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#199e76] mx-auto mb-4"></div>
            <p className="text-gray-600 font-inter">Loading projects...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Helmet>
          <title>Our Projects | Zenith Studio - Portfolio & Case Studies</title>
          <meta name="description" content="Explore our portfolio of successful web development projects, mobile applications, and digital solutions. See how we've helped businesses transform their digital presence." />
          <link rel="canonical" href="https://www.zenith-studio.dev/projects" />
        </Helmet>
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <p className="text-red-600 font-inter">Error loading projects. Please try again later.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Projects | Zenith Studio - Portfolio & Case Studies</title>
        <meta name="description" content="Explore our portfolio of successful web development projects, mobile applications, and digital solutions. See how we've helped businesses transform their digital presence." />
        <link rel="canonical" href="https://www.zenith-studio.dev/projects" />
      </Helmet>
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-5xl font-bold text-black mb-6 font-cal"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Our <span className="text-[#199e76]">Projects</span>
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-700 mb-8 font-inter"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Explore our portfolio of successful projects across various industries. 
                We've helped businesses of all sizes transform their digital presence and achieve their goals.
              </motion.p>
              
              {/* Category Filter */}
              <motion.div 
                className="flex flex-wrap justify-center gap-3 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                      filter === category
                        ? "bg-black text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={project.image_url || '/placeholder.svg'} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded-full mb-3">
                      {project.project_type}
                    </span>
                    <h3 className="text-xl font-bold text-black mb-2 font-cal">{project.title}</h3>
                    <p className="text-gray-600 mb-4 font-inter">{project.description}</p>
                    
                    {project.project_url && (
                      <a 
                        href={project.project_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-[#199e76] hover:text-[#147a5e] font-medium"
                      >
                        View Project <ExternalLink className="ml-1 h-4 w-4" />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {filteredProjects.length === 0 && (
              <div className="text-center py-20">
                <h3 className="text-xl font-medium text-gray-700 mb-2">No projects found</h3>
                <p className="text-gray-500">Try selecting a different category</p>
              </div>
            )}
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-black mb-4 font-cal">Ready to start your project?</h2>
              <p className="text-lg text-gray-700 mb-8 font-inter">
                Let's discuss how we can help you achieve your business goals with a custom digital solution.
              </p>
              <Button
                asChild
                variant="default"
                size="lg"
                className="bg-black text-white hover:bg-gray-800"
              >
                <a href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
        
        <NewFooter />
      </div>
    </div>
  );
};

export default Projects;
