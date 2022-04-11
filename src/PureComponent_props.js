import React,{PureComponent} from "react";
class PureComponent_props extends PureComponent{       
    
    render(){
        console.log("ckeck rendering of prop");
        return(
            <>
            <h1>props renedering: {this.props.count}</h1>

</>

        )
    }
}

export default PureComponent_props;