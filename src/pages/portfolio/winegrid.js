import { graphql, useStaticQuery } from 'gatsby'
import React, {useState} from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import Img from 'gatsby-image'
import styled, { css } from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import InfoDetails from '../../components/Pages/InfoDetails'
// import { DesktopAboutFlex, AboutImgContainer, AboutImg, AboutText, AboutH2, AboutImgParallax } from '../../styles/components/aboutStyles'
// import useMousePosition from '../../hooks/useMousePosition'
// import usePageOfssetY from '../../hooks/usePageOffsetY'
import { Flutter } from '../../assets/svg/svg'
import { BigTitle, Container } from '../../styles/componentsStyles'
import { motion } from 'framer-motion'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'

const WinegridPage = () => {

    // const {x, y} = useMousePosition()

    // const offsetY = usePageOfssetY()

    // const [hoverState, setHoverState] = useState(false)
    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const data = useStaticQuery(graphql`
        query {
            winegrid: file(relativePath: {eq: "winegrid.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            notes: file(relativePath: {eq: "winegrid-notes.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            processes: file(relativePath: {eq: "winegrid-processes.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            scan: file(relativePath: {eq: "winegrid-scan.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }

        }
    `);

    return(
        <Layout>
            <SEO  title="Winegrid Mobile App" />

            <Container>
                <InfoProject>
                    <h1>Winegrid</h1>
                    <p>Mobile Application</p>
                </InfoProject>

                {/* <InfoTitle>About</InfoTitle> */}
                <DesignChoicesText>About the project</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>This is my BSc project. It was a project proposed by the company Winegrid located in Ílhavo. The project was in group and I was responsible for the development of the mobile application.</p>
                    </InfoText>
                </InfoFlex>

                <div style={{marginBottom: '50px'}}></div>
                <DesignChoicesText>Who are winegrid?</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>Monitoring the winemaking process manually is very time and resource consuming. A late reaction and lose monitoring, leads to lower wine quality, and therefore revenue loss. Winegrid is a company that does real time vinification monitoring and bring the digital to the cellar, providing producers with realtime, remote and reliable data of five main productions variables, available in an online dashboard.</p>
                    </InfoText>
                </InfoFlex>
                
                <div style={{marginBottom: '100px'}}></div>
                
                <InfoFlex center>
                    <Img fluid={data.winegrid.childImageSharp.fluid} alt="Winegrid Preview" style={{width: '600px'}}/>
                </InfoFlex>

                <div style={{marginBottom: '100px'}}></div>
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

                <div style={{marginBottom: '100px'}}></div>
                
                <InfoFlex center>
                    <Img fluid={data.processes.childImageSharp.fluid} alt="Winegrid Processes" style={{width: '700px'}}/>
                </InfoFlex>



                <div style={{marginBottom: '200px'}}></div>

                {/* <InfoTitle>Design Choices</InfoTitle> */}
                <div style={{marginBottom: '20px'}}></div>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div >
                        <DesignChoicesText>Typography</DesignChoicesText>
                        <div style={{marginBottom: '30px'}}></div>
                        <DesignChoicesFont style={{fontFamily: "'Questrial', sans-serif"}}>Questrial Typeface</DesignChoicesFont>
                        <p style={{fontFamily: "'Questrial', sans-serif", marginTop: '10px'}}>Regular - ABCD abcd 1234</p>
                        <p style={{fontFamily: "'Questrial', sans-serif", fontWeight: '700', marginTop: '10px'}}>Bold - ABCD abcd 1234</p>
                        <div style={{marginBottom: '50px'}}></div>
                    </div>
                    <div>
                        <DesignChoicesText>Colors</DesignChoicesText>
                        <div style={{marginBottom: '30px'}}></div>
                        <div style={{display: 'flex', columnGap: '30px'}}>
                            <ColorDiv style={{backgroundColor: '#121212'}} />
                            <ColorDiv style={{backgroundColor: '#981c35'}} />
                            <ColorDiv style={{backgroundColor: 'white'}} />
                        </div>
                        <div style={{marginBottom: '30px'}}></div>
                        {/* <p>#000000</p>
                        <p>#981c35</p>
                        <p>#121212</p> */}
                    </div>
                    <div>
                        <DesignChoicesText>Technologies</DesignChoicesText>
                        <div style={{marginBottom: '30px'}}></div>
                        <Flutter />
                    </div>
                </div>

                <div style={{marginBottom: '200px'}}></div>
                <DesignChoicesText>Why Flutter?</DesignChoicesText>
                <InfoText>
                    <p>Since I was an absolute begginer at Mobile Development and UI/UX Design, I chose this framework for two main reasons. The first one is that it has a very detailed documentation and examples online, so it's easy to get started. The second was the fact that Flutter generates both Android and iOS applications, which was required for the project.</p>
                </InfoText>
                
                <div style={{marginBottom: '50px'}}></div>
                <InfoText>
                    <p>So why include this project, beeing an begginer in both fields? Well, this project openned my view on UI/UX Design as well as development of Mobile Applications. Even though it's not my best project, it's very important for me, since it helped me learn and get more interested in what I love to do.</p>
                </InfoText>
                    

                <div style={{marginBottom: '200px'}}></div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: "center"}}>
                    <div style={{display: 'flex'}} >
                        <Img fluid={data.scan.childImageSharp.fluid} alt="Scan" style={{width: '500px'}}/>
                        <Img fluid={data.notes.childImageSharp.fluid} alt="Notes" style={{width: '500px'}}/>
                    </div>
                </div>

                
                <div style={{marginBottom: '200px'}}></div>
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
                <div style={{marginBottom: '200px'}}></div>


            </Container>
        </Layout>
    )

}

export const InfoText = styled.div`
    z-index: 2;

    @media ${SITE_CONFIG.media.medium} {
        width: 50%;
    }

    @media ${SITE_CONFIG.media.large} {
        width: 75%;

        p {
            line-height: 2.2rem;
        }
    }

    @media ${SITE_CONFIG.media.xlarge} {
        width: 80%;
    }
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

export default WinegridPage


export const InfoFlex = styled.div`
    display: flex;

    ${props => props.right && css`
        justify-content: right;
    `};

    ${props => props.center && css`
        justify-content: center;
    `};
`


export const InfoDiv = styled.div`
    width: 60%;
`

export const InfoTitle = styled.div`
    font-family: ${SITE_CONFIG.fontFamilies.titles};
    font-size: 6em;
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
`

export const DesignChoicesFont = styled.div`
    font-size: 2rem;
`
