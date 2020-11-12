// import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { PathfinderLogo } from '../../assets/svg/svg'
import { Container, UnstyledButton } from '../../styles/componentsStyles'
import { motion } from 'framer-motion'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { ColorDiv, ColorFlex, DesignChoicesFont, DesignChoicesText, DesignFlex, InfoFlex, InfoText, InfoTitle, MoreDetails, PageBannerContainer, PageBannerText } from '../../styles/pagesStyles'
import { ThemeContext } from '../../components/ThemeContext'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'

const WinegridPage = () => {

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    // const data = useStaticQuery(graphql`
    //     query {
    //         winegrid: file(relativePath: {eq: "winegrid/winegrid.png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 600, quality: 70) {
    //                     ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //                 }
    //             }
    //         }
    //         notes: file(relativePath: {eq: "winegrid/winegrid-notes.png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 600, quality: 70) {
    //                     ...GatsbyImageSharpFluid_tracedSVG
    //                 }
    //             }
    //         }
    //         processes: file(relativePath: {eq: "winegrid/winegrid-processes.png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 600, quality: 70) {
    //                     ...GatsbyImageSharpFluid_tracedSVG
    //                 }
    //             }
    //         }
    //         scan: file(relativePath: {eq: "winegrid/winegrid-scan.png"}) {
    //             childImageSharp {
    //                 fluid(maxWidth: 600, quality: 70) {
    //                     ...GatsbyImageSharpFluid_tracedSVG
    //                 }
    //             }
    //         }

    //     }
    // `);

    const { colorMode, setColorMode } = useContext(ThemeContext);
 

    return(
        <Layout>
            <SEO  title="Pathfinder Designs" />
            <Container>
                <PageBannerContainer>
                    <PageBannerText>Pathfinder</PageBannerText>
                    <PageBannerText>Designs</PageBannerText>
                    <p>Branding</p>
                </PageBannerContainer>

                <DesignChoicesText>About the project</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>A personal project of mine. Create a brand from scratch, since the logo design, visual identity, website and social media. This project is not intended to be used in real life. The main purpose of this project was to test my design capabilities and decision making.</p>
                    </InfoText>
                </InfoFlex>

                <SectionTitle>Step One: The Brand</SectionTitle>

                <DesignChoicesText>Designing the Logo</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>I designed the logo according to Sagi Haviv, three main rules of logo design.</p>
                        <p>01) Appropriate</p>
                        <p>02) Distinctive</p>
                        <p>03) Simple</p>
                        <br />
                        <p>I wanted the logo to be black and white, so it would fit everywhere without contrast problems. You can see why this is important in this website by switching between dark and light mode.</p>
                        <p> Additionaly, the logo should remain legible at every scale. A very small one, like the favicon of a website, or a very big one, like a billboard.</p>
                        <br />
                        <p>After many sketches and redraws, I've came up with the final product: </p>
                    </InfoText>
                </InfoFlex>

                
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', columnGap: '30px'}}>
                    {colorMode === 'light' ? 
                        <PathfinderLogoContainer>
                            <PathfinderLogo />
                        </PathfinderLogoContainer>
                         :
                         <PathfinderLogoContainer white>
                            <PathfinderLogo />
                        </PathfinderLogoContainer>
                    }
                    <UnstyledButton
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        aria-label="Toggle Theme" onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}>
                        <SwitchTheme>Switch Website Theme</SwitchTheme>
                    </UnstyledButton>
                </div>

                <DesignFlex>
                    <div>
                        <DesignChoicesText margin>Typography</DesignChoicesText>
                        <DesignChoicesFont >Poppins Typeface</DesignChoicesFont>
                        <p style={{marginTop: '10px'}}>Regular - ABCD abcd 1234</p>
                        <p style={{fontWeight: '700', marginTop: '10px'}}>Bold - ABCD abcd 1234</p>
                    </div>
                    <div>
                        <DesignChoicesText margin>Colors</DesignChoicesText>
                        <ColorFlex>
                            <ColorDiv style={{backgroundColor: '#ffc95e'}} />
                            <ColorDiv style={{backgroundColor: '#121212'}} />
                            <ColorDiv style={{backgroundColor: '#ffffff'}} />
                        </ColorFlex>
                    </div>
                    <div></div>
                </DesignFlex>

                <DesignChoicesText>Logo Applications</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>Now we can take a look at some applications, using the logo. Since the logo is very simple, applying the logo to various types of products is easy and natural.</p>
                    </InfoText>
                </InfoFlex>
                
                <SectionTitle>Step Two: Website</SectionTitle>

                <DesignChoicesText>Designing the website</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>For the design of the website, I did what I do almost every time I develop a website, which is create a first draft in a piece of paper. The content of the website, the images, and so on. Next, I replicated what I did in the paper, into a design software. I use Figma, because it's free and easy to use.</p>
                        <p>The website must be responsive, so it can be easily accesed by everyone, everywhere. With that in mind I design and develop with a Mobile First approach.</p>
                    </InfoText>
                </InfoFlex>
                
                <p><b>**** INSERT PRINTSCREENS HERE ****</b></p>

                <DesignChoicesText>Developing the website</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>I usually use React to develop anything web related. Since this is a simple website without much logic and databases between, I chose Gatsby. Gatsby is a static website generator, focused on performance.</p>
                        
                    </InfoText>
                </InfoFlex>

                <DesignChoicesText>Performance</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>I tested the website performance using Google Lighthouse and GTMetrix.</p>
                        
                    </InfoText>
                </InfoFlex>

                <SectionTitle>Step Three: Social Media</SectionTitle>

                <DesignChoicesText>Logo Variation</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>For a more captivating look, i've drawn a logo variation, with more complexity in order to fit the circle Facebook/Instagram avatar. I've incorporated the tagline <b>FIND YOUR PATH</b>, as a way of calling attention to the page.</p>
                    </InfoText>
                </InfoFlex>

                <DesignChoicesText>First Post</DesignChoicesText>
                <DesignChoicesText>Continuation</DesignChoicesText>
                


                <MoreDetails>
                    <InfoTitle style={{textAlign: 'center'}}>More details?</InfoTitle>
                    <p style={{textAlign: 'center'}}>Visit the website
                        &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://pathfinderdesigns.pt">here</motion.a> or view the
                        &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://winegrid.com">Behance project</motion.a> to see additional applications of the brand.</p>

                </MoreDetails>
                

            </Container>
        </Layout>
    )

}

export default WinegridPage

export const PathfinderLogoContainer = styled.div`

    svg {
        width: 150px;
        fill: var(--color-text);

    }
`

export const SectionTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 3em;
    margin-bottom: 50px;

    @media ${SITE_CONFIG.media.small} {
        font-size: 5em;
        margin-bottom: 100px;
    }
`
export const SwitchTheme = styled.p`
    color: var(--color-accent);
    transition: ${SITE_CONFIG.transitions.default};

    &:hover {
        color: var(--color-text);
    }
`