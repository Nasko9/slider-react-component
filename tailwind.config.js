/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    fontWeight: {
      normal: 300,
      semibold: 600,
      bold: 800,
    },
    extend: {},
  },
  plugins: [],
};
