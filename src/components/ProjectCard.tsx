import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import IconWrapper from './IconWrapper';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  category: string;
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
  delay: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, delay }) => {
  return (
    <div 
      className="group relative overflow-hidden rounded-lg bg-black/90 border border-green-500/30 hover:border-green-500 transition-all duration-300"
      style={{
        animation: `scale 0.5s ease-out forwards`,
        animationDelay: `${delay}ms`,
        opacity: 0
      }}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent z-20" />
      </div>

      {/* Project Content */}
      <div className="p-6 relative z-30">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold text-green-400">{project.title}</h3>
          <div className="flex gap-3">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400/70 hover:text-green-400 transition-colors"
            >
              <IconWrapper>
                <Github className="w-5 h-5" />
              </IconWrapper>
            </a>
            <a 
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400/70 hover:text-green-400 transition-colors"
            >
              <IconWrapper>
                <ExternalLink className="w-5 h-5" />
              </IconWrapper>
            </a>
          </div>
        </div>
        
        <p className="text-green-400/70 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-sm rounded-full border border-green-500/30 text-green-400/70 hover:border-green-500 hover:text-green-400 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;