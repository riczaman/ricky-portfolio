'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import FloatingIcon from '../ui/FloatingIcon';
import BlobShape from '../ui/BlobShape';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  
  const words = ["Hello, I'm Ricky Zaman", "I'm a Full-Stack Developer", "I Build Scalable Systems", "I Love DevSecOps"];
  
  // Enhanced typewriter effect like Aaron James
  useEffect(() => {
    let timeout;
    const currentWord = words[currentWordIndex];
    
    const typeWriter = () => {
      if (displayText.length < currentWord.length) {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      } else {
        // Wait before starting next word
        setTimeout(() => {
          setDisplayText('');
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }, 2000);
        return;
      }
      
      timeout = setTimeout(typeWriter, 100);
    };
    
    timeout = setTimeout(typeWriter, 100);
    return () => clearTimeout(timeout);
  }, [displayText, currentWordIndex, words]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Floating Blob Shapes */}
      <BlobShape className="top-20 left-20 w-64 h-64" />
      <BlobShape className="bottom-20 right-20 w-80 h-80" />
      <BlobShape className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96" />
      
      {/* Floating Icons */}
      <FloatingIcon 
        delay={0} 
        className="top-20 left-1/4 text-blue-400"
        iconName="code"
        size={40}
      />
      <FloatingIcon 
        delay={1} 
        className="top-32 right-1/4 text-gray-400"
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
        className="bottom-20 right-1/3 text-blue-300"
        iconName="cloud" 
        size={38}
      />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left"
        >
          {/* Dynamic Typewriter Text */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="gradient-text font-cursive">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
              </span>
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300 leading-relaxed max-w-2xl">
              Passionate about creating <span className="text-blue-700 dark:text-blue-400 font-semibold">scalable solutions</span> and 
              implementing <span className="text-gray-700 dark:text-gray-400 font-semibold">secure DevOps practices</span> that drive innovation.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button 
              onClick={scrollToAbout}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-gray-600 rounded-xl font-semibold hover:from-blue-500 hover:to-gray-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 text-white"
            >
              Explore My Work
            </button>
            <a
              href="/resume.pdf"
              download
              className="px-8 py-4 border-2 border-blue-500 rounded-xl font-semibold hover:bg-blue-500/10 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-2 justify-center text-blue-700 dark:text-blue-400 hover:scale-105"
            >
              <Download size={20} />
              Download Resume
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Animated border */}
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-gray-500 to-slate-500 rounded-full opacity-75 blur-lg animate-pulse"></div>
            
            {/* Profile image container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="/home.PNG"
                alt="Ricky Zaman"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // Fallback gradient if image doesn't load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-gray-500 to-slate-500 flex items-center justify-center text-white text-6xl font-bold" style={{ display: 'none' }}>
                RZ
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-800 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <ChevronDown size={32} />
        </motion.button>
      </motion.div>
    </section>
  );
}