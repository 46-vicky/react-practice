import React, { useCallback, useState } from 'react'
import ChildEle from './ChildEle'

const ParentEle = () => {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)

    const styleCSS = {
        "backgroundColor" : dark ? "#000" : "#fff",
        "color" : dark ? "#fff" : "#000"
    }


    const calculate = useCallback(()=>{
        return [number*1,number*2,number*3,number*4,number*5]
    },[number])
    

  return (
    <div style={styleCSS}>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.valueAsNumber)} />
        <ChildEle calculate = {calculate}/>
    <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

export default ParentEle