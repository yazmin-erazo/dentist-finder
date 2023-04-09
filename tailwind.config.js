/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#1a202c",
          secondary: "#2d3748",
          accent: "#e2e8f0",
        },
        light: {
          primary: "#f7fafc",
          secondary: "#edf2f7",
          accent: "#1a202c",
        },
      },
    },
  },
  plugins: [],
};
