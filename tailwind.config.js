const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    container: false,
  },
  theme: {
    colors: {
      blue: '#2f3c71',
      red: '#a43533',
      white: '#ffffff',
      black: '#000000',
      gray: '#c3c3c3',
      bg: '#ecdfc7',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          padding: '0.5rem 1rem',
          // Breakpoints
          '@screen sm': {
            padding: '1rem 2rem',
          },
          '@screen lg': {
            padding: '2rem 4rem',
          },
          '@screen xl': {
            padding: '2.5rem 5rem',
          },
          '@screen 2xl': {
            padding: '2.5rem 6rem',
          },
        },
      });
    }),
  ],
};
