/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{pug,yml,md}"
  ],
  theme: {
    fontFamily: {
      sans: ["Roboto"],
    },
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
}
