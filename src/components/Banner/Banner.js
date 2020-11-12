import React from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import { NewBannerContainer, NewBannerText } from '../../styles/components/bannerStyles';

export default () => {

    const { width } = useWindowSize()
    // const offsetY = usePageOfssetY()

    // const {x, y} = useMousePosition()
    // const [freeMove, setfreeMove] = useState(true)
    
    // let elemRef = useRef()
    

    // const [contentRef, inView] = useInView({
    //     triggerOnce: false,
    //     rootMargin: "72px",
    // })
    return(
        
        <>
            {width <= 768 && (
                <NewBannerContainer>
                    <NewBannerText >Ex<br/>plo<br/>re</NewBannerText>
                </NewBannerContainer>
            )}

            {width > 768 && (
                <NewBannerContainer>
                    <NewBannerText>Aim</NewBannerText>
                    <NewBannerText>Higher</NewBannerText>    
                </NewBannerContainer>
            )}
        </>
        
    )
}