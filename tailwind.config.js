/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-gray": "#eeeeee",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        baskerville: ["Libre Baskerville", "sans-serif"],
      },
    },
  },
  plugins: [],
};
