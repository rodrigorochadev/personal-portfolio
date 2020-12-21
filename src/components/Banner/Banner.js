import { motion } from 'framer-motion';
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import usePageOfssetY from '../../hooks/usePageOffsetY';
import { BannerWelcome, BannerWelcomeContainer, MobileBanerContainer, NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Container, Flex } from '../../styles/componentsStyles';
import Scroll from '../DesignUtils/Scroll';
import {container, item} from '../../animations'

export default () => {

    const { width } = useWindowSize()
    const offsetY = usePageOfssetY();

    return(
        <MobileBanerContainer>
            <BannerWelcomeContainer>
                <BannerWelcome>WELCOME</BannerWelcome>
            </BannerWelcomeContainer>
            {width <= 768 && (
                <motion.div 
                    variants={container} initial="initial" animate="animate"
                    style={{position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                    <Container>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText >Software</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div>
                        <div style={{overflow: 'hidden'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText outline>&amp;&amp;&nbsp;</NewBannerText>
                                    <NewBannerText>UI/UX</NewBannerText>
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
                </motion.div>
                
            )}
            
            {width > 768 && (
                <>
                <div style={{position: 'absolute', bottom: '36px', left: 0, zIndex: '60'}}>
                    <Container>
                        <p>Scroll for more.</p>
                    </Container>
                </div>

                <div style={{position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center'}}>
                
                {/* <Scroll /> */}
                <Container>
                    <NewBannerContainer style={{}} variants={container} initial="initial" animate="animate">
                        {/* <div style={{position: 'absolute', left: '-2px', bottom: '20px'}}>
                            <div style={{height: '3px', width: '15px', background: 'var(--color-accent)'}}></div>
                        </div> */}
                        <div style={{position: 'absolute'}}>
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText>Software&nbsp;</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%', paddingLeft: '10em'}}>
                                <motion.div variants={item}>
                                    <NewBannerText>Developer</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText>and&nbsp;UI/UX</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%', paddingLeft: '10em'}}>
                                <motion.div variants={item}>
                                    <NewBannerText>Designer</NewBannerText>
                                </motion.div>
                            </div>
                        </div>
                        <motion.div style={{position: 'absolute', bottom: 0, right: 0, background: 'var(--color-background)', height: '100%', width: '25vw'}}
                            initial={{x: '-100px', rotate: '-35deg'}}
                            animate={{x: -offsetY}}
                            transition={{ease: 'linear'}}
                        >

                        </motion.div>
                        <div style={{position: 'absolute'}}>
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText outline>Software&nbsp;</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%', paddingLeft: '10em'}}>
                                <motion.div variants={item}>
                                    <NewBannerText outline>Developer</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%'}}>
                                <motion.div variants={item}>
                                    <NewBannerText outline>and&nbsp;UI/UX</NewBannerText>
                                </motion.div>
                            </div>
                            <div style={{overflow: 'hidden', width: '100%', paddingLeft: '10em'}}>
                                <motion.div variants={item}>
                                    <NewBannerText outline>Designer</NewBannerText>
                                </motion.div>
                            </div>
                        </div>
                        {/* <div style={{overflow: 'hidden', width: '100%'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText>Software&nbsp;</NewBannerText>
                                    <NewBannerText outline>Developer&nbsp;</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div>
                        <div style={{overflow: 'hidden', width: '100%'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText>&amp;&amp;&nbsp;</NewBannerText>
                                    <NewBannerText outline>Wannabe&nbsp;</NewBannerText>
                                    <NewBannerText >UI/UX</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div>
                        <div style={{overflow: 'hidden', width: '100%'}}>
                            <motion.div variants={item}>
                                <Flex>
                                    <NewBannerText outline>Designer&nbsp;</NewBannerText>
                                    <NewBannerText>;)</NewBannerText>
                                </Flex>
                            </motion.div>
                        </div> */}
                    </NewBannerContainer>
                </Container>
                </div> 

                </>
            )}

        </MobileBanerContainer>
    )
}