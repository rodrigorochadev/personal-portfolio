import {keyframes} from 'styled-components'

export const divUp = {
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
    hidden: { opacity: 0, y: 72 }
}

export const textRight = keyframes`
  
    0% {
      opacity: 0%;
      -webkit-transform: translateX(-150px) ;
              transform: translateX(-150px) ;
    }
    50% {
      opacity: 50%;
      -webkit-transform: translateX(60px);
              transform: translateX(60px);
    }
    100% {
      opacity: 100%;
      -webkit-transform: translateX(0px);
              transform: translateX(0px);
    }

`

export const textLeft = keyframes`
  
    0% {
      opacity: 0%;
      -webkit-transform: translateX(150px) ;
              transform: translateX(150px) ;
    }
    50% {
      opacity: 50%;
      -webkit-transform: translateX(-60px);
              transform: translateX(-60px);
    }
    100% {
      opacity: 100%;
      -webkit-transform: translateX(0px);
              transform: translateX(0px);
    }

`

export const scaleUp = keyframes`
  
    0% {
      opacity: 0%;
      scale: 0;
    }
    100% {
      opacity: 100%;
      scale: 1;
    }

`

export const textUp = keyframes`

    0% {
      opacity: 0%;
      -webkit-transform: translateY(70px) ;
              transform: translateY(70px) ;
    }
    100% {
      opacity: 100%;
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
    }
`

export const textDown = keyframes`

    0% {
      opacity: 0%;
      -webkit-transform: translateY(-30px) ;
              transform: translateY(-30px) ;
    }
    100% {
      opacity: 100%;
      -webkit-transform: translateY(0px);
              transform: translateY(0px);
    }
`

export const grain = keyframes`
  0%, 100% { transform:translate(0, 0); }
  10% { transform:translate(-5%, -10%); }
  20% { transform:translate(-15%, 5%); }
  30% { transform:translate(7%, -25%); }
  40% { transform:translate(-5%, 25%); }
  50% { transform:translate(-15%, 10%); }
  60% { transform:translate(15%, 0%); }
  70% { transform:translate(0%, 15%); }
  80% { transform:translate(3%, 35%); }
  90% { transform:translate(-10%, 10%); }
`

export const rotation = keyframes`
  0% {
      
      transform: ;
      -webkit-transform: rotate(0) ;
              transform: rotate(0) ;
    }
    100% {
      
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
`

export const rotationUnScale = keyframes`
    0%, 20%, 40%, 60%, 80% {  
      transform: ;
      -webkit-transform: rotate(-0deg) ;
              transform: rotate(-0deg) ;
    }
    
    100% {
      -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
    }
`

export const ANIMATIONS = {
  
  duration: '0.7s',
  easings: {
    elastic: 'cubic-bezier(0.680, -0.550, 0.265, 1.550) both',
    linear: 'linear'
  }
}