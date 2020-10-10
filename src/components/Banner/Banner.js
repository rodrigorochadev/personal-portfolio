import React from 'react'
import { TYPOGRAPHY } from '../../constants'
import { BannerContainer, BannerDetail, Container, BannerTitle } from '../../styles/componentsStyles'

export default () => {
   

    return(
        <Container>
            <BannerContainer>
                <BannerTitle>{TYPOGRAPHY.banner.title}</BannerTitle>
                <BannerDetail />
            </BannerContainer>
        </Container>
    )
}