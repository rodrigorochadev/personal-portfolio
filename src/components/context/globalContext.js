import React, { createContext, useReducer, useContext } from 'react'

const GlobalStateContext = createContext()
const GlobalDispatchContext = createContext()

// Reducer
const globalReducer = (state, action) => {

    switch(action.type) {
        case "CURSOR_TYPE" : {
            return {
                ...state,
                cursorType: action.cursorType,
            }
        }
        default: {
            throw new Error(`Unhandled action type: ${action.type}`)
        }
    }

}

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(globalReducer, {
        cursorType: false,
        cursorStyles: ['pointer', 'hovered', 'hide']
    })

    return (
        <GlobalDispatchContext.Provider value={dispatch}>
            <GlobalStateContext.Provider value={state}>
                {children}
            </GlobalStateContext.Provider>
        </GlobalDispatchContext.Provider>
    )

}

export const useGlobalStateContext = () => useContext(GlobalStateContext)

export const useGlobalDispatchContext = () => useContext(GlobalDispatchContext)
