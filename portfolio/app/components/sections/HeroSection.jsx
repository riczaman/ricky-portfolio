'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import FloatingIcon from '../ui/FloatingIcon';
import BlobShape from '../ui/BlobShape';
import { heroAnimations } from '../../lib/animations';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hello, I'm Ricky Zaman";
  
  // Typing effect
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-indigo-900">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
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
          <span className="gradient-text animate-pulse">
            {displayText}
            <span className="animate-ping">|</span>
          </span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-8"
        >
          <p className="text-xl md:text-2xl text-gray-300 glow-border inline-block">
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
            className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105"
          >
            View Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-4 border border-indigo-500 rounded-lg font-semibold hover:bg-indigo-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2 justify-center"
          >
            <Download size={20} />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}