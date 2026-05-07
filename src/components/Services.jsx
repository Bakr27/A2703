import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Network, Shield, Monitor, Bug, Server, LifeBuoy } from 'lucide-react';
import { services } from '../data/portfolioData';

const iconMap = { Network, Shield, Monitor, Bug, Server, LifeBuoy };

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-20" />
      <div
        className="absolute top-1/2 right-1/4 w-96 h-96 rounded-full -translate-y-1/2"
        style={{ background: 'radial-gradient(circle, rgba(0,255,204,0.05) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">06. WHAT I OFFER</p>
          <h2 className="section-title">Services</h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl mx-auto">
            Specialized cybersecurity and networking services for businesses, startups, and academic institutions.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon] || Shield;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="card-cyber group relative overflow-hidden cursor-default"
              >
                {/* Hover bg */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 30%, ${service.color}12 0%, transparent 60%)` }}
                />

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ background: service.color + '15', border: `1px solid ${service.color}40` }}
                >
                  <Icon className="w-7 h-7" style={{ color: service.color }} />
                </div>

                <h3 className="font-display font-bold text-white text-base mb-3 group-hover:text-gradient transition-all duration-300">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-700"
                  style={{ background: `linear-gradient(90deg, ${service.color}, transparent)` }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
