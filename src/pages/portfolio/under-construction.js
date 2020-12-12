import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Container } from '../../styles/componentsStyles'
import { PageBannerContainer, PageBannerText } from '../../styles/pagesStyles'
import { container, item } from '../../animations'
import { motion } from 'framer-motion'

const UnderConstruction = () => {


    return(
        <Layout>
            <SEO  title="Under Construction" />

            <Container>
            <PageBannerContainer variants={container} initial="initial" animate="animate">
                    <div style={{paddingBottom: '10px', overflow: 'hidden'}}>
                        <motion.div variants={item}>
                            <PageBannerText>Under</PageBannerText>
                        </motion.div>
                    </div>
                    <div style={{paddingBottom: '10px', overflow: 'hidden'}}>
                        <motion.div variants={item}>
                            <PageBannerText outline>Construction</PageBannerText>
                        </motion.div>
                    </div>
                </PageBannerContainer>
            </Container>
        </Layout>
    )
    
}

export default UnderConstruction