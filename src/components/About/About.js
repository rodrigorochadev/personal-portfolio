import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import {SITE_CONFIG} from '../../constants'
import { Container, AboutFlex, AboutPicture, BigTitle } from '../../styles/componentsStyles'
import styled, { css } from 'styled-components'
import usePageOfssetY from '../../hooks/usePageOffsetY'
import useWindowSize from '../../hooks/useWindowSize'

export default () => {
    const offsetY = usePageOfssetY();
    const { width } = useWindowSize()

    const data = useStaticQuery(graphql`
        query {
            picture: file(relativePath: {eq: "portrait.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }  
                }
            }
        }
    `);


    const text = [
        `I was born in Figueira da Foz, Portugal in October 4th, 1994 and graduated with a BSc in Computer and Telematics Engineering from University of Aveiro.`,
        `I had my first professional experience working for Altice Labs as an Software Developer. I also work as a freelance web developer.`,
        `My passion is to design and develop software. I'm eager to learn something new every day, and maybe I can teach you something.`
    ]
    
    return(
        <>
        
        <Container>
            <AboutFlex>
                {/* style={{transform: `translateY(${offsetY*0.15}px)`}} */}

                
                <AboutPicture >
                    <Img fluid={data.picture.childImageSharp.fluid} alt="Portrait" />
                </AboutPicture>


                <AboutTitle>
                    {/*  */}
                    {width <= 768 && (
                        <BigTitle >A little bit about me.</BigTitle>
                    )}
                    {width > 768 && (
                        <BigTitle style={{transform: `translateY(-${offsetY*0.10}px)`}}>A little bit about me.</BigTitle>
                    )}
                </AboutTitle>
                
            </AboutFlex>            
        </Container>
        <div style={{padding: '0 10vw', marginTop: '-150px'}}>

            {/* style={{transform: `translateY(${offsetY*0.12}px)`}} */}
            {text.map((textHeading, i) => {
                    return(
                        <AboutTextContainer reverse={i%2 !== 0}>
                            <AboutText>
                                <AboutH2>{textHeading}</AboutH2>
                            </AboutText>
                        </AboutTextContainer>
                    )
                }  
            )}
        </div>
        </>
    )
}

const AboutTitle = styled.div`
    margin-bottom: 70px;

    @media ${SITE_CONFIG.media.small} {
        position: absolute;
        width: 500px;
        left: 400px;
        margin-bottom: -50px;
    }

    @media ${SITE_CONFIG.media.medium} {
        left: 500px;        
    }
    
`

const AboutTextContainer = styled.div`
    display: flex;
    margin-top: 100px;
    

    ${props => props.reverse && css`
        justify-content: right;
    `};

    @media ${SITE_CONFIG.media.small} {
        margin-top: 250px;
    }

`

const AboutText = styled.div`

    @media ${SITE_CONFIG.media.small} {
        width: 60%;
        border-bottom: 1px solid var(--color-text);
    }
    
    
`

export const AboutH2 = styled.h2`

    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-weight: 400;
    line-height: ${SITE_CONFIG.fontHeights.titleHeight};
    margin-bottom: 20px;
    font-size: 1.5rem;

    @media ${SITE_CONFIG.media.small} {
        font-size: 2rem;
        
    }
    
    
`