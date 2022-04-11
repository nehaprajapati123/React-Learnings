import React from 'react'
import {useNavigate} from 'react-router-dom';



function Profile() {
    let navigate=useNavigate();
  return (


      <>
    <h1>This is the Profile page</h1>




      {/* use buttons for routing */}
      <button onClick={()=>{
        navigate("/Home")
      }}>go to Home page</button>
    
    
      <button onClick={()=>{
        navigate("/About")
      }}>go to About page</button>
    </>
  )
}

export default Profile;