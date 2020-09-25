import React from 'react'
import Img from 'gatsby-image'
import { PortfolioCard, PortfolioImage, PortfolioButton, PortfolioDetails } from '../../styles/componentStyles'
import { Paragraph } from '../../styles/globalStyles'

const PortfolioItem = (props) => {

    return(
        <PortfolioCard reverse={props.id%2===0}>

            <PortfolioImage>
                <Img fluid={props.image} alt={props.name}/>
            </PortfolioImage>

            <PortfolioDetails>
                <h1>/{props.id}.</h1>
                <h2>{props.name}</h2>
                <Paragraph>{props.description}</Paragraph>

                <PortfolioButton>
                    <a href={props.url}>
                        <button>Learn More</button>
                    </a>        
                </PortfolioButton>
            </PortfolioDetails>

            
            

        </PortfolioCard>
    )
}

export default PortfolioItem
