import styled,  {css, keyframes} from 'styled-components';
import { ANIMATIONS, textDown, rotationUnScale, textUp } from '../animations';
import { SITE_CONFIG } from '../constants'

// *********************** Global *********************** \\

const scrollLeft = keyframes`
  0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
`

export const MarqueeDiv = styled.div`
    position: relative;
    overflow: hidden;
    --offset: 0vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));
    height: 200px;
    padding: 150px 0;

    @media ${SITE_CONFIG.media.small} {
      padding: 300px 0;
    }
`

export const MarqueeText = styled.div`
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: ${scrollLeft} 20s linear infinite;
    animation-play-state: running;


    
`



export const Title = styled.h1`
  font-family: ${SITE_CONFIG.fontFamilies.titles};
  
  font-size: 3rem;

  @media ${SITE_CONFIG.media.small} {
    font-size: 5rem;
  }
  @media ${SITE_CONFIG.media.medium} {
    font-size: 6rem;
  }
  @media ${SITE_CONFIG.media.large} {
    font-size: 7rem;
  }
`

export const BigTitle = styled.h1`
  /* font-family: ${SITE_CONFIG.fontFamilies.titles};  */
  font-family: ${SITE_CONFIG.fontFamilies.regular}; 
  text-transform: uppercase;
  font-size: 3rem;
  
  @media ${SITE_CONFIG.media.small} {
    font-size: 5.5rem;
  }
  @media ${SITE_CONFIG.media.medium} {
    font-size: 6.5rem;
  }
  @media ${SITE_CONFIG.media.large} {
    font-size: 7.5rem;
  }
  @media ${SITE_CONFIG.media.xlarge} {
    font-size: 8.5rem;
  }

  ${props =>
    props.nowrap &&
    css`
      white-space: nowrap;
    `};

  ${props =>
    props.center &&
    css`
      text-align: center;
    `};

  ${props =>
    props.right &&
    css`
      text-align: right;
    `};

  ${props =>
    props.outline &&
    css`
      -webkit-text-stroke: 3px;
      -webkit-text-stroke-color: var(--color-text);
      -webkit-text-fill-color: transparent;
    `};  
`

export const Description = styled.p`

`

export const Button = styled.button`
  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-weight: 600;
  font-size: 1.5rem;
  color: var(--color-text);
  padding: 10px 20px;
  border: 2px solid var(--color-accent);
  background: transparent;
  transition: ${SITE_CONFIG.transitions.default};

  &:hover {
    /* cursor: pointer; */
    background: var(--color-accent);
    color: white;

  }
`

export const UnstyledButton = styled.button`
    background: 0;
    border: none;

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

  /* @media (min-width: 1024px) {
    padding: 0 32px;
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  } */


`

export const Flex = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${props =>
    props.spaceBetween &&
    css`
      justify-content: space-between;
    `};
  ${props =>
    props.flexEnd &&
    css`
      justify-content: flex-end;
    `};
  ${props =>
    props.alignTop &&
    css`
      align-items: flex-start;
    `};
  ${props =>
    props.noHeight &&
    css`
      height: 0;
    `};
`

export const VerticalSpacing = styled.div`
  padding: 50px 0;

  @media ${SITE_CONFIG.media.medium} {
    padding: 100px 0;
  }
`

// *********************** Header *********************** \\
export const HeaderNav = styled.div`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 62px;
  right: 0;
  left: 0;
  z-index: 99;
  animation: ${textDown} ${ANIMATIONS.duration} ${ANIMATIONS.easings.elastic};

`
export const RotateInfinite = styled.div`
  animation: ${rotationUnScale} 7s ${ANIMATIONS.easings.elastic};
  animation-iteration-count: infinite;
`

export const HeaderLogo = styled.div`
    svg {
      height: 30px;
      width: auto;
      transition: ${SITE_CONFIG.transitions.default};

      @media ${SITE_CONFIG.media.small} {
        height: 35px;
      }
    }  
    
    ${props =>
      props.bulb &&
        css`
          height: 35px;
    `}

    ${props =>
      props.rotate &&
        css`
          transform: rotate(30deg);
    `}
`

// *********************** Banner *********************** \\
export const BannerContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
    justify-content: center;
    padding: 120px 0;
    text-align: center;

    @media ${SITE_CONFIG.media.small} {
      padding: 100px 120px;
    }

`

export const BannerTitle = styled.h2`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    line-height: ${SITE_CONFIG.fontHeights.titleHeight};
    font-weight: 400;
    margin-bottom: 10px;
    animation: ${textUp} ${ANIMATIONS.duration} ${ANIMATIONS.easings.elastic} ;
    /* animation-delay: 0.5s; */
`

export const BannerDetail = styled.div`
  display: flex;
  justify-content: center;
  height: 3px;
  width: 30px;
  background: var(--color-accent);

  animation: ${textUp} ${ANIMATIONS.duration} ${ANIMATIONS.easings.elastic} ;
  animation-delay: 0.1s;
`

// *********************** About *********************** \\
export const AboutFlex = styled.div`

    display:flex;
    flex-direction: column;
    align-items: initial;
    column-gap: 50px;
    row-gap: 50px;

    @media ${SITE_CONFIG.media.small} {
        flex-direction: row;
        align-items: flex-end;
    }
`

export const AboutInfo = styled.h2`

    /* padding-bottom: 0px; */

    @media ${SITE_CONFIG.media.medium} {
      padding-bottom: 100px !important;
    }
`

export const AboutPicture = styled.div`

    min-width: 200px;
    height: auto;

    @media ${SITE_CONFIG.media.small} {
        min-width: 400px;
    }

    @media ${SITE_CONFIG.media.medium} {
        min-width: 500px;
    }
    
    @media ${SITE_CONFIG.media.medium} {
      padding-top: -200px !important;
    }
`

// *********************** Footer *********************** \\
export const FooterContainer = styled.div`
    /* background: var(--color-background); */
    color: var(--color-text);
    padding: 30px 0;
`

export const FooterSection = styled.div`
    margin-bottom: 30px;
`

export const FooterCopyright = styled.p`
    text-align: center;
`

export const FooterSocial = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
        margin-right: 30px;
    
        &:last-child {
            margin-right: 0px;
        }
    }

`

export const FooterSVG = styled.div`
  svg {
    
    fill: var(--color-text);

    &:hover {
      /* cursor: pointer; */
      fill: var(--color-accent);
      transition: ${SITE_CONFIG.transitions.default};
    }
  }
`

export const FooterContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0; 

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
    font-family: ${SITE_CONFIG.fontFamilies.titles};
  }
  
  p {
    font-size: 1.5rem;
  }
`

export const Separator = styled.div`
  margin-bottom: 40px;
`