import { motion, useAnimation } from 'framer-motion';
import { useStaticQuery, graphql } from 'gatsby'
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';
import { divUp } from '../../animations';
import { SITE_CONFIG } from '../../constants';
import { BigTitle, SmallTitle, VerticalSpacing } from '../../styles/componentsStyles';
import Title from '../Title';
import PortfolioItem from './PortfolioItem'

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
        }
    }, [animation, inView])

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
        <>
        
        <VerticalSpacing>
            <PortfolioContainer>
                {/* <Title title="My work." description="(Click on title to learn more!)"  /> */}
                {/* <SmallTitle>My Work</SmallTitle>
                <div style={{width: '60%', marginBottom: '100px'}}>
                    <p style={{lineHeight: '2rem'}}>Below you can see a selection of my work. It includes websites, mobile applications, branding, and so on. Hover on title to see a preview and click it to see the full details. I always try to deliver the best project I can and I really hope you like it. Maybe we can work together on something!</p>
                </div> */}
                <motion.p
                    ref={contentRef}
                    animate={animation}
                    initial="hidden"
                    variants={divUp}
                >A small selection of my work!</motion.p>
                {data.allMarkdownRemark.edges.map(
                    
                    (project, id) => {
                        return(        
                            <PortfolioItem
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
        </VerticalSpacing>
        </>
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