import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Download, Mail, FolderOpen, ChevronDown, Github, Linkedin } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-40 z-0" />

      {/* Radial glow */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(0,212,255,0.08) 0%, rgba(123,47,255,0.05) 40%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <div
          className="absolute top-2/3 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
      </div>

      {/* Scan line */}
      <motion.div
        className="absolute left-0 right-0 h-px z-0"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)' }}
        animate={{ top: ['-2px', '100vh'] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'linear', repeatDelay: 2 }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-20 text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass border border-cyber-blue/20 rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse" />
          <span className="font-mono text-xs text-cyber-neon tracking-widest">AVAILABLE FOR HIRE</span>
        </motion.div>

        {/* Name */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] mb-4 uppercase">
            &gt; Hello World, I'm
          </p>
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-none mb-4">
            <span className="text-white">{personalInfo.name}</span>
          </h1>
        </motion.div>

        {/* Typing animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="font-display font-bold text-2xl md:text-3xl lg:text-4xl">
            <span className="text-slate-400">// </span>
            <TypeAnimation
              sequence={[
                'Network Engineer', 2000,
                'Cybersecurity Analyst', 2000,
                'SOC Analyst', 2000,
                'CCNA / CCNP Certified', 2000,
                'Infrastructure Specialist', 2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="text-gradient"
            />
            <span className="cursor-blink" />
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-body text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          {personalInfo.subtitle} — Designing resilient networks, securing digital infrastructure, and building the defense systems of tomorrow.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16"
        >
          <a 
            href={personalInfo.cvUrl} 
            download={personalInfo.cvFilename}
            target="_self"
            referrerPolicy="no-referrer"
            className="btn-cyber-solid rounded-sm flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
          <button
            onClick={() => scrollTo('#projects')}
            className="btn-cyber rounded-sm flex items-center gap-2"
          >
            <FolderOpen className="w-4 h-4" />
            View Projects
          </button>
          <button
            onClick={() => scrollTo('#contact')}
            className="btn-cyber rounded-sm flex items-center gap-2"
            style={{ borderColor: 'rgba(123,47,255,0.5)', color: '#7b2fff' }}
          >
            <Mail className="w-4 h-4" />
            Contact Me
          </button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-6 mb-20"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-base font-semibold text-slate-300 hover:text-cyber-blue transition-all duration-300 group"
          >
            <Github className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_#00d4ff]" />
            GitHub
          </a>
          <span className="w-px h-6 bg-slate-700" />
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 font-mono text-base font-semibold text-slate-300 hover:text-cyber-blue transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_#00d4ff]" />
            LinkedIn
          </a>
          <span className="w-px h-6 bg-slate-700" />
          <a
            href={`mailto:${personalInfo.email}`}
            className="flex items-center gap-3 font-mono text-base font-semibold text-slate-300 hover:text-cyber-blue transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 group-hover:drop-shadow-[0_0_6px_#00d4ff]" />
            Email
          </a>
        </motion.div>


        {/* Scroll indicator */}
        <motion.button
          onClick={() => scrollTo('#about')}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-12 text-slate-500 hover:text-cyber-blue transition-colors duration-300 inline-block"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.button>
      </div>
    </section>
  );
}


