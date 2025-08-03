'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { 
    name: 'React', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    color: 'hover:shadow-blue-400/50'
  },
  { 
    name: 'Node.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    color: 'hover:shadow-green-400/50'
  },
  { 
    name: 'Python', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
    color: 'hover:shadow-yellow-400/50'
  },
  { 
    name: 'Docker', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
    color: 'hover:shadow-blue-500/50'
  },
  { 
    name: 'Kubernetes', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
    color: 'hover:shadow-indigo-400/50'
  },
  { 
    name: 'AWS', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
    color: 'hover:shadow-orange-400/50'
  },
  { 
    name: 'MongoDB', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg',
    color: 'hover:shadow-green-500/50'
  },
  { 
    name: 'PostgreSQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    color: 'hover:shadow-blue-600/50'
  },
  { 
    name: 'TypeScript', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    color: 'hover:shadow-blue-400/50'
  },
  { 
    name: 'Next.js', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
    color: 'hover:shadow-gray-400/50'
  },
  { 
    name: 'GraphQL', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg',
    color: 'hover:shadow-pink-400/50'
  },
  { 
    name: 'Redis', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg',
    color: 'hover:shadow-red-500/50'
  },
  { 
    name: 'Jenkins', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg',
    color: 'hover:shadow-blue-500/50'
  },
  { 
    name: 'Terraform', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/terraform/terraform-original.svg',
    color: 'hover:shadow-indigo-500/50'
  },
  { 
    name: 'Git', 
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
    color: 'hover:shadow-orange-500/50'
  },
];

export default function SkillsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % (skills.length - itemsPerView + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const visibleSkills = skills.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
            Tools and technologies I work with
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div 
            className="flex space-x-8 justify-center items-center"
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {visibleSkills.map((skill, index) => (
              <motion.div
                key={`${skill.name}-${currentIndex}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col items-center p-8 glass-card transition-all duration-300 hover:scale-105 min-w-[140px] group hover:shadow-xl ${skill.color}`}
              >
                <div className="w-16 h-16 mb-4 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      // Fallback to a simple colored circle if image fails
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div 
                    className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl"
                    style={{ display: 'none' }}
                  >
                    {skill.name.charAt(0)}
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Carousel Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: skills.length - itemsPerView + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-indigo-500 w-8' 
                    : 'bg-gray-400 dark:bg-gray-600 w-2 hover:bg-indigo-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}