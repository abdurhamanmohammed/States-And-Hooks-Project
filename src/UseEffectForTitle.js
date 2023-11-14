import React,{useState,useEffect} from 'react'

function UseEffectForTitle() {
    let[count,setcount]=useState(0);
    let inc=()=>{
        setcount((x)=>x+1)
    }
    useEffect(()=>{alert("Component is mounted")},[])
    useEffect(()=>
    {;
        document.title=`count:${count}`},[ count])
  return (
    <div>
        <h1>The count:{count} </h1>
        <button onClick={inc}>INC</button>
    </div>
  )
}

export default UseEffectForTitle