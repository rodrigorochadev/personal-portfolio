import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import usePageOfssetY from '../../hooks/usePageOffsetY';
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';

export default () => {

    const { width } = useWindowSize()
    const offsetY = usePageOfssetY()

    const [contentRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "300px",
    })

    const [offsetValue, setOffsetValue] = useState(0);

    useEffect(() => {
        if(inView) {
            setOffsetValue(offsetY);
            console.log("this", offsetValue)
        }
    }, [inView, offsetY])

    return(
        
        <NewBannerContainer>
            {width <= 768 && (
                <NewBannerText >Ex<br/>plo<br/>re</NewBannerText>
            )}

            {width > 768 && (
                
                // <NewBannerText >Stand up <em>&</em><br/>Aim Higher</NewBannerText>
                
                <motion.div
                    ref={contentRef}
                    style={{display: 'flex', width: '50%', justifyContent: 'space-evenly'}}>
                    <div style={{position: "absolute", top: 0, minHeight: '100vh', display: 'flex', flexDirection:'column', alignItems: 'center', justifyContent: 'center'}}>
                        <NewBannerText
                          textRight
                            style={{
                                transition: 'all 0.2s ease-out',
                                opacity: 1, 
                                textAlign: 'center',
                                transform: inView ? `translate3d(-${offsetValue * 0.9}px, 0, 0)` : `translate3d(-${offsetValue}, 0, 0)`
                            }} outline>Less is</NewBannerText>
                        <NewBannerText
                          textLeft
                            style={{
                                transition: 'all 0.2s ease-out',
                                opacity: 1, 
                                textAlign: 'center',
                                transform: inView ? `translate3d(${offsetValue * 0.9}px, 0, 0)` : `translate3d(${offsetValue}, 0, 0)`
                            }} outline>More</NewBannerText>
                    </div>
{/* 
                    <NewBannerText scaleUp style={{transition: 'all 0.2s linear', transform: `translate3d(${offsetY * 1.5}px, 0, 0)`}}>-</NewBannerText>
                    <NewBannerText scaleUp style={{transition: 'all 0.2s linear'}} outline>=</NewBannerText>
                    <NewBannerText scaleUp style={{transition: 'all 0.2s linear', transform: `translate3d(-${offsetY * 1.5}px, 0, 0)`}}>+</NewBannerText>
*/}
                </motion.div>
            )}
        </NewBannerContainer>
    )
}