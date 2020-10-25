import React, {useState, useEffect} from 'react'
import { motion, useSpring, useTransform, useViewportScroll } from "framer-motion"
import styled from 'styled-components'
export default () => {

    const [isComplete, setIsComplete] = useState(false);
    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.98], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    useEffect(() => yRange.onChange(v => setIsComplete(v >= 1)), [yRange]);

    return (
        <>
            <Scrolled>
                <svg viewBox="0 0 60 60">
                    <motion.path
                    
                    d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                    style={{
                        pathLength,
                        rotate: 90,
                        translateX: 5,
                        translateY: 5,
                        scaleX: -1 // Reverse direction of line animation
                    }}
                    />
                    
                    <motion.path
                        d="M14,26 L 22,33 L 35,16"
                        initial={false}
                        animate={{ pathLength: isComplete ? 1 : 0 }}
                    />
                </svg>
            </Scrolled>
        </>
        
    )
}

export const Scrolled = styled.div`
    position: fixed;
    bottom: 20px;
    right: 20px;

    width: 70px;
    height: 70px;

    fill: none;
    stroke: var(--color-text);
    stroke-width: 4;
    stroke-dasharray: 0 1;
`