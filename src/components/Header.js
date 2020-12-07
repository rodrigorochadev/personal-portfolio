import React, {useContext} from 'react';
import { Container, UnstyledButton } from '../styles/componentsStyles'
import { ThemeContext } from './ThemeContext';
import { HeaderFlex, HeaderNav, Logo, ThemeText } from '../styles/components/headerStyles';
import { Link } from 'gatsby';


export default ({onCursor}) => {

  const { colorMode, setColorMode } = useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <Container>
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
          aria-label="Toggle Theme" 
          onClick={() => {onCursor(); setColorMode(colorMode === 'light' ? 'dark' : 'light')}}>
            {colorMode === 'light' ? <ThemeText>Too bright?</ThemeText> : <ThemeText>Too dark?</ThemeText>}
        </UnstyledButton>

      </HeaderFlex>
    </Container>
    </HeaderNav>
  );
};
