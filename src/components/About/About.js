import React, { useEffect } from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import { graphql, useStaticQuery } from 'gatsby'
import { DesktopAboutContainer } from '../../styles/components/aboutStyles'
import { Container, PaddingContainer } from '../../styles/componentsStyles'
import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import AboutItemMobile from './AboutItemMobile'
import AboutItemDesktop from './AboutItemDesktop'

export default () => {

    const { width } = useWindowSize()

    const [hoverState, setHoverState] = useState(false)

    const data = useStaticQuery(graphql`
        query {
            picture: file(relativePath: {eq: "portrait.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }  
                }
            }
            figueira: file(relativePath: {eq: "figueira-da-foz.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }  
                }
            }

            aveiro: file(relativePath: {eq: "aveiro.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }  
                }
            }
        }
    `);

    const [contentRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "0px",
    })

    useEffect(() => {
        inView ? setHoverState(true) : setHoverState(false)
    }, [inView])

    const aboutContent = [
        {id: 0, direction: 1, translate: [0.17, 0.05], text: `Hi, everyone! My name is Rodrigo Rocha. I was born in Figueira da Foz, Portugal, October 4th, 1994 where I lived and studied   until I went to college.`, image: data.figueira.childImageSharp.fluid, imgAtl: `Figueira da Foz`},
        {id: 1, direction: -1, translate: [0.13, 0.05], text: `I attended University of Aveiro where I've graduated with a BSc in Computer and Telematics Engineering. Following that, I had my first professional experience working as a software developer for Altice Labs.`, image: data.aveiro.childImageSharp.fluid, imgAtl: `Aveiro`},
        {id: 2, direction: 1, translate: [0.2, 0.05], text: `I have a passion to design and develop software, as well as good looking websites and mobile applications. I'm eager to improve and learn something new every day.`, image: data.picture.childImageSharp.fluid, imgAtl: `My Picture`},
    ]

    return(
        <PaddingContainer vertical="200px" horizontal="0">
            {/* <Container> */}
                {width < 1024 && (
                    <>
                        {aboutContent.map( item => {
                            return(
                                <AboutItemMobile
                                    text={item.text}
                                    image={item.image}
                                    imgAtl={item.imgAtl}
                                />
                            )
                        })}
                    </>
                )}

                {width >= 1024 && (
                    <DesktopAboutContainer ref={contentRef}>
                        {aboutContent.map( item => {
                            return (
                                <AboutItemDesktop
                                    direction={item.direction}
                                    hoverState={hoverState}
                                    translateY={item.translate}
                                    reverse={item.direction === -1}
                                    text={item.text}
                                    image={item.image}
                                    lessZoom={item.id === 2}
                                    imgAtl={item.imgAtl}
                                />
                            )
                        })}
                    </DesktopAboutContainer> 
                )}   
            {/* </Container> */}
        </PaddingContainer>
    )
}