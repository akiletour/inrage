module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    spacing: Object.assign(
      {},
      ...Object.entries(Array.from(Array(46).keys())).map(([k, v]) => ({
        [`${k}`]: `${v * 8}px`,
      }))
    ),
    container: false,
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      red: {
        DEFAULT: "#c0392b",
      },
      gray: {
        darker: "#141414",
        dark: "#252525",
        DEFAULT: "#999",
        light: "#b3b3b3",
      },
      orange: {
        DEFAULT: "#e57e21",
        dark: "#8f4d11",
      },
    },
    extend: {
      boxShadow: {
        center:
          "inset 0 1px 1px rgb(0 0 0 / 8%), 0 0 8px rgb(230 126 34 / 60%)",
      },
      animation: {
        bouncex: "bouncex 1s infinite",
      },
      keyframes: {
        bouncex: {
          "0%, 100%": {
            transform: "translateX(-4px)",
            animateTimingFunction: "cubic-bezier(.8,0,1,1)",
          },
          "50%": {
            transform: "none",
            animateTimingFunction: "cubic-bezier(0,0,.2,1)",
          },
        },
      },
    },
  },
  plugins: [],
}
