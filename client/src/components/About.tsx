import { motion } from 'motion/react';
import { Code2, Database, Globe, Terminal } from 'lucide-react';

export function About() {
  const skills = [
    { name: 'React & Frontend', level: 90, icon: Globe },
    { name: 'Node.js & Backend', level: 85, icon: Database },
    { name: 'Machine Learning', level: 80, icon: Code2 },
    { name: 'Full-Stack Development', level: 88, icon: Terminal },
  ];

  return (
    <section id="about" className="relative py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#00ff41] mb-4" style={{ fontFamily: 'monospace' }}>
            {'<About />'}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#00ff41] to-transparent mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Terminal-style card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-[#0a0a0a] border-2 border-[#00ff41]/30 p-6 rounded-lg relative overflow-hidden">
              {/* Holographic border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff41]/0 via-[#00ff41]/20 to-[#00ff41]/0 animate-pulse" />
              
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-4 relative z-10">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="ml-2 text-[#e5e5e5]/60 text-sm" style={{ fontFamily: 'monospace' }}>
                  surya@terminal:~
                </span>
              </div>

              {/* Terminal content */}
              <div className="space-y-2 relative z-10" style={{ fontFamily: 'monospace' }}>
                <p className="text-[#00ff41]">
                  $ cat about.txt
                </p>
                <p className="text-[#e5e5e5] leading-relaxed">
                  Hey there! I'm Surya, a B.Tech IT student passionate about full-stack development. 
                  I love building real-time applications like my Vetti Pechu chat app and exploring 
                  machine learning with projects like gold price prediction.
                </p>
                <p className="text-[#e5e5e5] leading-relaxed mt-4">
                  From React frontends to Node.js backends, I enjoy the entire development process. 
                  I'm always learning new technologies and love turning creative ideas into functional 
                  applications that solve real-world problems.
                </p>
                <motion.p 
                  className="text-[#00ff41] pt-4"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  █
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Skills bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#00ff41]/10 border border-[#00ff41]/30 rounded">
                    <skill.icon className="text-[#00ff41]" size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-1">
                      <span className="text-[#e5e5e5]">{skill.name}</span>
                      <span className="text-[#00ff41]" style={{ fontFamily: 'monospace' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden border border-[#00ff41]/20">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#00ff41] to-[#00d9ff] relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                        viewport={{ once: true }}
                        style={{
                          boxShadow: '0 0 10px rgba(0, 255, 65, 0.5)',
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
