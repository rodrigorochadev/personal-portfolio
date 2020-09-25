import {theme} from './theme'
import styled, { css } from 'styled-components';

// Header
export const HeaderNav = styled.div`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 62px;
  right: 0;
  left: 0;
  z-index: 99;
  background: ${theme.colors.background};
`

export const LogoContainer = styled.div`

    svg {
      width: 40px;
      height: 40px;
      fill: ${theme.colors.primary};
      transition: ${theme.transitions.default};

      &:hover {
        cursor: pointer;
        fill: ${theme.colors.accent};
      }
    }
  
`

export const ToggleBulb = styled.div`
    svg {
        fill: ${theme.colors.primary};
        
        &:hover {
            cursor: pointer;
            fill: ${theme.colors.accent};
            transition: ${theme.transitions.default};
        }
    }
    
`
// Banner

export const BannerContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 120px;
    padding-bottom: 120px;
    h1, h2 {
        font-weight: 300;
    }

    @media ${theme.media.medium} {
        padding: 0 90px;
    }
`

export const BannerText = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
`

// About
export const AboutContainer = styled.div`
`

export const SectionText = styled.div``

// Portfolio
export const PortfolioFlex = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 50px;
`


export const PortfolioButton = styled.div`
    margin: 50px 0;

    button {
        font-family: ${theme.fontFamilies.details};
        font-weight: 400;
        font-size: ${theme.fontSizes.base};
        text-transform: lowercase;
        background: ${theme.colors.white};
        border: 2px solid ${theme.colors.accent};
        color: ${theme.colors.accent};
        padding: 10px 25px;
        transition: ${theme.transitions.default};

        &:hover {
            cursor: pointer;
            background: ${theme.colors.accent};
            border: 2px solid ${theme.colors.accent};
            color: ${theme.colors.white};
        }
    }
`

export const PortfolioDetails = styled.div`
    width: 100%;

    @media ${theme.media.small} {
        width: 40%;
        padding: 70px 0;
    }
`

export const PortfolioCard = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${theme.media.small} {
        flex-direction: row;
        justify-content: space-around;

        @media ${theme.media.small} {
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
    
    @media ${theme.media.small} {
        min-width: 300px;
    }

    @media ${theme.media.medium} {
        min-width: 400px;
    }
` 


// Footer

export const FooterContainer = styled.div`
    background: #111;
    color: ${theme.colors.white};
    padding: 30px 0;
`

export const FooterSection = styled.div`
    margin-bottom: 30px;

    h2 {
        margin-bottom: 10px;
    }
    
`

export const FooterCopyright = styled.div`
    text-align: center;

    /* @media ${theme.media.small} {
        text-align: center;
    } */
`

export const FooterBrand = styled.div`
    text-align: left;

    svg:hover {
        transition: ${theme.transitions.default};
        fill: ${theme.colors.accent};
        cursor: pointer;
    }
`

export const FooterSocial = styled.div`

    display: flex;
    flex-wrap: wrap;

    a {
        margin-right: 30px;
    

        svg:hover {
            transition: ${theme.transitions.default};
            fill: ${theme.colors.accent};
            cursor: pointer;
        }

        

        &:last-child {
            margin-right: 0px;
        }
    }

`

export const FooterContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    padding: 60px 0; 

    @media ${theme.media.small} {
        flex-direction: column;
    }

    /* h2 {
        font-family: 'Poppins', sans-serif;
        font-weight: bold;
        color: white;
    }

    a {
        text-decoration: none;
        color: white;
    } */
`

// Pages - 404

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
    fill: ${theme.colors.primary};
  }

  p, a {
    font-family: ${theme.fontFamilies.regular};
    color: ${theme.colors.secondary};
  }
  
  p {
    font-size: 1.5rem;
  }
`

// Pages - Contact

export const Form = styled.div`

    label {
        font-family: ${theme.fontFamilies.regular};
        font-size: ${theme.fontSizes.base};
        text-transform: uppercase;
    }

    .req {
        color: red;
    }

    input, textarea {
        font-family: "Poppins", sans-serif;
        font-size: 16px;
        height: 30px;
        width: 100%;
        
        border: 1px solid rgba(0,0,0,0.5);
        margin-bottom: 20px;

        &:focus {
            border: 1px solid ${theme.colors.accent};
        }
    }

    textarea {
        height: 150px;
    }

    .send-button {
        padding: 1em 2em;
        border: 1px solid ${theme.colors.accent};
        background-color: ${theme.colors.accent};
        transition: 0.3s ease-in;

        &:hover {
            cursor: pointer;
            background-color: black;
            color: white;
            border: 1px solid black;

        }

        a {
            color: white;
            text-decoration: none;
        }
    }
`