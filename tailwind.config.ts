import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Academic palette: white, blue, dark gray, subtle accent
        'academic-blue': '#0066cc',
        'academic-navy': '#00264d',
        'academic-gray': '#4a5568',
        'academic-light': '#f8fafc',
        'academic-accent': '#e74c3c', // Subtle red accent
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'heading-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'heading-md': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-sm': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
