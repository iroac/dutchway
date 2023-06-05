/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      height: {
        'animation-cut': '160px',
      },
      colors: {
        'red-flag': '#C8102E',
        'blue-flag': '#003DA5'
      }, backgroundImage: {
        'daily-gradient': 'linear-gradient(40deg, rgba(0,61,165,1) 0%, rgba(46,178,250,1) 0%, rgba(0,61,165,1) 100%)',
        'sidebyside-gradient': 'linear-gradient(120deg, rgba(200,16,46,1) 50%, rgba(200,16,46,1) 50%, rgba(0,61,165,1) 51%)',
        'sidebysidehover-gradient': 'linear-gradient(126deg, rgba(200,16,46,1) 6%, rgba(200,16,46,1) 44%, rgba(0,61,165,1) 63%)',
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
        'shake-horizontal': 'shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
      },
    },
  },
  plugins: [],
}

