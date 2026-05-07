import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Shield } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certs', href: '#certifications' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-strong shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group"
          >
            <div className="relative">
              <Shield className="w-7 h-7 text-cyber-blue transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#00d4ff]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyber-neon rounded-full animate-pulse" />
            </div>
            <span className="font-display font-bold text-lg tracking-widest text-white group-hover:text-gradient transition-all duration-300">
              CYBERNET
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="font-body text-sm font-medium text-slate-300 hover:text-cyber-blue transition-all duration-300 tracking-wider relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyber-blue transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-cyber text-xs px-5 py-2 rounded-sm"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-cyber-blue p-2"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 glass-strong flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.label}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-2xl font-bold text-white hover:text-cyber-blue transition-colors duration-300 tracking-widest"
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onClick={() => handleNavClick('#contact')}
              className="btn-cyber-solid rounded-sm mt-4"
            >
              Hire Me
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
