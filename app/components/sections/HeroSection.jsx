'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, Moon, Sun } from 'lucide-react';
import FloatingIcon from '../ui/FloatingIcon';
import BlobShape from '../ui/BlobShape';
import { useTheme } from '../../lib/ThemeContext';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [currentColorIndex, setCurrentColorIndex] = useState(0);
  const { isDark, toggleTheme } = useTheme();
  
  const fullText = "Hello, I'm Ricky Zaman";
  const colors = [
    'from-pink-500 via-red-500 to-yellow-500',
    'from-green-400 via-blue-500 to-purple-600',
    'from-purple-400 via-pink-400 to-red-400',
    'from-yellow-400 via-red-500 to-pink-500',
    'from-indigo-400 via-purple-400 to-pink-400',
    'from-cyan-400 via-blue-500 to-purple-600'
  ];
  
  // Enhanced typing effect with color changes
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        // Change color every few characters
        if (i % 4 === 0) {
          setCurrentColorIndex((prev) => (prev + 1) % colors.length);
        }
        i++;
      } else {
        clearInterval(timer);
        // Continue color cycling after typing is done
        const colorTimer = setInterval(() => {
          setCurrentColorIndex((prev) => (prev + 1) % colors.length);
        }, 2000);
        return () => clearInterval(colorTimer);
      }
    }, 120);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 z-50 p-3 rounded-full bg-gray-800/50 dark:bg-gray-200/10 backdrop-blur-sm border border-gray-600/20 hover:border-indigo-500/50 transition-all duration-300 hover:scale-110"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-400" />
        ) : (
          <Moon className="w-5 h-5 text-indigo-600" />
        )}
      </button>

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-indigo-50 dark:from-black dark:via-gray-900 dark:to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-white/50 dark:from-black/50 to-transparent"></div>
      </div>
      
      {/* Floating Blob Shapes */}
      <BlobShape className="top-20 left-20 w-64 h-64" />
      <BlobShape className="bottom-20 right-20 w-80 h-80" />
      <BlobShape className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96" />
      
      {/* Floating Icons */}
      <FloatingIcon 
        delay={0} 
        className="top-20 left-1/4 text-indigo-400"
        iconName="code"
        size={40}
      />
      <FloatingIcon 
        delay={1} 
        className="top-32 right-1/4 text-purple-400"
        iconName="terminal" 
        size={35}
      />
      <FloatingIcon 
        delay={2} 
        className="bottom-32 left-1/3 text-blue-400"
        iconName="database" 
        size={45}
      />
      <FloatingIcon 
        delay={1.5} 
        className="bottom-20 right-1/3 text-indigo-300"
        iconName="cloud" 
        size={38}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <span 
            className={`bg-gradient-to-r ${colors[currentColorIndex]} bg-clip-text text-transparent animate-pulse font-cursive transition-all duration-1000`}
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            {displayText}
            <span className="animate-ping text-indigo-500">|</span>
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 glow-border inline-block">
            Full-Stack Dev · DevSecOps · Builder of Scalable Systems
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button 
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 text-white"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-indigo-500 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 justify-center text-indigo-600 dark:text-indigo-400"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}