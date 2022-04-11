// useEffect hook use to perform side effect in function component:- work after dom rendered eg:- calling APIs
// when useState call it re-render component and again call useEffect.
//componentDidMount+ componentDidUpdate + componentWillUnmount


import React, { useEffect, useState } from 'react'

function Hook_2nd_useEffect() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log("inside of useEffect ex:- API ");
    })

    console.log("Render component ");

    return (

        <>

        {console.log("inside return")}
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>update count</button>


    </>
  )
}

export default Hook_2nd_useEffect