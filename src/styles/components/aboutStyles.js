import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { SITE_CONFIG } from '../../constants'

export const DesktopAboutFlex = styled(motion.div)`
    z-index: 11;
    padding-top: 100px;
    padding-bottom: 250px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    column-gap: 70px;
    min-height: 50vh;
    position: relative;

    &:last-child {
        padding-bottom: 30px;
    }

    ${props => props.reverse && css`
        flex-direction: row-reverse;
    `};

    ${props => props.last && css`
        width: 100%;
        justify-content: center;
        text-align: center;
    `};
`

export const DesktopAboutContainer = styled(motion.div)`
    padding: 100px 0;
`

export const AboutImgParallax = styled.div`
    &:hover {
        z-index: 99;
    }
`

export const MobileAboutImgContainer = styled.div`
    width: 100%;
    height: auto;
`

export const MobileAboutContainer = styled.div`
    padding-bottom: 50px;
    border-bottom: 1px solid var(--color-text);
`

export const AboutImgContainer = styled(motion.div)`

    position: absolute;
    top: 50px;
    right: 0px;

    z-index: 1;

    &:hover {
        z-index: 900;
    }

    ${props => props.reverse && css`
        top: 25px;
        left: 0px;
        right: initial;
    `};

    ${props => props.last && css`
        top: 0px;
        left: 0px;
    `};
`

export const AboutImg = styled(Img)`

    /* @media ${SITE_CONFIG.media.small} {
        width: 200px;
        transition: ${SITE_CONFIG.transitions.default};
        
        &:hover {
            transform: scale(2,2);
        }
    } */

    @media ${SITE_CONFIG.media.medium} {
        width: 200px;

        transition: ${SITE_CONFIG.transitions.default};
        
        &:hover {
            
            transform: ${props => props.translateX} scale(3,3);
            
        }
    }

    @media ${SITE_CONFIG.media.large} {
        width: 250px;
        transition: ${SITE_CONFIG.transitions.default};
    }

`

export const AboutText = styled.div`
    z-index: 2;

    @media ${SITE_CONFIG.media.medium} {
        width: 80%;
    }

    @media ${SITE_CONFIG.media.large} {
        width: 83%;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        width: 85%;
    } 
`

export const AboutH2 = styled.h2`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-weight: 400;
    line-height: ${SITE_CONFIG.fontHeights.titleHeight};
    margin-bottom: 20px;
    font-size: 1.5rem;

    ${props => props.center && css`
        text-align: center;
    `};

    @media ${SITE_CONFIG.media.medium} {
        font-size: 2rem;
        line-height: 3rem;
    }

    @media ${SITE_CONFIG.media.large} {
        font-size: 2.5rem;
        line-height: 4.8rem;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: 2.5rem;
        line-height: 5rem;
    }


`

export const AboutTextContainer = styled.div`
    display: flex;
    margin-top: 70px;

    ${props => props.reverse && css`
        justify-content: right;
    `};

    @media ${SITE_CONFIG.media.small} {
        margin-top: 250px;
        
    }

`

