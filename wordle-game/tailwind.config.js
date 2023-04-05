/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#292727",
        dark: "#3D3B3A ",
        yellow: "#f5bc42",
        green: "#1CCC10",
        red: "#a83232",
        white: "#F0EAE4",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        box: "0 10px 15px rgba(0, 0, 0, 0.3)",
        img: "2px 10px 14px 0px rgba(38,37,37,0.75)",
      },
    },
  },
  plugins: [],
};
