/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}
