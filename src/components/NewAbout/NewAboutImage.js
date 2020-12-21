import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from '../../animations'
import { NewAboutAimHigherContainer } from '../../styles/components/newAboutStyles'
import AimHigher from './AimHigher'

export default () => {

    const animation = useAnimation()
    const [aboutImageRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: '0px',
        threshold: 0.5,
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return(
        <NewAboutAimHigherContainer
            ref={aboutImageRef}
            animate={animation}
            initial="hidden"
            variants={variants}
        >
            <AimHigher />
        </NewAboutAimHigherContainer>
    )

}