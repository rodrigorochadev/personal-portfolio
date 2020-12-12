import { motion } from 'framer-motion';
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { BannerWelcome, BannerWelcomeContainer, MobileBanerContainer, NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Container, Flex } from '../../styles/componentsStyles';
import Scroll from '../Design/Scroll';

export default () => {

    const { width } = useWindowSize()

    const container = {
        initial: { opacity: 0, y: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    }

    const item = {
        initial: { rotate: 50, y: 800 },
        animate: {
            y: 0,
            rotate: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    }

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
                
                <div style={{position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                
                <Scroll />
                <Container>
                    <NewBannerContainer variants={container} initial="initial" animate="animate">
                        {/* <div style={{position: 'absolute', left: '-2px', bottom: '20px'}}>
                            <div style={{height: '3px', width: '15px', background: 'var(--color-accent)'}}></div>
                        </div> */}
                        <div style={{overflow: 'hidden', width: '100%'}}>
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
                        </div>
                    </NewBannerContainer>
                </Container>
                </div> 
            )}
        </MobileBanerContainer>
    )
}