module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblue: '#1E293B',
        lightblue: '#C7D2FE',
        sidebar: '#F4F4F5',
        logolet: '#FAFAFA',
        blueGray:'#1E293B'
      },
      keyframes: {
        fadeIn: {
          '0%': {opacity: '0', transform: 'translate3d(0, -10%, 0)'},
          '100%': {opacity: '1', transform: 'translate3d(0, 0, 0)'},
        }
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in both',
      },
      spacing:{
        navh : '9vh',
        body: '91vh',
        qtitle:'18.2vh',
        navbtn: '5vh',
        codepen:'54vw'
      },
      fontFamily: {
        'josefin': ['Josefin Sans'],
        'poppin': ['Poppins']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
