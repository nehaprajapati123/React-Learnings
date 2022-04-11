// ComponentDidMount calls when our dom/html is ready, basically use for APIs    
import React from "react";
class ComponentDidMount extends React.Component {
    constructor() {
        super();
        this.state = {
            
            name: "neha",
            email: "neha@123"
        }
        console.log("constructor");

    }
    componentDidMount() {
        console.log("componentDidMount",this.state.name);

    }

    render() {
        console.log("render");
        return (

            <>
                <h1> Learning componentDidMount  {this.state.name}</h1>
                <button onClick={()=>{this.setState({name:"HappyHappy"})}}>Update name</button>
            </>



        )
    }

}

export default ComponentDidMount;