import React from 'react'
import styled from 'styled-components'
// import { TYPOGRAPHY } from '../../constants'
// import { BannerContainer, BannerDetail, Container, BannerTitle } from '../../styles/componentsStyles'
import {SITE_CONFIG} from '../../constants';
// import { graphql, useStaticQuery } from 'gatsby';
// import Img from 'gatsby-image'
import {motion} from 'framer-motion'
// import useMousePosition from '../../hooks/useMousePosition';
import useWindowSize from '../../hooks/useWindowSize';

export default () => {
   
    // const data = useStaticQuery(graphql`
    // query {
    //     picture: file(relativePath: {eq: "portrait.jpg"}) {
    //         childImageSharp {
    //             fluid(maxWidth: 400, quality: 100) {
    //                 ...GatsbyImageSharpFluid_withWebp_tracedSVG
    //             }  
    //         }
    //     }
    // }`)

    // let bannerImage = useRef()
    // const {x, y} = useMousePosition()

    const { width } = useWindowSize()
    
    // const [hoverState, setHoverState] = useState(false)

    // const [imagePosition, setImagePosition] = useState({
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //     bottom: 0,
    // })

    // useEffect(() => {
    //     setImagePosition({
    //         top: bannerImage.current.getBoundingClientRect().top,
    //         left: bannerImage.current.getBoundingClientRect().left,
    //         right: bannerImage.current.getBoundingClientRect().right,
    //         bottom: bannerImage.current.getBoundingClientRect().bottom,
    //     })
    // }, [hoverState])

    return(
    
        <>

        {/* {width > 768 && (
            <NewBannerImg 
                animate={{
                    x: hoverState ? x/50 : 0,
                    y: hoverState ? y/30: 0,
                }}
            >
                <Img fluid={data.picture.childImageSharp.fluid} alt="Portrait" />
            </NewBannerImg>
        )} */}

        <NewBannerContainer 
            // onHoverStart={() => setHoverState(true)}
            // onHoverEnd={() => setHoverState(false)}
        >
            
            {width <= 768 && (
                <NewBannerText >Ex<br/>plo<br/>re</NewBannerText>
            )}

            {width > 768 && (
                <NewBannerText >Stand up <em>&</em><br/>Aim Higher</NewBannerText>
            )}
        </NewBannerContainer>
        
        </>
    )
}

export const NewBannerImg = styled(motion.div)`
    
    /* transform: rotate(-10deg); */


    @media ${SITE_CONFIG.media.small} {
        position: absolute;
        pointer-events: none;
        top: 150px;
        right: 100px;
        width: 250px;
    }

    @media ${SITE_CONFIG.media.medium} {
        /* top: 150px; */
        right: 100px;
        width: 300px;
    }
    
    @media ${SITE_CONFIG.media.large} {
        /* top: 150px; */
        right: 300px;
        /* width: 300px; */
    }

    @media ${SITE_CONFIG.media.xlarge} {
        top: 250px;
        right: 200px;
        width: 400px;
    }
`

export const NewBannerContainer = styled(motion.div)`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 99vh;
    justify-content: flex-end;
    margin-left: -15px; 

    @media ${SITE_CONFIG.media.small} {
        margin-left: -20px;    
        min-height: 100vh;
    }

    @media ${SITE_CONFIG.media.medium} {
        margin-left: -30px;
        min-height: 103vh;
    }
    
    /* @media ${SITE_CONFIG.media.large} {
        
    }

    @media ${SITE_CONFIG.media.xlarge} {
        
    } */

`

export const NewBannerText = styled.h1`
    z-index: 9;
    transition: ${SITE_CONFIG.transitions.default};
    text-transform: uppercase;
    color: var(--color-text);
    /* -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: var(--color-text); */
    /* -webkit-text-fill-color: var(--color-text); */
    /* mix-blend-mode: difference; */

    em {
        transition: ${SITE_CONFIG.transitions.default};
        -webkit-transition: ${SITE_CONFIG.transitions.default};
        -webkit-text-stroke: 3px;
        -webkit-text-stroke-color: var(--color-text); 
        -webkit-text-fill-color: transparent;    
    }

    line-height: 6.5rem;
    font-size: 8rem;

    @media screen and (min-width: 28.125em) {
        line-height: 8rem;
        font-size: 9rem;    
    }

    @media ${SITE_CONFIG.media.small} {
        line-height: 6.5rem;
        font-size: 7.5rem;
    }

    @media ${SITE_CONFIG.media.medium} {
        line-height: 10rem;
        font-size: 10rem;
    }
    

    @media ${SITE_CONFIG.media.large} {
        line-height: 12rem;
        font-size: 13rem;
        
    }

    @media ${SITE_CONFIG.media.xlarge} {
        line-height: 14rem;
        text-transform: uppercase;
        font-size: 17rem;
    }

`