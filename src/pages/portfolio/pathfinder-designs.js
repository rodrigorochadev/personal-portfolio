import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Container } from '../../styles/componentsStyles'
import { motion } from 'framer-motion'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { CustomImg, InfoFlex, InfoText, LastMockupFlex, MockupImg, PageBannerContainer, PageBannerText, PageFlex, PageImage, ProjectSubTitle, TypeImg } from '../../styles/pagesStyles'
import { ThemeContext } from '../../components/ThemeContext'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import Img from 'gatsby-image'

import NavigateProjects from '../../components/Design/NavigateProjects'
import Scroll from '../../components/Design/Scroll'
import ProjectInfo from '../../components/Design/ProjectInfo'

const WinegridPage = () => {

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {eq: "pathfinder-designs/logo.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 1080, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            logoBadge: file(relativePath: {eq: "pathfinder-designs/pfd-badge.png"}) {
                childImageSharp {
                    fluid(maxWidth: 300, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            colorsTypoLight: file(relativePath: {eq: "pathfinder-designs/pathfinder-colors-typo-light.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            colorsTypoDark: file(relativePath: {eq: "pathfinder-designs/pathfinder-colors-typo-dark.png"}) {
                childImageSharp {
                    fluid(maxWidth: 600, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            perfDesktop: file(relativePath: {eq: "pathfinder-designs/pfd-performance-desktop.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            perfMobile: file(relativePath: {eq: "pathfinder-designs/pfd-performance-mobile.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            gtmetrixSpeed: file(relativePath: {eq: "pathfinder-designs/gtmetrix-pfd-pagespeed.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            gtmetrixDetails: file(relativePath: {eq: "pathfinder-designs/gtmetrix-pfd-pagedetails.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            pfdShowcase: file(relativePath: {eq: "pathfinder-designs/pfd-showcase.png"}) {
                childImageSharp {
                    fluid(maxWidth: 1080, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mockup01: file(relativePath: {eq: "pathfinder-designs/mockup01.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mockup02: file(relativePath: {eq: "pathfinder-designs/mockup02.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mockup03: file(relativePath: {eq: "pathfinder-designs/mockup03.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mockup04: file(relativePath: {eq: "pathfinder-designs/mockup04.jpg"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mockup05: file(relativePath: {eq: "pathfinder-designs/mockup05.png"}) {
                childImageSharp {
                    fluid(maxWidth: 500, quality: 70) {
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `);

    const { colorMode } = useContext(ThemeContext);
 
    return(
        <Layout>
            <SEO  title="Pathfinder Designs" />
            <Scroll bottom="30%" right="30%"/>
            <Container>
                <PageBannerContainer>
                    <PageBannerText>Pathfinder</PageBannerText>
                    <PageBannerText outline>Designs</PageBannerText>
                </PageBannerContainer>

                
                
                <ProjectInfoTableFlex>
                    <ProjectInfoTable>
                        <ProjectInfo type="Project" description="Branding" />
                        <ProjectInfo type="Role" description="Developer/Designer" />
                        <ProjectInfo type="Year" description="2020" />
                        <ProjectInfo type="Website" link="pathfinderdesigns.pt" />
                    </ProjectInfoTable>
                </ProjectInfoTableFlex>

                <ProjectSubTitle>About the project</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>A personal project of mine. Create a brand from scratch, since the logo design, visual identity, website and social media. This project is not intended to be used in real life. The main purpose of this project was to test my design capabilities and decision making.</p>
                    </InfoText>
                </InfoFlex>

                <ProjectSubTitle>Designing the Logo</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>I designed the logo according to Sagi Haviv's three main rules of logo design.</p>
                        <p>01) Appropriate</p>
                        <p>02) Distinctive</p>
                        <p>03) Simple</p>
                        <br />
                        <p>I wanted the logo to be black and white, so it would fit everywhere without contrast problems. You can see why this is important in this website by switching between dark and light mode.</p>
                        <p> Additionaly, the logo should remain legible at every scale. A very small one, like the favicon of a website, or a very big one, like a billboard.</p>
                        <br />
                        <p>After many sketches and redraws, I've came up with the final logo: </p>
                    </InfoText>
                </InfoFlex>
                
                <LastMockupFlex>
                    <CustomImg maxWidth="1080px" fluid={data.logo.childImageSharp.fluid} alt="Winegrid Preview" style={{marginBottom: '50px'}}/>
                </LastMockupFlex>
                
                <InfoFlex>
                    <InfoText>
                        <p>I also designed the logo on a badge. For a more casual setting, like social media profiles pictures.</p>
                    </InfoText>
                </InfoFlex>

                <LastMockupFlex>
                    <MockupImg fluid={data.logoBadge.childImageSharp.fluid} alt="Winegrid Preview" style={{marginBottom: '50px', maxWidth: '300px'}}/>
                </LastMockupFlex>
                
                <ProjectSubTitle>Typography & Colors</ProjectSubTitle>
                <LastMockupFlex justifyLeft>
                    {colorMode === 'light' ?
                        <TypeImg fluid={data.colorsTypoLight.childImageSharp.fluid} alt="Colors and Typography" style={{marginBottom: '50px'}} />
                        :
                        <TypeImg fluid={data.colorsTypoDark.childImageSharp.fluid} alt="Colors and Typography" style={{marginBottom: '50px'}} />
                    }
                </LastMockupFlex>
                
                <div style={{marginTop: '100px'}}></div>
                <ProjectSubTitle>Logo Applications</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>Now we can take a look at some applications, using the logo. Since the logo is very simple, applying the logo to various types of products is easy and natural.</p>
                    </InfoText>
                </InfoFlex>

                <LastMockupFlex>
                    <CustomImg maxWidth="500px" fluid={data.mockup01.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                    <CustomImg maxWidth="500px" fluid={data.mockup02.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                    <CustomImg maxWidth="500px" fluid={data.mockup03.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                    <CustomImg maxWidth="500px" fluid={data.mockup04.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                    <CustomImg maxWidth="500px" fluid={data.mockup05.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                </LastMockupFlex>
                {/* <div style={{display: 'flex', marginBottom: '100px'}}>
                    <PageBannerText>Website&nbsp;</PageBannerText>
                    <PageBannerText outline>.</PageBannerText>
                    <PageBannerText>.</PageBannerText>
                </div> */}

                <ProjectSubTitle>Designing and development of the website</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>For the design of the website, I did what I do almost every time I develop a website, which is create a first draft in a piece of paper. The content of the website, the images, and so on. Next, I replicated what I did in the paper, into a design software. I use Figma, because it's free and easy to use.</p>
                        <p>The development of the website was done in Gatsby.</p>
                        
                    </InfoText>
                </InfoFlex>

                <LastMockupFlex>
                    <CustomImg maxWidth="1080px" fluid={data.pfdShowcase.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                </LastMockupFlex>

                <ProjectSubTitle>Website quality</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>My main focus while developing the website was implementing all the UI/UX best practices, taking into consideration, performance, accessibility, SEO. To give it a "numeric value", I used <b>GTMetrix</b> and <b>Google Lighthouse</b>.</p>
                    </InfoText>
                </InfoFlex>

                <InfoFlex>
                    <div>
                        <h2>GTMetrix</h2>
                        <InfoText>
                            <p>The following images represent the results in GTMetrix. Those beeing, <b>Performance Scores</b> and <b>Page Details</b>, respectively. </p>
                        </InfoText>
                    </div>
                </InfoFlex>
                

                <PageFlex>
                    <PageImage>
                        <Img fluid={data.gtmetrixSpeed.childImageSharp.fluid} alt="GTMetrix Page Speed"/>
                    </PageImage>
                    <PageImage>
                        <Img fluid={data.gtmetrixDetails.childImageSharp.fluid} alt="GTMetrix Page Details"/>
                    </PageImage>
                </PageFlex>
                <p>Check GTMetrix report&nbsp;<motion.a 
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    href="https://gtmetrix.com/reports/pathfinderdesigns.pt/oQylhy5o">here</motion.a>.
                </p>
                <div style={{marginBottom: '50px'}}></div>
                <InfoFlex>
                    <div>
                        <h2>Google Lighthouse</h2>
                        <InfoText>       
                            <p>Bellow, are the Google Lighthouse performance results, on <b>mobile</b> and <b>desktop</b>, respectively.</p>
                        </InfoText>
                    </div>
                </InfoFlex>

                <PageFlex>
                    <PageImage>
                        <Img fluid={data.perfDesktop.childImageSharp.fluid} alt="Performance on Desktop: 100"/>
                    </PageImage>
                    <PageImage>
                        <Img fluid={data.perfMobile.childImageSharp.fluid} alt="Performance on Mobile: 99"/>
                    </PageImage>
                </PageFlex>

                <p>Check Google Lighthouse report&nbsp;<motion.a 
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    href="https://developers.google.com/speed/pagespeed/insights/?url=https://pathfinderdesigns.pt">here</motion.a>.
                </p>
                <div style={{marginBottom: '50px'}}></div>
                
                
                <ProjectSubTitle>Extra Details</ProjectSubTitle>
                <InfoFlex>
                    <InfoText>
                        <p>Visit the website
                            &nbsp;<motion.a 
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                href="https://pathfinderdesigns.pt">here</motion.a> or view the
                            &nbsp;<motion.a 
                                onMouseEnter={() => onCursor('hovered')}
                                onMouseLeave={onCursor}
                                href="https://winegrid.com">Behance project</motion.a> to see additional applications of the brand.</p>
                    </InfoText>
                </InfoFlex>
                <NavigateProjects 
                    previous="Winegrid Mobile App"
                    previousLink="/portfolio/winegrid"
                    next="School Manager"
                    nextLink="/portfolio/under-construction"
                />

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

export const ProjectInfoTableFlex = styled.div`
    margin: 100px 0; 
    display: flex;
    justify-content: right;
    align-items: center;
`

export const ProjectInfoTable = styled.div`
    width: 100%;

    @media ${SITE_CONFIG.media.small} {
        width: 700px;
    }
`