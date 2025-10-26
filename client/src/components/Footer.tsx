import { motion } from 'motion/react';
import { Github, Linkedin, Instagram, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Suryaseenivasan2005', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/surya-seenivasan-b85249354/', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/_surya_sseenivasan_', label: 'Instagram' },
  ];

  return (
    <footer className="relative border-t border-[#00ff41]/20 py-12 px-4 mt-20">
      {/* Animated wave */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent opacity-50" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl text-[#00ff41] mb-2" style={{ fontFamily: 'monospace' }}>
              {'<SURYA />'}
            </h3>
            <p className="text-[#e5e5e5]/60 text-sm">
              Full-Stack Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                aria-label={label}
                className="text-[#e5e5e5] hover:text-[#00ff41] transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <p className="text-[#e5e5e5]/60 text-sm flex items-center gap-2 justify-center md:justify-end">
              Made with
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="text-[#00ff41]" size={16} fill="#00ff41" />
              </motion.span>
              by Surya
            </p>
            <p className="text-[#e5e5e5]/40 text-xs mt-1" style={{ fontFamily: 'monospace' }}>
              © 2025 All rights reserved
            </p>
          </motion.div>
        </div>

        {/* Decorative grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-8 pt-8 border-t border-[#00ff41]/10"
        >
          <div className="text-center">
            <p className="text-[#00ff41]/60 text-xs" style={{ fontFamily: 'monospace' }}>
              $ system.status --all
            </p>
            <motion.p
              className="text-[#00ff41]/40 text-xs mt-2"
              style={{ fontFamily: 'monospace' }}
              animate={{ opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              [✓] All systems operational | Uptime: 99.9% | Location: Everywhere
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
