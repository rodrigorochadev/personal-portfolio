import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { Container, NewSVGContainer, NewSVG, Flex, Description } from '../../styles/componentsStyles'
import Img from 'gatsby-image'
import { AboutMeSVG } from '../../assets/svg/svg'

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

                <Flex about>
                    <NewAboutImageContainer>
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
                    </NewAboutImageContainer>
                    <NewAboutContainerText>
                        <NewAboutContainerHeadline>Hey! I'm Rodrigo Rocha, a software developer, with a passion for design. </NewAboutContainerHeadline>
                        <Description light>
                            I was born in Figueira da Foz, Portugal, October 4th, 1994, where I lived and studied until I went to college. I attended University of Aveiro, where I've graduated with an BSc in Computer and Telematics Engineering. Following that, I had my first professional experience working as a software developer for Altice Labs.<br />
                            Even tough my degree is mostly focused on computer science and telecomunications, what I trully love to do, is to design and develop software. Mainly, websites and mobile applications. I'm eager to improve and learn something new every day. 
                        </Description>
                    </NewAboutContainerText>
                </Flex>
            </NewAboutPadding>
                
        </Container>
        
        
    )

}


export const NewAboutContainerText = styled.div`
    width: 100%;
    /* max-width: 1500px; */

`

export const NewAboutImageContainer = styled.h2`
    max-width: 400px;
    width: 100%;
    position: relative;
`

export const NewAboutContainerHeadline = styled.h2`
    line-height: 2.5rem;
    font-size: 1.6rem;
    margin-bottom: 20px;

    @media ${SITE_CONFIG.media.large} {
        line-height: 2.8rem;
        font-size: 2.2rem;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        line-height: 3rem;
        font-size: 2.4rem;
    }
`

export const NewAboutPadding = styled.div`

    margin-top: 150px;
    margin-bottom: 150px;

    @media ${SITE_CONFIG.media.medium} {
        margin-top: 250px;
        margin-bottom: 200px;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        margin-top: 300px;
        margin-bottom: 250px;
    }

`

