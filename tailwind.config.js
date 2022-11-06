/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "starter-code/index.html",
    "src/main.css",
    "starter-code/destination.html",
    "starter-code/crew.html",
    "starter-code/technology.html",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Barlow', 'sans-serif'],
      'serif': ['Bellefair', 'serif'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
    },
    fontWeight: {
      400: '400',
      700: '700',
    },
    colors: {
      Grey: '#D0D6F9',
      White: '#FFFFFF',
      DarkBlue: '#0B0D17'
    }
  },
  plugins: [],
}
