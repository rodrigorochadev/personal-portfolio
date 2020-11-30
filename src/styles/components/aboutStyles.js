import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'
import Img from 'gatsby-image'
import { SITE_CONFIG } from '../../constants'


/* Mobile and Desktop */
export const AboutTextContainer = styled.div`
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

export const AboutText = styled.h2`
    font-weight: 300;
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

/* Desktop */
export const DesktopAboutFlex = styled.div`
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

export const AboutImgContainer = styled(motion.div)`

    position: absolute;
    top: 0px;
    right: -100px;

    z-index: 1;

    &:hover {
        z-index: 900;
    }

    ${props => props.reverse && css`
        top: 25px;
        left: -100px;
        right: initial;
    `};

    ${props => props.last && css`
        top: 0px;
        left: 0px;
    `};
`

export const AboutImg = styled(Img)`

    @media ${SITE_CONFIG.media.small} {
        width: 400px;

        transition: ${SITE_CONFIG.transitions.default};
        transform: scale(.5, .5);

        &:hover {
            transform: ${props => props.translateX} scale(1.5, 1.5);

            ${props => props.lessZoom && css`
                transform: ${props => props.translateX} scale(1, 1);
            `}
        }
    }

    @media ${SITE_CONFIG.media.large} {
        
        width: 500px;
        transform: scale(.5, .5);
        transition: ${SITE_CONFIG.transitions.default};

        &:hover {
            transform: ${props => props.translateX} scale(1.5, 1.5);

            ${props => props.lessZoom && css`
                transform: ${props => props.translateX} scale(1, 1);
            `}
        }
    }

`
