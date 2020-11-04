import React from 'react'
import {FloatingImageMobile, PortfolioContainer, PortfolioDescription, PortfolioName, PortfolioTitle} from '../../styles/components/portfolioStyles'
import Img from 'gatsby-image'

export default (props) => {

    return (
        
            <PortfolioContainer>
                <FloatingImageMobile>
                    <Img fluid={props.image} alt={props.name} />
                </FloatingImageMobile>
                <>
                    <PortfolioName>
                        <a href={props.url}>
                            <PortfolioTitle>
                                <p>/{props.id}.</p>
                                <h2>{props.name}</h2>
                            </PortfolioTitle>
                        </a>
                    </PortfolioName>

                    <PortfolioDescription>
                        <p>{props.description}</p>
                    </PortfolioDescription>

                    <a href={props.url}>Explore Project</a>
                </>
                
            </PortfolioContainer>
    )
}