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
      spacing:{
        navh : '9vh',
        body: '91vh',
        navbtn: '5vh',
        codepen:'54vw'
      },
      fontFamily: {
        'josefin': ['Josefin Sans']
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
