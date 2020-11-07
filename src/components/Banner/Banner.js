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
                <NewBannerContainer
                    // onMouseEnter={() => setfreeMove(true)} 
                    // onMouseLeave={() => setfreeMove(false)}
                    // ref={contentRef}
                     
                >
                    <NewBannerText
                        initial={{opacity: 0, y:50}}
                        animate={{
                            transition: {ease: "easeOut"},
                            opacity: 1,
                            y: 0
                        }}
                    >Aim</NewBannerText>
                    <NewBannerText 
                        initial={{opacity: 0, y:50}}
                        animate={{
                            transition: {delay: 0.1, ease: "easeOut"},
                            opacity: 1,
                            y: 0
                        }}
                    >Higher</NewBannerText>
                    {/* <NewBannerText
                        initial={{opacity: 0}}
                        animate={{
                            transition: { duration: 0.5, ease: 'easeOut' },
                            x: -100,
                            opacity: 1
                        }}
                            
                            outline
                            
                        > Software
                        </NewBannerText>
                        <NewBannerText
                            initial={{opacity: 0}}
                            animate={{
                                transition: { duration: 0.5, ease: 'easeOut' },
                                x: 60,
                                opacity: 1
                            }}
                        > Developer
                        </NewBannerText>
                        <div style={{display: 'flex', columnGap: '30px'}}>
                            <NewBannerText
                            initial={{opacity: 0}}
                            animate={{
                                transition: { duration: 0.5, ease: 'easeOut' },
                                opacity: 1,
                                x: -60,
                            }}>From</NewBannerText>
                            <NewBannerText 
                            initial={{opacity: 0}}
                            animate={{
                                transition: { duration: 0.5, ease: 'easeOut' },
                                x: -50,
                                opacity: 1
                            }}
                            outline>Portugal</NewBannerText>
                        </div> */}
                        
                </NewBannerContainer>
            )}
        </>
        
    )
}