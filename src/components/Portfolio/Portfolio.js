import React from 'react'

import useWindowSize from '../../hooks/useWindowSize';
import PortfolioItemDesktop from './PortfolioItemDesktop';
import PortfolioItemMobile from './PortfolioItemMobile';

import { useStaticQuery, graphql } from 'gatsby'
import { NewSVGContainer, NewSVG, Container, DivMargin } from '../../styles/componentsStyles';
import { PortfolioContainer } from '../../styles/components/portfolioStyles'
import { PortfolioSVG } from '../../assets/svg/svg';
import PortfolioInfo from './PortfolioInfo';


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
            <PortfolioInfo />

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