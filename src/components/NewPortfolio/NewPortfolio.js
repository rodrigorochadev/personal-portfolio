import { useStaticQuery, graphql } from 'gatsby'
import React from 'react'
import styled from 'styled-components';
import { SITE_CONFIG } from '../../constants';
import { BigTitle, VerticalSpacing } from '../../styles/componentsStyles';
import Title from '../Title';
import NewPortfolioItem from './NewPortfolioItem'

export default () => {

    const data = useStaticQuery(graphql`
        query NewProjectsQuery {
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
                            kind
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 400, quality: 100) {
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
        <VerticalSpacing>
            <PortfolioContainer>
                <Title title="Some of my work." outline={true} right={true} />
                {/* <BigTitle>Some of my work.</BigTitle> */}

                <PortfolioMoreInfo>(Hover on title to see more!)</PortfolioMoreInfo>
                {data.allMarkdownRemark.edges.map(
                    project => {
                        return(
                            <NewPortfolioItem
                                key={project.node.frontmatter.id} 
                                id={project.node.frontmatter.id}
                                kind={project.node.frontmatter.kind}
                                name={project.node.frontmatter.name} 
                                description={project.node.frontmatter.description} 
                                image={project.node.frontmatter.image.childImageSharp.fluid}
                                url={project.node.frontmatter.url}
                            />
                        )
                    }
                )}
            </PortfolioContainer>
        </VerticalSpacing>
    )
}

export const PortfolioContainer = styled.div`
    padding: 0 10vw; 
    margin-top: 50px;
`

export const PortfolioMoreInfo = styled.div`
    
    display: none;
    margin-top: 20px;

    @media ${SITE_CONFIG.media.small} {
        display: flex;
        width: 100%;
        justify-content: right;
        margin-top: 40px;
    }

`