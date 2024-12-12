import React, { useMemo, useState } from 'react'

const CounterEle = () => {
    const [number,setNumber] = useState(0)
    const [dark,setDark] = useState(false)

    const styleCSS = {
        "backgroundColor" : dark ? "#000" : "#fff",
        "color" : dark ? "#fff" : "#000"
    }

    const calculate = useMemo(()=>{
       return expensiveCalculation(number);
    },[number])
    

  return (
    <div style={styleCSS}>
        <input type="number" value={number} onChange={(e)=>setNumber(e.target.valueAsNumber)} />
        <p>Count : {calculate}</p>
        <button onClick={()=>setDark(!dark)}>Toggle</button>
    </div>
  )
}

export default CounterEle

const expensiveCalculation = (number)=>{
    console.log("loadStart");
    for(let i=0;i<10000000000;i++){}
    return number;
}