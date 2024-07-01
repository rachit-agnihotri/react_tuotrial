import { useEffect ,useRef} from "react"
import React from 'react'

function Focus_useref() {
    const inputRef= useRef(null)
    useEffect(() => {
      inputRef.current.focus()
    
    }, [])
    
  return (
    <div>
      <input ref ={inputRef} type='text'/> 
    </div>
  )
}

export default Focus_useref
