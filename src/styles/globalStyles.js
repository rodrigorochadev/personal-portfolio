import styled, { css } from "styled-components"
import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const Padding = styled.div`
    margin: 100px 0;
`

export const SectionTitle = styled.div`
    margin-bottom: 60px;

    h1 {
        margin-bottom: 5px;
    }

    @media ${theme.media.small} {
        text-align: center;
        margin-bottom: 100px;
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

export const Button = styled.div`
  button {
    font-family: ${theme.fontFamilies.details};
    font-weight: 400;
    font-size: ${theme.fontSizes.base};
    text-transform: lowercase;
    background: ${theme.colors.accent};
    border: 2px solid ${theme.colors.accent};
    color: ${theme.colors.white};
    padding: 10px 25px;
    transition: ${theme.transitions.default};

    &:hover {
      cursor: pointer;
      background: ${theme.colors.white};
      border: 2px solid ${theme.colors.accent};
      color: ${theme.colors.accent};
    }
  }

`

export const Paragraph = styled.div`

        font-size: ${theme.fontSizesPlus.base};
        
        @media ${theme.media.small} {
            font-size: ${theme.fontSizesPlus.base};
        }

        @media ${theme.media.medium} {
            font-size: ${theme.fontSizesPlus.medium};
        }

        @media ${theme.media.large} {
            font-size: ${theme.fontSizesPlus.large};
        }

        @media ${theme.media.xlarge} {
            font-size: ${theme.fontSizesPlus.xlarge};
        }

        @media ${theme.media.xxlarge} {
            font-size: ${theme.fontSizesPlus.xxlarge};
        }
`

export const Title = styled.div`
  margin-bottom: 20px;
`

export const NonStyledButton = styled.div`

    button {
        border: none;
        padding: 0;
        background: transparent;
        transition: none !important; 
        transform: none !important;
    }
`
const styles = () => `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        ::-moz-selection { /* Code for Firefox */
            color: ${theme.colors.background};
            background: ${theme.colors.accent};
        }
        
        ::selection {
            color: ${theme.colors.background};
            background: ${theme.colors.accent};
        }
    }


    html, body {
        overflow-x: hidden;
    }

    body {
        color: ${theme.colors.secondary};
        font-size: ${theme.fontSizes.base};
        font-family: ${theme.fontFamilies.regular};
        background: ${theme.colors.background};
        text-align: center;
        
        @media ${theme.media.small} {
            font-size: ${theme.fontSizes.base};

        }

        @media ${theme.media.medium} {
            font-size: ${theme.fontSizes.medium};
        }

        @media ${theme.media.large} {
            font-size: ${theme.fontSizes.large};

        }

        @media ${theme.media.xlarge} {
            font-size: ${theme.fontSizes.xlarge};

        }

        @media ${theme.media.xxlarge} {
            font-size: ${theme.fontSizes.xxlarge};

        }
    }
`
    

export const GlobalStyle = createGlobalStyle`
    ${styles()}
`;