import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Container, Title, VerticalSpacing, Button, PortfolioFlex, PortfolioSeeAll } from '../../styles/componentsStyles'
import PortfolioItem from '../Cards/PortfolioItem'




export default () => {
    
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
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 400, quality: 90) {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
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
        <Container>
            <VerticalSpacing>
                <Title>Some of my work.</Title>
                <PortfolioFlex>
                    {data.allMarkdownRemark.edges.map(
                        project => {
                            return(
                                <PortfolioItem
                                    key={project.node.frontmatter.id} 
                                    id={project.node.frontmatter.id} 
                                    name={project.node.frontmatter.name} 
                                    description={project.node.frontmatter.description} 
                                    image={project.node.frontmatter.image.childImageSharp.fluid}
                                    url={project.node.frontmatter.url}
                                />
                            )
                        }
                    )}
                </PortfolioFlex>
                
                <PortfolioSeeAll>
                    <a href="https://behance.net/rodrigo-rocha">
                        <Button>
                            See all Projects
                        </Button>
                    </a>
                </PortfolioSeeAll>
                
            </VerticalSpacing>
        </Container>
    )
}