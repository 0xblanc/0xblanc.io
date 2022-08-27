/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './containers/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      dark: '#252526',
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
      serviceNftBlue: '#77ABDB',
      serviceNftPurple: '#E2A3F8',
      serviceMetaBlue: '#1746EE',
      serviceMetaLightBlue: '#9FD1FF',
      serviceIpfsPurple: '#B576E7',
      serviceIpfsBlue: '#3F69FF',
      serviceMintingPink: '#E48AD1',
      serviceMintingPurple: '#B576E7',
      serviceSmartContractPurple: '#B660B8',
      serviceSmartContractRed: '#F95D83',
      serviceSolanaPurple: '#D12CFB',
      serviceSolanaBlue: '#718DD3',
      serviceSolanaGreen: '#0EF2A9',
      serviceWeb3Red: '#F66767',
      serviceWeb3Orange: '#FF8A00',
      serviceWebOrange: '#FF8A00',
      serviceWebGreen: '#BDF971',
    },
    extend: {
      backgroundImage: {
        hero: 'url(https://res.cloudinary.com/blanc-io/image/upload/q_auto/v1656758496/website/background_hxlfos.webp)',
        'web2-hero': 'url(https://res.cloudinary.com/blanc-io/image/upload/f_auto,q_auto/v1661579619/website/web2_background_iuf0s6.jpg)',
      },
      fontFamily: {
        Raleway: ['Raleway', 'sans-serif'],
      },
      rotate: {
        135: '135deg',
      },
      screens: {
        '3xl': '1792px',
      },
      fontSize: {
        'ul': '10rem',
      },
    },
  },
  plugins: [],
}
