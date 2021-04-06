module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ibm: "IBM Plex Mono, monospace",
        inter: "Inter, sans-serif",
        dm: "DM Sans, sans-serif",
      },
      colors: {
        navy: "#060F60",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
