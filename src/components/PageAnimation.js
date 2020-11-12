import React from 'react'
import { TransitionPage } from '../styles/components/transitionStyles'

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
      <>
        <TransitionPage left="0%" style={{animationDelay: '0.2s'}} />
        <TransitionPage left="20%" style={{animationDelay: '0.4s'}} />
        <TransitionPage left="40%" style={{animationDelay: '0.6s'}} />
        <TransitionPage left="60%" style={{animationDelay: '0.8s'}} />
        <TransitionPage left="80%" style={{animationDelay: '1.0s'}} />
      </>
    )

}

