// make button for td make a fun for del, fetch api and define delete function 

// not working
import React, { useEffect, useState } from 'react'

function API_DeleteMethod() {
    const [data, setData] = useState([])
    useEffect(() => {
        getList()
    }, [])
    console.log(data);

    function getList() {
        fetch("https://jsonplaceholder.typicode.com/users").then((result => {
            result.json().then((response) => {
                // console.log(response);

                setData(response)
            })
        }))

    }

    function DelFun(id) {
        fetch(`https://jsonplaceholder.typicode.com/users${id}`, {
            method: "DELETE"
        }).then((result) => {
            result.json().then((response) => {
                console.log(response);
                getList()
            })
        })


    }
    return (
        <>
            <h1>API_DeleteMethod</h1>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Del</td>
                    </tr>
                    {
                        data.map((items) =>
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.username}</td>
                                <td>{items.email}</td>
                                <td><button onClick={() => DelFun(items.id)}>Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}

export default API_DeleteMethod






