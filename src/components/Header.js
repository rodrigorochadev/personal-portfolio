import React from 'react';
import { SVGHolder, UnstyledButton, Flex } from '../styles/componentsStyles'
import { ThemeContext } from './ThemeContext';
import styled from 'styled-components';
import { SITE_CONFIG } from '../constants';
import { motion } from 'framer-motion';
import { HeaderNav } from '../styles/components/headerStyles';
import { Link } from 'gatsby';


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
          
              <IndexText
                onMouseEnter={() => onCursor('hovered')}
                onMouseLeave={onCursor}
              > <Link to="/">R.R</Link>
              </IndexText>
            
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


export const IndexText = styled(motion.div)`
  

  a {
    font-weight: bold;

    color: var(--color-text);

    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 1.2rem;
    transition: ${SITE_CONFIG.transitions.default};
    text-decoration: none;
    
    &:hover {
        color: var(--color-accent);
    }
  }
`

export const ThemeText = styled(motion.p)`
  font-weight: bold;

  color: var(--color-text);

  font-family: ${SITE_CONFIG.fontFamilies.titles};
  font-size: 1.2rem;
  transition: ${SITE_CONFIG.transitions.default};
  text-decoration: none;

  &:hover {
      color: var(--color-accent);
  }

`
