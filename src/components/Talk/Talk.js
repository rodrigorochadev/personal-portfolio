import React, { useEffect } from 'react'
import { VerticalSpacing, Container } from '../../styles/componentsStyles'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { motion, useAnimation } from 'framer-motion'
import useWindowSize from '../../hooks/useWindowSize'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../../animations'
import { MobileTalkTitle, TalkContainer, TalkMail, TalkTitle } from '../../styles/components/talkStyles'

export default () => {


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

    // Cursor

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const {width} = useWindowSize();

    return(
        <Container>
            <VerticalSpacing>
                <TalkContainer>
                    {width < 768 && (
                        <>
                        <MobileTalkTitle
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="mailto:rodrigorochaua@gmail.com">Let's build something together!
                        </MobileTalkTitle>
                        </>
                    )}
                    {width >= 768 && (
                        <motion.div
                            ref={contentRef}
                            animate={animation}
                            initial="hidden"
                            variants={divUp}
                        >
                            <TalkTitle>Let's build something together!</TalkTitle>
                            <TalkMail
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com
                            </TalkMail>
                        </motion.div>    
                    )}
                    
                </TalkContainer>
            </VerticalSpacing>
        </Container>
    )
}