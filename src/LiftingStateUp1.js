import React from 'react'
import LiftingStateUp2 from './LiftingStateUp2'

function LiftingStateUp1() {

  function parent(i)
  {
    
    console.log(i);
  
  }

  return (

    <>   
     {/* <h1>component 1st</h1> */}
    <LiftingStateUp2 data={parent} />


</>
    );
}

export default LiftingStateUp1