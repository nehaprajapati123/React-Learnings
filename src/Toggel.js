import React,{useState} from 'react'

function Toggel() {
    const [toggle,setToggle]=useState(true)
    // const [data,setData]=useState("Render Texrt")
    // function getData(e){
    //     setData(e.target.value)

    // }
  return (
<>
{
    toggle?<h1>hello</h1>:null
}
    {/* <input type="text" onChange={getData} /> */}
    <button onClick={()=>{setToggle(false)}}>Hide</button>
    <button onClick={()=>{setToggle(true)}}>Show</button>
    <button onClick={()=>{setToggle(!toggle)}}>Toggle</button>
</>
    )
}

export default Toggel