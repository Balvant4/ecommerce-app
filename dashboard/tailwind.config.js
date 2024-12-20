/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // Include the main HTML file
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS/JSX/TS/TSX files in the `src` directory
  ],
  theme: {
    extend: {
      colors: {
        bgmain: "#cdcae9",
      },
    },
  },
  plugins: [],
};
