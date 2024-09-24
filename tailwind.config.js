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
    },
    container:{
      center:true,
    }
  },
  plugins: [],
}
