/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      "bg_light": "#F5F5F5",
      "bg_dark": "#1E1F23",
      "purple": "#4225B4",
      "sidebar_dark":"#F5F5F5",
      "card_dark":"#F5F5F5",
      "white":"#FFFFFF",
      "cyan":"#2BEBC7",
      "chart1":"#FF7777",
      "chart2":"#684BDB",
      "chart3":"#2BEBC7",


    },
    extend: {},
  },
  plugins: [
    
  ],
}

