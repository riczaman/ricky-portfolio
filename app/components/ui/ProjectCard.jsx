'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';

export default function ProjectCard({ project, index, controls }) {
  // Mock project image - replace with actual project screenshots
  const projectImage = project.image || `https://picsum.photos/400/200?random=${project.id}`;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay: index * 0.2,
            duration: 0.6,
            ease: "easeOut"
          }
        }
      }}
      className="glass-card overflow-hidden hover-glow transition-all duration-300 group"
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={projectImage}
          alt={`${project.name} preview`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
        
        {/* Overlay Links */}
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a
            href={project.html_url}
            className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-blue-600/80 transition-all duration-200"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={18} />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              className="p-2 bg-gray-900/80 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-blue-600/80 transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>

        {/* Project Title Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
            {project.name}
          </h3>
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <p className="text-gray-300 mb-4 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        
        {/* Stats */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          {project.language && (
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>{project.language}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Star size={14} />
            <span>{project.stargazers_count || 0}</span>
          </div>
          <div className="flex items-center gap-1">
            <GitFork size={14} />
            <span>{project.forks_count || 0}</span>
          </div>
        </div>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.topics?.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
            >
              {topic}
            </span>
          ))}
          {project.topics?.length > 3 && (
            <span className="px-3 py-1 bg-gray-600/20 text-gray-400 text-xs rounded-full">
              +{project.topics.length - 3} more
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}