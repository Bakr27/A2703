import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin, Mail, Phone, User, Terminal, Cpu } from 'lucide-react';
import { personalInfo, stats } from '../data/portfolioData';
import CountUp from 'react-countup';
import photoImg from '../../public/photo.jpg';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">01. WHO AM I</p>
          <h2 className="section-title">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Avatar & Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Avatar placeholder */}
            <div className="relative mb-10 flex justify-center lg:justify-start">
              <div className="relative w-56 h-56">
                {/* Rotating border */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #00d4ff, #7b2fff, #00ffcc, #00d4ff)',
                    padding: '2px',
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                />
                <div className="absolute inset-[3px] rounded-full overflow-hidden glass flex items-center justify-center">
                  <img
                    src={photoImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badges */}
                <div className="absolute -top-2 -right-2 glass rounded-full p-2 border border-cyber-blue/30">
                  <Terminal className="w-4 h-4 text-cyber-blue" />
                </div>
                <div className="absolute -bottom-2 -left-2 glass rounded-full p-2 border border-purple-500/30">
                  <Cpu className="w-4 h-4 text-purple-400" />
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label: personalInfo.location, color: '#00d4ff' },
                { icon: Mail, label: personalInfo.email, color: '#7b2fff' },
                { icon: Phone, label: personalInfo.phone, color: '#00ffcc' },
              ].map(({ icon: Icon, label, color }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center glass flex-shrink-0"
                    style={{ border: `1px solid ${color}33` }}
                  >
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                  <span className="font-body text-slate-300 text-sm">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Bio & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="font-body text-slate-300 leading-relaxed mb-6 text-base">
              {personalInfo.bio}
            </p>
            <p className="font-body text-slate-400 leading-relaxed mb-10 text-base">
              {personalInfo.bio2}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                  className="card-cyber text-center"
                >
                  <div className="font-display font-black text-3xl text-gradient mb-1">
                    {inView ? (
                      <CountUp end={stat.value} duration={2} delay={0.5} />
                    ) : '0'}
                    {stat.suffix}
                  </div>
                  <p className="font-mono text-xs text-slate-500 tracking-wider uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
