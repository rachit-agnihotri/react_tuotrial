import React, { useReducer } from 'react'
const initialState=0
const reducer =(state,action)=>{
    switch(action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return 0
        default:
            return state
    }
}

function Counterthree_usereducer() {
    const [count, dispatch] =useReducer(reducer,initialState)
    const [counttwo, dispatchtwo] =useReducer(reducer,initialState)
  return (
    <div>
      <div>count {count} </div>
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      <div>counttwo {counttwo} </div>
      <button onClick={()=>dispatchtwo('increment')}>Increment</button>
      <button onClick={()=>dispatchtwo('decrement')}>Decrement</button>
      <button onClick={()=>dispatchtwo('reset')}>Reset</button>
    </div>
  )
}

export default Counterthree_usereducer      
