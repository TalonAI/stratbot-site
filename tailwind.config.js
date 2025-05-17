/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mosaics: {
          dark: "#00787D",     // Primary text / background
          teal: "#1AC6B2",     // CTA + highlight
          purple: "#8B5FBF",   // Accent / hover
          gray: "#F7F9FA",     // Light background or section contrast
        },
      },
    },
  },
  plugins: [],
};
