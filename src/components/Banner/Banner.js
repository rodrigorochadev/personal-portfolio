import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';
import { Container, Description, Flex } from '../../styles/componentsStyles';
import Scroll from '../Design/Scroll';

export default () => {

    const { width } = useWindowSize()
    
    return(
        <div>
            <Scroll />
            {width <= 768 && (
                <Container>
                    <NewBannerContainer>
                        <NewBannerText>Software&nbsp;</NewBannerText>
                            <NewBannerText outline>Developer&nbsp;</NewBannerText>
                        <Flex>
                            <NewBannerText>&amp;&amp;&nbsp;</NewBannerText>
                            <NewBannerText >UI/UX</NewBannerText>
                        </Flex>
                        <Flex>
                            <NewBannerText outline>Designer&nbsp;</NewBannerText>
                            <NewBannerText>;)</NewBannerText>
                        </Flex>
                    <div style={{position: "absolute", bottom: '20px', right: 0}}>
                        <Description>Scroll for more.</Description>
                    </div>
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
                        <NewBannerContainer>
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
                    </NewBannerContainer>
                </Container>
            )}
        </div> 
    )
}