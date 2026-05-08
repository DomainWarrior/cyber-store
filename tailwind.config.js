/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cyber: {
          green: '#00ff41',
          cyan: '#00d4ff',
          red: '#ff003c',
          dark: '#050505',
          card: '#0d0d0d',
          border: '#1a1a1a',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'glitch': 'glitch 3s infinite',
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'fadeInUp': 'fadeInUp 0.6s ease forwards',
        'pulse-green': 'pulseGreen 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(2px, -2px)' },
          '60%': { transform: 'translate(-1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        fadeInUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulseGreen: {
          '0%': { boxShadow: '0 0 0 0 rgba(0,255,65,0.4)' },
          '70%': { boxShadow: '0 0 0 12px rgba(0,255,65,0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(0,255,65,0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
