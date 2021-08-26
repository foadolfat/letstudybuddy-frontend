module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens:{
      'xs': '0px',
      // => @media (min-width: 0px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      'vs': '250px',

      'sh': {'raw': '(max-height: 800px)'},

      'xsh': {'raw': '(max-height: 500px)'}
    },
    extend: {
      width:{
        "100":"100px",
        "150":"150px",
        "200":"200px",
        "250":"250px",
        "300":"300px",
        "350":"350px",
        "400":"400px",
        "450":"450px",
        "500":"500px",
        "550":"550px",
        "600":"600px",
        "700":"700px",
        "800":"800px",
        "900":"900px",
        "1000":"1000px",
        "10%":"10%",
        "20%":"20%",
        "30%":"30%",
        "40%":"40%",
        "60%":"60%",
        "70%":"70%",
        "80%":"80%",
        "90%":"90%",
        "150%":"150%",
        "160%":"160%",
        "170%":"170%",
        "180%":"180%",
        "190%":"190%",
        "200%":"200%"
      },
      height:{
        "100":"100px",
        "150":"150px",
        "200":"200px",
        "250":"250px",
        "300":"300px",
        "350":"350px",
        "400":"400px",
        "450":"450px",
        "500":"500px",
        "550":"550px",
        "600":"600px",
        "700":"700px",
        "800":"800px",
        "900":"900px",
        "1000":"1000px",
        "10%":"10%",
        "20%":"20%",
        "30%":"30%",
        "40%":"40%",
        "60%":"60%",
        "70%":"70%",
        "80%":"80%",
        "90%":"90%"
      },
      colors:{
        //Primary colors
        "primary": "var(--primary)",
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",

        "on-primary": "var(--on-primary)",
        "on-primary-light": "var(--on-primary-light)",
        "on-primary-dark": "var(--on-primary-dark)",


        //Secondary colors
        "secondary": "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        "secondary-dark": "var(--secondary-dark)",

        "on-secondary": "var(--on-secondary)",
        "on-secondary-light": "var(--on-secondary-light)",
        "on-secondary-dark": "var(--on-secondary-dark)",


        "page-background": "var(--page-background)",
        "surface": "var(--surface)",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
