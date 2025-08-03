'use client';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitFork } from 'lucide-react';
import { useState } from 'react';

export default function ProjectCard({ project, index, controls }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

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
      className="glass-card overflow-hidden hover-glow transition-all duration-300 group hover:scale-105"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-blue-500 via-slate-500 to-gray-500 overflow-hidden">
        {!imageError && (project.image || project.fallbackImage) ? (
          <img
            src={imageError ? project.fallbackImage : project.image}
            alt={`${project.name} preview`}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={handleImageError}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-white">
            <div className="text-center">
              <div className="text-4xl mb-2">⚡</div>
              <div className="text-lg font-semibold">{project.name}</div>
            </div>
          </div>
        )}
        
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          <a
            href={project.html_url}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.name} on GitHub`}
          >
            <Github size={24} className="text-white" />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.name} live demo`}
            >
              <ExternalLink size={24} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {project.name}
          </h3>
          <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <Star size={16} />
              <span>{project.stargazers_count || 0}</span>
            </div>
            {project.forks_count > 0 && (
              <div className="flex items-center space-x-1">
                <GitFork size={16} />
                <span>{project.forks_count}</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
          {project.description}
        </p>
        
        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics?.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-xs rounded-full font-medium hover:bg-blue-500/20 dark:hover:bg-blue-500/30 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
        
        {/* Footer */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
          {project.language && (
            <div className="flex items-center space-x-2">
              <div className={`w-3 h-3 rounded-full ${getLanguageColor(project.language)}`}></div>
              <span className="text-sm text-gray-600 dark:text-gray-400">{project.language}</span>
            </div>
          )}
          
          <div className="flex space-x-2">
            <a
              href={project.html_url}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={18} />
            </a>
            {project.homepage && (
              <a
                href={project.homepage}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Helper function to get language colors
function getLanguageColor(language) {
  const colors = {
    JavaScript: 'bg-yellow-500',
    TypeScript: 'bg-blue-500',
    Python: 'bg-green-500',
    Java: 'bg-red-500',
    'C++': 'bg-purple-500',
    Go: 'bg-cyan-500',
    Rust: 'bg-orange-500',
    PHP: 'bg-blue-500',
    Ruby: 'bg-red-400',
    Swift: 'bg-orange-400',
    Kotlin: 'bg-purple-400',
    Dart: 'bg-blue-400',
    Solidity: 'bg-gray-600',
    Shell: 'bg-gray-500',
    HTML: 'bg-orange-600',
    CSS: 'bg-blue-600'
  };
  
  return colors[language] || 'bg-gray-500';
}