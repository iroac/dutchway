/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      colors: {
        'red-flag': '#C8102E',
        'blue-flag': '#003DA5'
      },
      keyframes: {
        'shake-horizontal': {
          '0%': {
            transform: 'translateX(0)',
            backgroundColor: 'red',
          },
          '25%': {
            transform: 'translateX(-10px)',
            backgroundColor: 'red',
          },
          '60%': {
            transform: 'translateX(10px)',
            backgroundColor: 'red',
          },
          '70%': {
            transform: 'translateX(-10px)',
            backgroundColor: 'red',
          },
          '80%': {
            transform: 'translateX(8px)',
            backgroundColor: 'red',
          },
          '90%': {
            transform: 'translateX(-8px)',
            backgroundColor: 'red',
          },
          '100%': {
            transform: 'translateX(0)',
            backgroundColor: 'white',
          },
        },
      },
      animation: {
        'shake-horizontal': 'shake-horizontal 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
      },
    },
  },
  plugins: [],
}

