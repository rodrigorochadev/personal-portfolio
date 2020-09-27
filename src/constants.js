export const COLORS = {
  text: {
    light: 'hsl(0deg, 0%, 10%)',
    dark: 'hsl(0deg, 0%, 100%)',
  },
  background: {
    light: 'hsl(0deg, 0%, 100%)',
    dark: '#111',
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
    black: '#111',
    white: '#fff'
  },

  fontFamilies: {
    regular: '"Cormorant Garamond", serif',
    titles: '"Cormorant SC", serif',
    details: '"Poppins", sans-serif',
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
      xsmall: `(min-width: 22em)`,
      small: `(min-width: 48em)`,
      medium: `(min-width: 64em)`,
      large: `(min-width: 85.375em)`,
      xlarge: `(min-width: 120em)`,
      xxlarge: `(min-width: 160em)`,
      retina: "(-webkit-min-device-pixel-ratio: 2),(min-resolution: 192dpi)",
  },

  transitions: {
      default: '0.2s ease-in-out',
  },
}

export const TYPOGRAPHY = {

  banner: {
    title: "My name is Rodrigo. I’m a software developer from Portugal. I’m a front-end afficionado and my goal is to make the web prettier one project at a time.",
    tagline: "Create. Destroy. Rebuild."
  },

  about: {
    description: "I have a BSc in Computer and Telematics engineering from University of Aveiro. I worked for a project in Altice Labs, named BOT School. Following that, i worked mostly freelance. I have a passion for well designed websites and mobile apps. I also like graphic design. I’m eaguer to learn something new everyday and provide people with the best projects I can."
  }

}