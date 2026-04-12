import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  const projects = [
    {
      title: 'AI Productivity Agent System',
      description:
        'Architected a modular MERN-based multi-agent platform integrated with n8n to automate complex real-world workflows — job applications, email handling, and stock tracking — through specialised AI agents.',
      tech: ['Node.js', 'Express.js', 'React.js', 'MongoDB', 'n8n', 'REST APIs'],
      link: '',
      github: 'https://github.com/Suryaseenivasan2005/project---december',
      featured: true,
    },
    {
      title: 'Tex-Tool – Textile Management System',
      description:
        'Business management platform with dashboards, inventory tracking, REST APIs, and financial reporting. Built a scalable MongoDB schema for structured financial data and a performant backend.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
      link: 'https://textile-tool.vercel.app',
      github: 'https://github.com/Suryaseenivasan2005/textile-tool',
      featured: false,
    },
    {
      title: 'Talklet – Real-Time Chat Application',
      description:
        'Event-driven messaging app using Socket.io with JWT authentication. Delivers low-latency real-time messaging with a secure MERN backend and a clean, responsive UI.',
      tech: ['React.js', 'Node.js', 'Socket.io', 'JWT Auth', 'MongoDB'],
      link: '',
      github: 'https://github.com/Suryaseenivasan2005/chat-app',
      featured: false,
    },
  ];

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#00ff41] mb-4" style={{ fontFamily: 'monospace' }}>
            {'<Projects />'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`relative group ${project.featured ? 'md:col-span-2 lg:col-span-3' : ''}`}
            >
              <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg overflow-hidden h-full transition-all duration-300 group-hover:border-[#00ff41]">
                {/* Neon glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00ff41]/20 via-transparent to-[#00d9ff]/20" />
                  <div className="absolute inset-0" style={{ boxShadow: 'inset 0 0 50px rgba(0, 255, 65, 0.3)' }} />
                </div>

                <div className={`p-6 ${project.featured ? 'md:p-8' : ''} relative z-10`}>
                  {/* Featured badge */}
                  {project.featured && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                      viewport={{ once: true }}
                      className="inline-block px-3 py-1 bg-[#00ff41]/20 border border-[#00ff41] text-[#00ff41] text-xs mb-4"
                      style={{ fontFamily: 'monospace' }}
                    >
                      ★ FEATURED PROJECT
                    </motion.div>
                  )}

                  <h3 className="text-xl sm:text-2xl text-[#e5e5e5] mb-3 group-hover:text-[#00ff41] transition-colors" style={{ fontFamily: 'monospace' }}>
                    {project.title}
                  </h3>

                  <p className="text-[#e5e5e5]/70 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-[#1a1a1a] border border-[#00ff41]/30 text-[#00ff41] text-xs rounded-full"
                        style={{ fontFamily: 'monospace' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.link && (
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-[#e5e5e5] hover:text-[#00ff41] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink size={18} />
                        <span className="text-sm">Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[#e5e5e5] hover:text-[#00ff41] transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span className="text-sm">Source Code</span>
                    </motion.a>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 right-0 w-full h-0.5 bg-gradient-to-l from-[#00ff41] to-transparent" />
                  <div className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-[#00ff41] to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
