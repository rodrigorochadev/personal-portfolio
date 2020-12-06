import React from 'react'
import { Container, Description } from '../../styles/componentsStyles'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { motion } from 'framer-motion'
import { NewAboutContainerHeadline, NewAboutContainerText, NewAboutPadding } from '../../styles/components/newAboutStyles'
import AimHigher from '../AimHigher'

export default () => {

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    
    return(
        <Container>
            <NewAboutPadding>

                {/* <Flex about> */}
                    {/* <NewAboutImageContainer>
                        <NewSVGContainer
                            animate={{
                                rotate: 360,
                                transition: { duration: 5, ease: 'linear', repeat: 'Infinity' },
                            }} 
                        >
                            <NewSVG>
                                <AboutMeSVG />
                            </NewSVG>
                        </NewSVGContainer>
                            
                        <Img fluid={data.picture.childImageSharp.fluid} alt="My Portrait" />
                    </NewAboutImageContainer> */}
                    <NewAboutContainerText>
                        <NewAboutContainerHeadline>Hey! I'm Rodrigo Rocha, a software developer, with a passion for design. </NewAboutContainerHeadline>
                        <Description light>
                            I was born in Figueira da Foz, Portugal, October 4th, 1994, where I lived and studied until I went to college. I attended University of Aveiro, where I've graduated with an BSc in Computer and Telematics Engineering. Following that, I had my first professional experience working as a software developer for Altice Labs.<br />
                            Even tough my degree is mostly focused on computer science and telecomunications, what I trully love to do, is to design and develop software. Mainly, websites and mobile applications. I'm eager to improve and learn something new every day. 
                        </Description>
                        <Description alignRight marginTop>
                            &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            rel="noreferrer" target="_blank"
                            href="/cv/rodrigo-rocha-cv.pdf">See my CV here</motion.a>
                        </Description>
                        
                    </NewAboutContainerText>
                    <AimHigher />
                {/* </Flex> */}
            </NewAboutPadding>
                
        </Container>
        
        
    )

}