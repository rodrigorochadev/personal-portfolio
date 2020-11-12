import React from 'react'

import useWindowSize from '../../hooks/useWindowSize';
import PortfolioItemDesktop from './PortfolioItemDesktop';
import PortfolioItemMobile from './PortfolioItemMobile';

import { useStaticQuery, graphql } from 'gatsby'
import { InfoContainer, PaddingContainer, SmallTitle } from '../../styles/componentsStyles';
import { PortfolioContainer } from '../../styles/components/portfolioStyles'


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
        <PaddingContainer horizontal="10vw" vertical="100px">
            <InfoContainer marginBottom>
                <SmallTitle>My Work</SmallTitle>
                <p>Bellow you can see a small section of my work. I've tried to select academic and professional projects, as well as some prototypes and case studies. I always try to deliver the best project I can and I hope you enjoy what I bring to you!</p>
            </InfoContainer>

            <PortfolioContainer>
                {width < 768 && (
                    <>
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
                    </>            
                )}
                
                {width >= 768 && (
                    <>
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
                                        description={project.node.frontmatter.description} 
                                        image={project.node.frontmatter.image.childImageSharp.fluid}
                                        url={project.node.frontmatter.url}
                                        tech={project.node.frontmatter.tech}
                                    />
                                )
                            }
                        )}
                    </>
                )}
            </PortfolioContainer>
        </PaddingContainer>
    )
}