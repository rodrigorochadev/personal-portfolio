import React from 'react'
import { MarqueeDiv, MarqueeText } from '../styles/components/marqueeStyles'
import { BigTitle} from '../styles/componentsStyles'


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