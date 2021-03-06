import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { AccordionContent, AccordionHeader, AccordionIcon } from '../styles/components/accordionStyles'
import { Container, DivMargin, Flex } from '../styles/componentsStyles'
import { useGlobalStateContext, useGlobalDispatchContext } from '../context/globalContext'
import { variants } from '../animations'
import { useInView } from 'react-intersection-observer'

const accordionData = [
    {
        id: 0,
        title: 'Education',
        results: [
            'BSc in Computer and Telematics Engineering by University of Aveiro',
        ]
    },
    {
        id: 1,
        title: 'Development',
        results: [
            'HTML, CSS, JavaScript',
            'NodeJS',
            'React',
            'GatsbyJS',
            'NextJS',
            'Flutter',
            'Angular',
            'Framer Motion',
            'GSAP',
        ]
    },
    {
        id: 2,
        title: 'Design',
        results: [
            'Adobe Illustrator',
            'Adobe Photoshop',
            'Figma'
        ]
    }
]
export default () => {
   
    const animation = useAnimation()
    const [skillsRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-100px",
    })

    useEffect(() => {
        if (inView) {
        animation.start("visible")
        }
    }, [animation, inView])

    const [expanded, setExpanded] = useState(1); // Oppened Accordion


    return(
        <Container>
            <Flex alignRight>
            <DivMargin>
                <motion.div style={{maxWidth: '200px'}}
                    ref={skillsRef}
                    initial="hidden"
                    animate={animation}
                    variants={variants}
                >
                    <h3>Skills</h3>
                    {accordionData.map((details, index) => (
                        <Accordion 
                            key={index}
                            details={details}
                            expanded={expanded}
                            setExpanded={setExpanded}
                        />
                    ))}
                </motion.div>
            </DivMargin>
            </Flex>
            
        </Container>
    )
}

const Accordion = ({details, expanded, setExpanded}) => {

    const isOpen = details.id === expanded;
    const [hovered, setHovered] = useState(false);

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }
    
    return(
        <>
            <AccordionHeader
                onClick={() => setExpanded(isOpen ? false : details.id)}
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
            >
                <AccordionIcon>
                    <motion.span
                    transition={{duration: 0.2, ease: 'easeOut'}}
                    animate={{
                        rotate: isOpen || hovered ? 0 : 45,
                        x: 3
                    }}></motion.span>

                    <motion.span
                    transition={{duration: 0.2, ease: 'easeOut'}}
                    animate={{
                        rotate: isOpen || hovered ? 0 : -45,
                        x: -3
                    }}></motion.span>
                </AccordionIcon>
                {details.title}
            </AccordionHeader>
            <AccordionContent
            key='content'
            transition={{duration: 0.2, ease: 'easeOut'}}
            animate={{
                height: isOpen ? 'auto' : '0',

            }}>  
                {details.results.map((result, index) => (
                    <span key={index}>{result}</span>
                ))}
            </AccordionContent>
        </>
    )
}
