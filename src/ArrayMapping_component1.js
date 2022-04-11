import React from 'react'
import ArrayMapping_component2 from './ArrayMapping_component2'
function ArrayMapping_component1() {
    const obj =

        [
            { name: "neha", email: "neha@123", contact: "999" },
            { name: "sagar", email: "sagar@123", contact: "999" },
            { name: "prashant", email: "prashant@123", contact: "999" },
            { name: "mmy", email: "mmy@123", contact: "999" }

        ]
  return (
    <>
    <h1>Resuable Component in List:-</h1>
    {obj.map((item)=>
<ArrayMapping_component2 data={item}/>
    )}
    </>

    )
}

export default ArrayMapping_component1