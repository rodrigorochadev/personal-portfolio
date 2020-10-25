export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)',
    dark: 'hsl(0deg, 0%, 100%)',
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)',
    dark: 'rgb(6, 17, 28)' 
  },
  accent: {
    light: '#178555',
    dark: '#f03c7b',
  },
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

// 
export const SITE_CONFIG = {

  defaults: {
    black: '#121212',
    white: '#fff'
  },

  fontHeights: {
    titleHeight: '2.8rem',
  },

  fontFamilies: {
    // regular: '"Cormorant Garamond", serif',
    regular: "'Poppins', sans-serif",
    titles: '"Canela-Thin", serif',
    details: '"Cormorant Garamond", serif',
    descriptions: "'Poppins', sans-serif"
  },

  fontSizes: {
      small: '.7rem',
      base: '1rem',
      medium: '1.1rem',
      large: '1.2rem',
      xLarge: '1.3rem',
      xxLarge: '1.4px',
  },

  fontSizesPlus: {
      small: '1.2rem',
      base: '1.3rem',
      medium: '1.4rem',
      large: '1.5rem',
      xLarge: '1.6rem',
      xxLarge: '1.7px',
  },

  breakpoints: {
      xs: '22em',
      sm: '48em',
      md: '64em',
      lg: '85.375em',
      xl: '120em',
      xxl: '160em'
  },

  media: {
      xsmall: `screen and (min-width: 22em)`,
      small: `screen and (min-width: 48em)`,
      medium: `screen and (min-width: 64em)`,
      large: `screen and (min-width: 85.375em)`,
      xlarge: `screen and (min-width: 120em)`,
      xxlarge: `screen and (min-width: 160em)`,
  },

  transitions: {
      default: '0.2s ease-in-out',
  },
}