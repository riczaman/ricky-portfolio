'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { fetchGitHubProjects } from '../../lib/github';

export default function ProjectsSection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const projectsRef = useRef(null);
  const isProjectsInView = useInView(projectsRef, { once: true, margin: '-100px' });
  const projectsControls = useAnimation();

  // Fetch GitHub projects
  useEffect(() => {
    const loadProjects = async () => {
      try {
        const data = await fetchGitHubProjects();
        setProjects(data);
      } catch (error) {
        console.error('Error loading projects:', error);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  // Animate projects when in view
  useEffect(() => {
    if (isProjectsInView) {
      projectsControls.start('visible');
    }
  }, [isProjectsInView, projectsControls]);

  return (
    <section id="projects" ref={projectsRef} className="relative py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isProjectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A selection of my recent work, automatically synced from GitHub
          </p>
        </motion.div>
        
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index}
                controls={projectsControls}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}