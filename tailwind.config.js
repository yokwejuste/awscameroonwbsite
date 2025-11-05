/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'aws-blue': '#232F3E',
        'aws-orange': '#FF9900',
      }
    },
  },
  plugins: [],
}
