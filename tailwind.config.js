module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" }
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in-out"
      }
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%'
    },
    screens:{
      'xxs': '0px',
      // => @media (min-width: 0px) { ... }

      'xs': '400px',

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
        "5v": "5vw",
        "10v": "10vw",
        "15v": "15vw",
        "20v": "20vw",
        "25v": "25vw",
        "30v": "30vw",
        "35v": "35vw",
        "40v": "40vw",
        "45v": "45vw",
        "50v": "50vw",
        "55v": "55vw",
        "60v": "60vw",
        "65v": "65vw",
        "70v": "70vw",
        "75v": "75vw",
        "80v": "80vw",
        "85v": "85vw",
        "90v": "90vw",
        "95v": "95vw",
			"100v": "100vw",
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
        "5v": "5vw",
        "10v": "10vh",
        "15v": "15vh",
        "20v": "20vh",
        "25v": "25vh",
        "30v": "30vh",
        "35v": "35vh",
        "40v": "40vh",
        "45v": "45vh",
        "50v": "50vh",
        "55v": "55vh",
        "60v": "60vh",
        "65v": "65vh",
        "70v": "70vh",
        "75v": "75vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "95v": "95vh",
			  "100v": "100vh",
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
