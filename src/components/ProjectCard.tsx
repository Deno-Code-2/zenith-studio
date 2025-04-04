
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: string;
    title: string;
    description: string | null;
    image_url: string | null;
    project_url: string | null;
    project_type: string;
  };
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      key={project.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="project-card group relative overflow-hidden rounded-xl bg-white shadow-md border border-custom-orange/10 hover:border-custom-orange/40 transition-all duration-300 hover:shadow-lg"
    >
      <div className="aspect-video overflow-hidden max-h-[200px] flex items-center justify-center">
        <img 
          src={project.image_url || "/placeholder.svg"} 
          alt={project.title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-black font-syne">{project.title}</h3>
          <a 
            href={project.project_url || "#"}
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
  );
};

export default ProjectCard;
