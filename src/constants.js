export const COLORS = {
  text: {
    light: '#000',
    dark: '#fff',
  },
  lightText: {
    light: '#666666',
    dark: '#b7b7b7',
  },
  background: {
    light: '#ffffff',
    // dark: '#000000',
    dark: '#06111c' 
  },
  accent: {
    // light: '#178555',
    light: '#f03c7b',
    dark: '#f03c7b',
  },
  opacityText: {
    light: 'rgba(0, 0, 0, 0.3)',
    dark: 'rgba(255, 255, 255, 0.3)',
  }
};

export const COLOR_MODE_KEY = 'color-mode';
export const INITIAL_COLOR_MODE_CSS_PROP = '--initial-color-mode';

// 
export const SITE_CONFIG = {

  fontFamilies: {
    text: {
      regular: "'Plus Jakarta Display Regular', sans-serif",
      bold: "'Plus Jakarta Display Bold', sans-serif",
    }
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