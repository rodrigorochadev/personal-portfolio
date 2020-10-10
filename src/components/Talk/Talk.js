import React from 'react'
import { VerticalSpacing } from '../../styles/componentsStyles'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'

export default () => {
    
    return(
        <div style={{padding: '0 10vw'}}>
            <VerticalSpacing>
                <TalkContainer>
                    <p>I hope you got inspired to learn something new!
                        Maybe we'll build something together.
                        Talk to me at <a href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com</a>
                    </p>
                </TalkContainer>
            </VerticalSpacing>
        </div>
    )
}

export const TalkContainer = styled.div`
    width: 100%;

    p, a {
        font-family: ${SITE_CONFIG.fontFamilies.titles};
        line-height: ${SITE_CONFIG.fontHeights.titleHeight};
        font-weight: 400;
        font-size: 1.5rem;

        @media ${SITE_CONFIG.media.small} {
            font-size: 2rem;
            
        }
    }

    @media ${SITE_CONFIG.media.small} {
        width: 600px;
    }

    
`