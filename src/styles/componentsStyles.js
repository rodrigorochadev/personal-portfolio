import { motion } from 'framer-motion';
import styled,  { css } from 'styled-components';
import { rotation } from '../animations';
import { SITE_CONFIG } from '../constants'

// *********************** Global *********************** \\
export const Flex = styled.div`
  display: flex;
  height: auto;

  ${props => props.alignRight && css`
    
    @media ${SITE_CONFIG.media.small} {
      justify-content: right;
    }
  `}

  ${props => props.spaceBetween && css`
    
    @media ${SITE_CONFIG.media.small} {
      justify-content: space-between;
    }
  `}

  ${props => props.alignCenter && css`
    
    @media ${SITE_CONFIG.media.small} {
      justify-content: center;
    }
  `}

  ${props => props.wrap && css`

    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    row-gap: 100px;

    @media ${SITE_CONFIG.media.small} {
      flex-direction: row;
      column-gap: 20px;

    }
  `}
`

export const WidthContainer = styled.div`
  width: ${props => props.width}; 
`

export const PaddingContainer = styled.div`
  padding: ${props => props.vertical} ${props => props.horizontal};
`

export const MobileImgContainer = styled.div`
    margin-bottom: ${props => props.marginBottom};
    max-width: ${props => props.maxWidth};
`

export const InfoContainer = styled.div`

  width: 100%;
  
  p {
    line-height: 1.7rem;
  }

  ${props => props.marginBottom && css`
    margin-bottom: 100px;
  `}

  @media ${SITE_CONFIG.media.small} {
    width: 50%;

    p {
      line-height: 2rem;
    }
  }
`

export const SmallTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.text.bold};
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0.8;
`

export const UnstyledButton = styled.button`
    background: 0;
    border: none;

    &:hover {
      cursor: pointer;
    }
    
    &:focus {
      outline: none;
    }
`

export const SVGHolder = styled.div`
    svg {
      fill: var(--color-text);
      transition: ${SITE_CONFIG.transitions.default};

      &:hover {    
          fill: var(--color-accent);
          /* cursor: pointer; */
      }

      &:focus {
        fill: var(--color-text);
      }
    }
`

export const Container = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 10vw;
  position: relative;
  width: auto;
  height: 100%;
`


// Rotating SVGs
export const NewSVGContainer = styled(motion.div)`

  display: none;

    @media ${SITE_CONFIG.media.small} {
      display: initial;
      position: absolute;
      top: -40px;
      right: -75px;
      z-index: 99;

    }
    /* -webkit-mix-blend-mode: difference;
    -moz-mix-blend-mode: difference;
    -o-mix-blend-mode: difference;
    -ms-mix-blend-mode: difference;
    mix-blend-mode: difference;     */
`

export const NewSVG = styled.div`
    svg {
        fill: var(--color-accent);
        width: 150px;
    }
`


// *********************** 404 Page *********************** \\
export const Container404 = styled.div`
  min-height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  
  svg {
    width: 100px;
    height: 100px;
    fill: var(--color-text);
    transition: ${SITE_CONFIG.transitions.default};

    &:hover {
      fill: var(--color-accent);
    }
  }

  p, a {
    font-family: ${SITE_CONFIG.fontFamilies.titles.thin};
  }
  
  p {
    font-size: 1.5rem;
  }
`

export const Scroll4More = styled.div`
    width: 90px;
    height: 90px;
    border: 2px solid var(--color-text);
    border-radius: 100%;
    
    animation: ${rotation} 3s infinite linear;

    &:before {
        content: 'Scroll For More';
        display: flex;
        align-items: center;
        justify-content: center;
        width: 90px;
        height: 90px;
    }
`

export const Scroll4MoreContainer = styled(motion.div)`
  position: absolute;
  right: 15%;
  bottom: 15%;
  /* right: ${props => props.right};
  bottom: ${props => props.bottom}; */

  /* @media ${SITE_CONFIG.media.small} {
    right: 20%;
    bottom: 20%;
  }
  @media ${SITE_CONFIG.media.medium} {
    right: 20%;
    bottom: 20%;
  }*/

  @media ${SITE_CONFIG.media.large} {
    right: 20%;
    bottom: 20%;
  } 
`

export const Separator = styled.div`
  margin-bottom: 40px;
`