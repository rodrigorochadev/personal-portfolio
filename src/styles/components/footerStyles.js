import styled from "styled-components"
import { motion } from "framer-motion"
import { SITE_CONFIG } from "../../constants"

export const FooterContainer = styled(motion.div)`
    /* background: var(--color-background); */
    color: var(--color-text);
    padding: 30px 0;
    overflow-y: hidden;
`

export const FooterSection = styled.div`
    margin-bottom: 30px;
`

export const FooterCopyright = styled.p`
    text-align: center;
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

export const FooterSVG = styled(motion.div)`
  svg {
    
    fill: var(--color-text);

    &:hover {
      /* cursor: pointer; */
      fill: var(--color-accent);
      transition: ${SITE_CONFIG.transitions.default};
    }
  }
`

export const FooterContent = styled(motion.div)`

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 40px 0; 

`


export const SocialIcon = styled(motion.a)`
    
    &:hover {
        cursor: none;
    }
`