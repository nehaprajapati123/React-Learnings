// shouldComponentUpdate by default false
// benefit:- can stop execution of code n specific point.

import React from "react";

class shouldComponentUpdate extends React.Component {
    constructor() {

        super();
        this.state = {
            count: 0

        }
    }
    componentDidUpdate()
    {
console.log("componentDidUpdate");
    }

    shouldComponentUpdate() {
        {
            if (this.state.count < 5)
            {
                console.log("shouldComponentUpdate");
                return true 
            }
        }
    }
    render() {
        return (
            <>
                <h1>shouldComponentUpdate {this.state.count}</h1>
                <button onClick={() => (this.setState({ count: this.state.count + 1 }))}>Update Count</button>

            </>

        )
    }
}

export default shouldComponentUpdate;