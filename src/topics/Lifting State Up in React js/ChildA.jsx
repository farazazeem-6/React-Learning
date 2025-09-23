import React from 'react'

function ChildA({setName}) {
  return (
    <div>
      <input onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter Name'/>
    </div>
  )
}

export default ChildA
