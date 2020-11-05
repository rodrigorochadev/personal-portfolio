import { useAnimation } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { divUp } from '../../animations';
import { Container, InfoContainer, SmallTitle, VerticalSpacing } from '../../styles/componentsStyles';
import {PortfolioContainer, PortfolioInfo} from '../../styles/components/portfolioStyles'
import useWindowSize from '../../hooks/useWindowSize';
import PortfolioItemDesktop from './PortfolioItemDesktop';
import PortfolioItemMobile from './PortfolioItemMobile';

export default () => {

    // Animations
    const animation = useAnimation()
    const [contentRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-300px",
    })

    useEffect(() => {
        if (inView) {
            animation.start("visible")
            console.log('portfolio . visible')
        }
    }, [animation, inView])

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
                            kind
                            tech
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 400, quality: 80) {
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
        <>
        {width <= 768 && (
            <VerticalSpacing>
                <Container>
                    <InfoContainer>
                        <SmallTitle>My Work</SmallTitle>
                        <PortfolioInfo>Bellow you can see a small section of my work. I've tried to select academic and professional projects, as well as some prototypes and case studies. I always try to deliver the best project I can and I hope you enjoy what I bring to you!</PortfolioInfo>
                    </InfoContainer>
                    <PortfolioContainer>
                        {data.allMarkdownRemark.edges.map(
                            (project, id) => {
                                return(        
                                    <PortfolioItemMobile
                                        last={id===2}
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
                </Container>
            </VerticalSpacing>
        )}
        
        {width > 768 && (
            <VerticalSpacing>
                <div style={{padding: '0 10vw'}}>

                    <InfoContainer
                        ref={contentRef}
                        animate={animation}
                        initial="hidden"
                        variants={divUp}
                    >
                        <SmallTitle>My Work</SmallTitle>
                        <PortfolioInfo>Bellow you can see a small section of my work. I've tried to select academic and professional projects, as well as some prototypes and case studies. I always try to deliver the best project I can and I hope you enjoy what I bring to you!</PortfolioInfo>
                    </InfoContainer>
                    {data.allMarkdownRemark.edges.map(
                        (project, id) => {
                            console.log(id===0)
                            return(        
                                <PortfolioItemDesktop
                                    // last={id===2}
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
                </div>
        </VerticalSpacing>
        )}
        
        </>
    )
}