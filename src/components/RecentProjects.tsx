
import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

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
    .order('created_at', { ascending: false })
    .limit(3);

  if (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
  return data;
};

const RecentProjects = () => {
  const navigate = useNavigate();
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['recent-projects'],
    queryFn: fetchProjects
  });

  if (isLoading) {
    return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center">
          <p className="text-gray-600 font-jakarta">Loading projects...</p>
        </div>
      </div>
    </section>;
  }

  if (error) {
    return <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center">
          <p className="text-red-400 font-jakarta">Error loading projects. Please try again later.</p>
        </div>
      </div>
    </section>;
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 font-syne">
            Tech <span className="text-custom-orange">MEETS</span> Precision
          </h2>
          <p className="text-center text-black font-jakarta max-w-2xl mx-auto">
            Zenith Studio's recent projects feature cutting-edge design, user-friendly interfaces, and tailored solutions for clients.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects?.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative overflow-hidden rounded-xl bg-white backdrop-blur-sm border border-black transition-all duration-300 hover:border-custom-orange/40"
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <motion.img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-black font-syne">
                      {project.title}
                    </h3>
                    <motion.a 
                      href={project.project_url} 
                      className="text-black hover:text-custom-orange transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </div>
                  <p className="text-black font-jakarta text-sm">
                    {project.description}
                  </p>
                  <motion.div 
                    className="mt-3"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="bg-custom-orange/10 text-custom-orange px-2 py-1 rounded-full text-xs">
                      {project.project_type}
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Button 
              onClick={() => navigate('/projects')}
              className="font-jakarta text-white bg-custom-orange hover:bg-custom-orange/90"
            >
              View All Projects
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
