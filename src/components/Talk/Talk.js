import React from 'react'
import { VerticalSpacing, Container } from '../../styles/componentsStyles'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/globalContext'
import { motion } from 'framer-motion'

export default () => {

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    return(
        <Container>
            <VerticalSpacing>
                <TalkContainer>
                    <TalkTitle>Let's build something together!</TalkTitle>
                    <TalkMail 
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com</TalkMail>
                </TalkContainer>
            </VerticalSpacing>
        </Container>
    )
}

export const TalkTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.details};
    font-weight: 300;
    font-size: 2rem;

    @media ${SITE_CONFIG.media.small} {
        font-size: 3.5vw;
    }

`

export const TalkMail = styled(motion.a)`
    font-size: 1.5rem;
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    text-decoration: none;

    @media ${SITE_CONFIG.media.small} {
        font-size: 6vw;
    }
`

export const TalkContainer = styled.div`
    width: 100%;
    
    font-family: ${SITE_CONFIG.fontFamilies.titles};

    @media ${SITE_CONFIG.media.small} {
        text-align: center;
    }
`