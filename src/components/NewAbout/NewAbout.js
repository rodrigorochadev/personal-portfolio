import React from 'react'
import { Container, DivMargin } from '../../styles/componentsStyles'
import { NewAboutPadding } from '../../styles/components/newAboutStyles'
import NewAboutIntro from './NewAboutIntro'
import NewAboutDetails from './NewAboutDetails'
import NewAboutImage from './NewAboutImage'

export default () => {

    

    
    return(
        <Container>
            
            <NewAboutPadding>
                <DivMargin>
                    <NewAboutIntro />
                </DivMargin>
                    
                <NewAboutImage />

                <DivMargin>
                    <NewAboutDetails />
                </DivMargin>
                    
                        
            </NewAboutPadding>
        </Container>
        
        
    )

}