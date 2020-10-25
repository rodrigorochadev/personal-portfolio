import React, { useState } from 'react'
import {SITE_CONFIG} from '../../constants'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'
import useWindowSize from '../../hooks/useWindowSize'

export default (props) => {

    const {x, y} = useMousePosition()
    const [hoverState, setHoverState] = useState(false)
    const { width } = useWindowSize()

    return(
        <PortfolioMargin>

            <PortfolioContainer >
                {width > 768 && (
                    <FloatingImage
                        initial={{opacity: 0}}
                        animate={{
                            display: hoverState ? 'initial' : 'none',
                            opacity: hoverState ? 1 : 0,
                            x: x - 300,
                            y: y - 150,
                        }}
                    >
                        <Img fluid={props.image} alt={props.name} />
                    </FloatingImage>
                )}

                {width <= 768 && (
                    <FloatingImageMobile>
                        <Img fluid={props.image} alt={props.name} />
                    </FloatingImageMobile>
                )}

                <PortfolioType>
                    {props.kind}
                </PortfolioType>

                <PortfolioName >
                    
                    <a href={props.url}>
                        {width > 768 && (
                            <PortfolioTitle 
                                    onHoverStart={() => setHoverState(true)}
                                    onHoverEnd={() => setHoverState(false)}
                            >
                                <p>/{props.id}.</p>
                                <h2>{props.name}</h2>
                            </PortfolioTitle>
                        )}
                        {width <= 768 && (
                            <PortfolioTitle>
                                <p>/{props.id}.</p>
                                <h2>{props.name}</h2>
                            </PortfolioTitle>
                        )}
                    </a>
                </PortfolioName>

                <PortfolioDescription>
                    <p>{props.description}</p>
                </PortfolioDescription>

                

            </PortfolioContainer>
        </PortfolioMargin>
    )
}

export const PortfolioMargin = styled.div`
    z-index: 20;
    margin-top: 50px;

    @media ${SITE_CONFIG.media.small} {
        margin-top: 0;
    }
`

export const PortfolioType = styled.p`
    display: none;

    @media ${SITE_CONFIG.media.small} {
        transform: rotate(-90deg);    
        display: initial;
    }

`

export const PortfolioName = styled.div`

    a {
        text-decoration: none;
    }

    @media ${SITE_CONFIG.media.small} {
        width: 500px;
    }
`

export const PortfolioDescription = styled.div`
    
    p {
        font-family: ${SITE_CONFIG.fontFamilies.descriptions};
    }
    

    @media ${SITE_CONFIG.media.small} {
        width: 70%;
    }
`

export const PortfolioContainer = styled.div`
    z-index: 20;
    display: flex;
    
    flex-direction: column;
    row-gap: 10px;

    width: 100%;
    min-height: 30vh;
    padding: 20px 0;
    

    transition: ${SITE_CONFIG.transitions.defautls};


    @media ${SITE_CONFIG.media.small} {
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        column-gap: 50px;
        border-top: 0.1px solid var(--color-text);
    }

    h2 {
        transition: ${SITE_CONFIG.transitions.defautls};
        &:hover {
            color: var(--var-color);
            /* mix-blend-mode: difference; */
            /* cursor: pointer; */
            -webkit-text-stroke: 1px;
            -webkit-text-stroke-color: var(--color-text);
            -webkit-text-fill-color: transparent;   
        }
    }
`

export const PortfolioTitle = styled(motion.div)`
    text-decoration: none;
    color: var(--color-text);
    z-index: 20;

    h2 {
        font-family: ${SITE_CONFIG.fontFamilies.titles} !important;
    }
`

export const FloatingImage = styled(motion.div)`
    width: 250px;
    height: auto;
    pointer-events: none;
    display: none;
    

    @media ${SITE_CONFIG.media.small} {
        display: initial;
        width: 400px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
    
`

export const FloatingImageMobile = styled(motion.div)`
    width: 250px;
    height: auto;
    pointer-events: none;
    margin-bottom: 35px;

    @media ${SITE_CONFIG.media.small} {
        display: none;
    }
`