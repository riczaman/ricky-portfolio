export const heroAnimations = {
    fadeInUp: {
      initial: { opacity: 0, y: 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0.8 }
    },
    
    staggerContainer: {
      animate: {
        transition: {
          staggerChildren: 0.2
        }
      }
    },
    
    slideInLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 },
      transition: { duration: 0.6 }
    }
  };
  
  export const projectAnimations = {
    cardVariants: {
      hidden: { opacity: 0, y: 50 },
      visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: index * 0.2,
          duration: 0.6,
          ease: "easeOut"
        }
      })
    }
  };