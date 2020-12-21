import styled from 'styled-components'
import { motion } from 'framer-motion'
import { ANIMATIONS, rotation } from '../../animations'
import { SITE_CONFIG } from '../../constants'

export const Cursor = styled(motion.div)`

    @media ${SITE_CONFIG.media.small} {
        --size: 10px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: var(--size);
        height: var(--size);
        background: var(--color-text);
        
        
        border-radius: 100%;
        transform: translate3d(-50%, -50%, 0);
        
        transition: 0.25s ease;
        transition-property: width, height, border;
        will-change: width, height, transform, border;

        pointer-events: none;
        z-index: 999;

        &.banner {
            
            width: 150px !important;
            height: 150px !important;
            background: var(--color-background) !important;
            border: 2px solid var(--color-text) !important;
            border-radius: 100% !important;
            z-index: 999;


        }
        
        &.project {
            background: transparent !important;
            border: 3px solid green !important;
            height: 100px !important;
            width: 100px !important;
            background-color: transparent !important; 

            animation: ${rotation} 3s ${ANIMATIONS.easings.linear};
            animation-iteration-count: infinite;
            mix-blend-mode: difference;

            &::after {
                content: 'View Project';
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                text-align: center;
                height: 100%;
                color: white;
            }
        }

        &.hovered {
            background: transparent;
            border: 3px solid var(--color-accent);
            height: 50px;
            width: 50px;

        }
    }
`

export const CursorFollower = styled(motion.div)`

    @media ${SITE_CONFIG.media.small} {
        --size: 32px;
        position: absolute;
        top: 0px;
        left: 0px;
        width: var(--size);
        height: var(--size);
        border: 2px solid var(--color-accent);
        border-radius: 100%;
        transform: translate3d(-50%, -50%, 0);
        transition: top 0s ease, left 0s ease, 0.3s ease;

        pointer-events: none;
        z-index: 999;

        &.hovered, &.project, &.banner {
            border: 0px;
            background: transparent;
            height: 0px;
            width: 0px;

        }
    }
    

`
