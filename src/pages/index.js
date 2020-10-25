import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import Talk from '../components/Talk/Talk'
import SEO from '../components/Seo'
import NewPortfolio from '../components/NewPortfolio/NewPortfolio'
import Marquee from '../components/Marquee'

const IndexPage = () => (
  <Layout>
    <SEO title="Software Developer" />
    <Banner />
    <About />
    <NewPortfolio />
    <div style={{padding: '200px 0'}}>
      <Marquee text='Thank you for your attention!' />
    </div>
    <Talk />    
  </Layout>

);

export default IndexPage;
