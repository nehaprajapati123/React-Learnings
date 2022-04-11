import React, { useState } from 'react'

function FormHandle() {

  const [ name , setName ] = useState ("");


  const handleSubmit = (event) => {

    // event.preventDefault();            // it will not let my entered text refresh.

    alert(`The name you entered was: ${name}`);
  
  }

  return (
      <>

    <h1>Learning Form</h1>


      <form onSubmit={handleSubmit}>


      <input type="text" value={name} placeholder='Enter your name' onChange={(e)=>setName(e.target.value)} />

          <button type='submit'>Submit</button>



          {/* <input type="checkbox" /><span> check it</span>
          <select>
          <option value="select option">select option</option>
          <option value="neha">neha</option>
          <option value="delhi">delhi</option>
          <option value="kosen-rufu">kosen-rufu</option>
          </select> */}

      </form>      </>

  )
}

export default FormHandle