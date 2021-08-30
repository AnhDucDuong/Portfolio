module.exports = {
  mode: 'jit',
  purge: [
    './**/*.html',
    './src/**/*.{js,jsx,ts,tsx,vue}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'backgroundHome': "url('https://firebasestorage.googleapis.com/v0/b/ecmascript-7a6e3.appspot.com/o/images%2Flakeside-evening.png?alt=media&token=c7639333-634b-4835-8e23-c42718713e2c')",
      }),

      boxShadow: {
        about: '15px 15px 5px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}