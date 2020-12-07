import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from '../../animations'
import { Description, InfoContainer } from '../../styles/componentsStyles'
import { ProjectSubTitle } from '../../styles/pagesStyles'

export default () => {

    const animation = useAnimation()
    const [portfolioInfoRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-150px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return (
        <>
            <InfoContainer 
                ref={portfolioInfoRef}
                animate={animation}
                initial="hidden"
                variants={variants}
                marginBottom="30px"
            >
                <ProjectSubTitle>Some of my work.</ProjectSubTitle>
                <Description light>Below you can see a small section of my work. I always try to deliver the best project I can and I hope you enjoy what I bring to you! To see a preview, hover on the title, and click it to open the full details. Some pages are still being built, but you can have an idea on I how work. Enjoy!</Description>
            </InfoContainer>
        </>
    )
}