import React from 'react'
import { Button, Container, Title } from '../../styles/globalStyles'
import { graphql, useStaticQuery } from "gatsby"
import PortfolioItem from '../Cards/portfolioItem';
import { PortfolioFlex } from '../../styles/componentStyles'

const Portfolio = () => {
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
            <Title><h1>Some of my work</h1></Title>

            <PortfolioFlex>
                {data.allMarkdownRemark.edges.map(
                    service => {
                        return(
                            <PortfolioItem
                                key={service.node.frontmatter.id} 
                                id={service.node.frontmatter.id} 
                                name={service.node.frontmatter.name} 
                                description={service.node.frontmatter.description} 
                                image={service.node.frontmatter.image.childImageSharp.fluid} 
                            />
                        )
                    }
                )}
            </PortfolioFlex>
            
            <a href="https://behance.net/rodrigo-rocha" target="_blank" rel="noreferrer">
                <Button>
                    <button>
                        all projects
                    </button>
                </Button>
            </a>
        </Container>

    )
}

export default Portfolio