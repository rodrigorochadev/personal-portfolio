import React, { useEffect } from 'react'
import { Instagram, Facebook, Mail } from '../../assets/svg/svg'
import { TYPOGRAPHY } from '../../constants'
import { BannerContainer, BannerSocial, BannerSocialIcons, BannerTagline, BannerTitle, Container, BannerContactInfo, BannerSocialIconContainer } from '../../styles/componentsStyles'

import {useInView} from 'react-intersection-observer'
import {useAnimation } from 'framer-motion'
import {parent, child, container, item} from '../../animations'

export default () => {

    const animation = useAnimation();
    const [bannerContainerRef, inView] = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        if(inView) {
            animation.start('visible');
        }
    }, [animation, inView])

    const [bannerSocialRef, inView1] = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        if(inView1) {
            animation.start('visible');
        }
    }, [animation, inView1])

    const [bannerIconsRef, inView2] = useInView({
        triggerOnce: true,
    })

    useEffect(() => {
        if(inView2) {
            animation.start('visible');
        }
    }, [animation, inView2])

    

    return(
        <Container>
            <BannerContainer ref={bannerContainerRef} variants={parent} initial='hidden' animate={animation}>
                <BannerTitle variants={child}>{TYPOGRAPHY.banner.title}</BannerTitle>
                <BannerTagline variants={child}>{TYPOGRAPHY.banner.tagline}</BannerTagline>
            </BannerContainer>
            <BannerSocial ref={bannerSocialRef} variants={container} initial='hidden' animate={animation}>
                <BannerContactInfo variants={item}>
                    {TYPOGRAPHY.banner.contact}
                </BannerContactInfo>
                <BannerSocialIcons ref={bannerIconsRef} variants={container} initial='hidden' animate={animation}>
                    <BannerSocialIconContainer variants={item} href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Instagram />
                    </BannerSocialIconContainer>
                    <BannerSocialIconContainer variants={item} href="https://facebook.com/rodrigorocha72" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Facebook />
                    </BannerSocialIconContainer>
                    <BannerSocialIconContainer variants={item} href="mailto:rodrigorochaua@gmail.com" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Mail />
                    </BannerSocialIconContainer>
                </BannerSocialIcons>
                
            </BannerSocial>
        </Container>
    )
}