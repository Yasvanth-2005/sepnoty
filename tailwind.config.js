/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2A2A72",
        secondary: "#0034da",
        sectionBg: "#faf7f0",
        // sectionBg2: "#fff6f0",
        sectionBg2: "#f0f0f0",
      },
    },
  },
  plugins: [],
};
