import React from 'react';
import { UnstyledButton, Flex } from '../styles/componentsStyles'
import { ThemeContext } from './ThemeContext';
import { HeaderNav, Logo, ThemeText } from '../styles/components/headerStyles';
import { Link } from 'gatsby';


export default ({onCursor}) => {

  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    
    <HeaderNav id="home">
      
      <Flex spaceBetween noHeight>

      <Link to='/'>
        <Logo 
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor} />
      </Link>

      <UnstyledButton 
        onMouseEnter={() => onCursor('hovered')}
        onMouseLeave={onCursor}
        aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
          {colorMode === 'light' ? <ThemeText>Too bright?</ThemeText> : <ThemeText>Too dark?</ThemeText>}
      </UnstyledButton>

      </Flex>
    </HeaderNav>
  );
};
