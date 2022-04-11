//useContext” hook is used to create common data that can be accessed throughout the 
//component hierarchy without passing the props down manually to each level. 

import React, { useContext } from "react";
import { FirstName, LastName } from "./ContextMain"

const Hook_5th_useContext = () => {

    const fname = useContext(FirstName);
    const lname = useContext(LastName);

    return (

        <h1>  {fname} {lname}  we are learning context </h1>
    )
}

export default Hook_5th_useContext