import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Terminal as TerminalIcon, Minimize2, Maximize2, X } from 'lucide-react';
import { terminalLines } from '../data/portfolioData';

export default function TerminalSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [visibleLines, setVisibleLines] = useState([]);
  const [started, setStarted] = useState(false);
  const termRef = useRef(null);

  useEffect(() => {
    if (inView && !started) {
      setStarted(true);
      terminalLines.forEach((line) => {
        setTimeout(() => {
          setVisibleLines(prev => [...prev, line]);
          if (termRef.current) {
            termRef.current.scrollTop = termRef.current.scrollHeight;
          }
        }, line.delay);
      });
    }
  }, [inView, started]);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-mono text-cyber-blue text-sm tracking-[0.3em] uppercase mb-3">// LIVE ENVIRONMENT</p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white">
            Cybersecurity <span className="text-gradient">Terminal</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="rounded-xl overflow-hidden"
          style={{
            background: 'rgba(2,7,16,0.95)',
            border: '1px solid rgba(0,212,255,0.2)',
            boxShadow: '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(0,212,255,0.08)',
          }}
        >
          {/* Title bar */}
          <div className="flex items-center justify-between px-5 py-3 border-b border-cyber-blue/10"
            style={{ background: 'rgba(10,22,40,0.8)' }}>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex items-center gap-2 font-mono text-xs text-slate-500">
              <TerminalIcon className="w-3.5 h-3.5" />
              kali@cybersec-lab: ~
            </div>
            <div className="flex items-center gap-2 text-slate-600">
              <Minimize2 className="w-3.5 h-3.5" />
              <Maximize2 className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Terminal body */}
          <div
            ref={termRef}
            className="terminal-window p-6 h-80 overflow-y-auto"
            style={{ scrollbarWidth: 'none' }}
          >
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-1"
                style={{ color: line.color }}
              >
                {line.text}
              </motion.div>
            ))}

            {started && visibleLines.length < terminalLines.length && (
              <span className="cursor-blink" />
            )}
            {started && visibleLines.length === terminalLines.length && (
              <div className="mt-4 flex items-center gap-2">
                <span style={{ color: '#00d4ff' }}>$</span>
                <span className="cursor-blink" />
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
