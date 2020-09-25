import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Img from 'gatsby-image'
import { Container, Title,Paragraph } from '../../styles/globalStyles'
import styled from 'styled-components'
import { theme } from '../../styles/theme'

const About = () => {
    
    const data = useStaticQuery(graphql`
        query {
            picture: file(relativePath: {eq: "portrait.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 400, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }  
                }
            }
        }
    `);

    return(
        <Container>
            
            <Title><h1>A little bit about me</h1></Title>
            <AboutContainer>    
                <AboutFlex>
                    
                    <PortraitImage>
                        <Img fluid={data.picture.childImageSharp.fluid} alt="Portrait" />
                    </PortraitImage>
                    <ParagraphFlex>
                        <Paragraph>I have a BSc in Computer and Telematics engineering from University of Aveiro. I worked for a project in Altice Labs, named BOT School. Following that, i worked mostly freelance. I have a passion for well designed websites and mobile apps. I also like graphic design. I’m eaguer to learn something new everyday and provide people with the best projects I can.</Paragraph>
                    </ParagraphFlex>
                    
                </AboutFlex>
            </AboutContainer>
        </Container>
    )
}

export default About

export const AboutContainer = styled.div`
    min-height: 70vh;
    display: flex;
    align-items: center;
`

export const AboutFlex = styled.div`
    display: flex;
    flex-direction: column-reverse;
    text-align: center;
    align-items: center;
    /* flex-wrap: wrap; */
    column-gap: 50px;
    row-gap: 30px;

    @media ${theme.media.medium} {
        flex-direction: row;
        text-align: left;
        justify-content: center;
    }
`

export const PortraitImage = styled.div`

    min-width: 250px;

    @media ${theme.media.medium} {
        min-width: 300px;
    }

    @media ${theme.media.large} {
        min-width: 400px;
    }

`

export const ParagraphFlex = styled.div`

    min-width: 50%;

`