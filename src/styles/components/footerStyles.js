import styled from "styled-components"
import { SITE_CONFIG } from "../../constants"


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

`

export const SocialIcon = styled.a`
    
    &:hover {
        cursor: pointer;
        @media ${SITE_CONFIG.media.small} {
            cursor: none;
        }
    }
`