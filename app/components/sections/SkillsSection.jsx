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
      { 
        name: 'React/Next.js', 
        level: 95, 
        // Option 1: Use CDN images
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
        // Option 2: Use local images (put in public/icons/ folder)
        // imageUrl: '/icons/react.svg',
        fallbackIcon: '⚛️',
        color: '#61DAFB' 
      },
      { 
        name: 'TypeScript', 
        level: 90, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
        fallbackIcon: 'TS',
        color: '#3178C6' 
      },
      { 
        name: 'Tailwind CSS', 
        level: 88, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
        fallbackIcon: '🎨',
        color: '#06B6D4' 
      },
      { 
        name: 'Vue.js', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
        fallbackIcon: 'V',
        color: '#4FC08D' 
      }
    ]
  },
  {
    title: 'Backend Development',
    icon: Server,
    skills: [
      { 
        name: 'Node.js', 
        level: 92, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
        fallbackIcon: '⬢',
        color: '#339933' 
      },
      { 
        name: 'Python', 
        level: 88, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        fallbackIcon: '🐍',
        color: '#3776AB' 
      },
      { 
        name: 'PHP/Laravel', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
        fallbackIcon: '🔴',
        color: '#FF2D20' 
      },
      { 
        name: 'Go', 
        level: 80, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
        fallbackIcon: 'Go',
        color: '#00ADD8' 
      }
    ]
  },
  {
    title: 'Database & Storage',
    icon: Database,
    skills: [
      { 
        name: 'PostgreSQL', 
        level: 90, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
        fallbackIcon: '🐘',
        color: '#336791' 
      },
      { 
        name: 'MongoDB', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
        fallbackIcon: '🍃',
        color: '#47A248' 
      },
      { 
        name: 'Redis', 
        level: 88, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
        fallbackIcon: '⚡',
        color: '#DC382D' 
      },
      { 
        name: 'MySQL', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
        fallbackIcon: '🗄️',
        color: '#4479A1' 
      }
    ]
  },
  {
    title: 'DevOps & Cloud',
    icon: Cloud,
    skills: [
      { 
        name: 'AWS', 
        level: 92, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
        fallbackIcon: '☁️',
        color: '#FF9900' 
      },
      { 
        name: 'Docker', 
        level: 90, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
        fallbackIcon: '🐳',
        color: '#2496ED' 
      },
      { 
        name: 'Kubernetes', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
        fallbackIcon: '⚙️',
        color: '#326CE5' 
      },
      { 
        name: 'Terraform', 
        level: 82, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
        fallbackIcon: '🏗️',
        color: '#623CE4' 
      }
    ]
  },
  {
    title: 'Security & Tools',
    icon: Shield,
    skills: [
      { 
        name: 'Jenkins', 
        level: 90, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
        fallbackIcon: '🔄',
        color: '#D33833' 
      },
      { 
        name: 'GitLab', 
        level: 88, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        fallbackIcon: '🔒',
        color: '#FC6D26' 
      },
      { 
        name: 'Git/GitHub', 
        level: 95, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
        fallbackIcon: '📚',
        color: '#181717' 
      },
      { 
        name: 'Linux', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
        fallbackIcon: '🐧',
        color: '#FCC624' 
      }
    ]
  },
  {
    title: 'Tools & Others',
    icon: Settings,
    skills: [
      { 
        name: 'VS Code', 
        level: 95, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
        fallbackIcon: '💻',
        color: '#007ACC' 
      },
      { 
        name: 'Figma', 
        level: 80, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
        fallbackIcon: '🎯',
        color: '#F24E1E' 
      },
      { 
        name: 'Nginx', 
        level: 90, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg',
        fallbackIcon: '📮',
        color: '#009639' 
      },
      { 
        name: 'Jira', 
        level: 85, 
        imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
        fallbackIcon: '📋',
        color: '#0052CC' 
      }
    ]
  }
];

// Skill icon component with image fallback
function SkillIcon({ skill }) {
  return (
    <div className="w-8 h-8 rounded-md flex items-center justify-center shadow-lg overflow-hidden bg-white">
      <img
        src={skill.imageUrl}
        alt={`${skill.name} icon`}
        className="w-6 h-6 object-contain"
        onError={(e) => {
          // Fallback to colored div with text/emoji if image fails to load
          e.target.style.display = 'none';
          e.target.nextSibling.style.display = 'flex';
        }}
      />
      <div 
        className="w-full h-full rounded-md items-center justify-center text-white font-bold text-sm"
        style={{ backgroundColor: skill.color, display: 'none' }}
      >
        {skill.fallbackIcon}
      </div>
    </div>
  );
}

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
                      <div className="flex items-center gap-3">
                        <SkillIcon skill={skill} />
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