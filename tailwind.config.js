/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}
