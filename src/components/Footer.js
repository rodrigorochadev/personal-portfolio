import React from 'react'

import { Container, Description, NewSVG, NewSVGContainer } from '../styles/componentsStyles'
import { FooterSocial, FooterContent, FooterSVG, SocialIcon, FooterName } from '../styles/components/footerStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github, ThankYouSVG } from '../assets/svg/svg'
import Talk from './Talk/Talk'

export default ({onCursor}) => {

    const social = [
        {comp: <Linkedin />, url: 'https://linkedin.com/in/rodrigorocha101', label: 'Linkedin'},
        {comp: <Github />, url: 'https://github.com/rodrigo-rocha', label: 'Github'},
        {comp: <Behance />, url: 'https://behance.net/rodrigo-rocha', label: 'Behance'},
        {comp: <Dribbble />, url: 'https://dribbble.com/rodrigorocha', label: 'Dribbble'},
        {comp: <Instagram />, url: 'https://instagram.com/__rodrigorocha__', label: 'Instagram'}, 
    ]

    return(
        
        <Container>
            <Talk />
            <FooterSVG>
                <FooterContent>
                    <FooterSocial>
                        {social.map(elem => {
                            return (
                                <SocialIcon 
                                    onMouseEnter={() => onCursor('hovered')}
                                    onMouseLeave={onCursor}
                                    href={elem.url} rel="noreferrer" target="_blank" aria-label={elem.label}>
                                    {elem.comp}
                                </SocialIcon>
                            )
                        })}
                    </FooterSocial>
                    <FooterName>
                        <Description>
                            40° 09' 3.06" -8° 51' 42.44"<br />
                            <b>Rodrigo Rocha © {new Date().getFullYear()}.</b>
                        </Description>
                    </FooterName>
                </FooterContent>
            </FooterSVG>

            <div style={{position: 'absolute', bottom: '170px', right: '8%'}}>
                <NewSVGContainer
                    animate={{
                        rotate: 360,
                        transition: { duration: 5, ease: 'linear', repeat: 'Infinity' },
                    }} 
                >
                    <NewSVG>
                        <ThankYouSVG />
                    </NewSVG>
                </NewSVGContainer>
            </div>
            
        </Container>
        
    )

}
