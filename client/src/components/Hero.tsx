import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'AI & Full-Stack Engineer';
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const yOrbs = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background orbs */}
      <motion.div style={{ y: yOrbs }} className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00ff41]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#00d9ff]/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00ff41]/3 blur-[120px]" />
      </motion.div>

      {/* Scanline effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ff41]/5 to-transparent pointer-events-none z-10 animate-pulse"
        style={{ backgroundSize: '100% 4px' }} />

      <motion.div style={{ opacity }} className="relative z-20 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Name with Glitch Effect */}
          <div className="relative">
            <motion.h1
              className="text-6xl sm:text-8xl lg:text-9xl tracking-wider text-[#00ff41] relative inline-block"
              style={{ fontFamily: 'monospace' }}
              animate={{
                textShadow: [
                  '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
                  '0 0 20px #00ff41, 0 0 30px #00ff41, 0 0 40px #00ff41',
                  '0 0 10px #00ff41, 0 0 20px #00ff41, 0 0 30px #00ff41',
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              SURYA
            </motion.h1>

            {/* Glitch layers */}
            <motion.h1
              className="absolute top-0 left-0 right-0 text-6xl sm:text-8xl lg:text-9xl tracking-wider text-[#00d9ff] opacity-70"
              style={{ fontFamily: 'monospace', clipPath: 'inset(0 0 0 0)' }}
              animate={{
                clipPath: [
                  'inset(40% 0 61% 0)',
                  'inset(92% 0 1% 0)',
                  'inset(43% 0 1% 0)',
                  'inset(25% 0 58% 0)',
                ],
                transform: ['translateX(0)', 'translateX(-2px)', 'translateX(2px)', 'translateX(0)'],
              }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
            >
              SURYA
            </motion.h1>
          </div>

          {/* Typing Animation */}
          <div className="h-12 flex items-center justify-center">
            <motion.p
              className="text-xl sm:text-2xl lg:text-3xl text-[#e5e5e5]"
              style={{ fontFamily: 'monospace' }}
            >
              {'> '}{displayText}
              <motion.span
                className="inline-block w-3 h-6 bg-[#00ff41] ml-1"
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
            </motion.p>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="text-[#e5e5e5]/80 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg"
          >
            Full Stack Developer specialising in the MERN stack, building multi-agent AI automation systems
            that streamline workflows and eliminate repetitive tasks. 1st Prize Hackathon winner · Graduating 2027.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-transparent border-2 border-[#00ff41] text-[#00ff41] relative overflow-hidden group min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">View Projects</span>
              <motion.div
                className="absolute inset-0 bg-[#00ff41]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span className="absolute inset-0 opacity-0 group-hover:opacity-100 text-black z-20 flex items-center justify-center transition-opacity">
                View Projects
              </motion.span>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-[#00ff41] text-black relative overflow-hidden group min-w-[200px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
              }}
            >
              Get In Touch
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="flex gap-6 justify-center pt-8"
          >
            {[
              { Icon: Github, href: 'https://github.com/Suryaseenivasan2005', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/surya-seenivasan-b85249354/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:suryaseenivasan12@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#e5e5e5] hover:text-[#00ff41] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 2.5, duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronDown className="text-[#00ff41]" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
