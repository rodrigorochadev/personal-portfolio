import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { SITE_CONFIG } from "../constants"
import Img from 'gatsby-image'

export const PageBannerContainer = styled(motion.div)`
       
    font-family: ${SITE_CONFIG.fontFamilies.text.bold};
    position: relative;
    display: flex;
    flex-direction: column;
    row-gap: 25px;
    min-height: 100vh;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    /* overflow: hidden; */

`


export const PageBannerText = styled(motion.h1)`

    
    transition: all 0.3s ease;
    text-decoration: none;
    text-shadow: none;
    color: var(--color-text);
    font-family: ${SITE_CONFIG.fontFamilies.text.bold};
    
    ${props => props.outline && css`
        transition: all 0.1s ease-out;
        color: var(--color-background);
        text-shadow:
            -1px -1px 0 var(--color-text),  
            1px -1px 0 var(--color-text),
            -1px  1px 0 var(--color-text),
            1px  1px 0 var(--color-text);
    `}

    /* line-height: 1.2rem;
    font-size: 2.2rem; */
    font-size: 14vw;
    line-height: 11vw;

    @media screen and (min-width: 480px) {
        line-height: 3rem;
        font-size: 4rem;
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
        font-size: 7rem;
    }

`


export const MoreDetails = styled.div`
    margin: 75px 0 30px;

    @media ${SITE_CONFIG.media.small} {
        margin: 200px 0 75px;
    }
`

export const LastMockupFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    row-gap: 80px;
    column-gap: 30px;

    flex-wrap: wrap;

    ${props => props.justifyLeft && css`
        justify-content: left;
    `}
`

export const CustomImg = styled(Img)`
    
    width: 100%;
    
    ${props => props.width && css`
        width: ${props => props.width};
    `}

    ${props => props.shaddow && css`        
        filter: drop-shadow(2px 2px 2px #222);
    `}

    @media ${SITE_CONFIG.media.small} {
        
        width: ${props => props.maxWidth};
    } 
`

export const TypeImg = styled(Img)`

    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        min-width: 250px;
        width: 600px;
    } 
`

export const ProjectSubTitle = styled.h2`

    @media ${SITE_CONFIG.media.small} {
        font-size: 2.1rem;
    }

    @media ${SITE_CONFIG.media.medium} {
        font-size: 2.3rem;
    }

    @media ${SITE_CONFIG.media.large} {
        font-size: 2.5rem;
    }
`

export const ProjectInfoTableFlex = styled.div` 
    display: flex;
    justify-content: flex-end;
    align-items: center;
`

export const ProjectInfoTable = styled.div`
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 700px;
    }
`