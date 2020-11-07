import React from 'react'
import { TransitionFlex, TransitionPage } from '../styles/components/transitionStyles'

export default () => {

    // const randomColor = [
    //     'green',
    //     'yellow',
    // ]

    // function getRandomColor (index) {
    //     console.log(randomColor[index])
    //     return randomColor[index]; 
    // }

    // const randomNumber = Math.floor(Math.random() * randomColor.length);

    return(
        <TransitionFlex>
          <TransitionPage animate={{height: 0, transition: {duration: 0.8, delay: 0.2, ease: "easeOut"}}}/>
          <TransitionPage animate={{height: 0, transition: {duration: 0.8, delay: 0.4, ease: "easeOut"}}}/>
          <TransitionPage animate={{height: 0, transition: {duration: 0.8, delay: 0.6, ease: "easeOut"}}}/>
          <TransitionPage animate={{height: 0, transition: {duration: 0.8, delay: 0.8, ease: "easeOut"}}}/>
          <TransitionPage animate={{height: 0, transition: {duration: 0.8, delay: 1.0, ease: "easeOut"}}}/>
        </TransitionFlex>
    )

}

