import styled,  { css } from 'styled-components';
import { SITE_CONFIG } from '../constants'

// *********************** Global *********************** \\

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

export const SmallTitle = styled.div`
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0.8;
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
  overflow-y: hidden;

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