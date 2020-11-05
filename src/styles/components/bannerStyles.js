import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { textRight, textLeft, scaleUp } from "../../animations";
import {SITE_CONFIG} from '../../constants';

export const NewBannerContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 99vh;
    justify-content: flex-end;
    margin-left: -15px; 
    
    font-family: ${SITE_CONFIG.fontFamilies.titles};

    @media ${SITE_CONFIG.media.small} {
        margin-left: 0px;    
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    /* @media ${SITE_CONFIG.media.medium} {
        margin-left: -30px;
        min-height: 103vh;
    } */

    /* @media ${SITE_CONFIG.media.large} {
        
    }

    @media ${SITE_CONFIG.media.xlarge} {
        
    } */

`

export const NewBannerText = styled(motion.h1)`

    
    text-transform: uppercase;
    color: var(--color-text);

    /* ${props => props.textRight && css`
            animation: ${textRight} 0.7s ease-out;
        `
    }
    
    ${props => props.textLeft && css`
            animation: ${textLeft} 0.7s ease-out;
        `
    }

    ${props => props.scaleUp && css`
            animation: ${scaleUp} 0.7s linear;
        `
    } */

    

    ${props => props.outline && css`
        transition: ${SITE_CONFIG.transitions.default};
        -webkit-transition: ${SITE_CONFIG.transitions.default};
        -webkit-text-stroke: 3px;
        -webkit-text-stroke-color: var(--color-text); 
        -webkit-text-fill-color: var(--color-background);
    `}

    line-height: 6.5rem;
    font-size: 8rem;

    @media screen and (min-width: 28.125em) {
        line-height: 8rem;
        font-size: 9rem;    
    }

    @media ${SITE_CONFIG.media.small} {
        line-height: 6.5rem;
        font-size: 7.5rem;
    }

    @media ${SITE_CONFIG.media.medium} {
        line-height: 8rem;
        font-size: 8rem;
    }


    @media ${SITE_CONFIG.media.large} {
        line-height: 9rem;
        font-size: 10rem;
        
    }

    @media ${SITE_CONFIG.media.xlarge} {
        line-height: 9rem;
        text-transform: uppercase;
        font-size: 11rem;
    }

`