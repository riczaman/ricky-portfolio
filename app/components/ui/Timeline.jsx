'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Calendar, MapPin, Award } from 'lucide-react';

const timelineData = [
  {
    id: 1,
    title: "Senior DevSecOps Engineer",
    company: "TD Securities",
    location: "Toronto, ON",
    period: "2024 - Present",
    description: "Automated deployment of 300+ microservices monthly by creating a CI/CD pipeline using Python, TeamCity, Jenkins, Nexus, Archiva, Azure and XL Release.",
    achievements: ["Reduced deployment times by 30%", "99.9% uptime achievement", "Implemented new CI/CD pipelines"],
    icon: <Award className="w-5 h-5" />,
    companyLogo: "/company-logos/tdbig.png" // Add your company logo here
  },
  {
    id: 2,
    title: "Full Stack Solutions Engineer",
    company: "TD Securities",
    location: "Toronto, ON",
    period: "2022 - 2022",
    description: "Designed and implemented end-to-end software solutions across front-end, back-end, and infrastructure layers to solve complex business problems and ensure seamless system integration.",
    achievements: ["Managed team of 3 Developers", "Led migration to VMC2", "Cost optimization saved 8600 hours annually"],
    icon: <Award className="w-5 h-5" />,
    companyLogo: "/company-logos/tds.jpg" // Add your company logo here
  },
  {
    id: 3,
    title: "Associate Software Developer",
    company: "TD Bank",
    location: "Toronto, ON",
    period: "2020 - 2022",
    description: "Developed MVP for multiple teams using modern web technologies. Collaborated with designers and product managers.",
    achievements: ["Launched 3 successful applications", "Built responsive designs", "Integrated payment systems"],
    icon: <Award className="w-5 h-5" />,
    companyLogo: "/company-logos/td.png" // Add your company logo here
  },
  {
    id: 4,
    title: "Full Stack Developer",
    company: "Palomino Systems Inc.",
    location: "Toronto, ON",
    period: "2019 - 2019",
    description: "Delivered end-to-end full-stack web applications for 5 clients, designing scalable, user-focused solutions and optimizing code for performance and maintainability.",
    achievements: ["Optimized SEO for 30% more traffic", "UI/UX design", "Code optimization"],
    icon: <Award className="w-5 h-5" />,
    companyLogo: "/company-logos/pal.jpeg" // Add your university logo here
  },
  {
    id: 5,
    title: "Junior Programmer",
    company: "Ontario Treasury Board Secretariat",
    location: "Oshawa, ON",
    period: "2018 - 2019",
    description: "Led testing for government software, launching an ASP.NET MVC app to track file transmission errors and delivering test strategies, plans, and detailed defect reports.",
    achievements: ["Led QA testing", "Implemented new release cadence"],
    icon: <Award className="w-5 h-5" />,
    companyLogo: "/company-logos/gov.jpeg" // Add your university logo here
  }
];

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
      className={`flex items-center w-full ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
    >
      {/* Content */}
      <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 hover-glow transition-all duration-300"
        >
          <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            <Calendar className="w-4 h-4 text-indigo-500" />
            <span className="text-sm text-gray-700 dark:text-gray-400">{item.period}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
            {item.title}
          </h3>
          
          <div className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
            <span className="text-indigo-700 dark:text-indigo-400 font-semibold">{item.company}</span>
            <MapPin className="w-4 h-4 text-gray-600 dark:text-gray-500" />
            <span className="text-gray-600 dark:text-gray-500 text-sm">{item.location}</span>
          </div>
          
          <p className="text-gray-800 dark:text-gray-300 mb-4 leading-relaxed">
            {item.description}
          </p>
          
          <div className="space-y-1">
            {item.achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 + idx * 0.1 }}
                className={`text-sm text-green-700 dark:text-green-400 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}
              >
                ✓ {achievement}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      
      {/* Timeline Line & Icon/Logo */}
      <div className="w-2/12 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg z-10 border-2 border-indigo-500"
        >
          {item.companyLogo && !imageError ? (
            <img
              src={item.companyLogo}
              alt={`${item.company} logo`}
              className="w-8 h-8 object-contain rounded"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded flex items-center justify-center text-white">
              {item.icon}
            </div>
          )}
        </motion.div>
        {index < timelineData.length - 1 && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: 120 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-1 bg-gradient-to-b from-indigo-500 to-purple-600 mt-4"
          />
        )}
      </div>
      
      {/* Empty space for alternating layout */}
      <div className="w-5/12"></div>
    </motion.div>
  );
}

export default function Timeline() {
  const titleRef = useRef(null);
  const isTitleInView = useInView(titleRef, { once: true });

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            My Journey
          </h2>
          <p className="text-xl text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional experience and achievements
          </p>
        </motion.div>

        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <TimelineItem key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}