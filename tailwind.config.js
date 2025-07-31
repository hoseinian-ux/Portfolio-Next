/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // اگر از app directory استفاده می‌کنی
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
