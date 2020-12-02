import React from 'react'
import Img from 'gatsby-image'
import { Description, MobileImgContainer, PaddingContainer } from '../../styles/componentsStyles'
import { PortfolioTitle } from '../../styles/components/portfolioStyles'

export default (props) => {

    return (
        
            <PaddingContainer vertical="40px" horizontal="0">
                <MobileImgContainer maxWidth="500px" marginBottom="10px">
                    <Img fluid={props.image} alt={props.name} />
                </MobileImgContainer>

                <PortfolioTitle>
                    <p>/{props.id}.</p>
                    <h2>{props.name}</h2>
                </PortfolioTitle>
                
                <Description light style={{marginTop: '-10px', marginBottom: '30px'}}>{props.description}</Description>
                <a href={props.url}>Explore Project</a>
                
            </PaddingContainer>
    )
}