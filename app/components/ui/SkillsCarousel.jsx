'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'React', icon: '⚛️', color: 'text-blue-400' },
  { name: 'Node.js', icon: '🟢', color: 'text-green-400' },
  { name: 'Python', icon: '🐍', color: 'text-yellow-400' },
  { name: 'Docker', icon: '🐳', color: 'text-blue-500' },
  { name: 'Kubernetes', icon: '⚙️', color: 'text-purple-400' },
  { name: 'AWS', icon: '☁️', color: 'text-orange-400' },
  { name: 'MongoDB', icon: '🍃', color: 'text-green-500' },
  { name: 'PostgreSQL', icon: '🐘', color: 'text-blue-600' },
  { name: 'TypeScript', icon: '📘', color: 'text-blue-400' },
  { name: 'Next.js', icon: '▲', color: 'text-gray-800 dark:text-white' },
  { name: 'GraphQL', icon: '📊', color: 'text-pink-400' },
  { name: 'Redis', icon: '🔴', color: 'text-red-500' },
  { name: 'Jenkins', icon: '🏗️', color: 'text-blue-500' },
  { name: 'Terraform', icon: '🏢', color: 'text-purple-500' },
  { name: 'Git', icon: '📋', color: 'text-orange-500' },
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
                className="flex flex-col items-center p-6 glass-card hover:shadow-xl transition-all duration-300 hover:scale-105 min-w-[120px] hover-glow"
              >
                <div className={`text-4xl mb-3 ${skill.color}`}>
                  {skill.icon}
                </div>
                <span className="text-sm font-semibold text-gray-800 dark:text-gray-300">
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
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-indigo-500 w-8' 
                    : 'bg-gray-400 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}