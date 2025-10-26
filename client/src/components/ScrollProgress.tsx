import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#1a1a1a] z-[60]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="h-full bg-gradient-to-r from-[#00ff41] to-[#00d9ff]"
        style={{ width: `${scrollProgress}%` }}
        transition={{ duration: 0.1 }}
      >
        <div className="h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
      </motion.div>
    </motion.div>
  );
}
