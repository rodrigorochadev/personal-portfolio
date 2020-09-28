import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import { TYPOGRAPHY } from '../../constants'
import { Container, Description, AboutFlex, AboutInfo, AboutPicture, Title, VerticalSpacing } from '../../styles/componentsStyles'

export default () => {

    const data = useStaticQuery(graphql`
        query {
            picture: file(relativePath: {eq: "portrait.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 90) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }  
                }
            }
        }
    `);

    return(
        
        <Container>
            <VerticalSpacing>
                <AboutFlex>
                    <AboutPicture>
                        <Img fluid={data.picture.childImageSharp.fluid} alt="Portrait" />
                    </AboutPicture>
                    <AboutInfo>
                        <Title>A bit about me.</Title>
                        <Description>{TYPOGRAPHY.about.description}</Description>
                    </AboutInfo>
                </AboutFlex>
            </VerticalSpacing>
            
            
        </Container>
    )
}