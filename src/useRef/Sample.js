import React, { useEffect, useRef, useState } from 'react'

const Sample = () => {
   let count =  useRef(0);
   const [name,setName] = useState("");


   useEffect(()=>{
    count.current = count.current+1;
   })

  return (
    <div>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <p>Name: {name}</p>
        <p>Count:{count.current}</p>
    </div>
  )
}

export default Sample