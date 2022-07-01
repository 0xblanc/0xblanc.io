module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      darkGray: '#A8A8A8',
      gray: '#525252',
      lightGray: '#B5B5B5',
      aliceBlue: '#E7F2FF',
      blue: '#3265A5',
      darkBlue: '#054491',
      darkElectricBlue: '#4B627D',
      heroBlue: '#243447',
      deepDarkBlue: '#1D2A3A',
      transparent: 'transparent',
      gold: '#E5BF9A',
      DEFAULT: '#054491',
      purple: '#7B2DB8',
      blueLagoon: '#006266',
      redViolet: '#B53471',
      orange: '#EE5A24',
    },
    extend: {
      backgroundImage: {
        hero: 'url(@assets/home/hero/background.jpg)',
      },
      fontFamily: {
        Raleway: ['Raleway', "sans-serif"]
      },
      rotate: {
        '135': '135deg',
      }
    },
  },
  plugins: [],
}

