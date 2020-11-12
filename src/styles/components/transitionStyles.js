import styled, { keyframes } from "styled-components";

export const textUpContainer = keyframes`
  0% {
      opacity: 0%;
      -webkit-transform: translateY(100%) ;
              transform: translateY(100%) ;
    }
    100% {
      opacity: 100%;
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
    }
`

export const slideContainerUp = keyframes`
  
  0% {
    -webkit-transform: translateY(0px) ;
            transform: translateY(0px) ;
  }
  100% {
    -webkit-transform: translateY(-100%);
            transform: translateY(-100%);
  }

`

export const slideContainerUpBefore = keyframes`
  
  0% {
    height: 100vh;
    -webkit-transform: translateY(0px) ;
            transform: translateY(0px) ;
  }
  100% {
    height: 0;
    -webkit-transform: translateY(-100vh);
            transform: translateY(-100vh);
  }

`

export const TransitionPage = styled.div`
  position: fixed;
  top: 0;
  left: ${props => props.left};
  height: 100%;
  width: 20%;
  z-index: 10;
  background: var(--color-text);

  animation: ${slideContainerUp} 0.5s linear;
  animation-fill-mode: forwards;
  -webkit-animation-fill-mode: forwards;
`