// POst method use for storing the data
 // take 3 input and use useState method for updating the input
 // use a button for calling the function, for storing the inputs
 //  JSON.stringify(data)   it store the JSON data in string formate.

import React, { useState } from 'react'

function APIs_PostMethod() {

  const [id, setId] = useState("")
  const [username, setusername] = useState("")
  const [email, setemail] = useState("")    

  function fetchData() {

    console.log({ id, username, email });

    let data = { id, username, email }
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",                                   // here we are defining the API method
      headers: {
        "Accept": "application/json",
        "Content": "application/json"
      },

      body: JSON.stringify(data) // data its storing in string formate

    }).then((result) => {                 // here the the responseis  data = result (string) 
      result.JSON().then((response)=> {  //   here the result in JSON 
        console.log(response);           // it shows in storage in network.
      })  
    })
  }

  return (
    <>
      <h1>APIs_PostMethod</h1>
      <input type="text" value={id} onChange={(e) => { setId(e.target.value) }} placeholder="id" />
      <input type="text" value={username} onChange={(e) => { setusername(e.target.value) }} placeholder="username" />
      <input type="text" value={email} onChange={(e) => { setemail(e.target.value) }} placeholder="email" />
      <button type="button" onClick={fetchData}>click here</button>

    </>
  )
}

export default APIs_PostMethod