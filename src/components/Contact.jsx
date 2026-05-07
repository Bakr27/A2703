import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Github, Linkedin, MessageSquare, Send, CheckCircle, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailtoUrl;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', sub: '@yourusername', href: personalInfo.github, color: '#00d4ff' },
    { icon: Linkedin, label: 'LinkedIn', sub: 'Connect with me', href: personalInfo.linkedin, color: '#7b2fff' },
    { icon: Mail, label: 'Email', sub: personalInfo.email, href: `mailto:${personalInfo.email}`, color: '#00ffcc' },
    { icon: MessageSquare, label: 'WhatsApp', sub: 'Message me directly', href: personalInfo.whatsapp, color: '#00ffcc' },
  ];

  return (
    <section id="contact" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.04) 0%, rgba(123,47,255,0.03) 40%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">07. GET IN TOUCH</p>
          <h2 className="section-title">Contact Me</h2>
          <p className="font-body text-slate-400 mt-4 max-w-xl mx-auto">
            Open to network engineering, SOC, and cybersecurity roles. Let's build something secure together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="font-display font-bold text-white text-xl mb-8">Let's Connect</h3>

            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 glass rounded-xl p-4 border border-cyber-blue/10 hover:border-cyber-blue/40 transition-all duration-300 group"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{ background: link.color + '20', border: `1px solid ${link.color}40` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-sm">{link.label}</p>
                    <p className="font-mono text-xs text-slate-500">{link.sub}</p>
                  </div>
                </motion.a>
              );
            })}

            {/* CV Download */}
            <motion.a
              href={personalInfo.cvUrl}
              download={personalInfo.cvFilename}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="btn-cyber-solid w-full flex items-center justify-center gap-2 rounded-sm mt-8"
            >
              <Download className="w-4 h-4" />
              Download My CV / Resume
            </motion.a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-xl p-8 border border-cyber-blue/10 space-y-5">
              <h3 className="font-display font-bold text-white text-xl mb-6">Send a Message</h3>

              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'john@example.com' },
                { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Network Engineer Position' },
              ].map((field) => (
                <div key={field.name}>
                  <label className="font-mono text-xs text-slate-400 tracking-widest uppercase block mb-2">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    value={form[field.name]}
                    onChange={(e) => setForm(prev => ({ ...prev, [field.name]: e.target.value }))}
                    placeholder={field.placeholder}
                    required
                    className="w-full font-body text-sm text-white bg-transparent border border-cyber-blue/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-blue/60 transition-all duration-300 placeholder-slate-600"
                  />
                </div>
              ))}

              <div>
                <label className="font-mono text-xs text-slate-400 tracking-widest uppercase block mb-2">
                  Message
                </label>
                <textarea
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Hello, I'm interested in your network engineering skills..."
                  required
                  className="w-full font-body text-sm text-white bg-transparent border border-cyber-blue/20 rounded-lg px-4 py-3 focus:outline-none focus:border-cyber-blue/60 transition-all duration-300 placeholder-slate-600 resize-none"
                />
              </div>

              <button
                type="submit"
                className="btn-cyber-solid w-full flex items-center justify-center gap-2 rounded-sm"
              >
                {sent ? (
                  <>
                    <CheckCircle className="w-4 h-4" />
                    Opening Email Client...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
