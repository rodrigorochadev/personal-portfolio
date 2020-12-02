import { motion } from 'framer-motion';
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants';

export const HeaderNav = styled.div`
  height: 0px;
  width: 100%;
  position: absolute;
  top: 62px;
  right: 0;
  left: 0;
  z-index: 99;
`

export const HeaderFlex = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0;
  
`


export const Logo = styled(motion.div)`
  width: 25px;
  height: 25px;
  border-radius: 100%;
  border: 1px solid var(--color-text);
  transition: all 0.2s ease-out;

  &:hover {
    background: var(--color-text);
    width: 30px;
    height: 30px;
  }
`

export const ThemeText = styled(motion.p)`
  font-weight: bold;

  color: var(--color-text);

  font-size: 1.2rem;
  transition: ${SITE_CONFIG.transitions.default};
  text-decoration: none;

  &:hover {
      color: var(--color-accent);
      cursor: pointer;

      @media ${SITE_CONFIG.media.small} {
        cursor: none;
      }
  }

`
