'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Server,
  Settings
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code,
    skills: [
      { name: 'React/Next.js', level: 95, icon: '⚛️' },
      { name: 'TypeScript', level: 90, icon: '🔷' },
      { name: 'Tailwind CSS', level: 88, icon: '🎨' },
      { name: 'Vue.js', level: 85, icon: '💚' }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 92, icon: '🟢' },
      { name: 'Python', level: 88, icon: '🐍' },
      { name: 'PHP/Laravel', level: 85, icon: '🔴' },
      { name: 'Go', level: 80, icon: '🔵' }
    ]
  },
  {
    title: 'Database & Storage',
    icon: Database,
    skills: [
      { name: 'PostgreSQL', level: 90, icon: '🐘' },
      { name: 'MongoDB', level: 85, icon: '🍃' },
      { name: 'Redis', level: 88, icon: '⚡' },
      { name: 'MySQL', level: 85, icon: '🗄️' }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { name: 'AWS', level: 92, icon: '☁️' },
      { name: 'Docker', level: 90, icon: '🐳' },
      { name: 'Kubernetes', level: 85, icon: '⚙️' },
      { name: 'Terraform', level: 82, icon: '🏗️' }
    ]
  },
  {
    title: 'Security & Tools',
    icon: Shield,
    skills: [
      { name: 'CI/CD', level: 90, icon: '🔄' },
      { name: 'Security Scanning', level: 88, icon: '🔒' },
      { name: 'Git/GitHub', level: 95, icon: '📚' },
      { name: 'Linux', level: 85, icon: '🐧' }
    ]
  },
  {
    title: 'Tools & Others',
    icon: Settings,
    skills: [
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 80, icon: '🎯' },
      { name: 'Postman', level: 90, icon: '📮' },
      { name: 'Jira', level: 85, icon: '📋' }
    ]
  }
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 px-6 bg-gray-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, secure applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="glass-card p-6 hover-glow transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <category.icon size={24} className="text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.1) }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{skill.icon}</span>
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-blue-400 font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                        className="bg-gradient-to-r from-blue-500 to-gray-400 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}