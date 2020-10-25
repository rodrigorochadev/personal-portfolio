import React, { useState } from 'react'

import { DesktopAboutFlex, AboutImgContainer, AboutImg, AboutText, AboutH2, AboutImgParallax } from '../../styles/components/aboutStyles'
import useMousePosition from '../../hooks/useMousePosition'
import usePageOfssetY from '../../hooks/usePageOffsetY'
import CustomCursor from '../CustomCursor'

export default (props) => {

    const {x, y} = useMousePosition()

    const offsetY = usePageOfssetY()
    
    const [hoverState, setHoverState] = useState(false)

    return (
        <DesktopAboutFlex 
            last={props.last}
            reverse={props.reverse} 
            onHoverStart={() => setHoverState(true)} 
            onHoverEnd={() => setHoverState(false)}
            // onMouseEnter={() => <CustomCursor color="red" />}
            // onMouseLeave={() => <CustomCursor />}
        >
            
                <AboutText style={{transform: `translateY(${offsetY * props.translateY[1]}px)`}}>
                    <AboutH2>{props.text}</AboutH2>
                </AboutText>
            
            <AboutImgParallax style={{transform: `translateY(-${offsetY * props.translateY[0]}px)`}}>
                <AboutImgContainer 
                    
                    animate={{
                        x: hoverState ? 0.5 * (-x/50): 0,
                        y: hoverState ? 0.5 * (-y/50) : 0,
                    }}

                    reverse={props.reverse}
                >
                    <AboutImg fluid={props.image} alt="Portrait" />
                </AboutImgContainer>
            </AboutImgParallax>
            
        </DesktopAboutFlex>
    )
}
