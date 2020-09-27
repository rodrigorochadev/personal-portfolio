import { createGlobalStyle } from 'styled-components';
import { SITE_CONFIG } from '../constants';

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${SITE_CONFIG.fontFamilies.regular}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                 Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

  }
  * {
    ::-moz-selection { /* Code for Firefox */
        color: var(--color-background);
        background: var(--color-accent);
    }
    
    ::selection {
        color: white;
        background: var(--color-accent);
    }
  }

  html, body {
      overflow-x: hidden;
  }

  body {
    background: var(--color-background);
    color: var(--color-text);
    font-size: ${SITE_CONFIG.fontSizesPlus.base};
    
    @media ${SITE_CONFIG.media.small} {
      font-size: ${SITE_CONFIG.fontSizesPlus.base};
    }

    @media ${SITE_CONFIG.media.medium} {
        font-size: ${SITE_CONFIG.fontSizesPlus.medium};
    }

    @media ${SITE_CONFIG.media.large} {
        font-size: ${SITE_CONFIG.fontSizesPlus.large};

    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: ${SITE_CONFIG.fontSizesPlus.xlarge};

    }

    @media ${SITE_CONFIG.media.xxlarge} {
        font-size: ${SITE_CONFIG.fontSizesPlus.xxlarge};

    }
  }

  a {
      color: var(--color-accent);
      transition: ${SITE_CONFIG.transitions.default};
      
      &:hover {
          color: var(--color-text);
      }
  }
`;

export default GlobalStyles;
