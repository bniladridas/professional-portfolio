/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tech-dark': '#0a192f',
        'tech-blue': '#64ffda',
        'tech-accent': '#1d3557',
        'wolverine-primary': '#1a1a)1a1a',
        'wolverine-secondary': '#333333',
        'wolverine-accent': '#e63946',
      },
      boxShadow: {
        'tech-glow': '0 0 20px rgba(100, 255, 218, 0.3)',
        'tech-float': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'tech-float': 'float 3s ease-in-out infinite',
        'tech-pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      fontFamily: {
        'wolverine': ['"Courier New"', 'monospace'],
      },
    },
  },
  plugins: [],
}