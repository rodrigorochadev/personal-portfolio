import styled, {css} from 'styled-components';
import { SITE_CONFIG } from '../constants'

// *********************** Global *********************** \\

export const Title = styled.h1`
  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-weight: 400;
`

export const Description = styled.p`

`

export const Button = styled.button`
  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-size: 20px;
  color: var(--color-text);
  padding: 10px 20px;
  border: 2px solid var(--color-accent);
  background: transparent;
  transition: ${SITE_CONFIG.transitions.default};

  &:hover {
    cursor: pointer;
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

      &:hover {
          transition: ${SITE_CONFIG.transitions.default};
          fill: var(--color-accent);
          cursor: pointer;
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

  @media (min-width: 1024px) {
    padding: 0 32px;
    max-width: 960px;
  }

  @media (min-width: 1216px) {
    max-width: 1152px;
  }

  @media (min-width: 1408px) {
    max-width: 1244px;
  }

  ${props =>
    props.fluid &&
    css`
      padding: 0;
      margin: 0;
      background: red;
      max-width: 100% !important;
    `}
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
`

// *********************** Banner *********************** \\
export const BannerContainer = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    align-items: center;
    justify-content: center;
    padding: 150px 0;
    text-align: center;
    
    @media ${SITE_CONFIG.media.small} {
      padding: 100px 120px;
    }
`

export const BannerSocial = styled.div`
    display: none;

    @media ${SITE_CONFIG.media.small} {
      display: initial;
      position: absolute;
      bottom: 70px;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;

      row-gap: 10px;
    }
    
  
`

export const BannerTitle = styled.h2`
    font-weight: 400;
    margin-bottom: 10px;
`

export const BannerTagline = styled.h3`
    font-weight: 300;
`

export const BannerSocialIcons = styled.div`

    a {
      margin-right: 25px;

      &:last-child {
        margin-right: 0;
      }

    }
    svg {

      fill: var(--color-text);

      &:hover {
        cursor: pointer;
        transition: ${SITE_CONFIG.transitions.default};
        fill: var(--color-accent);
      }
    }

`

// *********************** About *********************** \\
export const AboutFlex = styled.div`

    display:flex;
    flex-direction: column-reverse;
    align-items: initial;
    column-gap: 50px;
    row-gap: 50px;

    @media ${SITE_CONFIG.media.medium} {
        flex-direction: row;
        align-items: flex-end;
    }
`

export const AboutInfo = styled.div`

    padding-bottom: 0px;

    @media ${SITE_CONFIG.media.medium} {
      padding-bottom: -100px !important;
    }
`

export const AboutPicture = styled.div`

    /* img {
      outline: 3px solid var(--color-accent);
      outline-offset: -15px; 

      
    } */
    

    min-width: 200px;
    height: auto;

    padding-bottom: 0px;
    /* min-width: 200px;
    max-width: 250px; */

    @media ${SITE_CONFIG.media.small} {
        max-width: 400px;
    }

    @media ${SITE_CONFIG.media.medium} {
        min-width: 500px;
    }
    
    

    @media ${SITE_CONFIG.media.medium} {
      padding-bottom: 100px !important;
    }
`

// *********************** Portfolio *********************** \\
export const PortfolioFlex = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    row-gap: 50px;

    @media ${SITE_CONFIG.media.medium} {
      margin: 0;
    }
`

export const PortfolioSeeAll = styled.div`

    @media ${SITE_CONFIG.media.small} {
      padding-top: 50px;
    }
`

export const PortfolioMoreInfo = styled.div`
    margin-top: 50px;

    a {
      color: var(--color-accent);

      &:hover {
        color: var(--color-text);
      }
    }
`

export const PortfolioDetails = styled.div`
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 40%;
        padding: 70px 0;
    }
`

export const PortfolioId = styled.h1`
  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-weight: 400;
`

export const PortfolioName = styled.h2`
  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-weight: 500;
`

export const PortfolioCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;


    @media ${SITE_CONFIG.media.small} {
        flex-direction: row;
        justify-content: space-between;

        @media ${SITE_CONFIG.media.small} {
            ${props =>
                props.reverse &&
                css`
                    flex-direction: row-reverse;
            `}

        }
    }
    
`

export const PortfolioImage = styled.div`
    
    min-width: 200px;
    
    @media ${SITE_CONFIG.media.small} {
        min-width: 300px;
    }

    @media ${SITE_CONFIG.media.medium} {
        min-width: 400px;
    }
` 

// *********************** Footer *********************** \\
export const FooterContainer = styled.div`
    background: ${SITE_CONFIG.defaults.black};
    color: ${SITE_CONFIG.defaults.white};
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
    
    fill: ${SITE_CONFIG.defaults.white};

    &:hover {
      cursor: pointer;
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