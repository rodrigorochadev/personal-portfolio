import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from '../../animations'
import useWindowSize from '../../hooks/useWindowSize'
import { NewAboutAimHigherContainer } from '../../styles/components/newAboutStyles'
import AimHigher from '../AimHigher'

export default () => {

    const animation = useAnimation()
    const [aboutImageRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-300px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    const { width } = useWindowSize()

    return(

        <>
            {width <= 768 && (
                <NewAboutAimHigherContainer>
                    <AimHigher />
                </NewAboutAimHigherContainer>
            )}

            {width > 768 && (
                <NewAboutAimHigherContainer
                    ref={aboutImageRef}
                    animate={animation}
                    initial="hidden"
                    variants={variants}
                >
                    <AimHigher />
                </NewAboutAimHigherContainer>
            )}
        </>
    )

}