import { useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../../animations'
import { NewBannerText } from '../../styles/components/bannerStyles'
import { DetailsContainer } from '../../styles/components/detailsStyles'

export default () => {

    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return(
        <DetailsContainer
            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={divUp}
        >
            <NewBannerText outline style={{ opacity: '1', transition: 'all 0.2s linear' }}>-</NewBannerText>
            <NewBannerText outline style={{ opacity: '1', transition: 'all 0.2s linear' }}>=</NewBannerText>
            <NewBannerText outline style={{ opacity: '1', transition: 'all 0.2s linear' }}>+</NewBannerText>
        </DetailsContainer>
    )

}