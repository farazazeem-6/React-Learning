import React, { useRef } from 'react'

function Comp() {

    const inputRef=useRef(null)

    const inputHandler=()=>{
        inputRef.current.style.color='red'
        inputRef.current.focus();
        // inputRef.current.style.padding='20px';
        // inputRef.current.style.display='none'
    }
  return (
    <div>
      <input ref={inputRef} type="text" placeholder='Enter Your Name'/>
      <button onClick={()=>inputHandler()}>Input Handler</button>
    </div>
  )
}

export default Comp
