import React, { useState } from 'react'

function InputBoxValue() {
    const [data, setData]=useState("Render Text")
    // const [print, setPrint]=useState(false)
    function getDAta(e){
        console.log(e.target.value);
        setData(e.target.value)
        // setPrint(false)
    }
  return (
<>
{/* {print? */}
    <h1>{data}</h1>
    {/* :null} */}
    <input type="text" onChange={getDAta}/>
    {/* <button onClick={()=> setPrint(true)}> hide and show</button> */}
</>
    )
}

export default InputBoxValue