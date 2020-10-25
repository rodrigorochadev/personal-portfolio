import React from 'react'
import { BigTitle, MarqueeDiv, MarqueeText } from '../styles/componentsStyles'


export default (props) => {

    return (
        <MarqueeDiv>
            <MarqueeText>
                <div style={{display: 'flex', columnGap: '50px'}}>
                    <BigTitle nowrap>{props.text}</BigTitle>
                    <BigTitle nowrap outline>{props.text}</BigTitle>
                </div>
                
            </MarqueeText>
        </MarqueeDiv>
    )
    

}