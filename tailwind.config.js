/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        'brandiesBlue': '#2F70F2',
      },
      fontFamily: {
        karantina: ["Karantina","serif"],
        poppins: ["Poppins", "serif"]
      }
    },
  },
  plugins: [],
};

