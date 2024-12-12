import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count,setCount] = useState(0);
    const [name,setName] =  useState("");
    useEffect(()=>{
        console.log(`count : ${count}`)

        return ()=>{
            console.log(`cleanup: ${count}`)
        }
    },[count])
  return (
    <div>
        <p>count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Incraese</button>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
    </div>
  )
}

export default Counter