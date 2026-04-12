import { motion } from 'motion/react';

export function Skills() {
  const skills = [
    { name: 'JavaScript', icon: '🟨', category: 'language' },
    { name: 'React.js', icon: '⚛️', category: 'frontend' },
    { name: 'Node.js', icon: '🟢', category: 'backend' },
    { name: 'Express.js', icon: '🚂', category: 'backend' },
    { name: 'MongoDB', icon: '🍃', category: 'database' },
    { name: 'n8n', icon: '🤖', category: 'devops' },
    { name: 'Socket.io', icon: '⚡', category: 'backend' },
    { name: 'REST APIs', icon: '🔗', category: 'tools' },
    { name: 'Docker', icon: '🐳', category: 'devops' },
    { name: 'Git', icon: '📦', category: 'tools' },
    { name: 'JWT Auth', icon: '🔐', category: 'tools' },
    { name: 'AI Agents', icon: '🧠', category: 'frontend' },
  ];


  const categories = [
    { name: 'Frontend', color: '#00ff41' },
    { name: 'Backend', color: '#00d9ff' },
    { name: 'Database', color: '#8b5cf6' },
    { name: 'DevOps', color: '#00ff41' },
  ];

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#00ff41] mb-4" style={{ fontFamily: 'monospace' }}>
            {'<Skills />'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                rotate: [0, -5, 5, -5, 0],
                transition: { duration: 0.5 }
              }}
              className="relative group"
            >
              <div className="bg-[#0a0a0a] border-2 border-[#2a2a2a] rounded-lg p-4 h-full flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:border-[#00ff41]">
                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    boxShadow: '0 0 20px rgba(0, 255, 65, 0.5)',
                  }}
                />

                <div className="text-3xl sm:text-4xl relative z-10">
                  {skill.icon}
                </div>
                <span className="text-[#e5e5e5] text-xs sm:text-sm text-center relative z-10 group-hover:text-[#00ff41] transition-colors" style={{ fontFamily: 'monospace' }}>
                  {skill.name}
                </span>

                {/* Animated corners */}
                <div className="absolute top-0 left-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-[#00ff41]" />
                  <div className="absolute top-0 left-0 w-0.5 h-full bg-[#00ff41]" />
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-[#00ff41]" />
                  <div className="absolute bottom-0 right-0 w-0.5 h-full bg-[#00ff41]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Category Labels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: category.color,
                  boxShadow: `0 0 10px ${category.color}`,
                }}
              />
              <span className="text-[#e5e5e5]/70 text-sm" style={{ fontFamily: 'monospace' }}>
                {category.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
