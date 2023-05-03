/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{html,js,ts,tsx}','./client/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}
