import { motion } from "framer-motion";
import styled, { css } from "styled-components"
import {SITE_CONFIG} from '../../constants';

export const NewBannerContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    /* min-height: 100vh; */
    justify-content: center;
    text-align: center;
    overflow: hidden;
    
    @media ${SITE_CONFIG.media.small} {
        margin-left: 0px;    
        min-height: 100vh;
        justify-content: center;
        align-items: flex-start;
        /* padding: 0 10vw; */
    }
`

export const NewBannerText = styled(motion.h1)`
    
    transition: all 0.3s ease;
    text-decoration: none;
    text-shadow: none;
    color: var(--color-text);
    /* text-transform: uppercase; */
    
    /* font-family: ${SITE_CONFIG.fontFamilies.text.bold}; */
    
    ${props => props.outline && css`
        transition: all 0.1s ease-out;
        color: var(--color-background);
        -webkit-text-stroke: 1.5px var(--color-text);
        /* text-shadow:
            -1px -1px 0 var(--color-text),  
            1px -1px 0 var(--color-text),
            -1px  1px 0 var(--color-text),
            1px  1px 0 var(--color-text); */
    `}

    line-height: 14vw;
    font-size: 12vw;

    @media screen and (min-width: 480px) {
        text-align: center;
        line-height: 3rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }

    @media ${SITE_CONFIG.media.small} {
        line-height: 4rem;
        font-size: 3rem;
        /* letter-spacing: 0.2rem; */
    }

    @media ${SITE_CONFIG.media.medium} {
        line-height: 5rem;
        font-size: 4rem;
        /* letter-spacing: 0.3rem; */
    }

    @media ${SITE_CONFIG.media.large} {
        line-height: 6rem;
        font-size: 5rem;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        line-height: 7rem;
        font-size: 6rem;
    }

    @media ${SITE_CONFIG.media.xxlarge} {
        /* line-height: 8rem;
        font-size: 7rem; */
    }

`


// Mobile banner
export const MobileBanerContainer = styled.div`
    position: relative;
    min-height: 100vh;
`

export const BannerWelcomeContainer = styled.div`
    
    position: absolute;
    right: 0;
    transform: rotate(90deg) translate(60%, -200%);
	transform-origin: 0 0 100%;

    @media ${SITE_CONFIG.media.medium} {
        font-size: 10rem;
        transform: rotate(90deg) translate(45%, -210%);
    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: 11rem;
        transform: rotate(90deg) translate(50%, -210%);
    } 
`

export const BannerWelcome = styled.h2`
    -webkit-text-stroke: 2px var(--color-accent);
    -webkit-text-fill-color: transparent;
    font-size: 5rem;
    opacity: 40%;
    letter-spacing: 0.6rem;
    /* filter: drop-shadow(4px 2px 2px black); */

    @media ${SITE_CONFIG.media.medium} {
        font-size: 10rem;
        letter-spacing: 1.1rem;
    } 
`