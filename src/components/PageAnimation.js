import { motion } from 'framer-motion'
import React from 'react'
import { TransitionPage } from '../styles/transitionStyles'

export default () => {

    return(
      <motion.div>
        <TransitionPage
          key="TransitionBlock1"
          style={{top: 0}}
          initial={{height: '50%'}}
          exit={{height: '50%', background: 'red'}}
          animate={{height: 0, transition: {duration: 0.6, delay: 1, ease: "easeOut"}}}
        ></TransitionPage> 
        <TransitionPage
          key="TransitionBlock2"
          style={{bottom: 0}}
          initial={{height: '50%'}} 
          exit={{height: '50%', background: 'red'}}
          animate={{height: 0, transition: {duration: 0.6, delay: 1, ease: "easeOut"}}}
        ></TransitionPage> 
      </motion.div>   
    )

}

