import { motion } from 'framer-motion';
import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Container, Description, Flex } from '../../styles/componentsStyles';
import Scroll from '../Design/Scroll';

export default () => {

    const { width } = useWindowSize()

    const container = {
        initial: { opacity: 0, y: 0 },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            },
        },
    }
    const item = {
        initial: { rotate: 20, y: 800 },
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
        <div>
            <Scroll />
            {width <= 768 && (
                <Container>
                    <NewBannerContainer variants={container} initial="initial" animate="animate">
                        <motion.div variants={item}>
                            <NewBannerText >Software&nbsp;</NewBannerText>
                        </motion.div>
                        <motion.div variants={item}>
                            <NewBannerText outline>Developer&nbsp;</NewBannerText>
                        </motion.div>
                        <motion.div variants={item}>
                            <NewBannerText >&amp;&amp;&nbsp;UI/UX</NewBannerText>
                        </motion.div>
                        <motion.div variants={item} >
                            <Flex alignCenter>
                                <NewBannerText outline>Designer&nbsp;</NewBannerText>
                                <NewBannerText>;)</NewBannerText>
                            </Flex>
                        </motion.div>
                    <motion.div variants={item} style={{position: "absolute", bottom: '80px', right: 0}}>
                        <Description>Scroll for more.</Description>
                    </motion.div>
                </NewBannerContainer>
            </Container>
                // <NewBannerContainer>
                //     <NewBannerText outline>EX</NewBannerText>
                //     <NewBannerText >PLO</NewBannerText>
                //     <Flex>
                //         <NewBannerText >RE</NewBannerText>
                //         <NewBannerText outline>.</NewBannerText>
                //     </Flex>
                // </NewBannerContainer>
            )}
            
            {width > 768 && (
                <Container>
                        <NewBannerContainer variants={container} initial="initial" animate="animate">
                        <motion.div variants={item}>
                            <Flex>
                                <NewBannerText>Software&nbsp;</NewBannerText>
                                <NewBannerText outline>Developer&nbsp;</NewBannerText>
                            </Flex>
                        </motion.div>
                        <motion.div variants={item}>
                            <Flex>
                                <NewBannerText>&amp;&amp;&nbsp;</NewBannerText>
                                <NewBannerText outline>Wannabe&nbsp;</NewBannerText>
                                <NewBannerText >UI/UX</NewBannerText>
                            </Flex>
                        </motion.div>
                        <motion.div variants={item}>
                            <Flex>
                                <NewBannerText outline>Designer&nbsp;</NewBannerText>
                                <NewBannerText>;)</NewBannerText>
                            </Flex>
                        </motion.div>
                    </NewBannerContainer>
                </Container>
            )}
        </div> 
    )
}