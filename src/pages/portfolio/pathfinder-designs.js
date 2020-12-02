import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import Layout from '../../components/Layout'
import SEO from '../../components/Seo'
import { Container, Description, DivMargin } from '../../styles/componentsStyles'
import { motion } from 'framer-motion'
import { useGlobalStateContext, useGlobalDispatchContext } from '../../context/globalContext'
import { CustomImg, LastMockupFlex, PageBannerContainer, PageBannerText, ProjectInfoTable, ProjectInfoTableFlex, ProjectSubTitle, TypeImg } from '../../styles/pagesStyles'
import { ThemeContext } from '../../components/ThemeContext'

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
            <Scroll />
            <Container>
                <PageBannerContainer>
                    <PageBannerText>Pathfinder</PageBannerText>
                    <PageBannerText outline>Designs</PageBannerText>
                </PageBannerContainer>

                
                <DivMargin>
                    <ProjectInfoTableFlex>
                        <ProjectInfoTable>
                            <ProjectInfo type="Project" description="Branding" />
                            <ProjectInfo type="Role" description="Developer/Designer" />
                            <ProjectInfo type="Year" description="2020" />
                            <ProjectInfo type="Website" link="pathfinderdesigns.pt" />
                        </ProjectInfoTable>
                    </ProjectInfoTableFlex>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>About the project</ProjectSubTitle>
                    <Description>
                        A personal project of mine. Create a brand from scratch, since the logo design, visual identity, website and social media. It is a fictional company that does Web Development and Graphic Design. This project is <b>NOT</b> intended to be used in real life, and only to test my design capabilities and decision making.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Find your path</ProjectSubTitle>
                    <Description>
                        Every brand deserves a platform and a place to show their potencial. Nowadays, with the Internet it's easier to show yourself to people, but is easier to get "burried" with all the competition. That means you need to stand-out.<br />
                        We elevate your business to the next nevel, with a better visual identity and a better digital presence.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Designing the Logo</ProjectSubTitle>
                    <Description>
                        I designed the logo according to Sagi Haviv's three main rules of logo design.<br />
                        <b>01)</b> Appropriate<br />
                        <b>02)</b> Distinctive<br />
                        <b>03)</b> Simple<br />
                        
                        Just like every logo I create, I like to start by doing sketches in a piece of paper. It helps me make fast and easy ideas, so in the end I can choose the one that I like the most. <br />
                        Following the sketching phase, I use Adobe Illustrator to trace the logo in black and white, so it would fit everywhere without contrast problems. Later I add (or don't) the color. The logo should remain legible at every scale. A very small one, like the favicon of a website, or a very big one, like a billboard.<br />
                        
                        After many sketches and redraws, I've come up with the final logo: <br />
                    </Description>
                </DivMargin>
                
                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg maxWidth="1080px" fluid={data.logo.childImageSharp.fluid} alt="Winegrid Preview" />
                    </LastMockupFlex>
                </DivMargin>
                
                <DivMargin>
                    <Description>Since most social medias profile pictures are displayed in a circular container, I also designed the logo on a circular badge.</Description>
                </DivMargin>

                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg width="200px" maxWidth="300px" fluid={data.logoBadge.childImageSharp.fluid} alt="Winegrid Preview" />
                    </LastMockupFlex>    
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Typography & Colors</ProjectSubTitle>
                    <LastMockupFlex justifyLeft>
                        {colorMode === 'light' ?
                            <TypeImg fluid={data.colorsTypoLight.childImageSharp.fluid} alt="Colors and Typography Light" />
                            :
                            <TypeImg fluid={data.colorsTypoDark.childImageSharp.fluid} alt="Colors and Typography Dark" />
                        }
                    </LastMockupFlex>
                </DivMargin>
                
                <DivMargin>
                    <ProjectSubTitle>Logo Applications</ProjectSubTitle>
                    <Description>Now we can take a look at some applications, using the logo. Since the logo is very simple, applying the logo to various types of products is easy and natural.</Description>
                </DivMargin>

                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg maxWidth="500px" fluid={data.mockup01.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                        <CustomImg maxWidth="500px" fluid={data.mockup02.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                        <CustomImg maxWidth="500px" fluid={data.mockup03.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                        <CustomImg maxWidth="500px" fluid={data.mockup04.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                        <CustomImg maxWidth="500px" fluid={data.mockup05.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                    </LastMockupFlex>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Designing and development of the website</ProjectSubTitle>
                    <Description>
                        For the design of the website, I did what I do almost every time I develop a website, which is to create a wireframe in a piece of paper. Later, the content of the website, the images, and so on were added into a design software. I use Figma.<br />
                        The development of the website was done in Gatsby.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg maxWidth="1080px" fluid={data.pfdShowcase.childImageSharp.fluid} alt="Responsive Pathfinder Designs Showcase" />
                    </LastMockupFlex>
                </DivMargin>
                
                <DivMargin>
                    <ProjectSubTitle>Website quality</ProjectSubTitle>
                    <Description>
                        My main focus while developing the website was implementing all the UI/UX best practices, taking into consideration, performance, accessibility and SEO. I developed a very simple website, without animations and more complex effects, just as a Proof of Concept.<br />
                        To give it a "numeric value", I used <b>GTMetrix</b> and <b>Google Lighthouse</b>.
                    </Description>
                </DivMargin>

                <DivMargin>
                        <h3>GTMetrix</h3>
                        <Description>The following images represent the results in GTMetrix. Those being, <b>Performance Scores</b> and <b>Page Details</b>, respectively.</Description>
                </DivMargin>
                
                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg maxWidth="500px" fluid={data.gtmetrixSpeed.childImageSharp.fluid} alt="GTMetrix Page Speed" />
                        <CustomImg maxWidth="500px" fluid={data.gtmetrixDetails.childImageSharp.fluid} alt="GTMetrix Page Details"/>
                    </LastMockupFlex>
                </DivMargin>
                
                <DivMargin>
                    <Description>Check GTMetrix report&nbsp;<motion.a 
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        href="https://gtmetrix.com/reports/pathfinderdesigns.pt/oQylhy5o">here</motion.a>.
                    </Description>
                </DivMargin>
                
                <DivMargin>
                    <h3>Google Lighthouse</h3>
                    <Description>Bellow, are the Google Lighthouse performance results, on <b>mobile</b> and <b>desktop</b>, respectively.</Description>
                </DivMargin>
                
                <DivMargin>
                    <LastMockupFlex>
                        <CustomImg maxWidth="500px" fluid={data.perfDesktop.childImageSharp.fluid} alt="Performance on Desktop: 100" />
                        <CustomImg maxWidth="500px" fluid={data.perfMobile.childImageSharp.fluid} alt="Performance on Mobile: 99" />
                    </LastMockupFlex>
                </DivMargin>

                <DivMargin>
                    <Description>Check Google Lighthouse report&nbsp;<motion.a 
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        href="https://developers.google.com/speed/pagespeed/insights/?url=https://pathfinderdesigns.pt">here</motion.a>.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <ProjectSubTitle>Extra Details</ProjectSubTitle>
                    <Description>
                        Visit the website
                        &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://pathfinderdesigns.pt">here</motion.a> or view the
                        &nbsp;<motion.a 
                            onMouseEnter={() => onCursor('hovered')}
                            onMouseLeave={onCursor}
                            href="https://winegrid.com">Behance project</motion.a> to see additional applications of the brand.
                    </Description>
                </DivMargin>

                <DivMargin>
                    <NavigateProjects 
                        previous="Winegrid Mobile App"
                        previousLink="/portfolio/winegrid"
                        next="School Manager"
                        nextLink="/portfolio/under-construction"
                    />
                </DivMargin>

            </Container>    
        </Layout>
    )

}

export default WinegridPage


