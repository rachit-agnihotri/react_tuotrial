import  { useState } from 'react'

function useCounter(initialcount = 0) {
  const [count, setcount] = useState(initialcount)
  const increment=()=>{
    setcount(prevcount => prevcount+1)
  }
  const decrement=()=>{
    setcount(prevcount => prevcount-1)
  }
  const reset=()=>{
    setcount(initialcount)
  }
   
  return [count, increment, decrement, reset]
}

export default useCounter
