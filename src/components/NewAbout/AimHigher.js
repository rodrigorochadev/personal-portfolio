import { graphql, useStaticQuery } from 'gatsby'
import React, { useEffect, useState } from 'react'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import usePageOfssetY from '../../hooks/usePageOffsetY'
import { useInView } from 'react-intersection-observer'
import { SITE_CONFIG } from '../../constants'
import { Container, DivMargin, NewSVG, NewSVGContainer } from '../../styles/componentsStyles'
import { NewAboutImageContainer } from '../../styles/components/newAboutStyles'
import { AboutMeSVG } from '../../assets/svg/svg'
import useWindowSize from '../../hooks/useWindowSize'

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

    const offsetY = usePageOfssetY();

    const [isVisible, setIsVisible] = useState(1);
    
    const [aimHigherRef, inView] = useInView({
        triggerOnce: true,
    })

    const { width } = useWindowSize();

    useEffect(() => {
        if (inView) {
            setIsVisible(1);
        } else {
            setIsVisible(0);
        }
    }, [isVisible, inView])


    return(
        <Container>
            <DivMargin>
            <AimHigherContainer ref={aimHigherRef}>
                {width < 1000 && (
                        <>
                        <AimHigherTextContainer
                            animate={{
                                x: isVisible * (900 - offsetY),
                            }}
                            transition={{ease: 'easeOut'}}
                        >
                            <AimHigherText>AIM HIGHER</AimHigherText>
                        </AimHigherTextContainer>
                        <NewAboutImageContainer >
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

                        <AimHigherTextContainer
                        animate={{
                            x: isVisible * (900 - offsetY),
                        }}
                        transition={{ease: 'easeOut'}}
                    >
                        <AimHigherText outline>AIM HIGHER</AimHigherText>
                    </AimHigherTextContainer>
                    </>
                )}
                {width >= 1000 && (
                        <>
                        <AimHigherTextContainer
                            animate={{
                                x: isVisible * (width-100 - offsetY),
                            }}
                            transition={{ease: 'easeOut'}}
                        >
                            <AimHigherText>AIM HIGHER</AimHigherText>
                        </AimHigherTextContainer>
                        <NewAboutImageContainer>
                            
                                
                            <Img fluid={data.picture.childImageSharp.fluid} alt="My Portrait" />
                        </NewAboutImageContainer>

                        <AimHigherTextContainer
                        animate={{
                            x: isVisible * (width-100 - offsetY),
                        }}
                        transition={{ease: 'easeOut'}}
                    >
                        <AimHigherText outline>AIM HIGHER</AimHigherText>
                    </AimHigherTextContainer>
                    </>
                )}
                    
            </AimHigherContainer>
            </DivMargin>
        </Container>
    )
}

export const AimHigherContainer = styled.div`
    /* min-height: 90vh; */
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

`
export const AimHigherTextContainer = styled(motion.div)`
    position: absolute;
    right: -150px;
`

export const AimHigherText = styled.h1`

    color: var(--color-text);
    font-size: 6.5rem;
    white-space: nowrap;
    
    @media ${SITE_CONFIG.media.small} {
        font-size: 13vw;
        /* line-height: 9vw; */
    }

    ${props => props.outline && css`
        color: transparent;
        -webkit-text-stroke: 3px var(--color-text);

        @media ${SITE_CONFIG.media.large} {
            -webkit-text-stroke: 4px var(--color-text);
        }
    `}
`