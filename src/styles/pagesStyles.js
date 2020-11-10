import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { SITE_CONFIG } from "../constants"


export const PageBannerContainer = styled(motion.div)`
       
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    min-height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

`


export const PageBannerText = styled(motion.h1)`

    
    text-transform: uppercase;
    color: var(--color-text);  

    ${props => props.outline && css`
        transition: all 0.1s ease-out;
        -webkit-transition: all 0.1s ease-out;
        -webkit-text-stroke: 2px;
        -webkit-text-stroke-color: var(--color-text); 
        -webkit-text-fill-color: transparent;
    `}

    line-height: 3.5rem;
    font-size: 15vw;

    @media ${SITE_CONFIG.media.small} {
        line-height: 5rem;
        font-size: 5rem;
    }

    @media ${SITE_CONFIG.media.medium} {
        line-height: 5rem;
        font-size: 5rem;
    }


    @media ${SITE_CONFIG.media.large} {
        line-height: 6rem;
        font-size: 6rem;
        
    }

    @media ${SITE_CONFIG.media.xlarge} {
        line-height: 7rem;
        text-transform: uppercase;
        font-size: 7rem;
    }

`