import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Network, GitMerge, Monitor, Bug, Users, Layers, Shield, BookOpen,
  ExternalLink, Github, Star
} from 'lucide-react';
import { projects } from '../data/portfolioData';

const iconMap = { Network, GitMerge, Monitor, Bug, Users, Layers, Shield, BookOpen };

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Networking', 'Security', 'Infrastructure'];

  const filterMap = {
    All: () => true,
    Networking: (p) => ['OSPF', 'BGP', 'VLAN', 'MPLS', 'Routing'].some(t => p.tags.some(tag => tag.includes(t))),
    Security: (p) => ['SIEM', 'SOC', 'Penetration', 'Firewall', 'Nmap', 'Kali'].some(t => p.tags.some(tag => tag.includes(t))),
    Infrastructure: (p) => ['Windows Server', 'Active Directory', 'Linux', 'VMware', 'Packet Tracer'].some(t => p.tags.some(tag => tag.includes(t))),
  };

  const filtered = projects.filter(filterMap[filter]);

  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 hex-bg opacity-20" />
      <div
        className="absolute left-0 top-1/3 w-80 h-80 rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">03. PORTFOLIO</p>
          <h2 className="section-title">Projects</h2>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`font-mono text-xs px-5 py-2 rounded-sm tracking-widest uppercase transition-all duration-300 ${
                filter === f
                  ? 'bg-cyber-blue text-cyber-dark'
                  : 'glass border border-cyber-blue/20 text-slate-400 hover:border-cyber-blue/50 hover:text-cyber-blue'
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Featured projects (top 3) */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <AnimatePresence mode="popLayout">
            {filtered.filter(p => p.featured).map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} inView={inView} featured />
            ))}
          </AnimatePresence>
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.filter(p => !p.featured).map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i + 3} inView={inView} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, inView, featured }) {
  const Icon = iconMap[project.icon] || Shield;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative glass rounded-xl border border-cyber-blue/10 hover:border-cyber-blue/40 transition-all duration-500 overflow-hidden ${featured ? 'p-7' : 'p-5'}`}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}10 0%, transparent 60%)` }}
      />

      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
          style={{ background: project.color + '20', border: `1px solid ${project.color}40` }}
        >
          <Icon className="w-5 h-5" style={{ color: project.color }} />
        </div>
        {featured && (
          <span className="flex items-center gap-1 font-mono text-xs text-amber-400 bg-amber-400/10 rounded-full px-3 py-1">
            <Star className="w-3 h-3" /> Featured
          </span>
        )}
      </div>

      <h3 className={`font-display font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300 ${featured ? 'text-lg' : 'text-sm'}`}>
        {project.title}
      </h3>

      {featured && (
        <p className="font-body text-sm text-slate-400 leading-relaxed mb-5">
          {project.description}
        </p>
      )}

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.tags.slice(0, featured ? 5 : 3).map((tag) => (
          <span
            key={tag}
            className="font-mono text-[10px] px-2 py-1 rounded-sm"
            style={{ background: project.color + '15', color: project.color, border: `1px solid ${project.color}30` }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4">
        <a
          href={project.github}
          className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyber-blue transition-colors duration-300"
        >
          <Github className="w-3.5 h-3.5" />
          Code
        </a>
        <a
          href={project.demo}
          className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyber-blue transition-colors duration-300"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Demo
        </a>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full transition-all duration-500"
        style={{ background: `linear-gradient(90deg, ${project.color}, transparent)` }}
      />
    </motion.div>
  );
}
