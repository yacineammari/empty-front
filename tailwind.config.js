/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
      },
      colors: {
        'header-text': '#2E4765',
      },
      fontSize: {
        'xxs': '0.65rem',
      },
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        DEFAULT: '4px',
        'md': '0.375rem',
        'lg': '0.5rem',
        'lgg': '0.75rem',
        'full': '9999px',
        'medium': '25px',
        'large': '200px',
      },
      flexGrow: {
        '1': 1,
        '2': 2,
        '3': 3,
      },
      screens: {
        '3xl': '1600px',
        '4xl': '1900px',
      },
      colors: {
        'blue-login': {
          '100': '#2B3674',
          '410': '#A3AED0',
          '420': '#2B3674',
          '430': '#4318FF',
        },
        'header-text': '#2E4765',
        'dashboard-card-blue': '#E3F5FF',
        'dashboard-card-purple': '#E5ECF6',
      },
      keyframes: {
        'fadeInDown-10': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fadeInRight-10': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
      animation: {
        'fadeInDown-10': 'fadeInDown-10 0.5s infinite',
        'fadeInRight-10': 'fadeInRight-10 0.5s infinite',
      }
    },
  },
  plugins: [],
  prefix: 'tw-',
  safelist: [
    {
      pattern: /bg-(red|orange|blue|yellow|gray|lime|cyan|rose|violet|indigo)-(100|200|300|400|500|600|700|800|900)/
    }
  ]
};
