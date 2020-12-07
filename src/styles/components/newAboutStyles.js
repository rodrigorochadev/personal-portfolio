import { motion } from "framer-motion"
import styled, { css } from "styled-components"
import { SITE_CONFIG } from "../../constants"

export const NewAboutAimHigherContainer = styled(motion.div)`
    padding: 50px 0;

    @media ${SITE_CONFIG.media.small} {
        padding: 150px 0;
    }
`

export const NewAboutContainerText = styled(motion.div)`
    width: 100%;
    
    @media ${SITE_CONFIG.media.small} {
        position: relative;
        width: 65%;
        
        ${props => props.smaller && css`
            width: 70%;
        `}
    }


`

export const NewAboutImageContainer = styled.h2`
max-width: 400px;
width: 100%;
position: relative;
`

export const NewAboutContainerHeadline = styled.h2`
font-size: 1.3rem;
line-height: 2.5rem;
margin-bottom: 20px;
font-family: ${SITE_CONFIG.fontFamilies.text.bold};

@media ${SITE_CONFIG.media.large} {
    font-size: 2.3rem;
    line-height: 3rem;
}

@media ${SITE_CONFIG.media.xlarge} {
    font-size: 2.5rem;
    line-height: 3.2rem;
}
`

export const NewAboutPadding = styled(motion.div)`

margin: 150px 0;
/* margin-bottom: 150px; */

@media ${SITE_CONFIG.media.medium} {
    margin: 250px 0;
    /* margin-bottom: 200px; */
}

@media ${SITE_CONFIG.media.xlarge} {
    margin: 300px 0;
    /* margin-bottom: 250px; */
}

`

