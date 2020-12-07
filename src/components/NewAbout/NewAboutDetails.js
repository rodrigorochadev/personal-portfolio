import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from '../../animations'
import { AboutMeSVG } from '../../assets/svg/svg'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'
import { NewAboutContainerText } from '../../styles/components/newAboutStyles'
import { Description, DescriptionHighlight, Flex, NewSVG, NewSVGContainer } from '../../styles/componentsStyles'

export default () => {

    const animation = useAnimation()
    const [aboutDetailsRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-150px",
    })

    useEffect(() => {
        if (inView) {
        animation.start("visible")
        }
    }, [animation, inView])

    const dispatch = useGlobalDispatchContext()
    const { cursorStyles } = useGlobalStateContext()
  
    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    return(
        <Flex alignRight>
            <NewAboutContainerText 
                ref={aboutDetailsRef}
                animate={animation}
                initial="hidden"
                variants={variants}
                smaller
            >
                <div style={{position: 'absolute', left: '-30px', top: '-20px'}}>
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
                </div>
                <DescriptionHighlight>
                    I was born in Figueira da Foz, where I lived and studied, until I went to college, in Aveiro.
                </DescriptionHighlight>
                <Description light>
                    There, I've graduated with a bachelors degree in Computer and Telematics Engineering, and had my first professional experience, working as a software developer for Altice Labs.
                    I trully love to design and develop, websites and mobile applications. I'm eager to improve and learn something new every day. 
                </Description>
                <Description alignRight marginTop>
                    &nbsp;<motion.a 
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    rel="noreferrer" target="_blank"
                    href="/cv/rodrigo-rocha-cv.pdf">See my CV here</motion.a>
                </Description>
            </NewAboutContainerText>
        </Flex>
    )
}