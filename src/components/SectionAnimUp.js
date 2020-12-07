import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { variants } from '../animations'
import { DivMargin } from '../styles/componentsStyles'

export default (props) => {

    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: false,
        rootMargin: "-150px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [animation, inView])

    return(
        <DivMargin>
            <motion.div
                ref={contentRef}
                animate={animation}
                initial="hidden"
                variants={variants}
            >
                {props.children}
            </motion.div>
        </DivMargin>
    )
}