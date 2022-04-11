import React, { useState } from 'react'

function ControlledComponent() {
    const [data,setData]=useState()
  return (
      <>
          <h1>ControlledComponent : {data}</h1>
          {console.log(data)}

          <input type="text" placeholder='enter your name' value={data} onChange={(e)=>setData(e.target.value)}/>
      </>


    )
}

export default ControlledComponent



// Controlled Components:-
// The components handle through the state of react js

// UnControlled Components:-
// The components which do not  handle directly through the state of react js

