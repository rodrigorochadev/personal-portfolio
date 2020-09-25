import React from 'react'
import styled from 'styled-components'
import { Instagram, Mail, Messenger } from '../../assets/svg/svg'

import { BannerContainer, BannerText } from '../../styles/componentStyles'
import { Container, Paragraph } from '../../styles/globalStyles'

import { theme } from '../../styles/theme'


const Banner = () => {

    return(
        
        <Container>
            <BannerContainer>
                <BannerText>
                    <h1>My name is Rodrigo. I’m a software developer based in Portugal. I’m a front-end afficionado and my goal is to make the web prettier one project at a time.</h1>
                    <Paragraph>Create. Destroy. Rebuild.</Paragraph>
                </BannerText>
            </BannerContainer>
            <BannerContact>
                <Paragraph>Contact me</Paragraph>
                <BannerSocial>
                    <a href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Instagram />
                    </a>
                    <a href="https://m.me/rodrigorocha72" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Messenger />
                    </a>
                    <a href="mailto:rodrigorochaua@gmail.com" rel="noreferrer" target="_blank" aria-label="Linkedin">
                        <Mail />
                    </a>
                </BannerSocial>
            </BannerContact>
            
        </Container>
    )

}

export default Banner

export const BannerContact = styled.div`

    display: none;

    @media ${theme.media.small} {
        position: absolute;
        bottom: 62px;
        text-align: left;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
    }
    
`

export const BannerSocial = styled.div`
    
    display: flex;
    align-items: center;
    column-gap: 35px;

    svg {
        fill: ${theme.colors.primary};

        &:hover {
            fill: ${theme.colors.accent};
            transition: ${theme.transitions.default};
        }
    }
`