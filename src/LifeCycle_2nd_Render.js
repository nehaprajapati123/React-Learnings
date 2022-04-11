// displaying  our content/ specified code of html. eg:-console

import React from "react";
class render extends React.Component 
{
    constructor(){
        super();
        this.state={
            email:"neha@123",
            address:"Delhi"

        }
    }
        render() {
            console.log("rendering", this.state.email);
            return (
                <>
                    <h1>Render</h1>
                    <button onClick={()=>this.setState({email:"prajapati@123"})}>Click Me</button>
                </>
            )
        }


}


export default render;