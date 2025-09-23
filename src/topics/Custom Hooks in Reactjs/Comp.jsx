import React from 'react'
import useToggle from './useToggle'

function Comp() {

    const[value,toggleValue]=useToggle(true)
  return (
    <div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={()=>toggleValue(true)}>Show</button>
      <button onClick={()=>toggleValue(false)}>Hide</button>

      {
        value? <h1>Custom hooks</h1>:null
      }
    </div>
  )
}

export default Comp
