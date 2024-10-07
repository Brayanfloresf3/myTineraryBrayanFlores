/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 35px 60px -15px rgba(28, 40, 40, 0.3)', // Color #1C2828
      },
      
    },
  plugins: [],
}
}
