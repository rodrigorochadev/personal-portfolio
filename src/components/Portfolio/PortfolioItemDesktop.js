import React, { useState } from 'react'
import Img from 'gatsby-image'
import useMousePosition from '../../hooks/useMousePosition'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { FloatingImage, PortfolioContainerDesktop, PortfolioMargin, PortfolioTitle } from '../../styles/components/portfolioStyles'

export default (props) => {

    const {x, y} = useMousePosition()
    const [hoverState, setHoverState] = useState(false)

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return(
        <PortfolioMargin>
            <PortfolioContainerDesktop
                last={props.last}
                first={props.first}
            >
                <FloatingImage
                    initial={{opacity: 0}}
                    animate={{
                        transition: { duration: 0.5, ease: 'easeOut' },
                        display: hoverState ? 'initial' : 'none',
                        opacity: hoverState ? 1 : 0,
                        x: x - 380,
                        y: y - 200,
                    }}
                >
                    <Img fluid={props.image} alt={props.name} />
                </FloatingImage>

                <div>
                    
                    <PortfolioTitle 
                        onHoverStart={() => setHoverState(true)}
                        onHoverEnd={() => setHoverState(false)}
                        onMouseEnter={() => onCursor('project')}
                        onMouseLeave={onCursor}
                    >
                        <a href={props.url}>
                            <h2>{props.name}</h2>
                        </a>
                    </PortfolioTitle>
                    <p style={{textAlign: "center", marginTop: '30px'}}>{props.tech}</p>
                </div>
            </PortfolioContainerDesktop>
        </PortfolioMargin>
    )
}