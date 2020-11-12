import React from 'react'

import { Container } from '../styles/componentsStyles'
import { FooterCopyright, FooterSocial, FooterContent, FooterSVG, SocialIcon } from '../styles/components/footerStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github } from '../assets/svg/svg'


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
                    
                    <FooterCopyright>
                        Rodrigo Rocha © {new Date().getFullYear()}.
                    </FooterCopyright>
                </FooterContent>
            </FooterSVG>
        </Container>
        
    )

}
