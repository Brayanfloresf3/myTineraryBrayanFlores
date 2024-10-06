/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'space-black': '#0f172a',
        'overlay-gray': '#1e293b',
      },
    },
  plugins: [],
}
}
