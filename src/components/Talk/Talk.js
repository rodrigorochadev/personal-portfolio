import React, { useEffect } from 'react'
import { Description, InfoContainer } from '../../styles/componentsStyles'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { ProjectSubTitle } from '../../styles/pagesStyles'
import { motion, useAnimation } from 'framer-motion'
import { variants } from '../../animations'
import { useInView } from 'react-intersection-observer'

export default () => {

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const animation = useAnimation()
    const [talkRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-100px",
    })

    useEffect(() => {
        if (inView) {
        animation.start("visible")
        }
    }, [animation, inView])

    return(
        <motion.div
            ref={talkRef}
            initial="hidden"
            animate={animation}
            variants={variants}
        >
            <ProjectSubTitle>Let's build something together!</ProjectSubTitle>
            <InfoContainer>
                <Description>Send me an e-mail at
                    &nbsp;<motion.a 
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com</motion.a>
                    , or find me at my social medias below.
                </Description>
            </InfoContainer>
        </motion.div>
    )
}