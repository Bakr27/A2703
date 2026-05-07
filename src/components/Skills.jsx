import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, Shield, Server, Router, Layers, Activity, Terminal, Monitor, Code2, BarChart3, Bug } from 'lucide-react';
import { skills, techStack } from '../data/portfolioData';

const iconMap = { Network, Shield, Server, Router, Layers, Activity, Terminal, Monitor, Code2, BarChart3, Bug };

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute right-0 top-1/2 w-96 h-96 rounded-full -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">02. EXPERTISE</p>
          <h2 className="section-title">Technical Skills</h2>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {skills.map((category, ci) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: ci * 0.15 }}
              className="card-cyber group"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ background: category.color + '20', border: `1px solid ${category.color}40` }}
                >
                  {(() => {
                    const Icon = iconMap[category.icon] || Shield;
                    return <Icon className="w-5 h-5" style={{ color: category.color }} />;
                  })()}
                </div>
                <h3 className="font-display font-bold text-base text-white tracking-wider">
                  {category.category}
                </h3>
              </div>

              {/* Skills */}
              <div className="space-y-5">
                {category.items.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-body text-sm text-slate-300">{skill.name}</span>
                      <span className="font-mono text-xs" style={{ color: category.color }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.05)' }}>
                      <motion.div
                        className="h-full rounded-full relative"
                        style={{
                          background: `linear-gradient(90deg, ${category.color}bb, ${category.color})`,
                          boxShadow: `0 0 8px ${category.color}80`,
                        }}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: 0.5 + ci * 0.15 + si * 0.08, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Icons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="font-mono text-xs text-slate-500 text-center tracking-widest uppercase mb-8">
            // Tools & Technologies
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, i) => {
              const Icon = iconMap[tech.icon] || Shield;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 glass rounded-lg px-4 py-2.5 border border-cyber-blue/10 hover:border-cyber-blue/40 transition-all duration-300 cursor-default group"
                >
                  <Icon className="w-4 h-4 text-cyber-blue group-hover:drop-shadow-[0_0_6px_#00d4ff] transition-all duration-300" />
                  <span className="font-mono text-xs text-slate-300 group-hover:text-white transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
