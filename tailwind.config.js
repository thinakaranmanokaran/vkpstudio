/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0F0E0E",
        light: "#d2d2d2",
        purple: "#CB9DF0",
      },

      fontFamily: {
        logo: "logo",
        seclogo: "seclogo",
        paragrabh: "paragrabh",
        seriff: "seriff",
        name: "name",
        subtitle: "subtitle",
        curve: "curve",
      }
    },
  },
  plugins: [],
}