/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },

      colors: {
        mybg: {
          dark: "rgb(17, 17, 17)",
          light: "rgb(40, 40, 40)",
        },
        gray: {
          light: "#D3D3D3",
          txt: "rgb(127, 120, 120)",
        },
      },
    },
  },
  plugins: [],
};
