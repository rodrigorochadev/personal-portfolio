import React from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { useGlobalStateContext } from './context/globalContext'
import { Cursor, CursorFollower } from '../styles/components/cursorStyles'


export default () => {
    
    const { cursorType } = useGlobalStateContext()

    const cursorSizes = {
        hovered: 6,
        regular: 5,
    }

    const {x, y} = useMousePosition()

    return (
        <>
            <Cursor
                className={`${!!cursorType ? 'hovered' : ""} ${cursorType}`}
                
                style={{
                    left: `${x}px`, top: `${y}px` 
                    // transform: cursorType!==false ? `translate3d(${x-cursorSizes[cursorType]}px, ${y}px, 0)` : `translate3d(${x-cursorSizes.regular}px, ${y-cursorSizes.regular}px, 0)`,
                }}
            />
                <CursorFollower 
                    className={`${!!cursorType ? 'hovered' : ""} ${cursorType}`}
                    
                    style={{
                        
                        transform: `translate3d(${x-16}px, ${y-16}px, 0)`,
                    }}
                />
            
            
        </>
    )
}