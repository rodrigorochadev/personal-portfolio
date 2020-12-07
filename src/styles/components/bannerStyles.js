import { motion } from "framer-motion";
import styled, { css } from "styled-components"
import {SITE_CONFIG} from '../../constants';

export const NewBannerContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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

    font-family: ${SITE_CONFIG.fontFamilies.text.bold};
    
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
        line-height: 3rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }

    @media ${SITE_CONFIG.media.small} {
        line-height: 4rem;
        font-size: 3rem;
        letter-spacing: 0.2rem;
    }

    @media ${SITE_CONFIG.media.medium} {
        line-height: 5rem;
        font-size: 4rem;
        letter-spacing: 0.3rem;
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
        line-height: 8rem;
        font-size: 7rem;
    }

`