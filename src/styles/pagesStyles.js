import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { SITE_CONFIG } from "../constants"
import Img from 'gatsby-image'
import { textUpContainer } from "./components/transitionStyles"

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
    overflow: hidden;
    animation: ${textUpContainer} 1s linear;
    animation-delay: 0.5s;
    animation-fill-mode: backwards;
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

    line-height: 1.2rem;
    font-size: 1.5rem;

    @media screen and (min-width: 320px) {
        line-height: 1.6rem;
        font-size: 1.9rem;
    }

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


export const MoreDetails = styled.div`
    margin: 75px 0 30px;

    @media ${SITE_CONFIG.media.small} {
        margin: 200px 0 75px;
    }
`

export const DesignFlex = styled.div`
    margin: 100px 0;

    display: flex;
    flex-direction: column;
    row-gap: 50px;
    justify-content: space-between;

    @media ${SITE_CONFIG.media.small} {
        margin: 200px 0;
        flex-direction: row;
        column-gap: 50px;
    }
`

export const InfoText = styled.div`
    z-index: 2;
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 80%;
    }

    /* @media ${SITE_CONFIG.media.medium} {
        width: 80%;
    } */

    @media ${SITE_CONFIG.media.large} {
        /* width: 70%; */

        p {
            line-height: 2.2rem;
        }
    }

    /* @media ${SITE_CONFIG.media.xlarge} {
        width: 80%;
    } */
`

export const InfoProject = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-transform: uppercase;
        /* font-family: ${SITE_CONFIG.fontFamilies.titles}; */
        font-size: 7em;
    }
    
`

export const ColorFlex = styled.div`
    display: flex;
    column-gap: 30px;
`

export const InfoFlex = styled.div`
    display: flex;
    margin-bottom: 100px;

`

export const InfoTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 3em;

    @media ${SITE_CONFIG.media.small} {
        font-size: 5em;
    }

    @media ${SITE_CONFIG.media.medium} {
        font-size: 6em;
    }
`

export const ColorDiv = styled.div`

    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid var(--color-text);
`

export const DesignChoicesText = styled.div`
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0.8;

    ${props => props.margin && css`
        margin-bottom: 30px;
    `}
`

export const DesignChoicesFont = styled.div`
    font-size: 2rem;
`
export const LastMockupFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0;
    row-gap: 80px;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
        column-gap: 30px;
    }
`


export const MockupImg = styled(Img)`

    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 600px;
    }
    
`

export const TechnologiesFlex = styled.div`
    display: flex;
    column-gap: 30px;
`