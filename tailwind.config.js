const generateSpacings = (interval = 5, max = 300) => {
  const array = {}
  for (let x = 0; x <= max; x += interval) {
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
      ...generateSpacings(10, 700),
    },
    fontSize: {
      ...generateSpacings(1, 50),
      ...generateSpacings(),
    },
    minWidth: {
      480: '48rem',
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
      gridTemplateRows: {
        9: 'repeat(9, minmax(0, 1fr))',
      },
      aspectRatio: {
        '3120/1238': '3120 / 1238',
        '3120/700': '3120 / 700',
        '1560/310': '1560 / 310',
        '1372/920': '1372 / 920',
        '600/1000': '600 / 1000',
        '750/1336': '750 / 1336',
        '336/225': '336 / 225',
        '3/2': '3 / 2',
      },
      gap: {
        20: '2rem',
      },
      lineHeight: {
        28: '2.8rem',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
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
        '.light-border': {
          borderColor: '#C4C4C4',
        },
        '.light-border-b': {
          borderColor: '#C4C4C4',
          borderBottomWidth: '0.15rem',
        },
        '.typo-h1,h1': {
          fontWeight: '700',
          fontSize: '5rem',
          lineHeight: '5.5rem',
          letterSpacing: '-0.02em',
          '@screen md': {
            fontSize: '8rem',
            lineHeight: '8.5rem',
          },
        },
        '.typo-h2, h2': {
          fontWeight: '700',
          fontSize: '3.5rem',
          lineHeight: '4rem',
          letterSpacing: '-0.02em',
          '@screen md': {
            fontSize: '7rem',
            lineHeight: '7.5rem',
          },
        },

        '.typo-h3, h3': {
          fontWeight: '700',
          fontSize: '3.5rem',
          lineHeight: '4rem',
          letterSpacing: '-0.02em',
          '@screen md': {
            fontSize: '5rem',
            lineHeight: '5.5rem',
          },
        },
        '.typo-h3-chiplinks,h3': {
          fontWeight: '700',
          fontSize: '2.5rem',
          lineHeight: '3rem',
          letterSpacing: '-0.02em',
          '@screen md': {
            fontSize: '3.5rem',
            lineHeight: '5.5rem',
          },
        },
        '.typo-h4,h4': {
          fontWeight: '700',
          fontSize: '2.5rem',
          lineHeight: '3rem',
          letterSpacing: '-0.02em',

          '@screen md': {
            fontSize: '3.5rem',
            lineHeight: '4rem',
          },
        },
        '.typo-h5,h5': {
          fontWeight: '400',
          fontSize: '2.5rem',
          lineHeight: '3rem',
        },

        '.typo-h6,h6': {
          fontWeight: '700',
          fontSize: '1.8rem',
          lineHeight: '2.3rem',
          '@screen md': {
            fontSize: '2.5rem',
            lineHeight: '3rem',
          },
        },
        '.typo-eyebrow-author': {
          fontWeight: '700',
          fontSize: '1.1rem',
          lineHeight: '3rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          '@screen md': {
            fontSize: '1.6rem',
          },
        },
        '.typo-eyebrow': {
          fontWeight: '700',
          fontSize: '1.6rem',
          lineHeight: '3rem',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        },

        '.typo-large-paragraph': {
          fontWeight: '400',
          fontSize: '1.6rem',
          lineHeight: '2.2rem',
          '@screen md': {
            fontSize: '2rem',
            lineHeight: '3rem',
          },
        },
        ' .typo-large-paragraph-text-image': {
          fontWeight: '400',
          fontSize: '1.4rem',
          lineHeight: '2.2rem',
          '@screen md': {
            fontSize: '2rem',
            lineHeight: '3rem',
          },
        },
        '.typo-large-paragraph-categories': {
          fontWeight: '400',
          fontSize: '2rem',
          lineHeight: '2.2rem',
          '@screen md': {
            fontSize: 'rem',
            lineHeight: '3rem',
          },
        },

        '.typo-small-paragraph': {
          fontWeight: '400',
          fontSize: '1.4rem',
          lineHeight: '2.4rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '2.8rem',
          },
        },

        '.typo-nav-links': {
          fontWeight: '400',
          fontSize: '1.2rem',
          lineHeight: '2.2rem',
          '@screen md': {
            fontSize: '1.5rem',
            lineHeight: '2.5rem',
          },
        },

        '.typo-legal-text': {
          fontSize: '1.2rem',
          lineHeight: '2.5rem',
          '@screen md': {
            fontSize: '1.4rem',
            lineHeight: '2rem',
          },
        },

        '.typo-form-note': {
          fontSize: '1.1rem',
          lineHeight: '1.33',
        },

        '.typo-button-01': {
          fontWeight: '700',
          fontSize: '1.4rem',
          lineHeight: '1.8rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '2.3rem',
          },
        },

        ' .typo-right-arrow-cta': {
          fontWeight: '700',
          fontSize: '1.2rem',
          lineHeight: '1.7rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '2.3rem',
          },
        },
        '.typo-right-arrow-cta-subnav': {
          fontWeight: '700',
          fontSize: '1.6rem',
          lineHeight: '1.7rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '2.3rem',
          },
        },

        '.typo-hyperlink': {
          fontWeight: '700',
          fontSize: '1.4rem',
          lineHeight: '2.4rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '2.8rem',
          },
        },

        ' .typo-fact': {
          fontWeight: '400',
          fontSize: '2rem',
          lineHeight: '3rem',
        },

        ' .typo-input': {
          fontWeight: '700',
          fontSize: '2rem',
          lineHeight: '1.5',
        },

        '.typo-input-error': {
          fontWeight: '400',
          fontSize: '1.3rem',
          lineHeight: '1.5',
          color: '#C30045',
        },

        '.typo-feedback': {
          fontWeight: '400',
          fontSize: '1.6rem',
          lineHeight: '2.6rem',
        },

        '.typo-accountheadline': {
          fontWeight: '700',
          fontSize: '5rem',
          lineHeight: '5.5rem',
          letterSpacing: '-0.02em',
          '@screen md': {
            fontWeight: '700',
            fontSize: '7rem',
            lineHeight: '7.5rem',
            letterSpacing: '-0.02em',
          },
        },

        '.typo-accordionheadline': {
          fontWeight: '700',
          fontSize: '2rem',
          lineHeight: '2.8rem',
        },

        '.typo-accordion-copy': {
          fontWeight: '400',
          fontSize: '1.6rem',
          lineHeight: '1.5',
        },

        '.typo-hyperlink-modal': {
          fontWeight: '700',
          fontSize: '1.4rem',
          lineHeight: '2rem',
          textDecoration: 'underline',
          cursor: 'pointer',
        },

        '.typo-hyperlink-text': {
          fontWeight: '500',
          fontSize: '1.4rem',
          lineHeight: '2rem',
        },

        '.typo-modal-text': {
          fontWeight: '400',
          fontSize: '1.8rem',
          lineHeight: '3rem',
        },

        '.typo-alert-bar': {
          fontWeight: '400',
          fontSize: '1.2rem',
          lineHeight: '1.5rem',
          '@screen md': {
            fontSize: '1.5rem',
            lineHeight: '1.5rem',
          },
        },

        ' .typo-nav-quicklink': {
          fontWeight: '700',
          fontSize: '1.6rem',
          lineHeight: '3rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '4.2rem',
          },
        },
        '.typo-nav-link ': {
          fontWeight: '400',
          fontSize: '1.4rem',
          lineHeight: '4.4rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '4.2rem',
          },
        },
        '.typo-pharmacy-nav-link': {
          fontWeight: '400',
          fontSize: '1.4rem',
          lineHeight: '4.4rem',
          '@screen md': {
            fontSize: '1.8rem',
            lineHeight: '1.8rem',
          },
        },

        '.typo-quicklink': {
          fontWeight: '700',
          fontSize: '1.8rem',
          lineHeight: '4.2rem',
        },
        '.typo-help-contact-info': {
          fontSize: '2.5rem',
          fontWeight: '700',
          '@screen md': {
            fontSize: '3.5rem',
          },
        },
        '.typo-cart-items': {
          fontSize: '1.4rem',
          fontWeight: '700',
        },
        '.typo-multiselect-label': {
          fontWeight: '700',
          fontSize: '1rem',
          lineHeight: '1.3rem',
        },
        '.typo-category': {
          fontWeight: '700',
          fontSize: '1.1rem',
          lineHeight: '2rem',
          letterSpacing: '0.1em',
          '@screen md': {
            fontWeight: '700',
            fontSize: '1.6rem',
            lineHeight: '3rem',
            letterSpacing: '0.1em',
          },
        },
      })
    },
  ],
}
