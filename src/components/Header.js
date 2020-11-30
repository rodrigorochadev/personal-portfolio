import React, {useContext} from 'react';
import { UnstyledButton } from '../styles/componentsStyles'
import { ThemeContext } from './ThemeContext';
import { HeaderFlex, HeaderNav, Logo, ThemeText } from '../styles/components/headerStyles';
import { Link } from 'gatsby';


export default ({onCursor}) => {

  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    
    <HeaderNav>
      <HeaderFlex>

        <Link to='/' aria-label="Back to Homepage">
          <Logo 
            onMouseEnter={() => onCursor('hovered')}
            onMouseLeave={onCursor}
          />
        </Link>

        <UnstyledButton 
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={onCursor}
          onClick={onCursor}
          aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
            {colorMode === 'light' ? <ThemeText>Too bright?</ThemeText> : <ThemeText>Too dark?</ThemeText>}
        </UnstyledButton>

      </HeaderFlex>
    </HeaderNav>
  );
};
