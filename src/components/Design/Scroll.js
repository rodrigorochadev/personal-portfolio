import { motion } from 'framer-motion'
import React, { useState } from 'react'
import useMousePosition from '../../hooks/useMousePosition'
import { Scroll4MoreContainer } from '../../styles/componentsStyles'
import { ScrollMoreSVG } from '../../assets/svg/svg'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'

export default (props) => {

    const {x, y} = useMousePosition()
    const [hoverState, setHoverState] = useState(true)

    return (
        <ScrollForMoreAbsolute
            onHoverStart={() => setHoverState(true)}
            onHoverEnd={() => setHoverState(false)}
        >
            <Scroll4MoreContainer
                animate={{
                    transition: { duration: 1, ease: 'easeOut' },
                    x: hoverState ? x/7 : 0,
                    y: hoverState ? y/7 : 0,
                }}
            >
                <ScrollAnimate
                    animate={{
                        rotate: 360,
                        transition: { duration: 5, ease: 'linear', repeat: 'Infinity' },
                    }}    
                >
                    <ScrollSVG>
                        <ScrollMoreSVG />
                    </ScrollSVG>
                </ScrollAnimate>
            </Scroll4MoreContainer>
        </ScrollForMoreAbsolute>
    )
}

export const ScrollForMoreAbsolute = styled(motion.div)`

    /* display: none; */
    position: absolute;
    padding: 0 10vw;
    z-index: 90;
    top: 0;
    height: 100vh;
    width: 100%;
`

export const ScrollAnimate = styled(motion.div)`

`

export const ScrollSVG = styled.div`
    svg {
        transition: all 0.2s ease-out;
        fill: var(--color-text);

        @media ${SITE_CONFIG.media.small} {
            width: 140px;
        }

        @media ${SITE_CONFIG.media.medium} {
            width: 180px;
        }
    }
`