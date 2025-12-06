import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        primary: {
          50: '#fef9e7',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#DAA520', // Main gold
          600: '#B8860B', // Dark gold
          700: '#9a7209',
          800: '#7c5d07',
          900: '#5e4805',
        },
        secondary: {
          50: '#f0f1f5',
          100: '#d4d7e3',
          200: '#b8bdd1',
          300: '#9ca3bf',
          400: '#8089ad',
          500: '#1a1f3a', // Navy
          600: '#15192f',
          700: '#101324',
          800: '#0b0d19',
          900: '#06070e',
        },
        accent: {
          50: '#faf6f2',
          100: '#f5ede5',
          200: '#ebdbcb',
          300: '#e1c9b1',
          400: '#d7b797',
          500: '#CD7F32', // Bronze
          600: '#a46628',
          700: '#7b4c1e',
          800: '#523314',
          900: '#29190a',
        },
        neutral: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
      },
      transitionDuration: {
        '300': '300ms',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
