import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      };
    }
    increment(){
        this.setState(
            (prevstate,props)=>({
                count:prevstate.count+1
            })
        )
        console.log(this.state.count)
    }
    reset(){
        this.setState(
            {
                count:0
            }
        )
    }
    decrement(){
        this.setState(
            {
                count: this.state.count-1
            }
        )
    }
  render() {
    return (
      <div>
        <h1> Count - {this.state.count} </h1>
        
        <button onClick={()=>{this.increment();}}>Good Morning</button>
        <button onClick={()=>{this.decrement();}}>
            Bad Morning
        </button>
        <br/>
        <button onClick = {()=>this.reset()}>
            Reset
        </button>
      </div>
    )
  }
}

export default Counter
