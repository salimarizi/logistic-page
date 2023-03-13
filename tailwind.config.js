/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./resources/**/*.vue",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#56bcbe",
        secondary: "#e5e5e5",
        light: "#fbfbfb",
        darker: "#adaeaf"
      }
    },
  },
  plugins: [],
}
