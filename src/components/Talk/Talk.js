import React, { useEffect } from 'react'
import { VerticalSpacing, Container } from '../../styles/componentsStyles'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { motion, useAnimation } from 'framer-motion'
import useWindowSize from '../../hooks/useWindowSize'
import { useInView } from 'react-intersection-observer'
import { divUp } from '../../animations'

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
                        <TalkMail 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="mailto:rodrigorochaua@gmail.com">Let's build something together!
                        </TalkMail>
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

export const TalkTitle = styled(motion.div)`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-weight: 300;
    font-size: 13vw;

    @media ${SITE_CONFIG.media.small} {
        font-size: 3.5vw;
    }

`

export const TalkMail = styled(motion.a)`

    font-size: 15vw;
    font-family: ${SITE_CONFIG.fontFamilies.titles};

    @media ${SITE_CONFIG.media.small} {
        display: initial;
        font-size: 6vw;
        font-family: ${SITE_CONFIG.fontFamilies.titles};
        text-decoration: none;
    }
`

export const TalkContainer = styled.div`
    width: 100%;
    text-align: center;
    font-family: ${SITE_CONFIG.fontFamilies.titles};

`