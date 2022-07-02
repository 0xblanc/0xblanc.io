/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],

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
      serviceDeepBlue: '#195084',
      serviceBlue: '#253F9B',
      servicePurple: '#672997',
      serviceLightPurple: '#985689',
      serviceRed: '#9B3C53',
      serviceSolanaPurple: '#D12CFB',
      serviceSolanaBlue: '#718DD3',
      serviceSolanaGreen: '#0EF2A9',
      serviceLightRed: '#F66767',
      serviceOrange: '#FF8A00',
    },
    extend: {
      backgroundImage: {
        hero: 'url(https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758496/website/background_hxlfos.webp)',
      },
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
      rotate: {
        135: '135deg',
      },
    },
  },
  plugins: [],
}
