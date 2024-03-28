import React, { createContext, useReducer, useState } from 'react'

export const ContextData = createContext()

export const Context = ({ children }) => {
    const API = JSON.parse(localStorage.getItem('data')) || []
    const [data, setData] = useState(API)
    const [state, dispatch] = useReducer(reducer, data)
    function reducer(state, action) {
        switch (action.type) {
            case "removeUser":
                localStorage.setItem('data',
                    JSON.stringify(state.filter(item => item.id !== action.id))
                )
                return state = JSON.parse(localStorage.getItem('data'))
            case "addUser":
                localStorage.setItem('data', JSON.stringify([...state, action.obj]))
                return state = JSON.parse(localStorage.getItem('data'))
            case "editUser":
                const updatedState = state.map(item => item.id === action.obj.id ? action.obj : item)
                localStorage.setItem('data', JSON.stringify(updatedState))
                return updatedState
            default:
                break;
        }
    }
    return (
        <ContextData.Provider value={{ state, dispatch }}>{children}</ContextData.Provider>
    )
}
