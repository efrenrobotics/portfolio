/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        alliance: ["AllianceNo2", "sans-serif"],
      },
      colors: {
        white: "#ffffff",
        background: "#70798c",
        offwhite: "#fffff4",
      },
    },
  },
  plugins: [],
};
