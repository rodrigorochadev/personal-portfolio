import React from "react"
import { Link } from "gatsby"

import { Container, Flex, NonStyledButton } from "../styles/globalStyles"
import { HeaderNav, LogoContainer, ToggleBulb } from '../styles/componentStyles'

import { Bulb, Logo } from '../assets/svg/svg'

const Header = () => {

  return(
    
      <HeaderNav id="home">
      <Container>
        <Flex spaceBetween noHeight>
        <LogoContainer>
            <Link to="/" aria-label="jamgoose">
              <Logo />
            </Link>
           </LogoContainer>
          <ToggleBulb>
            <NonStyledButton onClick={() => console.log("toggleTheme")}>
                <Bulb />
            </NonStyledButton>
          </ToggleBulb>
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header
