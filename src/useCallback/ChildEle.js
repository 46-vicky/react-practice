import React, { useEffect, useState } from 'react'

const ChildEle = ({calculate}) => {
    const [rows,setRows] = useState([]);

    useEffect(()=>{
        console.log("triggred")
        setRows(calculate())
    },[calculate])

  return rows.map((row,index)=><p key={index}>{row}</p>)
  
}

export default ChildEle