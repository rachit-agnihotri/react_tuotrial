import React, { Component } from 'react'

class Lifecyclemounting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'rachit'
      }
      console.log('mounting constructor1')
    }
    static getDerivedStateFromProps(props,state){
        console.log('Mounting getderived')
        return null;
    }
    componentDidMount(){
        console.log('mounting componentsDidmount')
    }
    
  render() {
    console.log('mounting render')
    return (
      <div>
        Hello
      </div>
    )
  }
}

export default Lifecyclemounting
