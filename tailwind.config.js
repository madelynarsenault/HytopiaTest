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
        secondary: '#F1F1F11A',
        pfpCustom: '#F1F1F133',
        customPurple: '#6b46c1',
        customGray: '#a0aec0',
        customRed: '#e53e3e',
        customWhite: '#F1F1F1',
        transparentDark: 'rgba(13, 13, 13, 0)',
        dark: '#0D0D0D',
      },
      backgroundImage: {
        'linear-dark': 'linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)',
      },
    },
  },
  plugins: [],
}
