import React from 'react'

import scrollTo from 'gatsby-plugin-smoothscroll'

import { Container, NonStyledButton, Paragraph } from '../styles/globalStyles'
import { FooterContainer, FooterSection, FooterCopyright, FooterBrand, FooterSocial, FooterContent } from '../styles/componentStyles'

import { Instagram, Dribbble, Behance, Logo, Linkedin, Github } from '../assets/svg/svg'

const Footer = () => {

    return(
        <FooterContainer id="footer">
        <Container>
            <FooterContent>
                <FooterSection>
                    <FooterBrand>
                        <NonStyledButton>
                            <button aria-label="rodrigorocha" onClick={() => scrollTo('#home')}>
                                <Logo />
                            </button>
                        </NonStyledButton>
                        
                    </FooterBrand>
                </FooterSection>

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
            
                
            </FooterContent>
            
            <FooterCopyright>
                <Paragraph>Rodrigo Rocha © {new Date().getFullYear()}. All rights reserved.</Paragraph>
            </FooterCopyright>
        </Container>
        </FooterContainer>
        
    )
}

export default Footer
