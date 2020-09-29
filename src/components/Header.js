import React, { useEffect } from 'react';
import { Link } from 'gatsby'

import { SVGHolder, UnstyledButton, Container, Flex, HeaderNav, HeaderLogo, BulbMotion } from '../styles/componentsStyles'
import { Logo, Bulb, BulbOn } from '../assets/svg/svg'
import { ThemeContext } from './ThemeContext';
import { headerLogoAnim } from '../animations';

import { useAnimation } from 'framer-motion'
// import { container, item } from '../animations'
import { useInView } from 'react-intersection-observer';

export default () => {

  const { colorMode, setColorMode } = React.useContext(ThemeContext);

  if (!colorMode) {
    return null;
  }


  const animation = useAnimation()
  const [logoRef, logoInView] = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
      if(logoInView) {
          animation.start('visible');
      }
  }, [animation, logoInView])

  const [bulbRef, bulbInView] = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
      if(bulbInView) {
          animation.start('visible');
      }
  }, [animation, bulbInView])


  return (
    <HeaderNav id="home">
      <Container>
        <SVGHolder>
          <Flex spaceBetween noHeight>
            
            <HeaderLogo ref={logoRef} variants={headerLogoAnim} initial='hidden' animate={animation}>
                <Link to="/" aria-label="Rodrigo Rocha">
                  <Logo />
                </Link>
            </HeaderLogo>
              <BulbMotion ref={bulbRef} variants={headerLogoAnim} initial='hidden' animate={animation}>
                <HeaderLogo rotate bulb>
                  <UnstyledButton aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                      {colorMode === 'light' ? <BulbOn /> : <Bulb />}
                  </UnstyledButton>
                </HeaderLogo>
              </BulbMotion>

            {/* </motion.div> */}

          </Flex>
        </SVGHolder>
      </Container>
    </HeaderNav>
  );
};
