import React from 'react'
import usePageOfssetY from '../../hooks/usePageOffsetY';
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';

export default () => {

    const { width } = useWindowSize()
    const offsetY = usePageOfssetY()



    return(
        
        <>
            {width <= 768 && (
                <NewBannerContainer>
                    <NewBannerText >Ex<br/>plo<br/>re</NewBannerText>
                </NewBannerContainer>
            )}

            {width > 768 && (
                <NewBannerContainer>
                    <NewBannerText
                        //   textRight
                            outline
                            style={{
                                transition: '0.7s ease-out',
                                transform: `translate3d(-${offsetY * 1.3}px, 0, 0)`
                            }}
                        > Aim
                        </NewBannerText>
                        <NewBannerText
                        //   textLeft
                            outline
                            style={{
                                transition: '0.7s ease-out',
                                transform: `translate3d(${offsetY * 1.1}px, 0, 0)`
                            }}
                        > Higher
                        </NewBannerText>
                </NewBannerContainer>
            )}
        </>
        
    )
}