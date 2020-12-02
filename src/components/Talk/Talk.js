import React from 'react'
import { Description, InfoContainer } from '../../styles/componentsStyles'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { ProjectSubTitle } from '../../styles/pagesStyles'
import { motion } from 'framer-motion'

export default () => {

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return(
        <div>
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
        </div>
            // <PaddingContainer horizontal="10vw" vertical="200px">
            //     <TalkContainer>
            //         {width < 768 && (
            //             <>
            //             <MobileTalkTitle
            //                 onMouseEnter={() => onCursor('hovered')}
            //                 onMouseLeave={onCursor}
            //                 href="mailto:rodrigorochaua@gmail.com">Let's build something together!
            //             </MobileTalkTitle>
            //             </>
            //         )}
            //         {width >= 768 && (
            //             <>
            //                 <TalkTitle>Let's build something together!</TalkTitle>
            //                 <TalkMail
            //                     onMouseEnter={() => onCursor('hovered')}
            //                     onMouseLeave={onCursor}
            //                     href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com
            //                 </TalkMail>  
            //             </>
            //         )}
                    
            //     </TalkContainer>
            // </PaddingContainer>
    )
}