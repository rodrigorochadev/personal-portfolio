import React from 'react'
import Layout from '../../components/Layout'
import Info from '../../components/Pages/Info'
import SEO from '../../components/Seo'

const BeeAwakePage = () => {

    

    return(
        <Layout>
            <SEO title="Bee Awake Website" />
            <div style={{minHeight: '90vh', marginTop: '100px', textAlign: 'center'}}>
                <Info title="Bee Awake Website" />
                <p>Page under construction.</p>
            </div>
            
        </Layout>
    )
    
}

export default BeeAwakePage