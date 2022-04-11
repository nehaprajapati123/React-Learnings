import React from 'react'
import {Table} from 'react-bootstrap'

function Array_mapping() {
    const name = ["neha", "sagar", "prashant", "mmy"]
    // name.map((i)=>{
    //     console.log(i);
    // })
    // for (let i=0;i<name.length;i++){
    //     console.log(name[i]);
    // }
    const obj =

        [
            { name: "neha", email: "neha@123", contact: "999" },
            { name: "sagar", email: "sagar@123", contact: "999" },
            { name: "prashant", email: "prashant@123", contact: "999" },
            { name: "mmy", email: "mmy@123", contact: "999" }

        ]
    return (

        <>
            <h1>mapping in array React:-</h1>        
            {/* accept map nothing will use for looping */}
            {/* {
                name.map((i) =>
                    <h1>{i}</h1>
                )} */}

                <Table border="1">
                <tbody>
                <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>contact</td>
                </tr>
                {
                
                    obj.map((data,i)=>
                        <tr key={i}>
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.contact}</td>
                        </tr>

                    )
                }
                </tbody>
                </Table>

       
       
        </>

    )
}

export default Array_mapping