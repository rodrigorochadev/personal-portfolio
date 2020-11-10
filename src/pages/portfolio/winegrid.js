import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { Flutter } from '../../assets/svg/svg'
import { Container } from '../../styles/componentsStyles'
import { motion } from 'framer-motion'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { PageBannerContainer, PageBannerText } from '../../styles/pagesStyles'

const WinegridPage = () => {

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const data = useStaticQuery(graphql`
        query {
            winegrid: file(relativePath: {eq: "winegrid/winegrid.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            notes: file(relativePath: {eq: "winegrid/winegrid-notes.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            processes: file(relativePath: {eq: "winegrid/winegrid-processes.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            scan: file(relativePath: {eq: "winegrid/winegrid-scan.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

        }
    `);

    return(
        <Layout>
            <SEO  title="Winegrid Mobile App" />

            <Container>
                <PageBannerContainer>
                    <PageBannerText>Winegrid</PageBannerText>
                    <p>Mobile Application</p>
                </PageBannerContainer>

                <DesignChoicesText>About the project</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>This is my BSc project. It was a project proposed by the company Winegrid located in Ílhavo. The project was in group and I was responsible for the development of the mobile application.</p>
                    </InfoText>
                </InfoFlex>

                <DesignChoicesText>Who are winegrid?</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>Monitoring the winemaking process manually is very time and resource consuming. A late reaction and lose monitoring, leads to lower wine quality, and therefore revenue loss. Winegrid is a company that does real time vinification monitoring and bring the digital to the cellar, providing producers with realtime, remote and reliable data of five main productions variables, available in an online dashboard.</p>
                    </InfoText>
                </InfoFlex>
                
                <LastMockupFlex>
                    <MockupImg fluid={data.winegrid.childImageSharp.fluid} alt="Winegrid Preview" />
                </LastMockupFlex>

                <DesignChoicesText>The goal</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>Our goal was create a mobile application (Android and iOS) to:</p>
                        <p>01) Access sensor's data via Bluetooth Low Energy.</p>
                        <p>02) QR Code to quickly connect to a sensor or scan available devices via blueetooth.</p>
                        <p>03) Graphical display of the sensor's data.</p>
                        <p>04) Check process details and control the state.</p>
                        <p>05) Note taking capabilities.</p>
                    </InfoText>
                </InfoFlex>
                
                <LastMockupFlex>
                    <MockupImg fluid={data.processes.childImageSharp.fluid} alt="Winegrid Processes" />
                </LastMockupFlex>



                <DesignFlex>
                    <div>
                        <DesignChoicesText margin>Typography</DesignChoicesText>
                        <DesignChoicesFont style={{fontFamily: "'Questrial', sans-serif"}}>Questrial Typeface</DesignChoicesFont>
                        <p style={{fontFamily: "'Questrial', sans-serif", marginTop: '10px'}}>Regular - ABCD abcd 1234</p>
                        <p style={{fontFamily: "'Questrial', sans-serif", fontWeight: '700', marginTop: '10px'}}>Bold - ABCD abcd 1234</p>
                    </div>
                    <div>
                        <DesignChoicesText margin>Colors</DesignChoicesText>
                        <ColorFlex>
                            <ColorDiv style={{backgroundColor: '#121212'}} />
                            <ColorDiv style={{backgroundColor: '#981c35'}} />
                            <ColorDiv style={{backgroundColor: '#ffffff'}} />
                        </ColorFlex>
                    </div>
                    <div>
                        <DesignChoicesText margin>Technologies</DesignChoicesText>
                        <Flutter />
                    </div>
                </DesignFlex>

                <DesignChoicesText>Why Flutter?</DesignChoicesText>
                <InfoText>
                    <p>Since I was an absolute begginer at Mobile Development and UI/UX Design, I chose this framework for two main reasons. The first one is that it has a very detailed documentation and examples online, so it's easy to get started. The second was the fact that Flutter generates both Android and iOS applications, which was required for the project.</p>
                </InfoText>
                
                <InfoText>
                    <p>So why include this project, beeing an begginer in both fields? Well, this project openned my view on UI/UX Design as well as development of Mobile Applications. Even though it's not my best project, it's very important for me, since it helped me learn and get more interested in what I love to do.</p>
                </InfoText>
                    
                <LastMockupFlex>
                    <MockupImg fluid={data.scan.childImageSharp.fluid} alt="Scan" />
                    <MockupImg fluid={data.notes.childImageSharp.fluid} alt="Notes" />
                </LastMockupFlex>

                
                <MoreDetails>
                    <InfoTitle style={{textAlign: 'center'}}>More details?</InfoTitle>
                    <p style={{textAlign: 'center'}}>Check out the project full technical report
                        &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://shorturl.at/jtwDL">here</motion.a> or visit
                        &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://winegrid.com">winegrid website</motion.a> to learn more about the work!</p>

                </MoreDetails>
                

            </Container>
        </Layout>
    )

}

export default WinegridPage

export const MoreDetails = styled.div`
    margin: 75px 0 30px;

    @media ${SITE_CONFIG.media.small} {
        margin: 200px 0 75px;
    }
`

export const DesignFlex = styled.div`
    margin: 100px 0;

    display: flex;
    flex-direction: column;
    row-gap: 50px;
    justify-content: space-between;

    @media ${SITE_CONFIG.media.small} {
        margin: 200px 0;
        flex-direction: row;
        column-gap: 50px;
    }
`

export const InfoText = styled.div`
    z-index: 2;
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 80%;
    }

    /* @media ${SITE_CONFIG.media.medium} {
        width: 80%;
    } */

    @media ${SITE_CONFIG.media.large} {
        /* width: 70%; */

        p {
            line-height: 2.2rem;
        }
    }

    /* @media ${SITE_CONFIG.media.xlarge} {
        width: 80%;
    } */
`

export const InfoProject = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1 {
        text-transform: uppercase;
        /* font-family: ${SITE_CONFIG.fontFamilies.titles}; */
        font-size: 7em;
    }
    
`

export const ColorFlex = styled.div`
    display: flex;
    column-gap: 30px;
`

export const InfoFlex = styled.div`
    display: flex;
    margin-bottom: 100px;

`


// export const InfoDiv = styled.div`
//     width: 100%;

//     @media ${SITE_CONFIG.media.small} {
//         width: 80%;
//     }

//     @media ${SITE_CONFIG.media.small} {
//         width: 70%;
//     }

//     @media ${SITE_CONFIG.media.small} {
//         width: 60%;
//     }
// `

export const InfoTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 3em;

    @media ${SITE_CONFIG.media.small} {
        font-size: 5em;
    }

    @media ${SITE_CONFIG.media.medium} {
        font-size: 6em;
    }
`

export const ColorDiv = styled.div`

    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 1px solid var(--color-text);
`

export const DesignChoicesText = styled.div`
    text-transform: uppercase;
    font-size: 1.1rem;
    font-weight: bold;
    opacity: 0.8;

    ${props => props.margin && css`
        margin-bottom: 30px;
    `}
`

export const DesignChoicesFont = styled.div`
    font-size: 2rem;
`
export const LastMockupFlex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 100px 0;
    row-gap: 80px;

    @media screen and (min-width: 1200px) {
        flex-direction: row;
    }
`


export const MockupImg = styled(Img)`

    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 600px;
    }
    
`