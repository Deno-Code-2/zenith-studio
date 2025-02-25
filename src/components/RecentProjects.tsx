
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

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

const BorderBeam = () => {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-px rounded-[11px] dark:bg-zinc-900" />
      <div className="absolute inset-0 rounded-xl dark:bg-zinc-800" />
      <div className="absolute inset-px rounded-[11px] dark:bg-zinc-900" />
      <div
        className="absolute h-full w-[200%] animate-[beam_3s_ease-in-out_infinite] bg-gradient-to-r from-transparent via-zinc-100/10 to-transparent"
        style={{
          maskImage: "linear-gradient(to right, transparent, black, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black, transparent)",
        }}
      />
    </div>
  );
};

const RecentProjects = () => {
  const { data: projects, isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-gradient-to-b from-hunter-green to-dark-green">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-300">Loading projects...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-gradient-to-b from-hunter-green to-dark-green">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-red-400">Error loading projects. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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
          {projects?.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-fern-green/10 backdrop-blur-sm border border-moss-green/20 transition-all duration-300 hover:border-moss-green/40"
            >
              <BorderBeam />
              <div className="relative">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-mindaro font-syne">{project.title}</h3>
                    <a 
                      href={project.project_url}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
