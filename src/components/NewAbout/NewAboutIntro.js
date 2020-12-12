import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from '../../animations'
import { NewAboutContainerHeadline, NewAboutContainerText } from '../../styles/components/newAboutStyles'

export default () => {

    const animation = useAnimation()
    const [aboutIntroRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "0px",
        threshold: 0.65,
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
            console.log(inView)
        }
    }, [animation, inView])

    return(

        
        <NewAboutContainerText 
            ref={aboutIntroRef}
            animate={animation}
            initial="hidden"
            variants={variants}
        >
            <NewAboutContainerHeadline>Hey! I'm Rodrigo Rocha, a software developer from Portugal, with a passion for design. </NewAboutContainerHeadline>
        </NewAboutContainerText>
    )
}