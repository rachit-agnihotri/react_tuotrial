import React, { Component } from 'react'

class FunctionClick extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: "abc",
         count: 1
      };
    }
    changename(){
        this.setState(
            {
                name: "Rachit"
            }
            
        )
    }
  render() {
    return (
      <div>
        <h1> Name is Khan {this.state.name}</h1>
        <button onClick ={()=>{this.changename();}}>child</button>
      </div>
    )
  }
}

export default FunctionClick
