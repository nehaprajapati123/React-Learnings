// fetch method use for calling api, in function  useEffect preferes to fetched data.
// it returns 2promises (.then)
// Get method use for Showing the data


import React, { useEffect, useState } from 'react'

function API_GEtMethod() {
    const [data,setData]=useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then((result => {
            result.json().then((response) => {
                // console.log(response);

                setData(response)
            })
        }))
    }, [])
    console.log(data);
    return (
        <>
            <h1>API_GEtMethod</h1>






            <table border="1">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
    </tr>
   {
       data.map((items)=>
       <tr>
           <td>{items.id}</td>
           <td>{items.username}</td>
           <td>{items.email}</td>
       </tr>
       )
   }
    </table>
        </>
    )
}

export default API_GEtMethod






