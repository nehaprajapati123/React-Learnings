import React from 'react'
import {useNavigate} from 'react-router-dom';

function Home() {
    let navigate=useNavigate();
  return (
      <>
      <h1>This is the Home page</h1>




      {/* use buttons for routing */}
     <button onClick={()=>{
    navigate("/About")
  }}>go to About page</button>


  <button onClick={()=>{
    navigate("/Profile")
  }}>go to Profile page</button>
  </>

  )
}

export default Home