import React from 'react';
// import { Link } from 'gatsby'
import { SVGHolder, UnstyledButton, Flex, HeaderNav } from '../styles/componentsStyles'
// import { Logo, Bulb, BulbOn } from '../assets/svg/svg'
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';
import { SITE_CONFIG } from '../constants';
import { motion } from 'framer-motion';


export default ({onCursor}) => {

  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    
    <HeaderNav id="home">
      
      <div style={{padding: '0 10vw'}}>
        <SVGHolder>
          <Flex spaceBetween noHeight>
          
            <ThemeText
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
            >R.R</ThemeText>

            <UnstyledButton 
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={onCursor}
              aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                {colorMode === 'light' ? <ThemeText>Too bright?</ThemeText> : <ThemeText>Too dark?</ThemeText>}
            </UnstyledButton>
          </Flex>
        </SVGHolder>
      </div>
    </HeaderNav>
  );
};


export const ThemeText = styled(motion.p)`
  font-weight: bold;
  
  color: var(--color-text);

  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-size: 1.2rem;
  transition: ${SITE_CONFIG.transitions.default};
  &:hover {
    /* cursor: pointer; */
    color: var(--color-accent);
  }
`
