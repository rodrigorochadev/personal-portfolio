import styled,  { css } from 'styled-components';
import { SITE_CONFIG } from '../constants'

// *********************** Global *********************** \\
export const PaddingContainer = styled.div`
  padding: ${props => props.vertical} ${props => props.horizontal};
`

export const MobileImgContainer = styled.div`
    margin-bottom: ${props => props.marginBottom};
    max-width: ${props => props.maxWidth};
`

export const InfoContainer = styled.div`

  width: 100%;

  ${props => props.marginBottom && css`
    margin-bottom: 100px;
  `}

  @media ${SITE_CONFIG.media.small} {
    width: 50%;
  }
`

export const SmallTitle = styled.div`
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