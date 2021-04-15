module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        typing: {
          '0%': { width: '0ch;' },
          '25%': { width: '11.25ch;' },
          '50%': { width: '22.5ch;' },
          '75%': { width: '11.25ch;' },         
          '100%':{ width: '0ch;' },
        }
      },

      animation: {
        typing: 'typing 5s steps(15) infinite',
      },

      backgroundImage: theme => ({
        'hero-pattern': "url('/background.png')",
      })
    },
    fontFamily: {
      'poppins': ['Poppins', 'Arial', 'sans-serif'],
      'ubuntu': ['Ubuntu', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [],
}
