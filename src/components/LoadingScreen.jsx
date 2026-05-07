import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('Initializing...');

  const stages = [
    { progress: 20, text: 'Loading modules...' },
    { progress: 45, text: 'Establishing secure connection...' },
    { progress: 70, text: 'Compiling network protocols...' },
    { progress: 90, text: 'Authenticating credentials...' },
    { progress: 100, text: 'Access granted.' },
  ];

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < stages.length) {
        setProgress(stages[i].progress);
        setText(stages[i].text);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(onComplete, 500);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: '#020710' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Grid bg */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-10 relative"
      >
        <div className="w-24 h-24 relative">
          <svg viewBox="0 0 96 96" className="w-full h-full">
            <defs>
              <linearGradient id="lg" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00d4ff" />
                <stop offset="100%" stopColor="#7b2fff" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <motion.path
              d="M48 8 L82 26 L82 58 Q82 78 48 90 Q14 78 14 58 L14 26 Z"
              fill="none"
              stroke="url(#lg)"
              strokeWidth="2"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <motion.path
              d="M36 48 L44 56 L60 40"
              stroke="#00d4ff"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#glow)"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </svg>
          {/* Rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ border: '1px solid rgba(0,212,255,0.3)' }}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          />
        </div>
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-display font-bold text-2xl text-gradient mb-2 tracking-widest uppercase"
      >
        CyberNet Portfolio
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="font-mono text-sm text-cyber-blue mb-12 tracking-widest"
      >
        {text}
      </motion.p>

      {/* Progress bar */}
      <div className="w-80 h-1 bg-cyber-card rounded-full overflow-hidden relative">
        <motion.div
          className="h-full rounded-full"
          style={{
            background: 'linear-gradient(90deg, #00d4ff, #7b2fff)',
            boxShadow: '0 0 12px rgba(0,212,255,0.8)',
          }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
        />
      </div>

      <p className="font-mono text-xs text-slate-500 mt-3">{progress}%</p>
    </motion.div>
  );
}
