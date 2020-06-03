module.exports = {
  purge: ['./src/**/*.html'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      colors: {
        'orange-primary': '#F24948',
        'blue-primary': '#182858',
        'blue-secondary': '#4c71c4',
        'purple-primary': '#8e518c',
        'gray-primary': '#67666e',
      },
    },
  },
  variants: {
    backgroundColor: ['responsive', 'hover', 'focus', 'active'],
  },
  plugins: [],
}
