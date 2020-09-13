module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./app/**/*.hbs'],
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        body: 'var(--color-text)'
      },
      fontFamily: {
        display: ['Raleway', 'sans-serif'],
        body: ['Roboto', 'sans-serif']
      },
    },
  },
  variants: {},
  plugins: []
}
