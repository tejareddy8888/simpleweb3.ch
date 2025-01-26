/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      'playfair': ['Playfair Display'],
      'open-sans': ['Open Sans'],
    },
    extend: {
      colors: {
        customGreen: '#2B5E0A',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}