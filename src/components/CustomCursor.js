import React from 'react'
import useMousePosition from '../hooks/useMousePosition'
import { useGlobalStateContext } from '../context/globalContext'
import { Cursor, CursorFollower } from '../styles/components/cursorStyles'


export default () => {
    
    const { cursorType } = useGlobalStateContext()

    const {x, y} = useMousePosition()

    return (
        <>
            <Cursor
                className={`${!!cursorType ? 'hovered' : ""} ${cursorType}`}
                style={{
                    left: `${x}px`, top: `${y}px` 
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