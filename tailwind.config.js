/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        'custom-desktop': '64px',
        'custom-tablet': '50px',
        'custom-mobile': '38px',
      },
      
    },
  },
  plugins: [],
}