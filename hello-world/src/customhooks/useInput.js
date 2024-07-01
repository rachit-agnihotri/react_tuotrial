import  { useState } from 'react'

function useInput(initial='') {
  const [value,setvalue] =useState(initial)
  const reset=()=>{
    setvalue(initial)
  }
  const bind= ()=>{
    value,
    onChange= e=>{
        setvalue(e.target.value)
    }
    return [value,bind,reset]
  }
}

export default useInput
