import React from 'react'

function Nested_Mapping() {
    const obj = [
        { name: "Neha", email: "Neha@123", address: [{ contary: "india", city: "bhalswa", Hno: "1" }] },
        { name: "Sagar", email: "Sagar@123", address: [{ contary: "india", city: "aadarsh nagar", Hno: "2" }] },
        { name: "Prashant", email: "Prashant@123", address: [{ contary: "india", city: "jahangirpuri", Hno: "3" }] },
        { name: "Priya", email: "Priya@123", address: [{ contary: "india", city: "mungeshpur", Hno: "4" }] },
    ]
    return (
        <>
            <table border="1">
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Address</td>
                        <td>S.no</td>
                    </tr>
                </tbody>

                {
                    obj.map((item, s_no) =>
                        <tr key={s_no}>

                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            
                            <td>
                                <table border="1">
                                    <tbody>
                                        {
                                            item.address.map((data) =>
                                                <tr>
                                                    <td>{data.contary}</td>
                                                    <td>{data.city}</td>
                                                    <td>{data.Hno}</td>
                                                </tr>)
                                        }



                                    </tbody>
                                </table>
                            </td>
                            <td>{s_no+1}</td>
                        </tr>)
                }

            </table>
        </>
    )
}

export default Nested_Mapping