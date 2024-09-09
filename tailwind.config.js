/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        primary_color: "#E76F51;",
        fontColor: "rgba(0, 0, 0, 0.80)",
        transparen_primary: "rgba(231, 111, 81, 0.10)",
      },
    },
    fontFamily: {
      poppins: ['"Poppins", sans-serif'],
    },
  },
  plugins: [require("daisyui")],
};
