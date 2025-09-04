/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#4578a5',
        'primary-hover': '#3a6590',
        'accent': '#22d3ee',
        'accent-hover': '#06b6d4',
        'off-white': '#fafafa',
        'success': '#10b981',
        'warning': '#f59e0b',
        'error': '#ef4444'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 1s ease-out',
        'pulse': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
};