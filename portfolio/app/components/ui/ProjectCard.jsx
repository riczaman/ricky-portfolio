'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ project, index, controls }) {
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
      className="glass-card p-6 hover-glow transition-all duration-300 group"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white group-hover:text-indigo-400 transition-colors">
          {project.name}
        </h3>
        <div className="flex space-x-2">
          <a
            href={project.html_url}
            className="text-gray-400 hover:text-white transition-colors"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={20} />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>
      
      <p className="text-gray-300 mb-4 leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          {project.topics?.slice(0, 3).map((topic) => (
            <span
              key={topic}
              className="px-2 py-1 bg-indigo-500/20 text-indigo-300 text-xs rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
        
        <div className="flex items-center space-x-4 text-sm text-gray-400">
          {project.language && (
            <span className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
              {project.language}
            </span>
          )}
          <span className="flex items-center">
            ⭐ {project.stargazers_count || 0}
          </span>
        </div>
      </div>
    </motion.div>
  );
}