import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import { SITE_CONFIG } from '../../constants'
import { useGlobalDispatchContext, useGlobalStateContext } from '../../context/globalContext'

export default (props) => {

    const { cursorStyles } = useGlobalStateContext()
    const dispatch = useGlobalDispatchContext()

    const onCursor = cursorType => {
      cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
      dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
    }

    return (
        <NavigateFlex>
            <div>
            {props.previous && (
                <div>
                    <Link 
                        to={props.previousLink}
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        onClick={onCursor}
                    >
                        <h3>« Previous</h3>
                    </Link>
                    <p>{props.previous}</p>
                </div>
            )}
            </div>

            <div>
            {props.next && (
                <>
                    <Link 
                        to={props.nextLink}
                        onMouseEnter={() => onCursor('hovered')}
                        onMouseLeave={onCursor}
                        onClick={onCursor}
                    >
                        <h3>Next Project »</h3>
                    </Link>
                    <p>{props.next}</p>
                </>
            )}
            </div>
        </NavigateFlex>
    )

}

export const NavigateFlex = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 20vh;

    border-top: 1px solid var(--color-opacityText);
    
    /* @media ${SITE_CONFIG.media.large} {
        min-height: 30vh;
    }

    @media ${SITE_CONFIG.media.large} {
        min-height: 20vh;
    } */
`