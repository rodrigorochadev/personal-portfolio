import { createGlobalStyle } from 'styled-components';
import { SITE_CONFIG } from '../constants';
// import {grain} from '../animations'

// import noiseImg from '../assets/images/noise.png'

const GlobalStyles = createGlobalStyle`
  *, *:before, *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: ${SITE_CONFIG.fontFamilies.text.regular}, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
                 Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    @media ${SITE_CONFIG.media.small} {
      cursor: none;
    }

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
      background: var(--color-background);
      color: var(--color-text);
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${SITE_CONFIG.fontFamilies.text.bold};
    margin-bottom: 10px;
  }

  p {

    line-height: 1.7rem;
    
    @media ${SITE_CONFIG.media.small} {
      line-height: 2.2rem;
    }
  }

  body {
    
    font-size: ${SITE_CONFIG.fontSizes.base};

    @media ${SITE_CONFIG.media.small} {
      font-size: ${SITE_CONFIG.fontSizes.base};
    }

    @media ${SITE_CONFIG.media.medium} {
        font-size: ${SITE_CONFIG.fontSizes.medium};
    }

    @media ${SITE_CONFIG.media.large} {
        font-size: ${SITE_CONFIG.fontSizes.large};

    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: ${SITE_CONFIG.fontSizes.xlarge};

    }

    @media ${SITE_CONFIG.media.xxlarge} {
        font-size: ${SITE_CONFIG.fontSizes.xxlarge};
    }
  }

  a {
      color: var(--color-accent);
      transition: ${SITE_CONFIG.transitions.default};
      text-decoration: none;
      
      &:hover {
          color: var(--color-text);
      }
  }
`;

export default GlobalStyles;
