
import { useState, useEffect } from "react";
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
    .limit(6);

  if (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
  return data || [];
};

const RecentProjects = () => {
  const navigate = useNavigate();
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['recent-projects'],
    queryFn: fetchProjects
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center">
            <div className="w-10 h-10 border-4 border-custom-orange/20 border-t-custom-orange rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-gray-600 font-jakarta">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="text-center">
            <p className="text-red-400 font-jakarta">Error loading projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-syne">
            Tech <span className="text-custom-orange">MEETS</span> Precision
          </h2>
          <p className="text-center text-black font-jakarta max-w-2xl mx-auto">
            Zenith Studio's recent projects feature cutting-edge design, user-friendly interfaces, and tailored solutions for clients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects?.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl bg-black backdrop-blur-sm border border-black transition-all duration-300 hover:border-custom-orange/40"
            >
              <div className="relative">
                <div className="aspect-video overflow-hidden max-h-[200px] flex items-center justify-center">
                  <img 
                    src={project.image_url} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white font-syne">
                      {project.title}
                    </h3>
                    <a 
                      href={project.project_url} 
                      className="text-neutral-400 hover:text-custom-orange transition-colors"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <p className="text-gray-300 font-jakarta text-sm">
                    {project.description}
                  </p>
                  {/* Display project type as a badge */}
                  <div className="mt-3">
                    <span className="bg-custom-orange/10 text-custom-orange px-2 py-1 rounded-full text-xs">
                      {project.project_type}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button 
            onClick={() => navigate('/projects')}
            className="font-jakarta text-white bg-custom-orange hover:bg-custom-orange/90 hover:text-white"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
