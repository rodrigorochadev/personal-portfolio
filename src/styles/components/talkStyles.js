import styled from "styled-components"
import { SITE_CONFIG } from "../../constants"


export const MobileTalkTitle = styled.a`
    font-size: 4rem;
    text-align: center;   
`

export const TalkTitle = styled.div`
    font-weight: 300;
    font-size: 4rem;

    @media ${SITE_CONFIG.media.small} {
        font-size: 3.5vw;
    }

`

export const TalkMail = styled.a`

    font-size: 15vw;

    @media ${SITE_CONFIG.media.small} {
        display: initial;
        font-size: 6vw;
        text-decoration: none;
    }
`

export const TalkContainer = styled.div`
    text-align: center;
    * {
        font-family: ${SITE_CONFIG.fontFamilies.titles};
    }
`