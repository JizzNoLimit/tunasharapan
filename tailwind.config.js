/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: '0',
            transform: 'translateY(1.5rem)'
          }, '100%': {
            opacity: '1',
            transform: 'translateY(0px)'
          }
        }
      },
      animation: {
        'home-fade': 'fadeIn 1s ease-in'
      }
    },
  },
  plugins: [],
}