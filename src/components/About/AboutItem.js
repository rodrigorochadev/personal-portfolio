import React, { useEffect, useState } from 'react'

import { DesktopAboutFlex, AboutImgContainer, AboutImg, AboutText, AboutH2, AboutImgParallax } from '../../styles/components/aboutStyles'
import useMousePosition from '../../hooks/useMousePosition'
import usePageOfssetY from '../../hooks/usePageOffsetY'
import { useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../../animations'

export default (props) => {

    const {x, y} = useMousePosition()

    const offsetY = usePageOfssetY()
    
    const [hoverState, setHoverState] = useState(false)

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

    return (
        <DesktopAboutFlex 
            last={props.last}
            reverse={props.reverse}

            ref={contentRef}
            animate={animation}
            initial="hidden"
            variants={divUp}
        >
            
                <AboutText style={{transform: `translateY(${offsetY * props.translateY[1]}px)`}}>
                    <AboutH2>{props.text}</AboutH2>
                </AboutText>
            
            <AboutImgParallax 
                style={{transform: `translateY(-${offsetY * props.translateY[0]}px)`}}
            >
                <AboutImgContainer 
                    // onHoverStart={() => setHoverState(true)} 
                    // onHoverEnd={() => setHoverState(false)}
                    animate={{
                        x: props.hoverState ? props.direction*0.5 * (x/50) : 0,
                        y: props.hoverState ? props.direction*0.5 * (y/50) : 0,
                    }}

                    reverse={props.reverse}
                >
                    <AboutImg translateX={props.reverse ? "translateX(150px)" : "translateX(-150px)"} fluid={props.image} alt="Portrait" />
                </AboutImgContainer>
            </AboutImgParallax>
            
        </DesktopAboutFlex>
    )
}
