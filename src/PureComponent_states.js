import React,{PureComponent} from "react";
import PureComponent_props from './PureComponent_props'
class PureComponent_States extends PureComponent{       
    // if you will use React.Component and render the same output it will render.
    // if you will use PureComponent and render the same output it will not render.
    // count will re render becuase of new value every time to be render.
    
    constructor(){

        super();
        this.state={
            count:1

        }
    }
    render(){
        console.log("ckeck rendering of prop");
        return(
            <>
            <PureComponent_props count={this.state.count}/>
            <h1>purecomponent count: {this.state.count}</h1>
            <button onClick={()=>this.setState({count:1})}>Update count</button>


</>

        )
    }
}
export default PureComponent_States;