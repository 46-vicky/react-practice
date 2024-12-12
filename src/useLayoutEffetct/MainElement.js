import React, { useLayoutEffect, useRef,useState } from 'react'

const MainElement = () => {
    const [toggle,setToggle] = useState(false)
    const nameRef = useRef(null);

    useLayoutEffect(()=>{
        if(nameRef.current !== null){
            const dimension = nameRef.current.getBoundingClientRect();
            nameRef.current.style.marginTop = `${dimension.width}px`;
        }
    })
    
  return (
    <div>
        <button onClick={()=>setToggle(!toggle)}>Toggle</button>
        {toggle && <p ref={nameRef}>IlangKumarn</p>}
    </div>
  )
}

export default MainElement