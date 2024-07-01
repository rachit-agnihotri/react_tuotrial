import React, { useState ,useEffect} from "react"

function Hookmouse() {
    const [x,setx]=useState(0);
    const [y,sety] =useState(0);

    const mouseposition = e=>{

        setx(e.clientX)
        sety(e.clientY)
    }
    useEffect(()=>{
        console.log("hello")
        window.addEventListener('mousemove',mouseposition)
        return () =>{
          window.removeEventListener('mousemove',mouseposition)
        }
    },[])

  return (
    <div>
      hooks x-{x},y-{y}
    </div>
  )
}

export default Hookmouse
