import React from 'react'
import {useNavigate} from 'react-router-dom';
function About() {
    let navigate=useNavigate();
  return (


      <>
    <h1>This is the About page</h1>




      {/* use buttons for routing */}
      <button onClick={()=>{
        navigate("/Home")
      }}>go to Home page</button>
    
    
      <button onClick={()=>{
        navigate("/Profile")
      }}>go to Profile page</button>
    </>
  )
}

export default About