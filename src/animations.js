export const parent = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            // delay: 0.3,
            when: "beforeChildren",
            staggerChildren: 2.3,
        }
    }
}

export const child = {
    hidden: { 
        y: 30, 
        scale: 1,
        opacity: 0
    },
    visible: {
        y: 0,
        scale: 1,
        opacity: 1,
        transition: {
            type: 'spring'
        }
    }
}

export const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.5
      }
    }
  }
  
export const item = {
    hidden: { opacity: 0 },
    show: { 
        opacity: 1,
        transition: {
            type: 'spring'
        }
    }
}

export const introAnim = {
    hidden: {
        opacity: 0,
        y: 72
    }, 
    visible: {
        opacity: 1,
        y:0,
        transition: {
            duration: 0.6, 
            ease: [0.6, 0.05, -0.01, 0.9]
        }
    }
}