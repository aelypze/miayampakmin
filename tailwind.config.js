/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bckg: "#4F200D",
        paper: "#F0E0C1",
        txtnv: "#CF7500",
        mknn: "#FF8400",
        kcl: "#FFD2BF",
        abt: "#F0E0C1",
      },
      fontSize: {
        he1: "70px",
        p1: "25px"
      },
      fontFamily: {
        jdl: ['Bebas Neue'],
        mnu: ['Fredoka'],
        hrg: ['Nunito']
      },
      fontWeight: {
        thin: "100"
      }
    },
  },
  plugins: [],
}