// componentDidUpdate runs when state updates.

import React from "react";
class ComponentDidUpdate extends React.Component {
    constructor() {
        super();
        this.state =
        {
            name: "neha",
            email: "neha@123",
        }
        console.log("construct");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate call beacuse state update");
    }

 

    render() {
        console.log("Render");
        return (

            <>
                <h1>ComponentDidUpdate {this.state.name}</h1>

                <button onClick={()=>{this.setState({name:"xyz"})}}>Update number</button>
            </>

        )

    }

}
export default ComponentDidUpdate;