import React from 'react'
import Img from 'gatsby-image'
import { Description, PortfolioCard, PortfolioId, PortfolioName, PortfolioImage, PortfolioMoreInfo, PortfolioDetails } from '../../styles/componentsStyles'

const PortfolioItem = (props) => {

    return(
        <PortfolioCard reverse={props.id%2===0}>

            <PortfolioImage>
                <Img fluid={props.image} alt={props.name}/>
            </PortfolioImage>

            <PortfolioDetails>
                <PortfolioId>/{props.id}.</PortfolioId>
                <PortfolioName>{props.name}</PortfolioName>
                <Description>{props.description}</Description>

                <PortfolioMoreInfo >
                    <a href={props.url}>Learn More »</a>
                </PortfolioMoreInfo>
                
            </PortfolioDetails>

        </PortfolioCard>
    )
}

export default PortfolioItem
