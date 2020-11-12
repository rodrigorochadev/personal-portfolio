import React from 'react'
import { PaddingContainer } from '../../styles/componentsStyles'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import useWindowSize from '../../hooks/useWindowSize'
import { MobileTalkTitle, TalkContainer, TalkMail, TalkTitle } from '../../styles/components/talkStyles'

export default () => {

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const {width} = useWindowSize();

    return(
        
            <PaddingContainer horizontal="10vw" vertical="200px">
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
            </PaddingContainer>
    )
}