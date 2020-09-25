/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

// import loadable from '@loadable/component'
// const Header = loadable(() => import('./header'))
// const Footer = loadable(() => import('./footer'))

import Header from "./header"
import Footer from "./footer"

import { ThemeProvider } from "styled-components"
import { theme } from '../styles/theme'
import { GlobalStyle } from '../styles/globalStyles'

const Layout = ({ children }) => {
  
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
