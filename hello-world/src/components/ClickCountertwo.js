import React, { Component } from 'react'

class ClickCountertwo extends Component {
    
  render() {
    const {count,increment}=this.props
    return (
      <div>
        <button onClick={increment}> clicked {count} times</button>
      </div>
    )
  }
}

export default ClickCountertwo
