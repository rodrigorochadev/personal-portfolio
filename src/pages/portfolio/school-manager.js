import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Flutter } from '../../assets/svg/svg'
import { Container } from '../../styles/componentsStyles'
// import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { ColorDiv, ColorFlex, DesignChoicesFont, DesignChoicesText, DesignFlex, InfoFlex, InfoText, InfoTitle, LastMockupFlex, MoreDetails, PageBannerContainer, PageBannerText, TechnologiesFlex } from '../../styles/pagesStyles'
import Img from 'gatsby-image'
import firebaseLogo from '../../assets/svg/firebase.svg'
import { SITE_CONFIG } from '../../constants'
import styled from 'styled-components'

const SchoolManagerPage = () => {

    // const { cursorStyles } = useGlobalStateContext()
    // const dispatch = useGlobalDispatchContext()

    // const onCursor = cursorType => {
    //   cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    //   dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    // }

    const data = useStaticQuery(graphql`
        query {
            locationMap: file(relativePath: {eq: "schoolmanager/sm-location-map.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            share: file(relativePath: {eq: "schoolmanager/sm-share-screen.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            statistics: file(relativePath: {eq: "schoolmanager/sm-statistics.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            timeline: file(relativePath: {eq: "schoolmanager/sm-timeline.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
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
                <PageBannerContainer>
                    <PageBannerText>School</PageBannerText>
                    <PageBannerText>Manager</PageBannerText>
                    <p>Mobile Application</p>
                </PageBannerContainer>

                <DesignChoicesText>Context</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>Every year almost 20 million students enter college, and to be successful, organization is key. Stay in touch with every exam, class or classmate. With School Manager, you don’t have the need to learn alone, as it provides features to help your friends by sharing documents of a specific course or knowing if a teacher is available to meet you at the moment. School Manager is the application to help you, the student, achieve your life goals, step by step.</p>
                    </InfoText>
                </InfoFlex>

                <DesignChoicesText>About the project</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>This was an academic project divided into two stages. The first stage was focused on user interaction and usability. Per last, bring the application to life.</p>
                    </InfoText>
                </InfoFlex>

                {/* <LastMockupFlex>
                    <MockupImg fluid={data.winegrid.childImageSharp.fluid} alt="Winegrid Preview" />
                </LastMockupFlex> */}

                <DesignChoicesText>Features</DesignChoicesText>
                <InfoFlex>
                    <InfoText>
                        <p>School Manager’s main objective is to provide the student, a simple way of organizing his life. With a clean, simple and user friendly design, our application provides:</p>
                        <p>01) Notebook. Don’t forget an appointment, class or exam. Save the note and if needed, set an alarm to a specified day and time.</p>
                        <p>02) Schedule. Displaying your weekly schedule.</p>
                        <p>03) Courses. A list of courses with their respective details. Every course contains a community area, where class material is shared.</p>
                        <p>04) Calendar. A calendar with your appointments.</p>
                        <p>05) A map of your campus, with all important places marked, and instructions on how to get there.</p>
                    </InfoText>
                </InfoFlex>
            
                {/* <LastMockupFlex>
                    <MockupImg fluid={data.processes.childImageSharp.fluid} alt="Winegrid Processes" />
                </LastMockupFlex> */}



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
                            <ColorDiv style={{backgroundColor: '#1E90FF'}} />
                            <ColorDiv style={{backgroundColor: '#121212'}} />
                            <ColorDiv style={{backgroundColor: '#ffffff'}} />
                        </ColorFlex>
                    </div>
                    <div>
                        <DesignChoicesText margin>Technologies</DesignChoicesText>
                        <TechnologiesFlex>
                            <Flutter />
                            <img src={firebaseLogo} alt="Firebase" style={{height: '50px'}} />
                        </TechnologiesFlex>
                        
                    </div>
                </DesignFlex>

                <DesignChoicesText>Why include this project?</DesignChoicesText>
                <InfoText>
                    <p>This project was my first approach at user interaction and usability. It helped me understand how to develop a mobile application from the start. Thinking of the system, prototyping (papper or digital), gathering and analysing the test results to create a better final product.</p>
                </InfoText>
    
                    
                {/* <LastMockupFlex>
                    <MockupImg fluid={data.scan.childImageSharp.fluid} alt="Scan" />
                    <MockupImg fluid={data.notes.childImageSharp.fluid} alt="Notes" />
                </LastMockupFlex> */}

                
                <MoreDetails>
                    <InfoTitle style={{textAlign: 'center'}}>More screenshots</InfoTitle>
                </MoreDetails>

                <LastMockupFlex>
                    <SMMockupImg fluid={data.locationMap.childImageSharp.fluid} alt="Location Map" />
                    <SMMockupImg fluid={data.statistics.childImageSharp.fluid} alt="Statistics" />
                    <SMMockupImg fluid={data.share.childImageSharp.fluid} alt="Share Screen" />
                </LastMockupFlex>
                <LastMockupFlex>
                    <SMMockupImg fluid={data.timeline.childImageSharp.fluid} alt="Timeline" />
                </LastMockupFlex>

            </Container>
        </Layout>
    )
}

export default SchoolManagerPage

export const SMMockupImg = styled(Img)`

    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 300px;
    }
    
`