/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#0067FF",
        yellowColor: "#FEB60D",
        purpleColor: "#9771ff",
        irisBlueColor: '#01b5c5',
        headingColor: "181a1e",
        textColor: "#4e545f"
      }
    },
  },
  plugins: [],
}

