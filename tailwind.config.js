/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:
    {
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px'
    },
    extend: 
    {
      colors: {
        politicalRed:    'rgba(173, 0, 37, 100%)',
        politicalOrange: 'rgba(255, 125, 74, 100%)',
        politicalYellow: 'rgba(232, 154, 38, 100%)',
        politicalTeal:   'rgba(0, 108, 125, 100%)',
        politicalPurple: 'rgba(111, 0, 68, 100%)',
        politicalBgTeal: 'rgba(199, 221, 225, 100%)',
      },
    },
  },
  plugins: [ function ({ addVariant }) {
    addVariant('child', '& > *');
    addVariant('child-hover', '& > *:hover');
}],
}