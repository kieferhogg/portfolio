/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      body: ["JetBrains Mono", "monospace"],
      display: ["Inter", "sans-serif"],
    },
    extend: {
      colors: {
        husqy: {
          bgColor: "#000000",
          textColor: "#EBD7FF",
          mainColor: "#972FFF",
          mainColorDark: "#260C40",
          subColor: "#C58AFF",
          errorColor: "#DA3333",
        },
      },
    },
  },
  plugins: [],
};

module.exports = config;
