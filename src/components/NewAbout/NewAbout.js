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

                {/* <div style={{display: 'flex', justifyContent: 'center', height: '100%'}}> */}
                    {/* <div style={{position: 'relative', maxWidth: '400px', width: '100%', background: 'lightblue', overflow: 'visible'}}> */}
                        {/* <div style={{position: 'absolute'}}> */}

                        {/* </div> */}
                    {/* </div> */}
                {/* </div> */}
                <DivMargin>
                    <NewAboutDetails />
                </DivMargin>
                        
            </NewAboutPadding>
        </Container>
            
    )

}