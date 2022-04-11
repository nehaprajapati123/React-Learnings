//  through constructor we can use the property by accessing the value using (.this)
import React from "react";
class constructor extends React.Component{
    constructor()   // first call to the constructor,
                     //initialise the state
    
    {

        super();  // inhereting  the property from the parent(React.Component) *imp
                  // we also pass the props in super()
        this.state=
        {
            name:"Neha",
            data:"constructor"
        }

    }

    render()  // render is the second lifeCycleMethod 
    {

        return(
            <h1>{this.state.name} We are leaning {this.state.data}</h1>  
        )
    }
}

export default constructor;