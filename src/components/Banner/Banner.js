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
        }
    }, [inView, offsetY])

    return(
        
        <>
            {width <= 768 && (
                <NewBannerContainer>
                    <NewBannerText >Ex<br/>plo<br/>re</NewBannerText>
                </NewBannerContainer>
            )}

            {width > 768 && (
                <NewBannerContainer>
                    <div ref={contentRef}>
                        <NewBannerText
                        //   textRight
                            outline
                            style={{
                                transition: '0.7s ease-out',
                                transform: inView ? `translate3d(-${offsetValue * 0.9}px, 0, 0)` : `translate3d(-${offsetValue}, 0, 0)`
                            }}
                        > Aim
                        </NewBannerText>
                        <NewBannerText
                        //   textLeft
                            outline
                            style={{
                                transition: '0.7s ease-out',
                                transform: inView ? `translate3d(${offsetValue * 0.9}px, 0, 0)` : `translate3d(${offsetValue}, 0, 0)`
                            }}
                        > Higher
                        </NewBannerText>
                    </div>
                </NewBannerContainer>
            )}
        </>
        
    )
}