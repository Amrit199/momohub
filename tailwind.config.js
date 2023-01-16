/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'home': "url('../public/images/home.jpg')",
        'hero': "url('../public/images/hero.jpg')",
        'offer': "url('../public/images/offer.jpg')",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
