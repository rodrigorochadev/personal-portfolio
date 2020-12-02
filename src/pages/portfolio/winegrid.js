import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Container, Description, DivMargin, Flex } from '../../styles/componentsStyles'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { LastMockupFlex, TypeImg, PageBannerContainer, PageBannerText, ProjectSubTitle, ProjectInfoTableFlex, ProjectInfoTable, CustomImg } from '../../styles/pagesStyles'
import ProjectInfo from '../../components/Design/ProjectInfo'
import Img from 'gatsby-image'

import NavigateProjects from '../../components/Design/NavigateProjects'
import { ThemeContext } from '../../components/ThemeContext'

import Scroll from '../../components/Design/Scroll'

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

                <DivMargin>
                    <ProjectInfoTableFlex>
                        <ProjectInfoTable>
                            <ProjectInfo type="Project" description="Mobile Application" />
                            <ProjectInfo type="Role" description="Developer/Designer" />
                            <ProjectInfo type="Year" description="2019" />
                            <ProjectInfo type="Website" link="winegrid.com" />
                        </ProjectInfoTable>
                    </ProjectInfoTableFlex>
                </DivMargin>
                    
                <DivMargin>
                    <ProjectSubTitle>Background</ProjectSubTitle>
                    <Description>
                        WINEGRID Mobile App was my BSc project. It was proposed by the company with the same name. It was a group project, and I was responsible for the development of the mobile application. Since then, WINEGRID had gone through some visual changes, but the concept remains the same.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>A Winemaker's unique tool</ProjectSubTitle>
                    <Description>
                        WINEGRID delivers a fully integrated remote and real-time solution for smart monitoring of the winemaking process.
                        <br />With WINEGRID’s proprietary technology, hardware, software, computational platform and visualization interface, the winemaker has the opportunity to use precise and accurate solutions to improve wine production. The technology already helped the production of 150 million wine bottles by monitoring and optimizing the wine production.
                        <br />All data is available on the WINEGRID Dashboard which can be accessed online through any device, at any time.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <Img fluid={data.website.childImageSharp.fluid} alt="Winegrid Preview"/>
                </DivMargin>
          
                <DivMargin>
                    <ProjectSubTitle>The problem</ProjectSubTitle>
                    <Description>
                        Monitoring the winemaking process manually is very time and resource consuming. A late reaction and lose monitoring, leads to lower wine quality, and therefore revenue loss. WINEGRID is a company that does real time vinification monitoring and bring the digital to the cellar, providing producers with real time, remote and reliable data of five main productions variables, available in an online dashboard. To make the job of the cellar worker easier, we've developed a mobile application, with all the available options in the dashboard (and more!) one smartphone away.
                    </Description>
                </DivMargin>
                
                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.login.childImageSharp.fluid} alt="WINEGRID Login" />
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.sensors.childImageSharp.fluid} alt="WINEGRID Sensors"/>
                    </LastMockupFlex>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>The goal</ProjectSubTitle>
                    <Description>
                        Our goal was to create a mobile application (Android and iOS) with a few capabilities. <br />
                        01) Access sensor's data via Bluetooth Low Energy.<br />
                        02) Connection to a sensor via QR Code for a quick connection (alternatively through a list of available devices).<br />
                        03) Graphical display of the sensor's data.<br />
                        04) Check process details and control the state (start or stop).<br />
                        05) Note taking capabilities.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>More Screenshots</ProjectSubTitle>
                    <LastMockupFlex>
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.qrScanner.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.noteCreate.childImageSharp.fluid} alt="WINEGRID Login" style={{marginBottom: '50px'}} />
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.noteList.childImageSharp.fluid} alt="WINEGRID Sensors" style={{marginBottom: '50px'}} />
                    </LastMockupFlex>
                </DivMargin>
                
                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.processList.childImageSharp.fluid} alt="WINEGRID Sensors" />
                        <CustomImg width="200px" maxWidth="300px" shaddow fluid={data.processDetails.childImageSharp.fluid} alt="WINEGRID Sensors" />
                    </LastMockupFlex>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Typography & Colors</ProjectSubTitle>
                    <LastMockupFlex justifyLeft>
                        {colorMode === 'light' ?
                            <TypeImg fluid={data.colorsTypoLight.childImageSharp.fluid} alt="Colors and Typography" />
                            :
                            <TypeImg fluid={data.colorsTypoDark.childImageSharp.fluid} alt="Colors and Typography" />
                        }
                    </LastMockupFlex>
                </DivMargin>
                
                <DivMargin>
                    <ProjectSubTitle>Why Flutter?</ProjectSubTitle>
                    <Description>
                        Since I was an absolute beginner at Mobile Development and UI/UX Design, I chose this framework for two main reasons. The first one is that it has a very detailed documentation and online examples, so it's easy to get started. The second was the fact that Flutter generates both Android and iOS applications, which was required for the project.<br />
                            So why include this project, being a beginner in both fields? Well, this project opened my view on UI/UX Design, as well as development of Mobile Applications. Even though it's not my best project, it's very important for me, since it helped me learn and get more interested in what I love to do.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Extra Details</ProjectSubTitle>
                    
                    <Description>
                        Read the project full technical report&nbsp;
                        <a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://shorturl.at/jtwDL">here</a> or visit&nbsp;
                        <a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://winegrid.com">WINEGRID website</a> to learn more about their work!
                    </Description>
                </DivMargin>
                
                <DivMargin>
                    <NavigateProjects 
                        next="Pathfinder Desgins"
                        nextLink="/portfolio/pathfinder-designs"
                    />
                </DivMargin>

            </Container>
        </Layout>
    )

}

export default WinegridPage


