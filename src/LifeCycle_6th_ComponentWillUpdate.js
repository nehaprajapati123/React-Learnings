// ComponentWillUpdate call when element removing from dom.
// eg:- togggle, when its hide and show it was removing and entering in dom
//true is for show = component inside dom for false = vice vesra
import React from "react";
class ComponentWillUpdate extends React.Component {
    constructor() {
        super();
        this.state = {
            show: true
        }
    }
    render() {
        return (
            <>
                {
                    this.state.show ? <h1>Component is in dom, its showing </h1>
                        : <h1>Component is out of DOM</h1>

                }

                <button onClick={() => this.setState({ show: !this.state.show })}> Hide/Show</button>
                {/* ! use for oppositing the state when button clicks */}
            </>
        )
    }
}
export default ComponentWillUpdate;
