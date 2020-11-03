import React, { useEffect } from 'react'

import { Container } from '../styles/componentsStyles'
import { FooterContainer, FooterSection, FooterCopyright, FooterSocial, FooterContent, FooterSVG, SocialIcon } from '../styles/components/footerStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github } from '../assets/svg/svg'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../animations'

export default ({onCursor}) => {

    // Animations
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-50px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])


    return(
        <FooterContainer id="footer">
            <Container>
                <FooterSVG>
                    <FooterContent 
                        ref={contentRef}
                        animate={animation}
                        initial="hidden"
                        variants={divUp}    
                    >
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
