import React from 'react'

import { DesktopAboutFlex, AboutImgContainer, AboutImg, AboutTextContainer, AboutText, AboutImgParallax } from '../../styles/components/aboutStyles'
import useMousePosition from '../../hooks/useMousePosition'
import usePageOfssetY from '../../hooks/usePageOffsetY'

export default (props) => {

    const {x, y} = useMousePosition()

    const offsetY = usePageOfssetY()
    
    return (
        <DesktopAboutFlex 
            last={props.last}
            reverse={props.reverse}
        >
            <AboutTextContainer style={{transform: `translateY(${offsetY * props.translateY[1]}px)`}}>
                <AboutText>{props.text}</AboutText>
            </AboutTextContainer>
            
            <AboutImgParallax 
                style={{transform: `translateY(-${offsetY * props.translateY[0]}px)`}}
            >
                <AboutImgContainer
                    animate={{
                        transition: { duration: 0.5, ease: 'easeOut' },
                        x: props.hoverState ? props.direction*0.5 * (x/10) : 0,
                        y: props.hoverState ? props.direction*0.5 * (y/10) : 0,
                    }}

                    reverse={props.reverse}
                >
                    <AboutImg translateX={props.reverse ? "translateX(150px)" : "translateX(-150px)"} fluid={props.image} alt={props.altImg} lessZoom={props.lessZoom} />
                </AboutImgContainer>
            </AboutImgParallax>
        </DesktopAboutFlex>
    )
}
