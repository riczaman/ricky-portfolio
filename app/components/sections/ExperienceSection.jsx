'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const experiences = [
  {
    id: 1,
    title: 'Senior Full-Stack Developer',
    company: 'TechCorp Solutions',
    location: 'Toronto, ON',
    duration: '2022 - Present',
    description: 'Led development of scalable microservices architecture serving 1M+ users. Implemented CI/CD pipelines and reduced deployment time by 60%.',
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes'],
    type: 'current'
  },
  {
    id: 2,
    title: 'DevSecOps Engineer',
    company: 'SecureStack Inc',
    location: 'Remote',
    duration: '2020 - 2022',
    description: 'Integrated security practices into development workflows. Built automated security scanning tools and improved code security by 85%.',
    technologies: ['Python', 'Jenkins', 'Terraform', 'AWS', 'SonarQube'],
    type: 'past'
  },
  {
    id: 3,
    title: 'Full-Stack Developer',
    company: 'StartupXYZ',
    location: 'Mississauga, ON',
    duration: '2018 - 2020',
    description: 'Developed customer-facing web applications from scratch. Collaborated with design team to create responsive, user-friendly interfaces.',
    technologies: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'Docker'],
    type: 'past'
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Experience Timeline
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            My professional journey in software development and DevSecOps
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-gray-500"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900 z-10"></div>

              {/* Content Card */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                <div className="glass-card p-6 hover-glow transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar size={16} className="text-blue-400" />
                    <span className="text-blue-400 font-medium">{exp.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  
                  <div className="flex items-center gap-2 mb-3 text-gray-400">
                    <Building size={16} />
                    <span>{exp.company}</span>
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-500/20 text-blue-300 text-sm rounded-full border border-blue-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}