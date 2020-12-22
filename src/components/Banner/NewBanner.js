import { motion } from 'framer-motion';
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { MobileBanerContainer, NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Container, Flex } from '../../styles/componentsStyles';
import {container, item} from '../../animations'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext';
import { DownArrow } from '../../assets/svg/svg';
import styled from 'styled-components';
// import useMousePosition from '../../hooks/useMousePosition';

export default () => {

    const { width } = useWindowSize()
    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return(
        <MobileBanerContainer>
            {/* <BannerWelcomeContainer>
                <BannerWelcome>WELCOME</BannerWelcome>
            </BannerWelcomeContainer> */}
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
                        transition={{delay: 1}}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        style={{position: 'absolute', right: '10vw', bottom: '75px'}}
                    >
                        <motion.div
                            
                            initial={{y: -50}}
                            animate={{y: 30}}
                            transition={{
                                repeat: Infinity,
                                repeatType: 'reverse',
                                duration: 1.5,
                            }}
                        >

                            <ArrowSVG>
                                <DownArrow />
                            </ArrowSVG>
                        </motion.div>
                        
                    </motion.div>
                </NewBannerContainer>
                
            )}
            
            {width > 768 && (
                <>
            
                    <NewBannerContainer>
                        <motion.div style={{position: 'absolute', bottom: '36px', zIndex: '60'}} 
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{delay: 1, duration: 1}}
                        >
                                <motion.div
                                
                                    initial={{y: -50}}
                                    animate={{
                                        y: 50,
                                    }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: 'reverse',
                                        duration: 1.5,
                                    }}
                                >

                                    <ArrowSVG>
                                        <DownArrow />
                                    </ArrowSVG>
                                </motion.div>
                        </motion.div>
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
                                    <NewBannerText>& UI/UX Designer</NewBannerText>
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
                                    <NewBannerText outline>& UI/UX Designer</NewBannerText>
                                </motion.div>
                            </div>
                        </motion.div>
                    </NewBannerContainer>

                </>
            )}
            </>
        </MobileBanerContainer>
    )
}

export const ArrowSVG = styled.div`
    svg {
        height: 100px;
        fill: var(--color-text);
    }
`