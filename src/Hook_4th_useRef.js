// for handeling Dom directly in functional component  eg:- input manipulate, textColor, BackgroundColor, focus etc.

import React, { useRef } from 'react';

function Hook_4th_useRef() {

  const inputDOM = useRef(null)

  function HandleRef() {

    console.log("HandleRef executing");
    
    // inputDOM.current.value="1000"    // manupulating input giving value on button click.
    
    inputDOM.current.focus();           // on click buttun the focus came in input
    
    inputDOM.current.style.color="red"  // through ref, handeling color of text
    
    inputDOM.current.style.backgroundColor="yellow" // through ref, handeling backgroundColor of text

  }

  return (
    <>
      <input type="text" ref={inputDOM} />   {/* dom assecced  through the use of ref on input*/}
      <button onClick={HandleRef}>click me</button>

    </>
  )
}

export default Hook_4th_useRef;