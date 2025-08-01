'use client';
import { motion } from 'framer-motion';
import { Code, Terminal, Database, Cloud } from 'lucide-react';

const iconMap = {
  code: Code,
  terminal: Terminal,
  database: Database,
  cloud: Cloud,
};

export default function FloatingIcon({ 
  children, 
  delay = 0, 
  className = '', 
  iconName,
  size = 40 
}) {
  const IconComponent = iconName ? iconMap[iconName] : null;
  
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      {IconComponent ? (
        <IconComponent size={size} className="opacity-60" />
      ) : (
        children
      )}
    </motion.div>
  );
}