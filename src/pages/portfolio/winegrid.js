import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Container, Flex } from '../../styles/componentsStyles'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import {InfoFlex, InfoText, LastMockupFlex, MockupImg, TypeImg, PageBannerContainer, PageBannerText, ProjectSubTitle } from '../../styles/pagesStyles'
import ProjectInfo from '../../components/Design/ProjectInfo'
import Img from 'gatsby-image'

import NavigateProjects from '../../components/Design/NavigateProjects'
import { ThemeContext } from '../../components/ThemeContext'

import Scroll from '../../components/Design/Scroll'
import { AnimatePresence, motion } from 'framer-motion'

const WinegridPage = () => {

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const { colorMode } = useContext(ThemeContext);

    const data = useStaticQuery(graphql`
        query {
            website: file(relativePath: {eq: "winegrid/website.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1340, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            colorsTypoLight: file(relativePath: {eq: "winegrid/winegrid-colors-typo-light.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            colorsTypoDark: file(relativePath: {eq: "winegrid/winegrid-colors-typo-dark.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            login: file(relativePath: {eq: "winegrid/winegrid-login.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            sensors: file(relativePath: {eq: "winegrid/winegrid-sensors.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            noteCreate: file(relativePath: {eq: "winegrid/winegrid-note-create.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            noteList: file(relativePath: {eq: "winegrid/winegrid-note-list.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            processList: file(relativePath: {eq: "winegrid/winegrid-process-list.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            processDetails: file(relativePath: {eq: "winegrid/winegrid-process-details.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            qrScanner: file(relativePath: {eq: "winegrid/winegrid-qr-scanner.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }

        }
    `);

    return(
        <Layout>
        <SEO  title="Winegrid Mobile App" />
        
            <Scroll bottom="300px" right="450px"/>
            <Container>
                <PageBannerContainer>
                    
                    <PageBannerText>Winegrid</PageBannerText>
                    <Flex>
                        <PageBannerText outline>Mobile&nbsp;</PageBannerText>
                        <PageBannerText outline>App</PageBannerText>
                    </Flex>
                    
                </PageBannerContainer>

                <div style={{margin: '100px 0', display: 'flex', justifyContent: 'right', alignItems: 'center'}}>
                    <div style={{width: '700px'}}>
                        <ProjectInfo type="Project" description="Mobile Application" />
                        <ProjectInfo type="Role" description="Developer/Designer" />
                        <ProjectInfo type="Year" description="2019" />
                        <ProjectInfo type="Website" link="https://www.winegrid.com" />
                    </div>
                </div>

                <ProjectSubTitle>Background</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>WINEGRID Mobile App was my BSc project. It was proposed by the company with the same name. It was a group project and I was responsible for the development of the mobile application. Since then, WINEGRID had gone through some visual changes, but the concept remains the same.</p>
                    </InfoText>
                </InfoFlex>

                <ProjectSubTitle>A Winemaker's unique tool</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>WINEGRID delivers a fully integrated remote and real-time solution for smart monitoring of the winemaking process.
                        <br />With WINEGRID’s proprietary technology, hardware, software, computational platform and visualization interface, the winemaker has the opportunity to use precise and accurate solutions to improve wine production. The technology already helped the production of 150 million wine bottles by monitoring and optimizing the wine production.
                        <br />All data is available on the WINEGRID Dashboard which can be accessed online through any device, at any time.</p>
                    </InfoText>
                </InfoFlex>

                <Img fluid={data.website.childImageSharp.fluid} alt="Winegrid Preview" style={{marginBottom: '50px'}}/>

                

                <ProjectSubTitle>The problem</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>Monitoring the winemaking process manually is very time and resource consuming. A late reaction and lose monitoring, leads to lower wine quality, and therefore revenue loss. WINEGRID is a company that does real time vinification monitoring and bring the digital to the cellar, providing producers with realtime, remote and reliable data of five main productions variables, available in an online dashboard. To make the job of the cellar worker easier, we've developed a mobile application, with all the available options in the dashboard (and more!) one smartphone away.</p>
                    </InfoText>
                </InfoFlex>
                
                <LastMockupFlex>
                    <MockupImg shaddow fluid={data.login.childImageSharp.fluid} alt="WINEGRID Login" style={{marginBottom: '50px'}} />
                    <MockupImg shaddow fluid={data.sensors.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                </LastMockupFlex>

                <ProjectSubTitle>The goal</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>Our goal was to create a mobile application (Android and iOS) with a few capabilities.</p>
                        <p>01) Access sensor's data via Bluetooth Low Energy.</p>
                        <p>02) Connection to a sensor via QR Code for a quick connection (alternatively through a list of available devices).</p>
                        <p>03) Graphical display of the sensor's data. </p>
                        <p>04) Check process details and control the state. (start or stop)</p>
                        <p>05) Note taking capabilities.</p>
                    </InfoText>
                </InfoFlex>

                <ProjectSubTitle>More Screenshots</ProjectSubTitle>

                <LastMockupFlex>
                    <MockupImg shaddow fluid={data.qrScanner.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                    <MockupImg shaddow fluid={data.noteCreate.childImageSharp.fluid} alt="WINEGRID Login" style={{marginBottom: '50px'}} />
                    <MockupImg shaddow fluid={data.noteList.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                </LastMockupFlex>
                
                <LastMockupFlex>
                    <MockupImg shaddow fluid={data.processList.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                    <MockupImg shaddow fluid={data.processDetails.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                </LastMockupFlex>

                <ProjectSubTitle>Typography & Colors</ProjectSubTitle>
                <LastMockupFlex justifyLeft>
                    {colorMode === 'light' ?
                        <TypeImg fluid={data.colorsTypoLight.childImageSharp.fluid} alt="Colors and Typography" style={{marginBottom: '50px'}} />
                        :
                        <TypeImg fluid={data.colorsTypoDark.childImageSharp.fluid} alt="Colors and Typography" style={{marginBottom: '50px'}} />
                    }
                </LastMockupFlex>

                <ProjectSubTitle>Why Flutter?</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>Since I was an absolute begginer at Mobile Development and UI/UX Design, I chose this framework for two main reasons. The first one is that it has a very detailed documentation and online examples, so it's easy to get started. The second was the fact that Flutter generates both Android and iOS applications, which was required for the project.</p>
                        <p>So why include this project, beeing an begginer in both fields? Well, this project openned my view on UI/UX Design as well as development of Mobile Applications. Even though it's not my best project, it's very important for me, since it helped me learn and get more interested in what I love to do.</p>
                    </InfoText>
                </InfoFlex>

                <ProjectSubTitle>Extra Details</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>Check out the project full technical report&nbsp;
                            <a 
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                href="https://shorturl.at/jtwDL">here</a> or visit&nbsp;
                            <a 
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                href="https://winegrid.com">WINEGRID website</a> to learn more about their work!
                        </p>
                    </InfoText>
                </InfoFlex>
                
            <NavigateProjects 
                next="Pathfinder Desgins"
                nextLink="/portfolio/pathfinder-designs"
            />

            </Container>
        </Layout>
    )

}

export default WinegridPage


