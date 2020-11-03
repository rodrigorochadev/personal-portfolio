import React, { useEffect, useState } from 'react'
import {SITE_CONFIG} from '../../constants'
import styled, { css } from 'styled-components'
import Img from 'gatsby-image'
import { motion, useAnimation } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'
import useWindowSize from '../../hooks/useWindowSize'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../../animations'

export default (props) => {


    // Animations
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px",
    })

    useEffect(() => {
        if (inView) {
        animation.start("visible")
        }
    }, [animation, inView])

    const {x, y} = useMousePosition()
    const [hoverState, setHoverState] = useState(false)
    const { width } = useWindowSize()

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return(
        <PortfolioMargin>
            {width <= 768 && (
                <PortfolioContainer>
                    <FloatingImageMobile>
                        <Img fluid={props.image} alt={props.name} />
                    </FloatingImageMobile>
                    <>
                        <PortfolioName>
                            <a href={props.url}>
                                <PortfolioTitle>
                                    <p>/{props.id}.</p>
                                    <h2>{props.name}</h2>
                                </PortfolioTitle>
                            </a>
                        </PortfolioName>

                        <PortfolioDescription>
                            <p>{props.description}</p>
                        </PortfolioDescription>

                        <a href={props.url}>Explore Project</a>
                    </>
                    
                </PortfolioContainer>
            )}

            {width > 768 && (
                <PortfolioContainer
                    last={props.last}    
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={divUp}
                >
                    <FloatingImage
                        initial={{opacity: 0}}
                        animate={{
                            display: hoverState ? 'initial' : 'none',
                            opacity: hoverState ? 1 : 0,
                            x: x - 380,
                            y: y - 200,
                        }}
                    >
                        <Img fluid={props.image} alt={props.name} />
                    </FloatingImage>

                    <div>
                        <PortfolioName 
                            >
                            <a href={props.url}>
                                <PortfolioTitle 
                                        onHoverStart={() => setHoverState(true)}
                                        onHoverEnd={() => setHoverState(false)}
                                        onMouseEnter={() => onCursor('project')}
                                        onMouseLeave={onCursor}
                                >
                                    <h2>{props.name}</h2>
                                </PortfolioTitle>
                            </a>
                        </PortfolioName>
                        <p style={{textAlign: "center", marginTop: '30px'}}>{props.tech}</p>
                    </div>
                </PortfolioContainer>
            )}
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
        font-size: 3.5rem;
    }
`

export const PortfolioDescription = styled.div`
    
    p {
        font-family: ${SITE_CONFIG.fontFamilies.regular};
    }
    

    @media ${SITE_CONFIG.media.small} {
        width: 70%;
    }
`

export const PortfolioContainer = styled(motion.div)`
    z-index: 20;
    display: flex;
    
    flex-direction: column;
    row-gap: 10px;

    width: 100%;
    min-height: 30vh;
    padding: 80px 0;

    transition: ${SITE_CONFIG.transitions.defautls};


    @media ${SITE_CONFIG.media.small} {
        flex-direction: row;
        align-items: center;
        justify-content: center;
        column-gap: 50px;
        border-top: 0.1px solid var(--color-text);  

        ${props => props.last && css`
            border-bottom: 0.1px solid var(--color-text);
        `}
    }

    h2 {
        &:hover {
            transition: all 0.3s ease;
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
        width: 500px;
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