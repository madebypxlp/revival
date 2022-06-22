const generateSpacings = (interval = 5, max = 300) => {
  const array = {}
  for (var x = 0; x <= max; x += interval) {
    array[x] = `${x / 10}rem`
  }
  return array
}

module.exports = {
  important: 'body',
  future: {
    purgeLayersByDefault: true,
    applyComplexClasses: true,
  },
  purge: {
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
  },
  theme: {
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      xl: '1560px',
      xxl: '1920px',
    },
    spacing: {
      ...generateSpacings(1, 20),
      ...generateSpacings(),
      ...generateSpacings(10, 500),
    },
    fontSize: {
      ...generateSpacings(1, 50),
      ...generateSpacings(),
    },
    borderRadius: {
      none: '0',
      DEFAULT: '1.5rem',
      15: '1.5rem',
      30: '3rem',
      100: '10rem',
      200: '20rem',
      full: '9999px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      blue: {
        DEFAULT: '#00338D',
        default: '#00338D',
        light: '#5096D9',
      },
      red: '#C30045',
      cream: {
        DEFAULT: '#F3F1E8',
        dark: '#ECEAE1',
      },
      white: '#fff',
      yellow: {
        DEFAULT: '#FFD749',
        default: '#FFD749',
        light: '#FFF5D1',
      },
      greyscale: {
        1: '#404040',
        2: '#666666',
        3: '#B3B3B3',
        4: '#C4C4C4',
        5: '#E6E6E6',
        6: '#F5F5F5',
      },
      green: '#2E9775',
    },
    extend: {
      aspectRatio: {
        '3120/1238': '3120 / 1238',
        '3120/700': '3120 / 700',
        '1560/310': '1560 / 310',
        '1372/920': '1372 / 920',
        '600/1000': '600 / 1000',
        '750/1336': '750 / 1336',
        '336/225': '336 / 225',
      },
      gap: {
        20: '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // eslint-disable-next-line
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0 2rem',
          '@screen lg': {
            margin: '0 auto',
            maxWidth: '1560px',
          },
          '@screen xl': {
            padding: '0 8.5rem',
          },
        },
        '.default-grid': {
          display: 'grid',
          'grid-template-columns': 'repeat(2, minmax(0, 1fr))',
          'column-gap': '2rem',
          '@screen md': {
            'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
          },
        },
        '.default-grid-lg': {
          display: 'grid',
          'grid-template-columns': 'repeat(2, minmax(0, 1fr))',
          'column-gap': '2rem',
          '@screen lg': {
            'grid-template-columns': 'repeat(12, minmax(0, 1fr))',
          },
        },
      })
    },
  ],
}
