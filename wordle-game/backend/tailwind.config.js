/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./views/**/*.ejs"],
  theme: {
    extend: {
      colors: {
        background: "#292727",
        dark: "#3D3B3A ",
        yellow: "#f5bc42",
        green: "#1CCC10",
        red: "#a83232",
        white: "#F0EAE4",
        links: "#FEF9F9",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      boxShadow: {
        box: "0 10px 15px rgba(0, 0, 0, 0.3)",
        img: "2px 10px 14px 0px rgba(38,37,37,0.75)",
      },
      scale: {
        103: "1.03",
      },
    },
  },
  plugins: [],
};
