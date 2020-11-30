import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Flex } from '../../styles/componentsStyles';
import Scroll from '../Design/Scroll';

export default () => {

    const { width } = useWindowSize()
    
    return(
        <div>
            <Scroll bottom="20%" right="20%"/>
            <NewBannerContainer>
                {width <= 768 && (
                    <>
                        <NewBannerText >EX</NewBannerText>
                        <NewBannerText >PLO</NewBannerText>
                        <NewBannerText >RE</NewBannerText>
                    </>
                )}

                {width > 768 && (
                    <> 
                        <Flex>
                            <NewBannerText>Software&nbsp;</NewBannerText>
                            <NewBannerText outline>Developer&nbsp;</NewBannerText>
                        </Flex>
                        <Flex>
                            <NewBannerText>&amp;&amp;&nbsp;</NewBannerText>
                            <NewBannerText outline>Wannabe&nbsp;</NewBannerText>
                            <NewBannerText >UI/UX</NewBannerText>
                        </Flex>
                        <Flex>
                            <NewBannerText outline>Designer&nbsp;</NewBannerText>
                            <NewBannerText>;)</NewBannerText>
                        </Flex>
                    </>
                )}
            </NewBannerContainer>
        </div>
        
        
    )
}