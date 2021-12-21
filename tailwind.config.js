module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    spacing: Object.assign(
      {},
      ...Object.entries(Array.from(Array(25).keys())).map(([k, v]) => ({ [`${k}`]: `${v * 8}px` })),
    ),
    container: false,
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      red: {
        DEFAULT: '#c0392b',
      },
      gray: {
        darker: '#141414',
        dark: '#252525',
        DEFAULT: '#999',
        light: '#b3b3b3',
      },
      orange: {
        DEFAULT: '#e57e21',
        dark: '#8f4d11',
      },
    },
    extend: {
      boxShadow: {
        center: 'inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(230 126 34 / 60%)',
      },
    },
  },
  plugins: [],
};
