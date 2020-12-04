import React from 'react'
import styled from 'styled-components'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'

export default (props) => {

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return (
        <ProjectInformationFlex>
            <ProjectInformationTitle>
                <p>{props.type}</p>
            </ProjectInformationTitle>
            <ProjectInformationDescription>
                <p>{props.description}</p>
                <a
                    onMouseEnter={() => onCursor('hovered')}
                    onMouseLeave={onCursor}
                    rel="noreferrer" target="_blank"
                    href={`https://www.${props.link}`}
                >{props.link}</a>
            </ProjectInformationDescription>
        </ProjectInformationFlex>
    )

}

export const ProjectInformationFlex = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid var(--color-text);
    margin-top: 50px;
    /* width: 40%; */
`

export const ProjectInformationTitle = styled.div`
    p {
        font-weight: bold;
        opacity: 90%;
    }
`

export const ProjectInformationDescription = styled.div`
    p, a {
        
    }
`

