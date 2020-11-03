import React, {useState} from 'react'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'

import { DesktopAboutFlex, AboutImgContainer, AboutImg, AboutText, AboutH2, AboutImgParallax } from '../../styles/components/aboutStyles'
import useMousePosition from '../../hooks/useMousePosition'
import usePageOfssetY from '../../hooks/usePageOffsetY'

export default (props) => {

    const {x, y} = useMousePosition()

    const offsetY = usePageOfssetY()
    
    const [hoverState, setHoverState] = useState(false)

    return(
        <DesktopAboutFlex 
            // last={props.last}
            // reverse={props.reverse} 
            // onHoverStart={() => setHoverState(true)} 
            // onHoverEnd={() => setHoverState(false)}
            // onMouseEnter={() => <CustomCursor color="red" />}
            // onMouseLeave={() => <CustomCursor />}
        >
            <AboutText>
                <p>Winegrid is a company that does real time vinification monitoring.</p>
                <p>Monitoring the winemaking process manually is quite time and resource consuming. A late reaction and lose monitoring, leads to lower wine quality, and therefore revenue loss.</p>
                <p>Winegrid goal is to bring the digital to the cellar, providing producers with realtime, remote and reliable data of five main productions variables, available in an online dashboard.</p>
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

export const InfoDetails = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 4em;
`