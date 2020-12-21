import { motion } from "framer-motion";
import styled, { css } from "styled-components"
import {SITE_CONFIG} from '../../constants';

export const NewBannerContainer = styled(motion.div)`
    position: relative;
    display: flex;
    /* flex-direction: column; */
    min-height: 100vh;
    align-items: center;
    /* text-align: center; */
    overflow: hidden;
    
    
    @media ${SITE_CONFIG.media.small} {
        margin-left: 0px;    
        min-height: 100vh;
        justify-content: center;
        align-items: center;
        text-align: center;
        /* text-transform: uppercase; */
        /* padding: 0 10vw; */
    }
`

export const NewBannerText = styled(motion.h1)`
    
    transition: all 0.3s ease;
    text-decoration: none;
    text-shadow: none;
    color: var(--color-text);
    -webkit-text-stroke: 1px var(--color-text);

    ${props => props.outline && css`
        color: transparent;
        -webkit-text-stroke: 1px var(--color-text);
    `}

    line-height: 14vw;
    font-size: 12vw;

    @media screen and (min-width: 480px) {
        /* text-align: center; */
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
        -webkit-text-stroke: 1.5px var(--color-text);

        ${props => props.outline && css`
            color: transparent;
            -webkit-text-stroke: 1.5px var(--color-text);
        `}
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
        transform: rotate(90deg) translate(50%, -210%);
    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: 11rem;
        transform: rotate(90deg) translate(50%, -210%);
    } 

    ${props => props.winegrid && css`
        display: none;

        @media ${SITE_CONFIG.media.medium} {
            display: initial;
            transform: rotate(90deg) translate(55%, -150%);
        }

        @media ${SITE_CONFIG.media.xlarge} {
            transform: rotate(90deg) translate(60%, -150%);
        } 
    `}

    ${props => props.pfd && css`
        display: none;

        @media ${SITE_CONFIG.media.medium} {
            display: initial;
            transform: rotate(90deg) translate(55%, -210%);
        }

        @media ${SITE_CONFIG.media.xlarge} {
            transform: rotate(90deg) translate(60%, -220%);
        } 
    `}
`

export const BannerWelcome = styled.h2`
    -webkit-text-stroke: 2px var(--color-accent);
    -webkit-text-fill-color: transparent;
    font-size: 5rem;
    opacity: 40%;
    letter-spacing: 0.6rem;
    /* filter: drop-shadow(4px 2px 2px black); */

    @media ${SITE_CONFIG.media.medium} {
        font-size: 8.5rem;
        letter-spacing: 0.9rem;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: 10rem;
        letter-spacing: 1rem;
    } 
`