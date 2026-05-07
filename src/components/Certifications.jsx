import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Shield, Terminal, Server, Bug, ExternalLink } from 'lucide-react';
import { certifications, timeline } from '../data/portfolioData';

const iconMap = { Award, Shield, Terminal, Server, Bug };

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">04. CREDENTIALS</p>
          <h2 className="section-title">Certifications</h2>
        </motion.div>

        {/* Cert Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {certifications.map((cert, i) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="card-cyber group relative overflow-hidden"
              >
                {/* Background glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-xl"
                  style={{ background: `radial-gradient(circle at 50% -20%, ${cert.color}15 0%, transparent 60%)` }}
                />

                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: cert.color + '20', border: `1px solid ${cert.color}40` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cert.color }} />
                  </div>
                  <span
                    className="font-mono text-xs px-3 py-1 rounded-full"
                    style={{
                      background: cert.status === 'Completed' ? '#00ffcc15' : '#ff950015',
                      color: cert.status === 'Completed' ? '#00ffcc' : '#ff9500',
                      border: `1px solid ${cert.status === 'Completed' ? '#00ffcc30' : '#ff950030'}`,
                    }}
                  >
                    {cert.status}
                  </span>
                </div>

                <h3 className="font-display font-bold text-xl text-white mb-1">{cert.name}</h3>
                <p className="font-body text-sm text-slate-400 mb-3">{cert.fullName}</p>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-mono text-xs text-slate-500">{cert.issuer}</p>
                    <p className="font-mono text-xs" style={{ color: cert.color }}>{cert.year}</p>
                  </div>
                  <a
                    href={cert.credlyUrl}
                    className="flex items-center gap-1 font-mono text-xs text-slate-500 hover:text-cyber-blue transition-colors duration-300"
                  >
                    <ExternalLink className="w-3 h-3" />
                    Verify
                  </a>
                </div>

                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(90deg, ${cert.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Learning Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">// JOURNEY</p>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-white">Learning Timeline</h3>
        </motion.div>

        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-blue via-cyber-purple to-cyber-neon opacity-30 hidden md:block" />

          <div className="space-y-10 md:space-y-0">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + i * 0.15 }}
                className={`relative flex ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-0 mb-10`}
              >
                {/* Content */}
                <div className={`w-full md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="card-cyber inline-block text-left w-full">
                    <div className="flex items-center gap-3 mb-3" style={i % 2 === 0 ? { justifyContent: 'flex-end' } : {}}>
                      <span
                        className="font-display font-black text-2xl"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-white text-base mb-2">{item.title}</h4>
                    <p className="font-body text-sm text-slate-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full items-center justify-center z-10"
                  style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}
                >
                  <div className="w-2 h-2 rounded-full bg-cyber-dark" />
                </div>

                <div className="hidden md:block w-[calc(50%-2.5rem)]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
