import React, { useEffect } from 'react'
import { Instagram, Facebook, Mail } from '../../assets/svg/svg'
import { TYPOGRAPHY } from '../../constants'
import { BannerContainer, BannerSocial, BannerSocialIcons, BannerTagline, BannerTitle, Container } from '../../styles/componentsStyles'

import {useInView} from 'react-intersection-observer'
import {useAnimation, motion} from 'framer-motion'
import {parent, child, container, item} from '../../animations'

export default () => {

    const animation = useAnimation();
    const [contentRef, inView] = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
    }, [animation, inView])

    

    return(
        <Container>
            <BannerContainer ref={contentRef} variants={parent} initial='hidden' animate={animation}>
                <BannerTitle variants={child}>{TYPOGRAPHY.banner.title}</BannerTitle>
                <BannerTagline variants={child}>{TYPOGRAPHY.banner.tagline}</BannerTagline>
            </BannerContainer>
            <BannerSocial ariants={container} initial="hidden" animate="show">
                <motion.p variants={item}>
                    {TYPOGRAPHY.banner.contact}
                </motion.p>
                <BannerSocialIcons variants={container} initial="hidden" animate="show">
                    <motion.a variants={item} href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Instagram />
                    </motion.a>
                    <motion.a variants={item} href="https://facebook.com/rodrigorocha72" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Facebook />
                    </motion.a>
                    <motion.a variants={item} href="mailto:rodrigorochaua@gmail.com" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Mail />
                    </motion.a>
                </BannerSocialIcons>
                
            </BannerSocial>
        </Container>
    )
}