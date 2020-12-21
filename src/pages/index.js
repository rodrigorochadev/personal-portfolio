import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Portfolio from '../components/Portfolio/Portfolio'
import NewAbout from '../components/NewAbout/NewAbout'
import NewBanner from '../components/Banner/NewBanner'
import { Container } from '../styles/componentsStyles'
import SectionAnimUp from '../components/SectionAnimUp'

import { FinalText } from '../styles/componentsStyles'

const IndexPage = () => (
  <Layout>
    <SEO title="Software Developer" />
    <NewBanner />
    <NewAbout />
    <Portfolio />
    <SectionAnimUp>

      <Container>
          <FinalText>That's all... For now!</FinalText>
      </Container>
    </SectionAnimUp>
  </Layout>

);

export default IndexPage;
