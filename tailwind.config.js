/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '9/10': '90%',
        '1200': '1200px',
        '17': '70px'
      },
      fontFamily: {
        'cairo': '"Cairo", sans-serif'
      },
      colors: {
        'brown': '#553939',
        'light-brown': '#A77979'
      },
    },
  },
  plugins: [],
}