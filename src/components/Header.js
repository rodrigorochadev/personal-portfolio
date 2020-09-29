import React from 'react';
import { Link } from 'gatsby'

import { SVGHolder, UnstyledButton, Container, Flex, HeaderNav, HeaderLogo } from '../styles/componentsStyles'
import { Logo, Bulb, BulbOn } from '../assets/svg/svg'
import { ThemeContext } from './ThemeContext';

import { motion } from 'framer-motion'

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
            <HeaderLogo >
              <Link to="/" aria-label="Rodrigo Rocha">
                <Logo />
              </Link>
            </HeaderLogo>
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ rotate: 360, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}>
              <HeaderLogo rotate bulb>
                <UnstyledButton aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                    {colorMode === 'light' ? <BulbOn /> : <Bulb />} 
                </UnstyledButton>
              </HeaderLogo>  
            </motion.div>
            
          </Flex>
        </SVGHolder>
      </Container>
    </HeaderNav>
  );
};
