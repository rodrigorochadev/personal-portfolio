import { motion } from 'framer-motion';
import styled,  { css } from 'styled-components';
import { rotation } from '../animations';
import { SITE_CONFIG } from '../constants'

// *********************** Global *********************** \\
export const Flex = styled(motion.div)`
  display: flex;
  height: auto;

  ${props => props.alignRight && css`
    
    @media ${SITE_CONFIG.media.small} {
      justify-content: flex-end;
    }
  `}

  ${props => props.spaceBetween && css`
    
    @media ${SITE_CONFIG.media.small} {
      justify-content: space-between;
    }
  `}

  ${props => props.alignCenter && css`
      justify-content: center;
  `}

  ${props => props.about && css`

    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    row-gap: 60px;

    @media ${SITE_CONFIG.media.medium} {
      flex-direction: row;
      column-gap: 30px;
    }

    @media ${SITE_CONFIG.media.large} {
      column-gap: 50px;
    }
  `}
`

export const PaddingContainer = styled.div`
  padding: ${props => props.vertical} ${props => props.horizontal};
`

export const MobileImgContainer = styled.div`
    margin-bottom: ${props => props.marginBottom};
    max-width: ${props => props.maxWidth};
`

export const InfoContainer = styled(motion.div)`

  width: 100%;
  
  ${props => props.marginBottom && css`
    margin-bottom: ${props => props.marginBottom};
  `}

  @media ${SITE_CONFIG.media.small} {
    width: 60%;
  }
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

export const Container = styled(motion.div)`
  flex-grow: 1;
  margin: 0 auto;
  padding: 0 10vw;
  position: relative;
  width: auto;
  height: 100%;

  @media ${SITE_CONFIG.media.large} {
    padding: 0 14vw;
  }

  @media (min-width: 1600px) {
    padding: 0 20vw;
  }

  /* flex-grow: 1; */

  /* margin: 0 auto;
  padding: 0 32px;
  position: relative;
  width: auto;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 960px;
  }
  @media (min-width: 1216px) {
    max-width: 1152px;
  }
  @media (min-width: 1408px) {
    max-width: 1244px;
  } */

  ${props => props.nonRelative && css`
      position: initial;
  `}
  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
`

export const DescriptionHighlight = styled(motion.p)`
  
  font-family: ${SITE_CONFIG.fontFamilies.text.bold};
  margin-bottom: 10px;
  font-size: 1.4rem;
  line-height: 2rem;

  @media ${SITE_CONFIG.media.small} {
    font-size: 1.8rem;
    line-height: 2.5rem;
  }
`

export const Description = styled(motion.p)`
  /* line-height: 2.2rem; */


  ${props => props.light && css`
    color: var(--color-lightText);
  `}

  ${props => props.alignRight && css`
    text-align: right;
  `}

  ${props => props.marginTop && css`
    margin-top: 30px;
  `}


`

export const DivMargin = styled.div`

    margin-bottom: 50px;

    @media ${SITE_CONFIG.media.small} {
      margin-bottom: 100px;
    }
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