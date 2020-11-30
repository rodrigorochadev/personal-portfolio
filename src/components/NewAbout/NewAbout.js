import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { Container, NewSVGContainer, NewSVG, Flex } from '../../styles/componentsStyles'
import Img from 'gatsby-image'
import Scroll from '../Design/Scroll'
import { AboutMeSVG, ScrollMoreSVG } from '../../assets/svg/svg'
import { motion } from 'framer-motion'

export default () => {

    const data = useStaticQuery(graphql`
        query {
            picture: file(relativePath: {eq: "portrait.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 400, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }  
                }
            }
        }`
    )
    
    return(
        <Container>
            <NewAboutPadding>

                <Flex wrap>
                    <div style={{maxWidth: '400px', width: '100%', position: 'relative'}}>
                        <NewSVGContainer
                            animate={{
                                rotate: 360,
                                transition: { duration: 5, ease: 'linear', repeat: 'Infinity' },
                            }} 
                        >
                            <NewSVG>
                                <AboutMeSVG />
                            </NewSVG>
                        </NewSVGContainer>
                            
                        <Img fluid={data.picture.childImageSharp.fluid} alt="My Portrait" />
                    </div>
                    <NewAboutContainerText>
                        <NewAboutContainerHeadline>Hey! I'm Rodrigo. A software developer from Portugal with a passion for design. </NewAboutContainerHeadline>
                        <NewAboutContainerDescription>
                            I was born in Figueira da Foz, Portugal, October 4th, 1994, where I lived and studied until I went to college. I attended University of Aveiro, where I've graduated with an BSc in Computer and Telematics Engineering. Following that, I had my first professional experience working as a software developer for Altice Labs.<br />
                            Even tough my degree is mostly focused on computer science and telecomunications, what I trully love to do, is to design and develop software. Mainly, websites and mobile applications. I'm eager to improve and learn something new every day. 
                        </NewAboutContainerDescription>
                    </NewAboutContainerText>
                </Flex>
            </NewAboutPadding>
                
        </Container>
        
        
    )

}


export const NewAboutContainerText = styled.div`
    width: 100%;
    max-width: 1500px;

    @media ${SITE_CONFIG.media.medium} {
        width: 80%;
    }

    @media ${SITE_CONFIG.media.large} {
        width: 70%;
    }

    @media ${SITE_CONFIG.media.large} {
        width: 60%;
    }
`

export const NewAboutContainerHeadline = styled.h2`
    line-height: 2rem;
    margin-bottom: 10px;
`

export const NewAboutContainerDescription = styled.p`
    line-height: 2.2rem;
    color: var(--color-lightText);
`
export const NewAboutPadding = styled.div`

    margin: 150px 0 100px;

    @media ${SITE_CONFIG.media.medium} {
        margin: 300px 0 200px;
    }

`

