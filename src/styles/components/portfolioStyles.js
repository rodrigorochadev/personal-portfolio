import { SITE_CONFIG } from "../../constants";

const { motion } = require("framer-motion");
const { default: styled, css } = require("styled-components");

export const PortfolioContainerDesktop = styled(motion.div)`
    padding: 0 10vw;
    text-align: center;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    width: 100%;
    min-height: 30vh;
    padding: 80px 0;
    transition: ${SITE_CONFIG.transitions.defautls};
    border-top: 1px solid var(--color-text);
    

    ${props => props.last && css`
        border-bottom: 1px solid var(--color-text);
    `}

    ${props => props.first && css`
        border-top: 1px solid var(--color-text);
    `}

    h2 {
        &:hover {
            transition: all 0.3s ease;
            -webkit-text-stroke: 1px;
            -webkit-text-stroke-color: var(--color-text);
            -webkit-text-fill-color: transparent;   
        }
    }
`

export const PortfolioMargin = styled.div`
    z-index: 20;
    margin-top: 50px;

    @media ${SITE_CONFIG.media.small} {
        margin-top: 0;
    }
`

export const PortfolioContainer = styled(motion.div)`
    z-index: 20;
    display: flex;
    
    flex-direction: column;
    row-gap: 10px;

    width: 100%;
    min-height: 30vh;
    padding-bottom: 80px;

    &:last-child {
        padding-bottom: 0px;
    }
    

    transition: ${SITE_CONFIG.transitions.defautls};
    overflow-x: hidden;
`

export const PortfolioTitle = styled(motion.div)`
    
    z-index: 20;
    
    a {
        text-decoration: none;
        color: var(--color-text);
    }

    @media ${SITE_CONFIG.media.small} {
        font-size: 3rem;
    }

    @media ${SITE_CONFIG.media.medium} {
        font-size: 3.1rem;
    }

    @media ${SITE_CONFIG.media.large} {
        font-size: 3.3rem;
    }

    @media ${SITE_CONFIG.media.xlarge} {
        font-size: 3.5rem;
    }

    h2 {
        font-family: ${SITE_CONFIG.fontFamilies.titles} !important;
        
        
    }
`

export const FloatingImage = styled(motion.div)`
    width: 250px;
    height: auto;
    pointer-events: none;
    display: none;
    

    @media ${SITE_CONFIG.media.small} {
        display: initial;
        width: 500px;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
    }
    
`