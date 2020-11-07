import React from 'react'

import { Container } from '../styles/componentsStyles'
import { FooterContainer, FooterSection, FooterCopyright, FooterSocial, FooterContent, FooterSVG, SocialIcon } from '../styles/components/footerStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github } from '../assets/svg/svg'


export default ({onCursor}) => {

    // Animations
    // const animation = useAnimation()
    // const [contentRef, inView] = useInView({
    //     triggerOnce: true,
    //     rootMargin: "-100px",
    // })

    // useEffect(() => {
    //     if (inView) {
    //         animation.start("visible")
    //         console.log('visible')
    //     }
    // }, [animation, inView])

    const social = [
        {comp: <Linkedin />, url: 'https://linkedin.com/in/rodrigorocha101'},
        {comp: <Github />, url: 'https://github.com/rodrigo-rocha'},
        {comp: <Behance />, url: 'https://behance.net/rodrigo-rocha'},
        {comp: <Dribbble />, url: 'https://dribbble.com/rodrigorocha'},
        {comp: <Instagram />, url: 'https://instagram.com/__rodrigorocha__'}, 
    ]

    return(
        <FooterContainer 
            // ref={contentRef}
            // animate={animation}
            // initial="hidden"
            // variants={divUp} 
        >
            <Container>
                <FooterSVG>
                    <FooterContent>
                        <FooterSection>
                            <FooterSocial>
                                {social.map(elem => {
                                    return (
                                        <SocialIcon 
                                            onMouseEnter={() => onCursor('hovered')}
                                            onMouseLeave={onCursor}
                                            href={elem.url} rel="noreferrer" target="_blank" aria-label="Linkedin">
                                            {elem.comp}
                                        </SocialIcon>
                                    )
                                })}
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
