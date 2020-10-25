import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { BigTitle, VerticalSpacing} from '../../styles/componentsStyles'
import usePageOfssetY from '../../hooks/usePageOffsetY'
import useWindowSize from '../../hooks/useWindowSize'
import AboutItem from './AboutItem'
import { AboutTextContainer, AboutText, AboutH2, MobileAboutImgContainer, MobileAboutContainer, AboutContainer } from '../../styles/components/aboutStyles'

export default () => {
    
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
            figueira: file(relativePath: {eq: "figueira-da-foz.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }  
                }
            }

            aveiro: file(relativePath: {eq: "aveiro.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }  
                }
            }
        }
    `);


    const text = [

        [0, `Hi, everyone! My name is Rodrigo Rocha. I was born in Figueira da Foz, Portugal, October 4th, 1994 where I lived and studied   until I went to college.`, data.figueira.childImageSharp.fluid],
        [0, `I attended University of Aveiro where I've graduated with an BSc in Computer and Telematics Engineering. Following that, I had my first professional experience working as a software developer for Altice Labs.`, data.aveiro.childImageSharp.fluid],
        [1, `I have a passion to design and develop software, as well as good looking websites and mobile applications. I'm eager to improve and learn something new every day.`, data.picture.childImageSharp.fluid]
    ]
    
    return(
        
        <VerticalSpacing>
        {width < 1024 && (
            <>
            <div style={{paddingTop: '100px'}}></div>
            <div style={{padding: '0 10vw', marginTop: '-150px'}}>
                {text.map((textHeading, i) => {
                        return(
                            <MobileAboutContainer>
                                <AboutTextContainer>
                                    <AboutText>
                                        <AboutH2>{textHeading[1]}</AboutH2>
                                    </AboutText>
                                </AboutTextContainer>
                                <MobileAboutImgContainer>
                                    <Img fluid={textHeading[2]}></Img>
                                </MobileAboutImgContainer>
                            </MobileAboutContainer>
                        )
                    }  
                )}                
            </div>
            </>
        )}

        {width >= 1024 && (
            <>
            <div style={{paddingTop: '300px'}}></div>
            <div style={{padding: '0 10vw'}}>
            
                <BigTitle outline right>Who am I?</BigTitle>
                <p>(Hover on pictures to see more!)</p>
                <div style={{borderTop: '1px solid var(--color-text)', marginBottom: '100px'}}></div>
            </div>
            <AboutContainer>
                
                
                <AboutItem translateY={[0.15, 0.02]} reverse={false} text={text[0][1]} image={data.figueira.childImageSharp.fluid}/>
                <AboutItem translateY={[0.13, 0.02]} reverse={true} text={text[1][1]} image={data.aveiro.childImageSharp.fluid}/>
                <AboutItem translateY={[0.11, 0.02]} reverse={false} text={text[2][1]} image={data.picture.childImageSharp.fluid}/>
                
                

            </AboutContainer>
            </>
        )}
        
            
        </VerticalSpacing>
    )
}