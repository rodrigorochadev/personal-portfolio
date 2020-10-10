import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import Talk from '../components/Talk/Talk'
import SEO from '../components/Seo'
import NewPortfolio from '../components/NewPortfolio/NewPortfolio'

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <Banner />
    <About />
    <NewPortfolio />
    <Talk />    
  </Layout>

);

export default IndexPage;
