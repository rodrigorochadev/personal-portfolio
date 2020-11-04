import { motion } from "framer-motion"
import styled from "styled-components"
import { SITE_CONFIG } from "../../constants"


export const MobileTalkTitle = styled.a`
font-size: 10vw;
font-family: ${SITE_CONFIG.fontFamilies.titles};    
`

export const TalkTitle = styled(motion.div)`
font-family: ${SITE_CONFIG.fontFamilies.titles};
font-weight: 300;
font-size: 4rem;

@media ${SITE_CONFIG.media.small} {
    font-size: 3.5vw;
}

`

export const TalkMail = styled(motion.a)`

font-size: 15vw;
font-family: ${SITE_CONFIG.fontFamilies.titles};

@media ${SITE_CONFIG.media.small} {
    display: initial;
    font-size: 6vw;
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    text-decoration: none;
}
`

export const TalkContainer = styled.div`
width: 100%;
text-align: center;
font-family: ${SITE_CONFIG.fontFamilies.titles};

`