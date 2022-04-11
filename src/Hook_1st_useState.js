//updating element internally
// const [currentData,update]=initializer
// onclick:- fun call, fun commanding to update my current state

import React, { useState } from 'react'

function Hook_1st_useState() {

    const [count,setCount]=useState(0)

    function fun(){
        setCount(count+1)
    }

  return (
<>
    <h1>{count}</h1>
    <button onClick={fun}>update name</button>
</>


    )
}

export default Hook_1st_useState