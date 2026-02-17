/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        warm: {
          50: '#fffbf0',
          100: '#fef3d0',
          200: '#fde4a0',
          300: '#fbd06b',
          400: '#f9b93d',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        }
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(245,158,11,0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(245,158,11,0.6)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out forwards',
        fadeInUp: 'fadeInUp 0.6s ease-out forwards',
        slideUp: 'slideUp 0.8s ease-out forwards',
        slideDown: 'slideDown 0.5s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
        bounce: 'bounce 2s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
