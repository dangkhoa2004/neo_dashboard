/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#F7F5F0',       // Màu nền kem
        'neo-green': '#22c55e',    // Màu xanh lá
      },
      boxShadow: {
        'neo': '5px 5px 0px 0px rgba(0,0,0,1)',      
        'neo-hover': '7px 7px 0px 0px rgba(0,0,0,1)', 
        'neo-sm': '3px 3px 0px 0px rgba(0,0,0,1)',    
      }
    },
  },
  plugins: [],
}