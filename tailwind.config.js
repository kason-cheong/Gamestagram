/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./**/*.{js,ts,jsx,tsx}', './client/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ['"Pacifico"', 'cursive'],
      },
    },
  },
  plugins: [],
}
