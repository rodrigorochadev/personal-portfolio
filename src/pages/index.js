import React from 'react'
import Banner from '../components/Banner/Banner'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Portfolio from '../components/Portfolio/Portfolio'
import NewAbout from '../components/NewAbout/NewAbout'
import Skills from '../components/Skills'

const IndexPage = () => (
  <Layout>
    <SEO title="Software Developer" />
    {/* <div style={{height: '100vh'}}></div> */}
    <Banner />
    <NewAbout />
    <Portfolio />
    <Skills />
  </Layout>

);

export default IndexPage;
