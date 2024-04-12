/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {colors: {
      'light-green': '#BEE3CC',
      'Gray': '#6F757C',
      'light-yellow': '#F6C768',
      'light-red': '#ED735D',
      'light-black': '#1B1D1F',
      'blackish': '#111315',
    },},
    fontFamily:{
      DM_Sans:["DM Sans"]
    },fontSize: {
      ss:['11px','14px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [],
};
