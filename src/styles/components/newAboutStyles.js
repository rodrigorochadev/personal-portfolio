import styled from "styled-components"
import { SITE_CONFIG } from "../../constants"

export const NewAboutContainerText = styled.div`
width: 100%;
/* max-width: 1500px; */

`

export const NewAboutImageContainer = styled.h2`
max-width: 400px;
width: 100%;
position: relative;
`

export const NewAboutContainerHeadline = styled.h2`
line-height: 2.5rem;
font-size: 1.6rem;
margin-bottom: 20px;

@media ${SITE_CONFIG.media.large} {
    line-height: 2.8rem;
    font-size: 2.2rem;
}

@media ${SITE_CONFIG.media.xlarge} {
    line-height: 3rem;
    font-size: 2.4rem;
}
`

export const NewAboutPadding = styled.div`

margin-top: 150px;
margin-bottom: 150px;

@media ${SITE_CONFIG.media.medium} {
    margin-top: 250px;
    margin-bottom: 200px;
}

@media ${SITE_CONFIG.media.xlarge} {
    margin-top: 300px;
    margin-bottom: 250px;
}

`

