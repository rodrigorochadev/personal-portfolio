import React from 'react'
import Img from 'gatsby-image'
import { MobileImgContainer, PaddingContainer } from '../../styles/componentsStyles'
import { PortfolioTitle } from '../../styles/components/portfolioStyles'

export default (props) => {

    return (
        
            <PaddingContainer vertical="45px" horizontal="0">
                <MobileImgContainer maxWidth="500px" marginBottom="10px">
                    <Img fluid={props.image} alt={props.name} />
                </MobileImgContainer>

                <PortfolioTitle>
                    <p>/{props.id}.</p>
                    <h2>{props.name}</h2>
                </PortfolioTitle>
                
                <p style={{color: `var(--color-lightText)`, marginBottom: '20px'}}>{props.description}</p>
                <a href={props.url}>Explore Project</a>
                
            </PaddingContainer>
    )
}