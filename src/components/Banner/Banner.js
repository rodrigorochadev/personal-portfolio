import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';

export default () => {

    const { width } = useWindowSize()
    
    return(
        
        <NewBannerContainer>
            {width <= 768 && (
                <>
                    <NewBannerText >Ex</NewBannerText>
                    <NewBannerText >plo</NewBannerText>
                    <NewBannerText >re</NewBannerText>
                </>
            )}

            {width > 768 && (
                <>
                    <NewBannerText outline>Aim</NewBannerText>
                    <NewBannerText outline>Higher</NewBannerText>    
                </>
            )}
        </NewBannerContainer>
        
    )
}