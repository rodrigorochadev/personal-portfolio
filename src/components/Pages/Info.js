import React from 'react'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'

export default (props) => {

    return(
        <InfoTitle>{props.title}</InfoTitle>
    )


}

export const InfoTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 7em;
`