import React from 'react'
import { VerticalSpacing, Container } from '../../styles/componentsStyles'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/globalContext'
import { motion } from 'framer-motion'
import useWindowSize from '../../hooks/useWindowSize'

export default () => {

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
                        <>
                            <TalkTitle>Let's build something together!</TalkTitle>
                            <TalkMail 
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com
                            </TalkMail>
                        </>    
                    )}
                    
                </TalkContainer>
            </VerticalSpacing>
        </Container>
    )
}

export const TalkTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.details};
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