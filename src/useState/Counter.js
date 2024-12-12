import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [val,setVal] = useState({count:0,name:""});

    const inceaseByFive = ()=>{
        for(let i = 0; i<5 ; i++){
            setVal((prev)=> ({...prev,count: prev.count+1}))
        }
    }

    const decreaseByFive = ()=>{
        for(let i = 0; i<5 ; i++){
            setVal((prev)=> ({...prev,count: prev.count-1}))
        }
    }
    
  return (
    <div>
        <p>count : {val.count}</p>
        <input type="text" value={val.name} onChange={(e)=>setVal({...val,name: e.target.value})}/>
        <button onClick={()=>setVal({...val,count : val.count+1})}>Incraese</button>
        <button onClick={()=>setVal({...val,count: val.count-1})}>Decrease</button>
        <button onClick={inceaseByFive}>Incraese By 5</button>
        <button onClick={decreaseByFive}>Decrease By 5</button>
    </div>
  )
}

export default Counter