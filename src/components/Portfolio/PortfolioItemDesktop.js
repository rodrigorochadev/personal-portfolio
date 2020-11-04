import React, { useEffect, useState } from 'react'
import Img from 'gatsby-image'
import { useAnimation } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../../animations'
import { FloatingImage, PortfolioContainerDesktop, PortfolioMargin, PortfolioName, PortfolioTitle } from '../../styles/components/portfolioStyles'

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

                    <div >
                        <PortfolioName>
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
                </PortfolioContainerDesktop>

        </PortfolioMargin>
    )
}