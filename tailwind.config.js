/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'animate-[galaxySpin_3s_linear_infinite]',
    'animate-[galaxySpin_4s_linear_infinite]',
    'animate-[galaxySpin_5s_linear_infinite]',
    'animate-[pulse_1s_cubic-bezier(0,0,0.2,1)_infinite]',
    'animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]'
  ],
  theme: {
    extend: {
      keyframes: {
        flip: {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '25%': { transform: 'rotateX(180deg) rotateY(0deg)' },
          '50%': { transform: 'rotateX(180deg) rotateY(180deg)' },
          '75%': { transform: 'rotateX(0deg) rotateY(180deg)' },
          '100%': { transform: 'rotateX(0deg) rotateY(0deg)' },
        },
        wave: {
          '0%, 100%': { transform: 'scaleY(1)' },
          '50%': { transform: 'scaleY(0.5)' },
        },
        clockSpin: {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        squarePulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(0.5)', opacity: '0.5' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '0%': { transform: 'scale(1)', opacity: '0.75' },
          '75%, 100%': { transform: 'scale(2)', opacity: '0' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '0.75' },
          '50%': { transform: 'scale(0.95)', opacity: '0.5' },
        },
        heartbeat: {
          '0%': { transform: 'scale(0.8)' },
          '5%': { transform: 'scale(0.9)' },
          '10%': { transform: 'scale(0.8)' },
          '15%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
          '100%': { transform: 'scale(0.8)' },
        },
        dnaLeft: {
          '0%': { transform: 'translateX(0) scale(1)' },
          '25%': { transform: 'translateX(100%) scale(0.5)' },
          '50%': { transform: 'translateX(0) scale(1)' },
          '75%': { transform: 'translateX(100%) scale(0.5)' },
          '100%': { transform: 'translateX(0) scale(1)' },
        },
        dnaRight: {
          '0%': { transform: 'translateX(0) scale(0.5)' },
          '25%': { transform: 'translateX(-100%) scale(1)' },
          '50%': { transform: 'translateX(0) scale(0.5)' },
          '75%': { transform: 'translateX(-100%) scale(1)' },
          '100%': { transform: 'translateX(0) scale(0.5)' },
        },
        galaxySpin: {
          'from': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          'to': { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
        matrixChar: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'flip': 'flip 2s infinite',
        'wave': 'wave 1s ease-in-out infinite',
        'clockSpin': 'clockSpin 2s linear infinite',
        'squarePulse': 'squarePulse 1.5s ease-in-out infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'dnaLeft': 'dnaLeft 1.5s infinite',
        'dnaRight': 'dnaRight 1.5s infinite',
        'galaxySpin': 'galaxySpin 3s linear infinite',
        'matrixChar': 'matrixChar 2s infinite',
      },
    },
  },
  plugins: [],
};
