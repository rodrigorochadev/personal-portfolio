import React from 'react'
import styled, { css } from 'styled-components'
import { SITE_CONFIG } from '../constants'
import { AboutH2, AboutText } from '../styles/components/aboutStyles'
import { BigTitle } from '../styles/componentsStyles'

export default (props) => {

    return(
        <>
            <BigTitle outline={props.outline} right={props.right}>{props.title}</BigTitle>
            {/* <TitleInfo>Below you can see some of the projects i've done. You can see a preview by hovering the cursor on top of the title, and click on it if you want to see details about it!</TitleInfo> */}
            {/* <TitleDescription right={props.right}>{props.description}</TitleDescription> */}
            {/* <TitleBorder />  */}
        </>
    )
}

export const TitleInfo = styled.div`

    width: 80%;
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

export const TitleDescription = styled.p`
    display: none;

    @media ${SITE_CONFIG.media.medium} {
        display: initial;

        ${props => props.right && css`
            text-align: right;
        `}
    }
`

export const TitleBorder = styled.div`
    border-bottom: 0px solid var(--color-text);

    @media ${SITE_CONFIG.media.medium} {
        border-bottom: 1px solid var(--color-text);
    }
    
`