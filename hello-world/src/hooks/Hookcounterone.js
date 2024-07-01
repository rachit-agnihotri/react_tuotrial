import React ,{useEffect, useState}from 'react'

function Hookcounterone() {
  const [count, increment] = useState(0)
  const [name, setname] = useState('')
  useEffect(
    ()=>{
        document.title=`You clicked ${count} times`
    },[count]
  )
  return (
    <div>
      <h1 > {count}</h1>
      <input type='text' value={name} onChange={e=>setname(e.target.value)}/>
      <button onClick={()=>increment(count+1)}>Increase</button>
      <button onClick={()=>increment(count-1)}>Decrease</button>
      <button onClick={()=>increment(0)}>Reset</button>

    </div>
  )
}

export default Hookcounterone
