/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'animate-spin',
    'animate-pulse',
    'animate-wave',
    'animate-flip',
    'animate-matrix',
    'animate-galaxy',
    'animate-heartbeat',
    'animate-dna',
    'animate-clock',
    'animate-star',
    'animate-square'
  ],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 1s linear infinite',
        'pulse': 'pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'wave': 'wave 1.5s ease-in-out infinite',
        'flip': 'flip 2s linear infinite',
        'matrix': 'matrix 2s linear infinite',
        'galaxy': 'galaxy 3s linear infinite',
        'heartbeat': 'heartbeat 1s ease-in-out infinite',
        'dna': 'dna 3s linear infinite',
        'clock': 'clock 2s linear infinite',
        'star': 'star 2s linear infinite',
        'square': 'square 2s linear infinite'
      },
      keyframes: {
        spin: {
          'to': { transform: 'rotate(360deg)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' }
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' }
        },
        flip: {
          '0%': { transform: 'perspective(400px) rotateY(0)' },
          '100%': { transform: 'perspective(400px) rotateY(360deg)' }
        },
        matrix: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-100%)' }
        },
        galaxy: {
          '0%': { transform: 'rotate(0) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        heartbeat: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' }
        },
        dna: {
          '0%': { transform: 'rotate(0) translateX(0)' },
          '50%': { transform: 'rotate(180deg) translateX(100%)' },
          '100%': { transform: 'rotate(360deg) translateX(0)' }
        },
        clock: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        },
        star: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.5)' },
          '100%': { transform: 'rotate(360deg) scale(1)' }
        },
        square: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(90deg)' },
          '50%': { transform: 'rotate(180deg)' },
          '75%': { transform: 'rotate(270deg)' }
        }
      }
    }
  },
  plugins: [],
};
