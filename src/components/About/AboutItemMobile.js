import React from 'react'
import { AboutText, AboutTextContainer } from '../../styles/components/aboutStyles'
import Img from 'gatsby-image'
import { MobileImgContainer } from '../../styles/componentsStyles'

export default (props) => {

    return(
        <>
            <AboutTextContainer>
                <AboutText>{props.text}</AboutText>
            </AboutTextContainer>
            <MobileImgContainer maxWidth="500px" marginBottom="75px">
                <Img fluid={props.image} alt={props.imgAtl}/>
            </MobileImgContainer>
        </>
    )

}