module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      aliceBlue: '#E7F2FF',
      darkBlue: '#054491',
      darkElectricBlue: '#4B627D',
      heroBlue: '#243447',
      transparent: 'transparent',
      gold: '#E5BF9A',
    },
    extend: {
      backgroundImage: {
        hero: 'url(@assets/home/hero/background.jpg)',
      }
    },
  },
  plugins: [],
}
