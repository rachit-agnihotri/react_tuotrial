import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
//higher order components
class Hovercounter extends Component {
  render() {
    const {count,handleclick}=this.props

    return (
      <div>
        <h2 onMouseOver={handleclick}> Hovered {count} times</h2>
      </div>
    )
  }
}

export default UpdatedComponent(Hovercounter,10)
