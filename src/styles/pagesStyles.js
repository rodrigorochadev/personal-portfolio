import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { SITE_CONFIG } from "../constants"
import Img from 'gatsby-image'

export const PageBannerContainer = styled(motion.div)`
       
    font-family: ${SITE_CONFIG.fontFamilies.titles.thin};
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
    color: var(--color-lightText);

    p {
        line-height: 2.2rem;
    }

    @media ${SITE_CONFIG.media.small} {
        width: 80%;
    }

    @media ${SITE_CONFIG.media.large} {
        width: 70%;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        width: 60%;
    }

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
    font-family: ${SITE_CONFIG.fontFamilies.titles.thin};
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
    font-family: ${SITE_CONFIG.fontFamilies.text.bold};
    text-transform: uppercase;
    font-size: 1.3rem;
    font-weight: bold;
    /* opacity: 0.8; */

    ${props => props.margin && css`
        margin-bottom: 30px;
    `}
`

export const DesignChoicesFont = styled.div`
    font-size: 2rem;
`
export const PageFlex = styled.div`
    display: flex;
    flex-direction: column;
    column-gap: 50px;
    row-gap: 50px;
    margin-bottom: 50px;
    margin-top: -50px;
    

    @media ${SITE_CONFIG.media.medium} {
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
        
    }
`

export const PageImage = styled.div`
    width: 100%;
    max-width: 500px;

    @media ${SITE_CONFIG.media.small} {
        width: 500px;
    }
`

export const LastMockupFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin: 100px 0;
    row-gap: 80px;
    column-gap: 30px;

    flex-wrap: wrap;

    ${props => props.justifyLeft && css`
        justify-content: left;
    `}
    /* @media screen and (min-width: 1200px) {
        flex-direction: row;

        
    } */
`

export const CustomImg = styled(Img)`
    
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: ${props => props.maxWidth};
    } 
`

export const MockupImg = styled(Img)`

    min-width: 200px;

    @media ${SITE_CONFIG.media.small} {
        width: 300px;

        ${props => props.shaddow && css`        
            filter: drop-shadow(2px 2px 2px #222);
        `}
        /* filter: drop-shadow(0px 0px 38px -17px red); */
    } 
`

export const TypeImg = styled(Img)`

    
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        min-width: 250px;
        width: 600px;
    } 
`

export const TechnologiesFlex = styled.div`
    display: flex;
    column-gap: 30px;
`


//
export const ProjectSubTitle = styled.h2`

    margin-bottom: 10px;

    @media ${SITE_CONFIG.media.small} {
        font-size: 2rem;
    }
`