/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      maxWidth: {
        '2/3': '66.666667%',
      },
      colors: {
        'primary': '#5e15a8',
        'secondary': '#bd96e4',
        'accent': '#b398ad',
        'text': '#08060a',
        'bg': '#f7f4fa',
      },
    },
    container:{
      center:true,
    }
  },
  plugins: [],
}
