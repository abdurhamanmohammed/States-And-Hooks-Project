import React,{useState} from 'react'

function IncreaseDecreaseCount() {
    let [count,setcount]=useState(0);
    let increase=()=>{
        setcount((x)=>x+1)
    }
    let decrease=()=>{
        setcount((y)=>y-1)
    }
    let reset=()=>{
        setcount((count=0))
    }
  return (
    <div>
        <h1>The Hooke count:{count}</h1>
        <button onClick={increase}>ADD</button>
        <button onClick={decrease}>MINS</button>
        <button onClick={reset}>RESET</button>
    </div>
  )
}

export default IncreaseDecreaseCount