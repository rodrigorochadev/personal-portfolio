import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import Talk from '../components/Talk/Talk'
import SEO from '../components/Seo'
import Portfolio from '../components/Portfolio/Portfolio'
import NewAbout from '../components/NewAbout/NewAbout'
import Skills from '../components/Design/Accordion/Skills'

const IndexPage = () => (
  <Layout>
    <SEO title="Software Developer" />
    <Banner />
    <NewAbout />
    {/* <About /> */}
    <Portfolio />
    <Skills />
    {/* <Talk />     */}
  </Layout>

);

export default IndexPage;
