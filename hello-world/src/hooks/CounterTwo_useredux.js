import React, { useReducer } from 'react'
const initialState={
    firstcounter:0
}
const reducer =(state,action)=>{
    switch(action.type){
        case 'increment':
            return {firstcounter:state.firstcounter+action.value}
        case 'decrement':
            return {firstcounter:state.firstcounter-action.value}
        case 'reset':
            return initialState
        default:
            return state
    }
}

function Countertwo_useredux() {
    const [count, dispatch] =useReducer(reducer,initialState)
  return (
    <div>
        <div>count {count.firstcounter} </div>
      <button onClick={()=>dispatch({type :'increment',value:1})}>Increment</button>
      <button onClick={()=>dispatch({type:'decrement',value:2})}>Decrement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}

export default Countertwo_useredux
