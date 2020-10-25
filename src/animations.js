import {keyframes} from 'styled-components'

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

// export const rotation = keyframes`
//   0% {
      
//       transform: ;
//       -webkit-transform: scale(0) rotate(0) ;
//               transform: scale(0) rotate(0) ;
//     }
//     100% {
      
//       -webkit-transform: scale(1) rotate(360deg);
//               transform: scale(1) rotate(360deg);
//     }
// `

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