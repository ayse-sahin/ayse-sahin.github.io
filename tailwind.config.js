/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
        extend: {
            fontFamily: {
                display: ['CormorantGaramond'],
                serif: ['Montserrat']
            },
            colors: {
                'lighter': '#f2e7dd',
                'light': '#ffedd5',
                'neutral': '#ffedd5',
                'dark': '#172554',
                'darker': '#450a0a',
                'link-hover': '#960604',
                'dark-green': '#083a2e'
            }
        },
    },
    plugins: [],
}
