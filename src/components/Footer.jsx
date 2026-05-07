import { motion } from 'framer-motion';
import { Shield, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative py-16 border-t border-cyber-blue/10 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-7 h-7 text-cyber-blue" />
              <span className="font-display font-bold text-xl tracking-widest text-white">CYBERNET</span>
            </div>
            <p className="font-body text-sm text-slate-400 leading-relaxed mb-6">
              Network & Cybersecurity Engineer. Building secure, resilient digital infrastructure.
            </p>
            <div className="flex items-center gap-4">
              {[
                { Icon: Github, href: personalInfo.github },
                { Icon: Linkedin, href: personalInfo.linkedin },
                { Icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 glass rounded-lg flex items-center justify-center border border-cyber-blue/20 hover:border-cyber-blue/60 hover:text-cyber-blue text-slate-400 transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 group-hover:drop-shadow-[0_0_6px_#00d4ff]" />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">Navigation</h4>
            <div className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block font-body text-sm text-slate-400 hover:text-cyber-blue transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">Contact</h4>
            <div className="space-y-3">
              <p className="font-mono text-xs text-slate-400">{personalInfo.email}</p>
              <p className="font-mono text-xs text-slate-400">{personalInfo.phone}</p>
              <p className="font-mono text-xs text-slate-400">{personalInfo.location}</p>
            </div>
            <div className="mt-6 glass rounded-lg p-3 border border-cyber-neon/20 inline-flex items-center gap-2">
              <span className="w-2 h-2 bg-cyber-neon rounded-full animate-pulse" />
              <span className="font-mono text-xs text-cyber-neon">Available for hire</span>
            </div>
          </div>
        </div>

        <div className="border-t border-cyber-blue/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-slate-500">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-slate-500 flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500" /> using React + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
