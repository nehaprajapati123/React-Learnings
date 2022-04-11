// contextAPI use for prop drilling exchanging data from all levels of your application.
// contextAPI it takes callBAck.
// it's not maintainable, to write a function & return the props. the syntax is very complex.

// when its about default value we can import and export without curly braces,
// but extra things must import or export only by using curly braces.

import React from 'react';
import {FirstName , LastName } from "./ContextMain"

function Context_API() {
  return (

    <>
        <FirstName.Consumer>
            {(fname) =>{
                return (
                    <LastName.Consumer>
                        {(lname) => {
                            return (
                                <h1>
                                    {fname} {lname}  we are learning context
                                </h1>
                            )
                        }}
                    </LastName.Consumer>
                )
            }}
        </FirstName.Consumer>
    </>

    )
}

export default Context_API