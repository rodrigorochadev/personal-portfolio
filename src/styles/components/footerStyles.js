import styled from "styled-components"
import { SITE_CONFIG } from "../../constants"

export const FooterName = styled.div`
    text-align: center;
    position: relative;

    @media ${SITE_CONFIG.media.small} {
        text-align: right;
    }
`

export const FooterTalkTitle = styled.div`
    
    @media ${SITE_CONFIG.media.medium} {
        font-size: 3em;
    }
`

export const FooterCopyright = styled.p`
    text-align: center;
    margin-top: 32px;
`

export const FooterSocial = styled.div`

    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    a {
        margin-right: 30px;
    
        &:last-child {
            margin-right: 0px;
        }
    }

`

export const FooterSVG = styled.div`
  svg {
    
    fill: var(--color-text);

    &:hover {
      /* cursor: pointer; */
      fill: var(--color-accent);
      transition: ${SITE_CONFIG.transitions.default};
    }
  }
`

export const FooterContent = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 72px 0; 
    row-gap: 30px;

    @media ${SITE_CONFIG.media.small} {
        flex-direction: row;
    }

`

export const SocialIcon = styled.a`
    
    &:hover {
        cursor: pointer;
        @media ${SITE_CONFIG.media.small} {
            cursor: none;
        }
    }
`