import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import Portfolio from '../components/Portfolio/Portfolio'
import Talk from '../components/Talk/Talk'
import SEO from '../components/Seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Banner />
    <About />
    <Portfolio />
    <Talk />    
  </Layout>

);

export default IndexPage;
