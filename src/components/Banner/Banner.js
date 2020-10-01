import React from 'react'
import { Instagram, Facebook, Mail } from '../../assets/svg/svg'
import { TYPOGRAPHY } from '../../constants'
import { BannerContainer, BannerDetail, BannerSocial, BannerSocialIcons, BannerTitle, Container, BannerContactInfo, BannerSocialIconContainer } from '../../styles/componentsStyles'

export default () => {
   

    return(
        <Container>
            <BannerContainer>
                <BannerTitle>{TYPOGRAPHY.banner.title}</BannerTitle>
                <BannerDetail />
            </BannerContainer>
            <BannerSocial>
                <BannerContactInfo >
                    {TYPOGRAPHY.banner.contact}
                </BannerContactInfo>
                <BannerSocialIcons>
                    <BannerSocialIconContainer href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Instagram />
                    </BannerSocialIconContainer>
                    <BannerSocialIconContainer href="https://facebook.com/rodrigorocha72" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Facebook />
                    </BannerSocialIconContainer>
                    <BannerSocialIconContainer href="mailto:rodrigorochaua@gmail.com" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Mail />
                    </BannerSocialIconContainer>
                </BannerSocialIcons>
                
            </BannerSocial>
        </Container>
    )
}