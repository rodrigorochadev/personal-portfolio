import React from 'react'
import { Instagram, Facebook, Mail } from '../../assets/svg/svg'
import { TYPOGRAPHY } from '../../constants'
import { BannerContainer, BannerSocial, BannerSocialIcons, BannerTagline, BannerTitle, Container } from '../../styles/componentsStyles'

export default () => {

    return(
        <Container>
            <BannerContainer>
                <BannerTitle>{TYPOGRAPHY.banner.title}</BannerTitle>
                <BannerTagline>{TYPOGRAPHY.banner.tagline}</BannerTagline>
            </BannerContainer>
            <BannerSocial>
                <p>
                    Contact me
                </p>
                <BannerSocialIcons>
                    <a href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Instagram />
                    </a>
                    <a href="https://facebook.com/rodrigorocha72" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Facebook />
                    </a>
                    <a href="mailto:rodrigorochaua@gmail.com" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Mail />
                    </a>
                </BannerSocialIcons>
                
            </BannerSocial>
        </Container>
    )
}