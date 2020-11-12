import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Container } from '../../styles/componentsStyles'
import { PageBannerContainer, PageBannerText } from '../../styles/pagesStyles'

const BeeAwakePage = () => {

    

    return(
        <Layout>
            <SEO  title="Under Construction" />

            <Container>
                <PageBannerContainer>
                    <PageBannerText>Under</PageBannerText>
                    <PageBannerText>Construction</PageBannerText>
                    <p>Please come back later!</p>
                </PageBannerContainer>
            </Container>
        </Layout>
    )
    
}

export default BeeAwakePage