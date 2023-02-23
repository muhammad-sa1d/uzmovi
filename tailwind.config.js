/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1170': '1170px',
      },
      spacing: {
        '215': '215px',
        '35r': '35rem',
        '21r': '21rem',
        '1190': '1190px',
        '669': '467px',
      },
      fontSize: {
        sm: ['14px', '20px'],
      },
      colors: {
        'regal-black-2': '#222933',
        'regal-black-4': '#131A20',
        'regal-black': '#161D25',
        'regal-white': '#6e879f',
        'regal-black-3': '#313842',
        'regal-yellow': '#FF6907',
        'regal-blue': '#02B0E4  ',
        'regal-yellow-2': '#FFC146',
        'regal-puple': '#9B59B6',
        'regal-puple-2': '#304156',
        'regal-puple-3': '#553f62',
        'regal-puple-4': '#523B67',
        'regal-green': '#1dd2af',
        'regal-grey': '#24303d',
      },
    },
  },
  plugins: [],
}
