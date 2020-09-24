module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ['./app/**/*.hbs'],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      body: 'var(--color-text)',
      white: 'var(--color-white)'
    },
    fontFamily: {
      display: ['Raleway', 'sans-serif'],
      body: ['Roboto', 'sans-serif']
    },

    extend: {}
  },
  variants: {},
  plugins: []
}
