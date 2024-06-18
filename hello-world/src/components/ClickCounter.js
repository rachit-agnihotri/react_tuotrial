import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
//higher order components
class ClickCounter extends Component {
    
  render() {
    const {count,handleclick}=this.props
    return (
      <div>
        <button onClick={handleclick}>  {this.props.name} Clicked  {count} times</button>
      </div>
    )
  }
}

export default UpdatedComponent(ClickCounter,5)
