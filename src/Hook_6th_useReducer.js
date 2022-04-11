//useReducer is a hook for state management its an alternative of useState.
//more preferable then useState in case of many useStates use one useReducer.
//useReduser take one initialiser= initialState & reducer function
// give your initial value
// reduse function take 2 parameter state and action. according to the action it changes the state.
// using switch case for (action statement) it return the state.
// state = count and dispatch is the function

import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state, action) => {

    switch (action) {

        case "increment":
            return state + 1

        case "decrement":
            return state - 1

        case "reset":
            return initialState
        default:
            return state

    }

}

function Hook_6th_useReducer() {

    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <h1>count:{count}</h1>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </>


    )
}

export default Hook_6th_useReducer