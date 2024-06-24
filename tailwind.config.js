/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#e8f5e9',   // Màu nền
        text: '#1b5e20',         // Màu chữ chính
        accent: '#a5d6a7',       // Màu nhấn
        header: '#1b5e20',       // Màu header
        footer: '#2e7d32',       // Màu footer
        secondary: '#81c784',    // Màu phụ
      },
      fontFamily: {
        sans: ['"Open Sans"', 'Arial', 'sans-serif'], // Font chữ tùy chỉnh
      },
    },
  },
  plugins: [],
}
