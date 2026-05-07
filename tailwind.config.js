/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          blue: '#00d4ff',
          purple: '#7b2fff',
          dark: '#050b14',
          darker: '#020710',
          card: '#0a1628',
          border: '#0e2040',
          neon: '#00ffcc',
          red: '#ff003c',
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Orbitron"', 'sans-serif'],
        body: ['"Exo 2"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glitch': 'glitch 2s infinite',
        'border-flow': 'borderFlow 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        glitch: {
          '0%, 100%': { clipPath: 'inset(0 0 0 0)' },
          '20%': { clipPath: 'inset(20% 0 60% 0)', transform: 'translate(-2px, 0)' },
          '40%': { clipPath: 'inset(50% 0 30% 0)', transform: 'translate(2px, 0)' },
          '60%': { clipPath: 'inset(10% 0 80% 0)', transform: 'translate(-1px, 0)' },
          '80%': { clipPath: 'inset(80% 0 5% 0)', transform: 'translate(1px, 0)' },
        },
        borderFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        }
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)',
        'cyber-gradient': 'linear-gradient(135deg, #00d4ff 0%, #7b2fff 50%, #00ffcc 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050b14 0%, #020710 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0,212,255,0.5), 0 0 40px rgba(0,212,255,0.2)',
        'neon-purple': '0 0 20px rgba(123,47,255,0.5), 0 0 40px rgba(123,47,255,0.2)',
        'neon-green': '0 0 20px rgba(0,255,204,0.5), 0 0 40px rgba(0,255,204,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.4)',
      }
    },
  },
  plugins: [],
}
