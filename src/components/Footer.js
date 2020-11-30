import React from 'react'

import { Container, NewSVG, NewSVGContainer } from '../styles/componentsStyles'
import { FooterSocial, FooterContent, FooterSVG, SocialIcon } from '../styles/components/footerStyles'
import { Instagram, Dribbble, Behance, Linkedin, Github, ThankYouSVG } from '../assets/svg/svg'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { SITE_CONFIG } from '../constants'


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
            <div style={{marginTop: '75px'}}>
                <h2>Let's build something together!</h2>
                <FooterTalkDescription>
                    <p>Send me an e-mail at
                        &nbsp;<motion.a 
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com</motion.a>
                        , or find me at my social medias below.
                    </p>
                </FooterTalkDescription>
            </div>
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
                        
                        <p>40° 09' 3.06" -8° 51' 42.44"</p>
                        <div style={{marginBottom: '10px'}}></div>
                        <p><b>Rodrigo Rocha © {new Date().getFullYear()}.</b></p>
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

export const FooterName = styled.div`
    text-align: center;
    position: relative;

    @media ${SITE_CONFIG.media.small} {
        text-align: right;
    }
`

export const FooterTalkTitle = styled.div`
    
    @media ${SITE_CONFIG.media.medium} {
        font-size: 3em;
    }
`

export const FooterTalkDescription = styled.div`
    
    margin-top: 10px;

    @media ${SITE_CONFIG.media.medium} {
        width: 50%;
    }
`
