import { motion } from 'framer-motion';
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Container, Flex } from '../../styles/componentsStyles';
import {container, item} from '../../animations'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext';
// import useMousePosition from '../../hooks/useMousePosition';

export default () => {

    const { width } = useWindowSize()
    // const {x, y} = useMousePosition()
    // const [hoverState, setHoverState] = useState(false)

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return(
        // <MobileBanerContainer>
        //     <BannerWelcomeContainer>
        //         <BannerWelcome>WELCOME</BannerWelcome>
        //     </BannerWelcomeContainer>
            <>
            {width <= 768 && (
                <NewBannerContainer
                    variants={container} initial="initial" animate="animate"
                >
                    <Container>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText>Software</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText outline>Developer</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div variants={item}>
                                <NewBannerText>& UI/UX</NewBannerText>
                            </motion.div>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText outline>Designer</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div>
                    </Container>
                    <motion.div 
                        variants={item}
                        style={{position: 'absolute', left: '10vw', bottom: '75px'}}
                    >
                        <p>Scroll for more.</p>
                        
                    </motion.div>
                </NewBannerContainer>
                
            )}
            
            {width > 768 && (
                <>
                <div style={{position: 'absolute', bottom: '36px', left: 0, zIndex: '60'}}>
                    <Container>
                        <p>Scroll for more.</p>
                    </Container>
                </div>

                    <NewBannerContainer>
                        <motion.div 
                            style={{position: 'absolute'}} 
                            variants={container} 
                            initial="initial" 
                            animate="animate"
                        >
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText>Software Developer</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText>& UI/UX Designer.</NewBannerText>
                                </motion.div>
                            </div>
                        </motion.div>
                        
                        <motion.div
                            onMouseEnter={() => onCursor('banner')}
                            onMouseLeave={onCursor}
                            variants={container} initial="initial" animate="animate"
                            style={{position: 'absolute', zIndex: 999, padding: '50px'}}
                            // onMouseEnter={() => onCursor('banner')}
                            // onMouseLeave={onCursor}
                        >
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText outline>Software&nbsp;Developer</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%'}}> 
                            {/*  paddingLeft: '10em' */}
                                <motion.div variants={item}>
                                    <NewBannerText outline>& UI/UX Designer.</NewBannerText>
                                </motion.div>
                            </div>
                        </motion.div>
                    </NewBannerContainer>

                </>
            )}
            </>
        // </MobileBanerContainer>
    )
}