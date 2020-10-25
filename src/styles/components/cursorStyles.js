import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

export const Cursor = styled(motion.div)`
    --size: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: var(--size);
    height: var(--size);
    background: var(--color-text);
    
    
    border-radius: 100%;
    transform: translate3d(-50%, -50%, 0);


    
    transition: 0.25s ease;;
    transition-property: width, height, border;
    will-change: width, height, transform, border;

    pointer-events: none;
    z-index: 999;

    &.pointer {
        /* transition: 0s ease; */
    }
    
    &.hovered {
        /* background: transparent;
        border: 3px solid var(--color-accent);
        height: 50px;
        width: 50px; */
        background: transparent;
        border: 3px solid var(--color-accent);
        height: 50px;
        width: 50px;
        
    }
`

export const CursorFollower = styled(motion.div)`
    --size: 32px;
    position: absolute;
    top: 0px;
    left: 0px;
    width: var(--size);
    height: var(--size);
    border: 2px solid var(--color-accent);
    border-radius: 100%;
    transform: translate3d(-50%, -50%, 0);
    transition: top 0s ease, left 0s ease, 0.25s ease;

    pointer-events: none;
    z-index: 999;

    &.hovered {
        
        border: 0px;
        background: transparent;
        height: 0px;
        width: 0px;

    }

`
