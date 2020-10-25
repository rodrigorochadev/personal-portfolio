import React from 'react'
// import scrollTo from 'gatsby-plugin-smoothscroll'

import { Container, FooterContainer, FooterSection, FooterCopyright, FooterSocial, FooterContent, FooterSVG } from '../styles/componentsStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github } from '../assets/svg/svg'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export default ({onCursor}) => {

    return(
        <FooterContainer id="footer">
            <Container>
                <FooterSVG>
                    <FooterContent>
                        <FooterSection>
                            <FooterSocial>
                                <SocialIcon 
                                    onMouseEnter={() => onCursor('hovered')}
                                    onMouseLeave={onCursor}
                                    href="https://linkedin.com/in/rodrigorocha101" rel="noreferrer" target="_blank" aria-label="Linkedin">
                                    <Linkedin />
                                </SocialIcon>

                                <SocialIcon 
                                    onMouseEnter={() => onCursor('hovered')}
                                    onMouseLeave={onCursor}
                                    href="https://github.com/rodrigo-rocha" rel="noreferrer" target="_blank" aria-label="Github">
                                    <Github />
                                </SocialIcon>
                                <SocialIcon 
                                    onMouseEnter={() => onCursor('hovered')}
                                    onMouseLeave={onCursor}
                                    href="https://behance.net/rodrigo-rocha" rel="noreferrer" target="_blank" aria-label="Behance">
                                    <Behance />
                                </SocialIcon>
                                <SocialIcon 
                                    onMouseEnter={() => onCursor('hovered')}
                                    onMouseLeave={onCursor}
                                    href="https://dribbble.com/rodrigorocha" rel="noreferrer" target="_blank" aria-label="Dribbble">
                                    <Dribbble />
                                </SocialIcon>
                                <SocialIcon 
                                    onMouseEnter={() => onCursor('hovered')}
                                    onMouseLeave={onCursor}
                                    href="https://instagram.com/__rodrigorocha__" rel="noreferrer" target="_blank" aria-label="Instagram">
                                    <Instagram />
                                </SocialIcon>
                            </FooterSocial>
                        </FooterSection>
                        <FooterCopyright>
                            <p>Rodrigo Rocha © {new Date().getFullYear()}.</p>
                        </FooterCopyright>
                    </FooterContent>
                </FooterSVG>
            </Container>
        </FooterContainer>
    )

}

export const SocialIcon = styled(motion.a)`
    
    &:hover {
        cursor: none;
    }
`