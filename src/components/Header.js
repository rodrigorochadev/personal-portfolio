import React from 'react';
import { Link } from 'gatsby'

import { SVGHolder, UnstyledButton, Container, Flex, HeaderNav, HeaderLogo } from '../styles/componentsStyles'
import { Logo, Bulb, BulbOn } from '../assets/svg/svg'
import { ThemeContext } from './ThemeContext';

export default () => {

  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }

  return (
    <HeaderNav id="home">
      <Container>
        <SVGHolder>
          <Flex spaceBetween noHeight>
            <HeaderLogo>
              <Link to="/" aria-label="Rodrigo Rocha">
                <Logo />
              </Link>
            </HeaderLogo>
            <HeaderLogo>
              <UnstyledButton aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                  {colorMode === 'light' ? <BulbOn /> : <Bulb />} 
              </UnstyledButton>
            </HeaderLogo>  
          </Flex>
        </SVGHolder>
      </Container>
    </HeaderNav>
  );
};
