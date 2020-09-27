import React from 'react'
import { Container, Description, Title, VerticalSpacing } from '../../styles/componentsStyles'

export default () => {

    return(
        <Container>
            <VerticalSpacing>
                <Title>Get in touch.</Title>
                <Description>Reach me in my social medias below or e-mail me: <a href="mailto:rodrigorochaua@gmail.com">rodrigorochaua@gmail.com</a> </Description>
            </VerticalSpacing>
        </Container>
    )
}