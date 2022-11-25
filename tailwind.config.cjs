/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        primary: {
          main: "#5E59FF",
          hover: "#4E4AD4",
          pressed: "#3F3BAA",
          surface: "#DFDEFF",
          border: "#7975FF",
        },
        netral: {
          10: "#FFFFFF",
          20: "#F4F5F6",
          30: "#E5E7EB",
          40: "#D3D6DA",
          50: "#A0A8B0",
          60: "#707784",
          70: "#515966",
          80: "#3B4453",
          90: "#232B39",
          100: "#101623",
        },
        error: {
          main: "#FF5630",
          hover: "#D44828",
          pressed: "#AA3920",
          surface: "#FFDDD6",
          border: "#FF7252",
        },
        warning: {
          main: "#FFAB00",
          hover: "#D48E00",
          pressed: "#AA7200",
          surface: "#FFEECC",
          border: "#FFB92A",
        },
        success: {
          main: "#36B37E",
          hover: "#2D9569",
          pressed: "#247754",
          surface: "#D7F0E5",
          border: "#57C093",
        },
        info: {
          main: "#0065FF",
          hover: "#0054D4",
          pressed: "#247754",
          surface: "#CCE0FF",
          border: "#2A7FFF",
        },
      },
      boxShadow: {
        extend: '0px -0px 16px 8px rgba(0, 0, 0, 0.04)',
        message: '0px 0px 1px rgba(47, 47, 47, 0.2), 0px 3px 5px rgba(47, 47, 47, 0.2)'
      }
    },
  },
  plugins: [],
};
