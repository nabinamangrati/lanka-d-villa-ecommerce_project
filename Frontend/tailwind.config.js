/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html", // Include your HTML files if you use Tailwind classes there
    "./components/**/*.{js,jsx,ts,tsx}", // Include components directory if it exists
    "./pages/**/*.{js,jsx,ts,tsx}", // Include pages directory if it exists
    "./admin page/**/*.{js,jsx,ts,tsx}", // Include admin page directory if it exists
  ],
  
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Trebuchet MS"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}