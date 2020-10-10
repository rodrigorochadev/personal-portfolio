import React from 'react'
// import scrollTo from 'gatsby-plugin-smoothscroll'

import { Container, FooterContainer, FooterSection, FooterCopyright, FooterSocial, FooterContent, FooterSVG } from '../styles/componentsStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github } from '../assets/svg/svg'

export default () => {

    return(
        <FooterContainer id="footer">
            <Container>
                <FooterSVG>
                    <FooterContent>
                        <FooterSection>
                            <FooterSocial>
                                <a href="https://linkedin.com/in/rodrigorocha101" rel="noreferrer" target="_blank" aria-label="Linkedin">
                                    <Linkedin />
                                </a>
                                <a href="https://github.com/rodrigo-rocha" rel="noreferrer" target="_blank" aria-label="Github">
                                    <Github />
                                </a>
                                <a href="https://behance.net/rodrigo-rocha" rel="noreferrer" target="_blank" aria-label="Behance">
                                    <Behance />
                                </a>
                                <a href="https://dribbble.com/rodrigorocha" rel="noreferrer" target="_blank" aria-label="Dribbble">
                                    <Dribbble />
                                </a>
                                <a href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Instagram">
                                    <Instagram />
                                </a>
                            </FooterSocial>
                        </FooterSection>
                        <FooterCopyright>
                            <p>Rodrigo Rocha © {new Date().getFullYear()}. All rights reserved.</p>
                        </FooterCopyright>
                    </FooterContent>
                </FooterSVG>
            </Container>
        </FooterContainer>
    )

}