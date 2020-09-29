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

export const headerLogoAnim = {
    hidden: {
        scale: 0,
    }, 
    visible: {
        rotate: 360,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 260,
            damping: 20
        }
    }
}