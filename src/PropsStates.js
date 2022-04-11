import React,{Component} from 'react';
class PropsStates extends Component{
property={
  name:"Neha",
  color:this.props.color
}
    
render() {
  return (
    <h1>My fav color is {this.property.color}</h1>
  )

}
}

export default PropsStates;


//states:-The state is a built-in React object that is used to contain data or information about the component. A component's state can change over time; whenever it changes, the component re-renders.