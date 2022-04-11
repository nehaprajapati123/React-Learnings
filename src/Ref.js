// ref is used in class component for direct accessing DOM,
// but react highly restrict this practice to direct working with DOM.

import React, { createRef } from "react";
class Ref extends React.Component
{
    constructor()
       { super();
        this.state=createRef();
    }
getVal(){
console.log(this.state.current.value)
this.state.current.style.backgroundColor="red"
}
    render(){
        return(
            <>
        <input type="text" ref={this.state}/>
        <button onClick={()=>this.getVal()}>click here</button>

            </>
        )
    }
}
export default Ref;