import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { NewAboutContainerHeadline, NewAboutContainerText } from '../../styles/components/newAboutStyles'

export default () => {

    const animation = useAnimation()
    const [aboutIntroRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-50px",
    })

    useEffect(() => {
        if (inView) {
        animation.start("visible")
        }
    }, [animation, inView])

    return(
        <>
            <NewAboutContainerText 
                ref={aboutIntroRef}
                animate={animation}
                initial="hidden"
                variants={{
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
                    },
                    hidden: { 
                        opacity: 0, 
                        y: 72 
                    },
                }}
            >
                <NewAboutContainerHeadline>Hey! I'm Rodrigo Rocha, a software developer from Portugal, with a passion for design. </NewAboutContainerHeadline>
            </NewAboutContainerText>

            
        </>
    )
}