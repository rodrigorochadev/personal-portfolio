import {keyframes} from 'styled-components'

export const variants = {
  visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  hidden: { 
      opacity: 0, 
      y: 72,
  },
}

export const container = {
  initial: { opacity: 0, y: 0 },
  animate: {
      y: 0,
      opacity: 1,
      transition: {
          staggerChildren: 0.15,
      },
  },
}

export const item = {
  initial: { rotate: 50, y: 800 },
  animate: {
      y: 0,
      rotate: 0,
      transition: {
          duration: 0.8,
          ease: "easeOut",
      },
  },
}

// export const parent = {
//   hidden: { opacity: 0, scale: 1 },
//   visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//           // delay: 0.3,
//           when: "beforeChildren",
//           staggerChildren: 0.3,
//       }
//   }
// }

// export const child = {
//   hidden: { 
//       // y: 70, 
//       scale: 0,
//       opacity: 0 
//   },
//   visible: {
//       // y: 0,
//       scale: 1,
//       opacity: 1,
//       transition: {
//           ease: [0.6, 0.05, -0.01, 0.9]
//       }
//   }
// }

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

export const ANIMATIONS = {
  
  duration: '0.7s',
  easings: {
    elastic: 'cubic-bezier(0.680, -0.550, 0.265, 1.550) both',
    linear: 'linear'
  }
}