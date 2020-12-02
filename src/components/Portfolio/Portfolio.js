import React from 'react'

import useWindowSize from '../../hooks/useWindowSize';
import PortfolioItemDesktop from './PortfolioItemDesktop';
import PortfolioItemMobile from './PortfolioItemMobile';

import { useStaticQuery, graphql } from 'gatsby'
import { InfoContainer, NewSVGContainer, NewSVG, Container, Description, DivMargin } from '../../styles/componentsStyles';
import { PortfolioContainer } from '../../styles/components/portfolioStyles'
import { PortfolioSVG } from '../../assets/svg/svg';
import { ProjectSubTitle } from '../../styles/pagesStyles';


export default () => {

    const { width } = useWindowSize()

    const data = useStaticQuery(graphql`
        query ProjectsQuery {
            allMarkdownRemark(
                sort: {fields: frontmatter___id}
                filter: {frontmatter: {type: {eq: "project"}}}) {
                edges {
                    node {
                        frontmatter {
                            id
                            name
                            description
                            url
                            tech
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 500, quality: 75) {
                                        ...GatsbyImageSharpFluid_tracedSVG
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    `);

    return(
        <Container nonRelative>
            <DivMargin>
            <InfoContainer marginBottom="30px">
                <ProjectSubTitle>Some of my work.</ProjectSubTitle>
                <Description light>Below you can see a small section of my work. I always try to deliver the best project I can and I hope you enjoy what I bring to you! To see a preview, hover on the title, and click it to open the full details. Some pages are still being built, but you can have an idea on I how work. Enjoy!</Description>
            </InfoContainer>

                {width < 768 && (
                    <PortfolioContainer>
                        {data.allMarkdownRemark.edges.map(
                            (project, id) => {
                                return(        
                                    <PortfolioItemMobile
                                        last={id===3}
                                        key={project.node.frontmatter.id} 
                                        id={project.node.frontmatter.id}
                                        kind={project.node.frontmatter.kind}
                                        name={project.node.frontmatter.name} 
                                        description={project.node.frontmatter.description} 
                                        image={project.node.frontmatter.image.childImageSharp.fluid}
                                        url={project.node.frontmatter.url}
                                        tech={project.node.frontmatter.tech}
                                    />
                                )
                            }
                        )}
                    </PortfolioContainer>            
                )}
                
                {width >= 768 && (
                    <>
                    <div style={{position: "relative"}}>
                        <div style={{position: 'absolute', right: 0, top: '-50%'}}>
                        <NewSVGContainer
                            animate={{
                                rotate: 360,
                                transition: { duration: 5, ease: 'linear', repeat: 'Infinity' },
                            }} 
                        >
                            <NewSVG>
                                <PortfolioSVG />
                            </NewSVG>
                        </NewSVGContainer>
                        </div>
                    </div>
                    <PortfolioContainer>
                        {data.allMarkdownRemark.edges.map(
                            (project, id) => {
                                return(        
                                    <PortfolioItemDesktop
                                        last={id===2}
                                        first={id===0}
                                        key={project.node.frontmatter.id} 
                                        id={project.node.frontmatter.id}
                                        kind={project.node.frontmatter.kind}
                                        name={project.node.frontmatter.name} 
                                        tech={project.node.frontmatter.description} 
                                        image={project.node.frontmatter.image.childImageSharp.fluid}
                                        url={project.node.frontmatter.url}
                                        // tech={project.node.frontmatter.tech}
                                    />
                                )
                            }
                        )}
                    </PortfolioContainer>
                    </>
                )}
            </DivMargin>
        </Container>
    )
}