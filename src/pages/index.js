import React from "react"

// import loadable from '@loadable/component'

import Banner from '../components/Banner/Banner'
import About from '../components/About/About'
import Layout from "../components/layout"
import SEO from "../components/seo"
import Portfolio from "../components/Portfolio/Portfolio"

// const SEO = loadable(() => import('../components/seo'))
// const Banner = loadable(() => import('../components/Banner/Banner'))
// const About = loadable(() => import('../components/About/About'))
// const Layout = loadable(() => import('../components/layout'))
// const Portfolio = loadable(() => import('../components/Portfolio/Portfolio'))

import { Padding } from "../styles/globalStyles"
import Talk from "../components/Talk/Talk"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />

    <Padding>
      <About />
    </Padding>

    <Padding>
      <Portfolio />
    </Padding>
    
    <Padding>
      <Talk />
    </Padding>
  </Layout>
)

export default IndexPage
