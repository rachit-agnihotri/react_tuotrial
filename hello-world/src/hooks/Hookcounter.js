import React ,{useState}from 'react'

function Hookcounter() {
  const [count, increment] = useState(0)
  return (
    <div>
        <h1> {count}</h1>
      <button onClick={()=>increment(count+1)}>Increase</button>
      <button onClick={()=>increment(count-1)}>Decrease</button>
      <button onClick={()=>increment(0)}>Reset</button>

    </div>
  )
}

export default Hookcounter
