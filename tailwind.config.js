/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#101010',
        secondary: 'rgba(241, 241, 241, 0.1)',
        customGray: '#a0aec0',
        customWhite: '#F1F1F1',
        darkGray: '#575756',
        footerDark: '#151616',
        dark: '#0D0D0D',
        toggleDark: '#0E0E0E',
      },
    },
  },
  plugins: [
      //This is for the custom slider for Mipmap lvl and Render Distance. Tailwind does not offer lots of customization on sliders
    // so I resorted to basic CSS or i could have used an external package.
    function ({ addUtilities }) {
      addUtilities({
        '.slider': {
          '-webkit-appearance': 'none',
          '-moz-appearance': 'none',
          'appearance': 'none',
          'width': '100%',
          'background': 'transparent',
          'outline': 'none',
        },
        '.slider::-webkit-slider-runnable-track': {
          'width': '100%',
          'height': '50px',
          'background': 'linear-gradient(to right, rgba(241, 241, 241, 0.2) var(--slider-progress, 0%), #0D0D0D var(--slider-progress, 0%))',
          'border-radius': '1rem',
        },
        '.slider::-webkit-slider-thumb': {
          '-webkit-appearance': 'none',
          'width': '22.55px',
          'height': '50px',
          'background-color': '#575756',
          'border': '1px solid rgba(241, 241, 241, 0.5)',
          'border-radius': '100px',
          'cursor': 'pointer',
          'backdrop-filter': 'blur(5px)',
        },
        '.slider::-moz-range-thumb': {
          'width': '22.55px',
          'height': '50px',
          'background-color': '#575756',
          'border': '1px solid rgba(241, 241, 241, 0.5)',
          'border-radius': '100px',
          'cursor': 'pointer',
          'backdrop-filter': 'blur(5px)',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
