import React, { useState } from 'react'
import Img from 'gatsby-image'
import { motion } from 'framer-motion'
import useMousePosition from '../../hooks/useMousePosition'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { FloatingImage, PortfolioContainerDesktop, PortfolioMargin, PortfolioName, PortfolioTitle } from '../../styles/components/portfolioStyles'

export default (props) => {


    // Animations
    // const animation = useAnimation()
    // const [contentRef, inView] = useInView({
    //     triggerOnce: true,
    //     rootMargin: "-300px",
    // })

    // useEffect(() => {
    //     if (inView) {
    //     animation.start("visible")
    //     }
    // }, [animation, inView])

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
                <motion.div
                    // ref={contentRef}
                    // animate={animation}
                    // initial="hidden"
                    // variants={divUp}
                >
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

                    <div >
                        <PortfolioName
                        onMouseLeave={onCursor}
                        >
                            <a href={props.url}>
                                <PortfolioTitle 
                                    onHoverStart={() => setHoverState(true)}
                                    onHoverEnd={() => setHoverState(false)}
                                    onMouseEnter={() => onCursor('project')}
                                        
                                >
                                    <h2>{props.name}</h2>
                                </PortfolioTitle>
                            </a>
                        </PortfolioName>
                        <p style={{textAlign: "center", marginTop: '30px'}}>{props.tech}</p>
                    </div>
                </PortfolioContainerDesktop>
                </motion.div>
        </PortfolioMargin>
    )
}