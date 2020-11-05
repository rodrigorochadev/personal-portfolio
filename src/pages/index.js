import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import Talk from '../components/Talk/Talk'
import SEO from '../components/Seo'
import Portfolio from '../components/Portfolio/Portfolio'

const IndexPage = () => (
  <Layout>
    <SEO title="Software Developer" />
    <Banner />
    <About />
    <Portfolio />
    <Talk />    
  </Layout>

);

export default IndexPage;
