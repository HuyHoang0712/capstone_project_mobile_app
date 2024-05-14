/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./app/***/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      popins: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          100: "rgba(85, 112, 241, 1.0)",
          90: "rgba(96, 120, 236, 1.0)",
          80: "rgba(109, 131, 236, 1.0)",
          70: "rgba(124, 143, 236, 1.0)",
          60: "rgba(136, 153, 233, 1.0)",
          50: "rgba(151, 165, 235, 1.0)",
          40: "rgba(171, 181, 233, 1.0)",
          30: "rgba(182, 191, 232, 1.0)",
          20: "rgba(196, 202, 232, 1.0)",
          10: "rgba(219, 222, 238, 1.0)",
        },
        secondary: {
          100: "rgba(255, 204, 145, 1.0)",
          90: "rgba(255, 210, 158, 1.0)",
          80: "rgba(255, 218, 174, 1.0)",
          70: "rgba(255, 223, 186, 1.0)",
          60: "rgba(255, 229, 200, 1.0)",
          50: "rgba(255, 234, 209, 1.0)",
          40: "rgba(255, 240, 222, 1.0)",
          30: "rgba(255, 242, 226, 1.0)",
          20: "rgba(254, 245, 234, 1.0)",
          10: "rgba(254, 249, 242, 1.0)",
        },
        black: {
          100: "rgba(28, 29, 34, 1.0)",
          90: "rgba(44, 45, 51, 1.0)",
          80: "rgba(51, 52, 58, 1.0)",
          70: "rgba(55, 57, 63, 1.0)",
          60: "rgba(69, 70, 78, 1.0)",
          50: "rgba(83, 84, 92, 1.0)",
          40: "rgba(110, 112, 121, 1.0)",
          30: "rgba(139, 141, 151, 1.0)",
          20: "rgba(166, 168, 177, 1.0)",
          10: "rgba(190, 192, 202, 1.0)",
        },
        "bg-color": "#f4f5fa",
        green: "rgba(81, 156, 102, 1.0)",
        red: "rgba(204, 95, 95, 1.0)",
        "blur-color": "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
